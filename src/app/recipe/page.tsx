'use client'

import React, { useState, useMemo } from 'react'
import Link from 'next/link'

// Recipe data structure
const recipes = [
  {
    id: 1,
    name: "아보카도 토스트",
    icon: "🥑",
    difficulty: "초급",
    healthRating: 5,
    cookingTime: 5,
    calories: 320,
    protein: 8,
    fiber: 12,
    description: "신선한 아보카도와 통곡물 빵으로 만든 영양 만점 토스트입니다.",
    category: "아침",
    bgColor: "bg-green-100",
    difficultyColor: "bg-green-100 text-green-800",
    ingredients: [
      "통곡물 빵 2조각",
      "아보카도 1개 (잘 익은 것)",
      "레몬즙 1큰술",
      "소금, 후추 약간",
      "올리브오일 1작은술 (선택)"
    ],
    instructions: [
      "빵을 토스터기에 굽거나 팬에 구워 바삭하게 만들기",
      "아보카도를 반으로 갈라 씨를 제거하고 숟가락으로 과육 떠내기",
      "아보카도를 포크로 으깨며 레몬즙, 소금, 후추 넣고 섞기",
      "구운 빵 위에 아보카도 페이스트 발라 완성"
    ],
    tip: "아보카도가 너무 딱딱하면 바나나와 함께 종이봉지에 넣어 하루 정도 두면 빨리 익습니다."
  },
  {
    id: 2,
    name: "퀴노아 샐러드",
    icon: "🥗",
    difficulty: "중급",
    healthRating: 5,
    cookingTime: 25,
    calories: 280,
    protein: 8,
    fiber: 10,
    description: "단백질이 풍부한 퀴노아와 신선한 채소로 만든 건강 샐러드입니다.",
    category: "점심",
    bgColor: "bg-emerald-100",
    difficultyColor: "bg-yellow-100 text-yellow-800",
    ingredients: [
      "퀴노아 1컵",
      "방울토마토 10개 (반으로 자른 것)",
      "오이 1/2개 (깍둑썰기)",
      "적양파 1/4개 (얇게 썬 것)",
      "올리브오일 2큰술",
      "레몬즙 1큰술",
      "파슬리 2큰술 (다진 것)"
    ],
    instructions: [
      "퀴노아를 찬물에 헹군 후 물 2컵과 함께 끓이기",
      "끓으면 불을 줄이고 15분간 뚜껑 덮고 끓이기",
      "불을 끄고 5분간 그대로 둔 후 포크로 풀어주기",
      "식힌 퀴노아에 모든 채소와 드레싱 재료 넣고 섞기",
      "30분간 냉장고에서 재워 맛이 어우러지게 하기"
    ],
    tip: "퀴노아는 미리 대량으로 삶아서 냉장보관하면 일주일간 다양한 요리에 활용할 수 있습니다."
  },
  {
    id: 3,
    name: "연어 스테이크 덮밥",
    icon: "🍣",
    difficulty: "고급",
    healthRating: 4,
    cookingTime: 15,
    calories: 500,
    protein: 35,
    fiber: 3,
    description: "팬에 구운 연어 스테이크를 간장 버터 소스로 코팅해 밥 위에 얹은 든든한 한 끼.",
    category: "저녁",
    bgColor: "bg-orange-100",
    difficultyColor: "bg-orange-100 text-orange-800",
    ingredients: [
      "연어(생·냉동) 150g",
      "현미밥 1공기(200g)",
      "버터 5g",
      "간장 1큰술 + 맛술 1작은술",
      "다진 마늘 ½작은술",
      "후추 약간, 레몬즙 약간",
      "대파 (송송 썬 것) 1큰술"
    ],
    instructions: [
      "연어에 소금, 후추로 밑간하고 10분간 재우기",
      "팬에 기름 두르고 연어를 앞뒤로 3-4분씩 굽기",
      "연어를 그릇에 옮기고 같은 팬에 버터, 마늘 볶기",
      "간장, 맛술을 넣고 소스 만들기",
      "밥 위에 연어 올리고 소스 뿌린 후 대파 올려 완성"
    ],
    tip: "연어는 중심부가 약간 생 느낌이 날 정도로 구우면 촉촉하고 맛있습니다."
  },
  {
    id: 4,
    name: "간장버터 연어덮밥",
    icon: "🐟",
    difficulty: "중급",
    healthRating: 4,
    cookingTime: 12,
    calories: 550,
    protein: 33,
    fiber: 4,
    description: "버터·간장·꿀로 만든 짭짤·달콤 소스로 풍미를 살린 저녁용 연어덮밥.",
    category: "저녁",
    bgColor: "bg-blue-100",
    difficultyColor: "bg-blue-100 text-blue-800",
    ingredients: [
      "연어 150g",
      "밥 1공기",
      "버터 10g",
      "간장 2큰술",
      "꿀(또는 올리고당) 1큰술",
      "레몬즙 ½큰술, 통깨 약간",
      "브로콜리 50g (데친 것)"
    ],
    instructions: [
      "연어를 한입 크기로 자르고 소금, 후추로 간하기",
      "팬에 연어를 굽고 익으면 한쪽으로 밀어두기",
      "빈 공간에 버터를 녹이고 간장, 꿀 넣기",
      "소스가 끓으면 연어와 섞어 코팅하기",
      "밥 위에 연어와 브로콜리 올리고 통깨 뿌려 완성"
    ],
    tip: "소스가 너무 짜다면 맛술이나 물을 조금 넣어 농도를 조절하세요."
  },
  {
    id: 5,
    name: "오버나이트 오트밀",
    icon: "🥣",
    difficulty: "초급",
    healthRating: 5,
    cookingTime: 5,
    calories: 380,
    protein: 12,
    fiber: 15,
    description: "저당·고식이섬유 간편 아침. 밤새 불려 두기만 하면 끝!",
    category: "아침",
    bgColor: "bg-purple-100",
    difficultyColor: "bg-green-100 text-green-800",
    ingredients: [
      "귀리 50g(½컵)",
      "아몬드우유 150mL",
      "치아시드 1큰술",
      "메이플시럽 1작은술(선택)",
      "바닐라 에센스 2-3방울",
      "토핑: 냉동베리·바나나·견과류 등"
    ],
    instructions: [
      "유리병이나 밀폐용기에 귀리, 치아시드 넣기",
      "아몬드우유, 메이플시럽, 바닐라 에센스 추가",
      "잘 섞은 후 뚜껑 덮어 냉장고에서 6-8시간 보관",
      "아침에 꺼내서 토핑 올리고 바로 드시기"
    ],
    tip: "한 번에 여러 개를 만들어 두면 일주일간 간편한 아침식사가 준비됩니다."
  },
  {
    id: 6,
    name: "그릭요거트 볼",
    icon: "🥛",
    difficulty: "초급",
    healthRating: 5,
    cookingTime: 3,
    calories: 220,
    protein: 18,
    fiber: 5,
    description: "단백질 보충 + 가벼운 마무리를 위한 저녁 기본 메뉴.",
    category: "간식",
    bgColor: "bg-pink-100",
    difficultyColor: "bg-green-100 text-green-800",
    ingredients: [
      "무가당 그릭요거트 150g",
      "블루베리 ½컵",
      "아몬드 10알 (잘게 썬 것)",
      "꿀 1작은술(선택)",
      "그래놀라 2큰술",
      "민트잎 2-3장 (장식용)"
    ],
    instructions: [
      "그릭요거트를 그릇에 담기",
      "블루베리를 요거트 위에 고르게 올리기",
      "아몬드와 그래놀라 뿌리기",
      "꿀을 가볍게 뿌리고 민트잎으로 장식"
    ],
    tip: "계절 과일로 토핑을 바꿔가며 먹으면 질리지 않고 즐길 수 있습니다."
  },
  {
    id: 7,
    name: "닭다리살 대파 간장 덮밥",
    icon: "🍗",
    difficulty: "중급",
    healthRating: 4,
    cookingTime: 15,
    calories: 600,
    protein: 32,
    fiber: 3,
    description: "촉촉한 닭다리살을 파향 가득한 간장 소스로 볶아 낸 고단백 밥 한 그릇.",
    category: "저녁",
    bgColor: "bg-yellow-100",
    difficultyColor: "bg-yellow-100 text-yellow-800",
    ingredients: [
      "닭다리살(껍질 제거) 150g",
      "밥 1공기",
      "대파 ½대(송송)",
      "간장 1½큰술",
      "맛술 1큰술",
      "참기름 ½큰술, 통깨·후추 약간",
      "양파 ¼개 (채썬 것)"
    ],
    instructions: [
      "닭다리살을 한입 크기로 자르고 소금, 후추로 밑간",
      "팬에 기름 두르고 닭다리살 볶아 익히기",
      "양파 넣고 함께 볶다가 간장, 맛술 넣기",
      "소스가 졸아들면 대파 넣고 1분간 더 볶기",
      "밥 위에 올리고 참기름, 통깨 뿌려 완성"
    ],
    tip: "닭다리살은 완전히 익힌 후 대파를 넣어야 파의 향이 살아납니다."
  },
  {
    id: 8,
    name: "훈제 연어 베이글 오픈 샌드",
    icon: "🥯",
    difficulty: "중급",
    healthRating: 4,
    cookingTime: 7,
    calories: 350,
    protein: 20,
    fiber: 4,
    description: "주말 브런치용으로 인기 많은 담백·고단백 오픈 샌드위치.",
    category: "브런치",
    bgColor: "bg-indigo-100",
    difficultyColor: "bg-blue-100 text-blue-800",
    ingredients: [
      "통밀 베이글 ½개",
      "훈제 연어 60g",
      "라이트 크림치즈 1큰술",
      "슬라이스 적양파·케이퍼 약간",
      "레몬즙 ½작은술, 딜(선택)",
      "루콜라 한 줌"
    ],
    instructions: [
      "베이글을 반으로 자르고 토스터에 굽기",
      "구운 베이글에 크림치즈 발라주기",
      "루콜라, 훈제 연어 순서로 올리기",
      "적양파, 케이퍼 올리고 레몬즙 뿌리기",
      "딜로 마지막 장식하여 완성"
    ],
    tip: "베이글을 너무 많이 굽지 말고 겉만 바삭하게 구우면 식감이 좋습니다."
  },
  {
    id: 9,
    name: "닭가슴살·브로콜리 에어프라이어 볼",
    icon: "🥦",
    difficulty: "초급",
    healthRating: 5,
    cookingTime: 15,
    calories: 280,
    protein: 35,
    fiber: 8,
    description: "냉동 재료만으로 15분 완성되는 다이어트 기본 식단.",
    category: "다이어트",
    bgColor: "bg-teal-100",
    difficultyColor: "bg-green-100 text-green-800",
    ingredients: [
      "냉동 닭가슴살 120g",
      "냉동 브로콜리·콜리플라워 믹스 150g",
      "올리브오일 1작은술",
      "소금·후추 약간",
      "파프리카가루 약간",
      "레몬 1/4개 (즙용)"
    ],
    instructions: [
      "에어프라이어를 180°C로 예열하기",
      "냉동 재료에 올리브오일, 소금, 후추 버무리기",
      "에어프라이어에 넣고 12분간 조리",
      "중간에 한 번 뒤집어 주기 (6분 후)",
      "완료 후 파프리카가루, 레몬즙 뿌려 완성"
    ],
    tip: "해동 없이 바로 조리 가능하며, 여러 개를 미리 만들어 보관해도 좋습니다."
  },
  {
    id: 10,
    name: "단백질 파워 쉐이크",
    icon: "💪",
    difficulty: "초급",
    healthRating: 5,
    cookingTime: 3,
    calories: 320,
    protein: 25,
    fiber: 6,
    description: "운동 후 빠른 회복을 위한 한 컵 식사.",
    category: "운동후",
    bgColor: "bg-red-100",
    difficultyColor: "bg-green-100 text-green-800",
    ingredients: [
      "무가당 아몬드우유 200mL",
      "바나나 1개 (냉동 가능)",
      "시금치 한 줌 (30g)",
      "단백질 파우더 1스쿱 (30g)",
      "땅콩버터 1작은술(선택)",
      "아마씨 1작은술"
    ],
    instructions: [
      "믹서기에 모든 재료 넣기",
      "1-2분간 고속으로 갈아 부드럽게 만들기",
      "농도가 너무 진하면 물이나 우유 추가",
      "유리컵에 담아 바로 마시기"
    ],
    tip: "운동 후 30분 이내에 마시면 근육 회복에 가장 효과적입니다."
  }
]

