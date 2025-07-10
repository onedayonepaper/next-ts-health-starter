import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const { prompt = "a beautiful landscape with mountains" } = await req.json()
    
    // 실제로는 여기서 Stability AI API를 호출하지만, 
    // 데모용으로 더미 base64 이미지를 반환합니다.
    
    // 실제 이미지를 생성하는 대신 간단한 컬러 이미지 base64를 생성
    // 실제 구현에서는 여기에 Stability AI API 호출 코드가 들어갑니다
    const generateDummyImage = () => {
      // 더 실제적인 더미 이미지 - 512x512 그라데이션 이미지
      const canvas = `<svg width="512" height="512" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color:#3b82f6;stop-opacity:1" />
            <stop offset="100%" style="stop-color:#8b5cf6;stop-opacity:1" />
          </linearGradient>
        </defs>
        <rect width="512" height="512" fill="url(#grad1)" />
        <text x="256" y="256" font-family="Arial, sans-serif" font-size="24" fill="white" text-anchor="middle" dy=".3em">
          Generated Image
        </text>
        <text x="256" y="290" font-family="Arial, sans-serif" font-size="16" fill="white" text-anchor="middle" dy=".3em">
          ${prompt.substring(0, 30)}...
        </text>
      </svg>`
      
      // Buffer 대신 btoa 사용 (브라우저 호환)
      return btoa(canvas)
    }

    const imageBase64 = generateDummyImage()

    return NextResponse.json({
      success: true,
      model: "stabilityai/stable-diffusion-xl-base-1.0",
      prompt: prompt,
      image_base64: imageBase64
    })
  } catch (error) {
    console.error('이미지 생성 오류:', error)
    return NextResponse.json(
      { 
        success: false, 
        error: '이미지 생성 중 오류가 발생했습니다.' 
      },
      { status: 500 }
    )
  }
}