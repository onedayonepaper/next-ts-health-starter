'use client'

import React, { useState } from 'react'
import Link from 'next/link'

interface ImageGenerationResponse {
  success: boolean
  model?: string
  prompt?: string
  image_base64?: string
  error?: string
}

export default function ImageTestPage() {
  const [prompt, setPrompt] = useState("a beautiful landscape with mountains")
  const [isLoading, setIsLoading] = useState(false)
  const [generatedImage, setGeneratedImage] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [showJson, setShowJson] = useState(false)
  const [lastResponse, setLastResponse] = useState<ImageGenerationResponse | null>(null)

  const generateImage = async () => {
    setIsLoading(true)
    setError(null)
    setGeneratedImage(null)
    setLastResponse(null)

    try {
      const response = await fetch('/api/image-generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt }),
      })

      const data: ImageGenerationResponse = await response.json()
      setLastResponse(data)

      if (data.success && data.image_base64) {
        // SVG의 경우 data:image/svg+xml;base64, 접두사 사용
        const imageDataUrl = `data:image/svg+xml;base64,${data.image_base64}`
        setGeneratedImage(imageDataUrl)
      } else {
        setError(data.error || '이미지 생성에 실패했습니다.')
      }
    } catch (err) {
      setError('이미지 생성 중 오류가 발생했습니다.')
      console.error(err)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-100">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          {/* Header with back button */}
          <div className="flex items-center justify-between mb-8">
            <Link 
              href="/" 
              className="flex items-center gap-2 text-purple-600 hover:text-purple-700 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              메인으로 돌아가기
            </Link>
          </div>

          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              빠른테스트{' '}
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                이미지 생성
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              AI로 이미지를 생성하고 바로 확인해보세요
            </p>
          </div>

          {/* Input Section */}
          <div className="bg-white rounded-xl p-6 shadow-lg mb-8">
            <div className="mb-4">
              <label htmlFor="prompt" className="block text-sm font-medium text-gray-700 mb-2">
                이미지 설명 (프롬프트)
              </label>
              <textarea
                id="prompt"
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none"
                rows={3}
                placeholder="생성하고 싶은 이미지를 설명해주세요..."
              />
            </div>
            
            <div className="flex gap-4 justify-center">
              <button
                onClick={generateImage}
                disabled={isLoading}
                className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-medium transition-colors shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
              >
                {isLoading ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent"></div>
                    생성 중...
                  </>
                ) : (
                  <>
                    🎨 이미지 생성
                  </>
                )}
              </button>
              
              {lastResponse && (
                <button
                  onClick={() => setShowJson(!showJson)}
                  className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-3 rounded-lg font-medium transition-colors shadow-lg"
                >
                  {showJson ? '이미지 보기' : 'JSON 보기'}
                </button>
              )}
            </div>
          </div>

          {/* Results Section */}
          <div className="space-y-6">
            {error && (
              <div className="bg-red-50 border border-red-200 rounded-xl p-6">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">❌</span>
                  <div>
                    <h3 className="text-lg font-semibold text-red-800">오류 발생</h3>
                    <p className="text-red-600">{error}</p>
                  </div>
                </div>
              </div>
            )}

            {showJson && lastResponse && (
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">API 응답 (JSON)</h3>
                <pre className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto text-sm">
                  {JSON.stringify(lastResponse, null, 2)}
                </pre>
              </div>
            )}

            {generatedImage && !showJson && (
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-lg font-semibold text-gray-800 mb-4 text-center">생성된 이미지</h3>
                <div className="flex justify-center">
                  <img
                    src={generatedImage}
                    alt="AI로 생성된 이미지"
                    className="max-w-full h-auto rounded-lg shadow-lg border border-gray-200"
                    style={{ maxWidth: '512px', maxHeight: '512px' }}
                  />
                </div>
                {lastResponse && (
                  <div className="mt-4 text-center text-sm text-gray-600">
                    <p><strong>모델:</strong> {lastResponse.model}</p>
                    <p><strong>프롬프트:</strong> {lastResponse.prompt}</p>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Information Section */}
          <div className="bg-white rounded-xl p-8 shadow-lg mt-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">사용 방법</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-purple-700 mb-3">🎨 이미지 생성</h3>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• 원하는 이미지에 대한 설명을 입력하세요</li>
                  <li>• "이미지 생성" 버튼을 클릭하세요</li>
                  <li>• 생성된 이미지가 바로 표시됩니다</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-pink-700 mb-3">📋 JSON 응답 확인</h3>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• "JSON 보기" 버튼으로 API 응답을 확인할 수 있습니다</li>
                  <li>• success, model, prompt, image_base64 정보가 포함됩니다</li>
                  <li>• 개발 및 디버깅 용도로 활용하세요</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}