export default function RecipePage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedDifficulty, setSelectedDifficulty] = useState("전체")
  const [selectedCategory, setSelectedCategory] = useState("전체")
  const [selectedHealthRating, setSelectedHealthRating] = useState(0)
  const [maxCookingTime, setMaxCookingTime] = useState(60)
  const [maxCalories, setMaxCalories] = useState(1000)
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false)
  const [viewMode, setViewMode] = useState("card") // "card" 또는 "list"

  const filteredRecipes = useMemo(() => {
    return recipes.filter(recipe => {
      const matchesSearch = recipe.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           recipe.description.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesDifficulty = selectedDifficulty === "전체" || recipe.difficulty === selectedDifficulty
      const matchesCategory = selectedCategory === "전체" || recipe.category === selectedCategory
      const matchesHealthRating = selectedHealthRating === 0 || recipe.healthRating >= selectedHealthRating
      const matchesCookingTime = recipe.cookingTime <= maxCookingTime
      const matchesCalories = recipe.calories <= maxCalories

      return matchesSearch && matchesDifficulty && matchesCategory && matchesHealthRating && matchesCookingTime && matchesCalories
    })
  }, [searchTerm, selectedDifficulty, selectedCategory, selectedHealthRating, maxCookingTime, maxCalories])

  const resetFilters = () => {
    setSearchTerm("")
    setSelectedDifficulty("전체")
    setSelectedCategory("전체")
    setSelectedHealthRating(0)
    setMaxCookingTime(60)
    setMaxCalories(1000)
  }

  const renderStars = (rating: number) => {
    return "⭐".repeat(rating)
  }

  const handleApiCall = async () => {
    // 새 창에서 레시피 API JSON 페이지 열기
    window.open('/api/recipes', '_blank')
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          {/* Header with back button */}
          <div className="flex items-center justify-between mb-8">
            <Link 
              href="/" 
              className="flex items-center gap-2 text-green-600 hover:text-green-700 transition-colors"
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
              건강한{' '}
              <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                식단 레시피
              </span>
            </h1>
            <div className="flex gap-4 justify-center mb-8">
              <button
                onClick={handleApiCall}
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-medium transition-colors shadow-lg"
              >
                📱 레시피 API 호출
              </button>
              <button
                onClick={() => setIsSearchModalOpen(true)}
                className="bg-white hover:bg-gray-50 text-gray-700 px-4 py-3 rounded-lg border border-gray-300 transition-colors shadow-lg"
              >
                🔍 레시피 검색
              </button>
            </div>
            
            {/* View Mode Toggle */}
            <div className="flex justify-center items-center gap-2 bg-white rounded-lg p-1 shadow-lg inline-flex">
              <button
                onClick={() => setViewMode("card")}
                className={`px-4 py-2 rounded-md font-medium transition-colors flex items-center gap-2 ${
                  viewMode === "card"
                    ? "bg-green-600 text-white shadow-md"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14-7H5a2 2 0 00-2 2v1a2 2 0 002 2h14a2 2 0 002-2V6a2 2 0 00-2-2zM19 18H5m14-7H5a2 2 0 00-2 2v1a2 2 0 002 2h14a2 2 0 002-2v-1a2 2 0 00-2-2z" />
                </svg>
                카드보기
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`px-4 py-2 rounded-md font-medium transition-colors flex items-center gap-2 ${
                  viewMode === "list"
                    ? "bg-green-600 text-white shadow-md"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                </svg>
                목록보기
              </button>
            </div>
          </div>

          {/* Search Modal */}
          {isSearchModalOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
              <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
                <div className="p-6">
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-bold text-gray-900">레시피 검색 및 필터</h2>
                    <button
                      onClick={() => setIsSearchModalOpen(false)}
                      className="text-gray-500 hover:text-gray-700"
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>

                  {/* Search Bar */}
                  <div className="mb-6">
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="레시피 이름이나 설명을 검색하세요..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      />
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Filter Buttons */}
                  <div className="space-y-4">
                    {/* Difficulty Filter */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">난이도</label>
                      <div className="flex flex-wrap gap-2">
                        {["전체", "초급", "중급", "고급"].map((difficulty) => (
                          <button
                            key={difficulty}
                            onClick={() => setSelectedDifficulty(difficulty)}
                            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                              selectedDifficulty === difficulty
                                ? "bg-green-600 text-white"
                                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                            }`}
                          >
                            {difficulty}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Category Filter */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">카테고리</label>
                      <div className="flex flex-wrap gap-2">
                        {["전체", "아침", "점심", "저녁", "간식", "브런치", "다이어트", "운동후"].map((category) => (
                          <button
                            key={category}
                            onClick={() => setSelectedCategory(category)}
                            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                              selectedCategory === category
                                ? "bg-blue-600 text-white"
                                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                            }`}
                          >
                            {category}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Health Rating Filter */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">건강지수 (최소)</label>
                      <div className="flex gap-2">
                        {[0, 3, 4, 5].map((rating) => (
                          <button
                            key={rating}
                            onClick={() => setSelectedHealthRating(rating)}
                            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                              selectedHealthRating === rating
                                ? "bg-yellow-600 text-white"
                                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                            }`}
                          >
                            {rating === 0 ? "전체" : `${renderStars(rating)} 이상`}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Time and Calorie Filters */}
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          조리시간 (최대 {maxCookingTime}분)
                        </label>
                        <input
                          type="range"
                          min="5"
                          max="60"
                          value={maxCookingTime}
                          onChange={(e) => setMaxCookingTime(Number(e.target.value))}
                          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          칼로리 (최대 {maxCalories}kcal)
                        </label>
                        <input
                          type="range"
                          min="200"
                          max="1000"
                          step="50"
                          value={maxCalories}
                          onChange={(e) => setMaxCalories(Number(e.target.value))}
                          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                        />
                      </div>
                    </div>

                    {/* Reset Button */}
                    <div className="flex justify-between items-center pt-4 border-t">
                      <p className="text-sm text-gray-600">
                        {filteredRecipes.length}개의 레시피가 검색되었습니다.
                      </p>
                      <div className="flex gap-2">
                        <button
                          onClick={resetFilters}
                          className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
                        >
                          필터 초기화
                        </button>
                        <button
                          onClick={() => setIsSearchModalOpen(false)}
                          className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                        >
                          검색 완료
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Recipe Display */}
          {viewMode === "card" ? (
            /* Card View */
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {filteredRecipes.map((recipe) => (
                <div key={recipe.id} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <div className={`w-16 h-16 ${recipe.bgColor} rounded-lg flex items-center justify-center mb-4 mx-auto`}>
                    <span className="text-2xl">{recipe.icon}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{recipe.name}</h3>
                  <div className="flex items-center justify-between mb-3">
                    <span className={`${recipe.difficultyColor} text-xs px-2 py-1 rounded-full`}>
                      {recipe.difficulty}
                    </span>
                    <span className="text-xs text-green-600 font-medium">
                      {renderStars(recipe.healthRating)} 건강지수
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4 text-sm">{recipe.description}</p>
                  
                  <div className="text-left space-y-3 mb-4">
                    <h4 className="font-semibold text-green-700 text-sm">재료:</h4>
                    <ul className="text-xs text-gray-600 list-disc list-inside space-y-1">
                      {recipe.ingredients.map((ingredient, index) => (
                        <li key={index}>{ingredient}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="text-left space-y-3 mb-4">
                    <h4 className="font-semibold text-blue-700 text-sm">조리 방법:</h4>
                    <ol className="text-xs text-gray-600 list-decimal list-inside space-y-1">
                      {recipe.instructions.map((instruction, index) => (
                        <li key={index}>{instruction}</li>
                      ))}
                    </ol>
                  </div>

                  <div className="text-left space-y-2 mb-4">
                    <h4 className="font-semibold text-purple-700 text-sm">💡 팁:</h4>
                    <p className="text-xs text-gray-600">{recipe.tip}</p>
                  </div>

                  <div className="text-xs text-green-600 font-medium border-t pt-3">
                    ⏰ 조리시간: {recipe.cookingTime}분 | 🔥 칼로리: {recipe.calories}kcal | 💪 단백질: {recipe.protein}g
                  </div>
                </div>
              ))}
            </div>
          ) : (
            /* List View */
            <div className="bg-white rounded-xl shadow-lg mb-16">
              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">레시피 목록 ({filteredRecipes.length}개)</h2>
                <div className="space-y-3">
                  {filteredRecipes.map((recipe) => (
                    <div key={recipe.id} className="flex items-center gap-4 p-4 hover:bg-gray-50 rounded-lg transition-colors cursor-pointer border border-gray-100">
                      <div className={`w-12 h-12 ${recipe.bgColor} rounded-lg flex items-center justify-center flex-shrink-0`}>
                        <span className="text-xl">{recipe.icon}</span>
                      </div>
                      <div className="flex-grow">
                        <h3 className="text-lg font-medium text-gray-900">{recipe.name}</h3>
                        <div className="flex items-center gap-3 mt-1">
                          <span className={`${recipe.difficultyColor} text-xs px-2 py-1 rounded-full`}>
                            {recipe.difficulty}
                          </span>
                          <span className="text-xs text-gray-500">
                            ⏰ {recipe.cookingTime}분
                          </span>
                          <span className="text-xs text-gray-500">
                            🔥 {recipe.calories}kcal
                          </span>
                          <span className="text-xs text-green-600">
                            {renderStars(recipe.healthRating)}
                          </span>
                        </div>
                      </div>
                      <div className="text-gray-400">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* No Results Message */}
          {filteredRecipes.length === 0 && (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">검색 결과가 없습니다</h3>
              <p className="text-gray-600 mb-4">다른 검색어나 필터를 사용해보세요.</p>
              <button
                onClick={resetFilters}
                className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
              >
                모든 레시피 보기
              </button>
            </div>
          )}

          {/* Additional Info Section */}
          <div className="bg-white rounded-xl p-8 shadow-lg mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">건강한 식단 관리 팁</h2>
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div>
                <h3 className="text-lg font-semibold text-green-700 mb-3">🥗 균형잡힌 영양소</h3>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• 매 끼니마다 단백질, 탄수화물, 건강한 지방을 포함하세요</li>
                  <li>• 다양한 색깔의 채소를 섭취하여 비타민과 미네랄을 충분히 공급받으세요</li>
                  <li>• 가공식품보다는 자연식품을 우선적으로 선택하세요</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-blue-700 mb-3">⏰ 식사 타이밍</h3>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• 규칙적인 식사 시간을 유지하여 신진대사를 활성화하세요</li>
                  <li>• 운동 전후 적절한 영양 공급으로 효과를 극대화하세요</li>
                  <li>• 저녁 식사는 가볍게, 잠들기 3시간 전에 마무리하세요</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}