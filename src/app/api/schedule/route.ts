import { NextResponse } from 'next/server'

// Schedule data structure
const scheduleItems = [
  {
    id: 1,
    title: "아침 요가 스트레칭",
    category: "운동·스트레칭",
    time: "07:00",
    duration_minutes: 30,
    location: "집·거실",
    frequency: "매일",
    memo: "하루를 시작하는 몸풀기",
    icon: "🧘‍♀️",
    bgColor: "bg-purple-100",
    difficulty: "쉬움",
    completed: false
  },
  {
    id: 2,
    title: "단백질 쉐이크 준비",
    category: "식단·영양",
    time: "08:30",
    duration_minutes: 10,
    location: "집·주방",
    frequency: "매일",
    memo: "운동 후 단백질 보충",
    icon: "🥤",
    bgColor: "bg-green-100",
    difficulty: "쉬움",
    completed: false
  },
  {
    id: 3,
    title: "헬스장 웨이트 트레이닝",
    category: "운동·근력",
    time: "19:00",
    duration_minutes: 90,
    location: "헬스장",
    frequency: "주 3회",
    memo: "상체·하체 번갈아가며",
    icon: "💪",
    bgColor: "bg-red-100",
    difficulty: "어려움",
    completed: false
  },
  {
    id: 4,
    title: "명상 및 호흡 운동",
    category: "휴식·명상",
    time: "22:00",
    duration_minutes: 20,
    location: "집·침실",
    frequency: "매일",
    memo: "스트레스 해소와 숙면 준비",
    icon: "🧘‍♂️",
    bgColor: "bg-blue-100",
    difficulty: "보통",
    completed: false
  },
  {
    id: 5,
    title: "주간 건강검진 예약",
    category: "검진·관리",
    time: "10:00",
    duration_minutes: 120,
    location: "병원",
    frequency: "월 1회",
    memo: "혈압, 혈당, 체중 체크",
    icon: "🏥",
    bgColor: "bg-yellow-100",
    difficulty: "쉬움",
    completed: false
  },
  {
    id: 6,
    title: "공원 조깅",
    category: "운동·유산소",
    time: "06:30",
    duration_minutes: 45,
    location: "한강공원",
    frequency: "주 4회",
    memo: "5km 목표, 페이스 조절",
    icon: "🏃‍♂️",
    bgColor: "bg-orange-100",
    difficulty: "보통",
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