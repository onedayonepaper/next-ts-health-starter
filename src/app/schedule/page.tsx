'use client'

import React, { useState, useMemo } from 'react'
import Link from 'next/link'

// Schedule item interface
interface ScheduleItem {
  id: number
  title: string
  category: string
  time: string
  duration_minutes: number
  location: string
  frequency: string
  memo: string
  icon: string
  bgColor: string
  difficulty: string
}

// Schedule data structure
const scheduleItems: ScheduleItem[] = [
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
    difficulty: "쉬움"
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
    difficulty: "쉬움"
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
    difficulty: "어려움"
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
    difficulty: "보통"
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
    difficulty: "쉬움"
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
    difficulty: "보통"
  }
]

export default function SchedulePage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("전체")
  const [selectedLocation, setSelectedLocation] = useState("전체")
  const [selectedFrequency, setSelectedFrequency] = useState("전체")
  const [maxDuration, setMaxDuration] = useState(120)
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false)
  const [items, setItems] = useState(scheduleItems)
  const [selectedItem, setSelectedItem] = useState<ScheduleItem | null>(null)
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false)

  const filteredItems = useMemo(() => {
    return items.filter((item: ScheduleItem) => {
      const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           item.memo.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesCategory = selectedCategory === "전체" || item.category === selectedCategory
      const matchesLocation = selectedLocation === "전체" || item.location === selectedLocation
      const matchesFrequency = selectedFrequency === "전체" || item.frequency === selectedFrequency
      const matchesDuration = item.duration_minutes <= maxDuration

      return matchesSearch && matchesCategory && matchesLocation && matchesFrequency && matchesDuration
    })
  }, [searchTerm, selectedCategory, selectedLocation, selectedFrequency, maxDuration, items])

  const resetFilters = () => {
    setSearchTerm("")
    setSelectedCategory("전체")
    setSelectedLocation("전체")
    setSelectedFrequency("전체")
    setMaxDuration(120)
  }

  const handleItemClick = (item: ScheduleItem) => {
    setSelectedItem(item)
    setIsDetailModalOpen(true)
  }

  const getDifficultyIcon = (difficulty: string) => {
    switch (difficulty) {
      case "쉬움": return "😊"
      case "보통": return "😐"
      case "어려움": return "😤"
      default: return "📊"
    }
  }

  const getFrequencyIcon = (frequency: string) => {
    switch (frequency) {
      case "매일": return "📅"
      case "주 3회": return "📆"
      case "주 4회": return "📆"
      case "월 1회": return "🗓️"
      default: return "⏰"
    }
  }

  const totalDuration = filteredItems.reduce((sum: number, item: ScheduleItem) => sum + item.duration_minutes, 0)

  const handleApiCall = async () => {
    // 새 창에서 일정 API JSON 페이지 열기
    window.open('/api/schedule', '_blank')
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-green-50 to-blue-100">
      <div className="container mx-auto px-3 sm:px-4 py-8 sm:py-16">
        <div className="max-w-6xl mx-auto">
          {/* Header removed - back button moved to bottom */}

          {/* Search Modal */}
          {isSearchModalOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-3 sm:p-4">
              <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
                <div className="p-4 sm:p-6">
                  <div className="flex justify-between items-center mb-4 sm:mb-6">
                    <h2 className="text-lg sm:text-2xl font-bold text-gray-900">일정 검색 및 필터</h2>
                    <button
                      onClick={() => setIsSearchModalOpen(false)}
                      className="text-gray-500 hover:text-gray-700 p-1"
                    >
                      <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>

                  {/* Search Bar */}
                  <div className="mb-4 sm:mb-6">
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="일정 제목이나 메모를 검색하세요..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full px-4 py-3 pl-10 sm:pl-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm sm:text-base"
                      />
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <svg className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Filter Buttons */}
                  <div className="space-y-4">
                    {/* Category Filter */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">카테고리</label>
                      <div className="flex flex-wrap gap-2">
                        {["전체", "운동·스트레칭", "운동·근력", "운동·유산소", "식단·영양", "휴식·명상", "검진·관리"].map((category) => (
                          <button
                            key={category}
                            onClick={() => setSelectedCategory(category)}
                            className={`px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-colors ${
                              selectedCategory === category
                                ? "bg-green-600 text-white"
                                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                            }`}
                          >
                            {category}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Location Filter */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">장소</label>
                      <div className="flex flex-wrap gap-2">
                        {["전체", "집·거실", "집·주방", "집·침실", "헬스장", "병원", "한강공원"].map((location) => (
                          <button
                            key={location}
                            onClick={() => setSelectedLocation(location)}
                            className={`px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-colors ${
                              selectedLocation === location
                                ? "bg-blue-600 text-white"
                                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                            }`}
                          >
                            {location}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Frequency Filter */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">빈도</label>
                      <div className="flex flex-wrap gap-2">
                        {["전체", "매일", "주 3회", "주 4회", "월 1회"].map((frequency) => (
                          <button
                            key={frequency}
                            onClick={() => setSelectedFrequency(frequency)}
                            className={`px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-colors flex items-center gap-1 ${
                              selectedFrequency === frequency
                                ? "bg-purple-600 text-white"
                                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                            }`}
                          >
                            {frequency !== "전체" && getFrequencyIcon(frequency)}
                            {frequency}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Duration Filter */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        최대 소요시간: {maxDuration}분
                      </label>
                      <input
                        type="range"
                        min="10"
                        max="120"
                        step="10"
                        value={maxDuration}
                        onChange={(e) => setMaxDuration(parseInt(e.target.value))}
                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                      />
                      <div className="flex justify-between text-xs text-gray-500 mt-1">
                        <span>10분</span>
                        <span>120분</span>
                      </div>
                    </div>

                    {/* Reset Button */}
                    <div className="flex justify-end">
                      <button
                        onClick={resetFilters}
                        className="text-red-600 hover:text-red-700 text-xs sm:text-sm font-medium"
                      >
                        필터 초기화
                      </button>
                    </div>
                  </div>

                  <div className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t">
                    <button
                      onClick={() => setIsSearchModalOpen(false)}
                      className="w-full bg-green-600 text-white py-3 rounded-lg font-medium hover:bg-green-700 transition-colors text-sm sm:text-base"
                    >
                      필터 적용하기 ({filteredItems.length}개 일정)
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Item Detail Modal */}
          {isDetailModalOpen && selectedItem && (
            <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-3 sm:p-4">
              <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
                <div className="p-4 sm:p-6">
                  <div className="flex justify-between items-start mb-4 sm:mb-6">
                    <div className="flex items-start gap-3 sm:gap-4 flex-1 min-w-0">
                      <span className="text-2xl sm:text-4xl flex-shrink-0">{selectedItem.icon}</span>
                      <div className="min-w-0 flex-1">
                        <h2 className="text-lg sm:text-2xl font-bold text-gray-900 mb-2 break-words">{selectedItem.title}</h2>
                        <span className="text-xs sm:text-sm px-2 sm:px-3 py-1 bg-green-100 text-green-800 rounded-full">
                          {selectedItem.category}
                        </span>
                      </div>
                    </div>
                    <button
                      onClick={() => setIsDetailModalOpen(false)}
                      className="text-gray-500 hover:text-gray-700 p-1 ml-2 flex-shrink-0"
                    >
                      <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>

                  <div className="space-y-4 sm:space-y-6">
                    {/* Time and Location */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                      <div className="bg-blue-50 p-3 sm:p-4 rounded-lg">
                        <h3 className="text-xs sm:text-sm font-semibold text-blue-800 mb-1 sm:mb-2">시간</h3>
                        <p className="text-sm sm:text-base text-blue-700">{selectedItem.time}</p>
                      </div>
                      <div className="bg-purple-50 p-3 sm:p-4 rounded-lg">
                        <h3 className="text-xs sm:text-sm font-semibold text-purple-800 mb-1 sm:mb-2">장소</h3>
                        <p className="text-sm sm:text-base text-purple-700">{selectedItem.location}</p>
                      </div>
                    </div>

                    {/* Duration and Frequency */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                      <div className="bg-gray-50 p-3 sm:p-4 rounded-lg">
                        <h3 className="text-xs sm:text-sm font-semibold text-gray-800 mb-1 sm:mb-2">소요시간</h3>
                        <p className="text-xl sm:text-2xl font-bold text-gray-900">{selectedItem.duration_minutes}분</p>
                      </div>
                      <div className="bg-yellow-50 p-3 sm:p-4 rounded-lg">
                        <h3 className="text-xs sm:text-sm font-semibold text-yellow-800 mb-1 sm:mb-2">빈도</h3>
                        <p className="text-lg sm:text-xl font-bold text-yellow-900 flex items-center gap-1">
                          {getFrequencyIcon(selectedItem.frequency)} {selectedItem.frequency}
                        </p>
                      </div>
                    </div>

                    {/* Difficulty */}
                    <div className="bg-red-50 p-3 sm:p-4 rounded-lg">
                      <h3 className="text-xs sm:text-sm font-semibold text-red-800 mb-1 sm:mb-2">난이도</h3>
                      <p className="text-lg sm:text-xl font-bold text-red-900 flex items-center gap-1">
                        {getDifficultyIcon(selectedItem.difficulty)} {selectedItem.difficulty}
                      </p>
                    </div>

                    {/* Memo */}
                    <div className="bg-orange-50 p-3 sm:p-4 rounded-lg">
                      <h3 className="text-xs sm:text-sm font-semibold text-orange-800 mb-1 sm:mb-2">메모</h3>
                      <p className="text-sm sm:text-base text-orange-700">{selectedItem.memo}</p>
                    </div>
                  </div>

                  <div className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t">
                    <button
                      onClick={() => setIsDetailModalOpen(false)}
                      className="w-full bg-green-600 text-white py-3 rounded-lg font-medium hover:bg-green-700 transition-colors text-sm sm:text-base"
                    >
                      닫기
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Schedule Items - Simple Table Layout */}
          <div className="mb-6 sm:mb-8">
            <div className="mb-4 sm:mb-6">
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-2">

              </h2>
            </div>
            
            {filteredItems.length === 0 ? (
              <div className="text-center py-8 sm:py-12 bg-gray-50 rounded-lg">
                <div className="text-4xl sm:text-6xl mb-3 sm:mb-4">📅</div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">조건에 맞는 일정이 없습니다</h3>
                <p className="text-sm sm:text-base text-gray-600">필터 조건을 조정해보세요.</p>
              </div>
            ) : (
              <div className="bg-white overflow-hidden">
                {filteredItems.map((item, index) => (
                  <div
                    key={item.id}
                    onClick={() => handleItemClick(item)}
                    className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 hover:bg-gray-50 cursor-pointer transition-all border-b border-gray-200 last:border-b-0"
                  >
                    {/* Row Number */}
                    <span className="text-sm text-gray-400 w-6 text-center flex-shrink-0">
                      {index + 1}
                    </span>
                    
                    {/* Icon */}
                    <span className="text-xl sm:text-2xl flex-shrink-0">{item.icon}</span>
                    
                    {/* Schedule Info */}
                    <div className="flex-1 min-w-0">
                      <h3 className="font-medium text-gray-900 text-sm sm:text-base break-words">
                        {item.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-500 mt-1">
                        {item.time} • {item.duration_minutes}분 • {item.frequency}
                      </p>
                    </div>
                    
                    {/* Arrow */}
                    <svg className="w-4 h-4 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Action Buttons - Moved below the table */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-8 sm:mb-12">
            <button
              onClick={handleApiCall}
              className="bg-green-600 hover:bg-green-700 text-white px-6 sm:px-8 py-3 rounded-lg font-medium transition-colors shadow-lg text-sm sm:text-base"
            >
              📅 일정 API 호출
            </button>
            <button
              onClick={() => setIsSearchModalOpen(true)}
              className="bg-white hover:bg-gray-50 text-gray-700 px-4 py-3 rounded-lg border border-gray-300 transition-colors shadow-lg text-sm sm:text-base"
            >
              🔍 일정 검색
            </button>
          </div>

          {/* Statistics - Responsive Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mt-6 sm:mt-8">
            <div className="bg-white rounded-xl p-4 sm:p-6 shadow-lg">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <span className="text-lg sm:text-2xl">📅</span>
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900">{filteredItems.length}</h3>
                  <p className="text-sm sm:text-base text-gray-600">선택된 일정</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl p-4 sm:p-6 shadow-lg">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <span className="text-lg sm:text-2xl">⏰</span>
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900">{totalDuration}분</h3>
                  <p className="text-sm sm:text-base text-gray-600">총 소요시간</p>
                </div>
              </div>
            </div>
          </div>

          {/* Health Schedule Tips - Mobile Optimized */}
          <div className="bg-white rounded-xl p-4 sm:p-8 shadow-lg mt-6 sm:mt-8">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">건강한 일정 관리 가이드</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <div>
                <h3 className="text-base sm:text-lg font-semibold text-green-700 mb-2 sm:mb-3">💡 효과적인 운동 일정</h3>
                <ul className="text-xs sm:text-sm text-gray-600 space-y-1 sm:space-y-2">
                  <li>• 아침 스트레칭으로 하루를 시작하세요</li>
                  <li>• 주 3-4회 규칙적인 운동을 유지하세요</li>
                  <li>• 운동 강도는 점진적으로 높여가세요</li>
                </ul>
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-semibold text-blue-700 mb-2 sm:mb-3">🧘‍♀️ 건강한 라이프스타일</h3>
                <ul className="text-xs sm:text-sm text-gray-600 space-y-1 sm:space-y-2">
                  <li>• 충분한 휴식과 명상 시간을 확보하세요</li>
                  <li>• 균형잡힌 식단과 영양 섭취를 계획하세요</li>
                  <li>• 정기적인 건강검진을 받으세요</li>
                </ul>
              </div>
            </div>

            {/* Back to Main Button - Moved to bottom */}
            <div className="flex justify-center mt-8 sm:mt-12">
              <Link 
                href="/" 
                className="flex items-center gap-2 text-green-600 hover:text-green-700 transition-colors text-sm sm:text-base bg-white px-4 sm:px-6 py-3 rounded-lg border border-green-200 hover:border-green-300 shadow-sm"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                메인으로 돌아가기
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}