'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { ChevronLeft } from 'lucide-react'

// 식단 데이터
const dietData = {
  success: true,
  data: [
    {
      day: "월요일",
      meals: [
        {
          meal_type: "아침",
          menu: ["연어덮밥", "바나나", "두유"]
        },
        {
          meal_type: "점심",
          menu: ["삶은 달걀 2개", "두유 1팩", "방울토마토 5알", "호두 2알"]
        },
        {
          meal_type: "저녁",
          menu: ["닭가슴살 채소볶음", "찐 고구마 100g", "사과 1/2개"]
        }
      ]
    },
    {
      day: "화요일",
      meals: [
        {
          meal_type: "아침",
          menu: ["연어덮밥", "바나나", "두유"]
        },
        {
          meal_type: "점심",
          menu: ["삶은 달걀 2개", "두유 1팩", "방울토마토 5알", "호두 2알"]
        },
        {
          meal_type: "저녁",
          menu: ["계란부침", "시금치나물", "현미밥 100g"]
        }
      ]
    },
    {
      day: "수요일",
      meals: [
        {
          meal_type: "아침",
          menu: ["연어덮밥", "바나나", "두유"]
        },
        {
          meal_type: "점심",
          menu: ["삶은 달걀 2개", "두유 1팩", "방울토마토 5알", "호두 2알"]
        },
        {
          meal_type: "저녁",
          menu: ["참치김밥(현미)", "된장국"]
        }
      ]
    },
    {
      day: "목요일",
      meals: [
        {
          meal_type: "아침",
          menu: ["연어덮밥", "바나나", "두유"]
        },
        {
          meal_type: "점심",
          menu: ["삶은 달걀 2개", "두유 1팩", "방울토마토 5알", "호두 2알"]
        },
        {
          meal_type: "저녁",
          menu: ["닭가슴살 채소볶음", "찐 고구마 100g", "사과 1/2개"]
        }
      ]
    },
    {
      day: "금요일",
      meals: [
        {
          meal_type: "아침",
          menu: ["연어덮밥", "바나나", "두유"]
        },
        {
          meal_type: "점심",
          menu: ["삶은 달걀 2개", "두유 1팩", "방울토마토 5알", "호두 2알"]
        },
        {
          meal_type: "저녁",
          menu: ["계란부침", "콩나물무침", "현미밥 100g"]
        }
      ]
    }
  ]
}

export default function DietPage() {
  const [selectedDay, setSelectedDay] = useState(0) // 0 = 월요일

  const days = ["월", "화", "수", "목", "금"]
  const currentDayData = dietData.data[selectedDay]

  const getMealIcon = (mealType: string) => {
    switch (mealType) {
      case "아침":
        return "🌅"
      case "점심":
        return "☀️"
      case "저녁":
        return "🌙"
      default:
        return "🍽️"
    }
  }

  const getMealColor = (mealType: string) => {
    switch (mealType) {
      case "아침":
        return "from-orange-100 to-yellow-100"
      case "점심":
        return "from-blue-100 to-cyan-100"
      case "저녁":
        return "from-purple-100 to-pink-100"
      default:
        return "from-gray-100 to-gray-200"
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-green-100">
      <div className="sticky top-0 z-10 bg-white/70 backdrop-blur-lg shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link href="/" className="p-2 hover:bg-gray-100/50 rounded-lg transition-colors">
                <ChevronLeft className="w-6 h-6 text-gray-600" />
              </Link>
              <h1 className="text-2xl font-bold text-gray-900">건강한 식단</h1>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* 요일 선택 탭 */}
        <div className="flex justify-center mb-8">
          <div className="bg-white/40 backdrop-blur-sm rounded-full p-1 shadow-lg">
            <div className="flex gap-1">
              {days.map((day, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedDay(index)}
                  className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-200 ${
                    selectedDay === index
                      ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-md'
                      : 'text-gray-600 hover:bg-white/50'
                  }`}
                >
                  {day}요일
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* 식단 카드 */}
        <div className="grid md:grid-cols-3 gap-6">
          {currentDayData.meals.map((meal, index) => (
            <div
              key={index}
              className="bg-white/30 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-white/20"
            >
              <div className={`bg-gradient-to-r ${getMealColor(meal.meal_type)} px-6 py-4`}>
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-gray-800">{meal.meal_type}</h3>
                  <span className="text-3xl">{getMealIcon(meal.meal_type)}</span>
                </div>
              </div>
              <div className="p-6">
                <ul className="space-y-3">
                  {meal.menu.map((item, itemIndex) => (
                    <li
                      key={itemIndex}
                      className="flex items-center gap-3 text-gray-700"
                    >
                      <span className="text-emerald-500">•</span>
                      <span className="font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* 하단 정보 섹션 */}
        <div className="mt-12 bg-white/20 backdrop-blur-sm rounded-2xl shadow-lg p-8 border border-white/20">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">💡 건강한 식단 팁</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <h3 className="font-semibold text-gray-700 flex items-center gap-2">
                <span className="text-emerald-500">🥗</span> 영양 균형
              </h3>
              <p className="text-gray-600 leading-relaxed">
                단백질, 탄수화물, 지방, 비타민, 무기질 등 5대 영양소를 균형있게 섭취하세요.
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="font-semibold text-gray-700 flex items-center gap-2">
                <span className="text-emerald-500">💧</span> 충분한 수분
              </h3>
              <p className="text-gray-600 leading-relaxed">
                하루 8잔 이상의 물을 마시며, 식사 전후 30분은 피하는 것이 좋습니다.
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="font-semibold text-gray-700 flex items-center gap-2">
                <span className="text-emerald-500">⏰</span> 규칙적인 식사
              </h3>
              <p className="text-gray-600 leading-relaxed">
                매일 같은 시간에 식사를 하면 신체 리듬이 안정되고 소화가 잘 됩니다.
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="font-semibold text-gray-700 flex items-center gap-2">
                <span className="text-emerald-500">🍽️</span> 적절한 양
              </h3>
              <p className="text-gray-600 leading-relaxed">
                배부름을 80% 정도로 유지하며, 천천히 꼭꼭 씹어 먹는 습관을 기르세요.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}