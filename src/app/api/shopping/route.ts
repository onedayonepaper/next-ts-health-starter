import { NextResponse } from 'next/server'

// Shopping data structure
const shoppingItems = [
  {
    id: 1,
    item: "노브랜드 다크초콜릿 90 g × 5",
    category: "간식·초콜릿",
    store: "이마트 노브랜드",
    weight_g: 450,
    price_won: 10940,
    unit_price_won_per_100g: 2431,
    storage: "실온",
    memo: "다이어트용 간식",
    icon: "🍫",
    bgColor: "bg-amber-100",
    completed: false
  },
  {
    id: 2,
    item: "그릭데이 시그니처 그릭요거트 300 g",
    category: "요거트·발효유",
    store: "쿠팡",
    weight_g: 300,
    price_won: 11400,
    unit_price_won_per_100g: 3800,
    storage: "냉장",
    memo: "오버나이트 오트밀용",
    icon: "🥣",
    bgColor: "bg-blue-100",
    completed: false
  },
  {
    id: 3,
    item: "올바른 수산 냉동 연어 스테이크 350 g",
    category: "해산물·생선",
    store: "쿠팡",
    weight_g: 350,
    price_won: 9980,
    unit_price_won_per_100g: 2851,
    storage: "냉동",
    memo: "연어덮밥·스테이크용",
    icon: "🐟",
    bgColor: "bg-orange-100",
    completed: false
  },
  {
    id: 4,
    item: "수월한 브라질산 순살 조각정육(냉동) 2 kg",
    category: "육류·닭고기",
    store: "쿠팡",
    weight_g: 2000,
    price_won: 21900,
    unit_price_won_per_100g: 1095,
    storage: "냉동",
    memo: "덮밥·단백질 보충용",
    icon: "🍗",
    bgColor: "bg-red-100",
    completed: false
  }
]

export async function GET() {
  try {
    return NextResponse.json({
      success: true,
      data: shoppingItems,
      message: "구매목록을 성공적으로 가져왔습니다.",
      total: shoppingItems.length,
      timestamp: new Date().toISOString()
    }, {
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
    })
  } catch (error) {
    return NextResponse.json(
      { 
        success: false, 
        error: "구매목록을 가져오는 중 오류가 발생했습니다." 
      },
      { 
        status: 500,
        headers: {
          'Content-Type': 'application/json; charset=utf-8',
        },
      }
    )
  }
}