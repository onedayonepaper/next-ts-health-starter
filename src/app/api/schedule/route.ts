import { NextResponse } from 'next/server'

// Schedule data structure
const scheduleItems = [
  {
    id: 1,
    title: "천국의 계단 20분",
    category: "운동·유산소",
    time: "06:00",
    duration_minutes: 20,
    location: "집·거실",
    frequency: "평일",
    memo: "출근 전 심박수 올리기",
    icon: "⏫",
    bgColor: "bg-red-100",
    difficulty: "보통",
    completed: false
  },
  {
    id: 2,
    title: "오버나이트 오트밀 아침식사",
    category: "식단·영양",
    time: "06:30",
    duration_minutes: 10,
    location: "집·주방",
    frequency: "평일",
    memo: "전날 준비해 둔 오트밀 섭취",
    icon: "�",
    bgColor: "bg-green-100",
    difficulty: "쉬움",
    completed: false
  },
  {
    id: 3,
    title: "근력운동 30분",
    category: "운동·근력",
    time: "12:30",
    duration_minutes: 30,
    location: "헬스장",
    frequency: "평일",
    memo: "점심시간 활용 상·하체 번갈아",
    icon: "💪",
    bgColor: "bg-purple-100",
    difficulty: "어려움",
    completed: false
  },
  {
    id: 4,
    title: "그릭요거트·간단한 저녁",
    category: "식단·영양",
    time: "19:00",
    duration_minutes: 15,
    location: "집·주방",
    frequency: "평일",
    memo: "저칼로리 단백질 보충",
    icon: "�",
    bgColor: "bg-blue-100",
    difficulty: "쉬움",
    completed: false
  },
  {
    id: 5,
    title: "20 km 주말 유산소",
    category: "운동·유산소",
    time: "05:30",
    duration_minutes: 240,
    location: "한강공원",
    frequency: "주말",
    memo: "걷기+러닝 혼합, 4 시간 예상",
    icon: "🏃‍♂️",
    bgColor: "bg-orange-100",
    difficulty: "어려움",
    completed: false
  },
  {
    id: 6,
    title: "주말 아침 푸짐한 식사",
    category: "식단·영양",
    time: "10:00",
    duration_minutes: 45,
    location: "집·주방",
    frequency: "주말",
    memo: "연어·달걀 등 고단백 위주",
    icon: "�",
    bgColor: "bg-yellow-100",
    difficulty: "쉬움",
    completed: false
  },
  {
    id: 7,
    title: "아침 식후 10분 걷기",
    category: "운동·걷기",
    time: "10:30",
    duration_minutes: 10,
    location: "동네 산책로",
    frequency: "주말",
    memo: "혈당 급상승 방지",
    icon: "🚶‍♂️",
    bgColor: "bg-gray-100",
    difficulty: "쉬움",
    completed: false
  },
  {
    id: 8,
    title: "주말 점심 식사",
    category: "식단·영양",
    time: "13:00",
    duration_minutes: 30,
    location: "집·주방",
    frequency: "주말",
    memo: "균형 잡힌 탄단지",
    icon: "🍱",
    bgColor: "bg-green-200",
    difficulty: "쉬움",
    completed: false
  },
  {
    id: 9,
    title: "점심 식후 10분 걷기",
    category: "운동·걷기",
    time: "13:40",
    duration_minutes: 10,
    location: "동네 산책로",
    frequency: "주말",
    memo: "소화 촉진",
    icon: "🚶‍♂️",
    bgColor: "bg-gray-100",
    difficulty: "쉬움",
    completed: false
  },
  {
    id: 10,
    title: "주말 저녁 푸짐한 식사",
    category: "식단·영양",
    time: "19:00",
    duration_minutes: 60,
    location: "집·주방",
    frequency: "주말",
    memo: "가끔은 외식 또는 홈파티",
    icon: "🍽️",
    bgColor: "bg-yellow-200",
    difficulty: "쉬움",
    completed: false
  },
  {
    id: 11,
    title: "저녁 식후 10분 걷기",
    category: "운동·걷기",
    time: "20:05",
    duration_minutes: 10,
    location: "동네 산책로",
    frequency: "주말",
    memo: "취침 전 가벼운 활동",
    icon: "🚶‍♂️",
    bgColor: "bg-gray-100",
    difficulty: "쉬움",
    completed: false
  }
]

export async function GET() {
  try {
    return NextResponse.json({
      success: true,
      data: scheduleItems,
      message: "건강 일정을 성공적으로 가져왔습니다.",
      total: scheduleItems.length,
      totalDuration: scheduleItems.reduce((sum, item) => sum + item.duration_minutes, 0),
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
        error: "건강 일정을 가져오는 중 오류가 발생했습니다." 
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