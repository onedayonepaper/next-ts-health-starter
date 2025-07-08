'use client'

import React, { useState, useMemo } from 'react'
import Link from 'next/link'

// Shopping item interface
interface ShoppingItem {
  id: number
  item: string
  category: string
  store: string
  weight_g: number
  price_won: number
  unit_price_won_per_100g: number
  storage: string
  memo: string
  icon: string
  bgColor: string
  completed: boolean
}

// Shopping data structure
const shoppingItems: ShoppingItem[] = [
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

export default function ShoppingPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("전체")
  const [selectedStore, setSelectedStore] = useState("전체")
  const [selectedStorage, setSelectedStorage] = useState("전체")
  const [maxPrice, setMaxPrice] = useState(25000)
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false)
  const [items, setItems] = useState(shoppingItems)

  const filteredItems = useMemo(() => {
    return items.filter((item: ShoppingItem) => {
      const matchesSearch = item.item.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           item.memo.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesCategory = selectedCategory === "전체" || item.category === selectedCategory
      const matchesStore = selectedStore === "전체" || item.store === selectedStore
      const matchesStorage = selectedStorage === "전체" || item.storage === selectedStorage
      const matchesPrice = item.price_won <= maxPrice

      return matchesSearch && matchesCategory && matchesStore && matchesStorage && matchesPrice
    })
  }, [searchTerm, selectedCategory, selectedStore, selectedStorage, maxPrice, items])

  const resetFilters = () => {
    setSearchTerm("")
    setSelectedCategory("전체")
    setSelectedStore("전체")
    setSelectedStorage("전체")
    setMaxPrice(25000)
  }

  const toggleComplete = (id: number) => {
    setItems(items.map((item: ShoppingItem) => 
      item.id === id ? { ...item, completed: !item.completed } : item
    ))
  }

  const getStorageIcon = (storage: string) => {
    switch (storage) {
      case "냉장": return "❄️"
      case "냉동": return "🧊"
      case "실온": return "🌡️"
      default: return "📦"
    }
  }

  const totalPrice = filteredItems.reduce((sum: number, item: ShoppingItem) => sum + item.price_won, 0)
  const completedItems = filteredItems.filter((item: ShoppingItem) => item.completed)

  const handleApiCall = async () => {
    // 새 창에서 쇼핑 API JSON 페이지 열기
    window.open('/api/shopping', '_blank')
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-100">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          {/* Header with back button */}
          <div className="flex items-center justify-between mb-8">
            <Link 
              href="/" 
              className="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors"
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
              스마트{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                구매목록
              </span>
            </h1>
            <div className="flex gap-4 justify-center mb-8">
              <button
                onClick={handleApiCall}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors shadow-lg"
              >
                🛒 쇼핑 API 호출
              </button>
              <button
                onClick={() => setIsSearchModalOpen(true)}
                className="bg-white hover:bg-gray-50 text-gray-700 px-4 py-3 rounded-lg border border-gray-300 transition-colors shadow-lg"
              >
                🔍 상품 검색
              </button>
            </div>
          </div>

          {/* Search Modal */}
          {isSearchModalOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
              <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
                <div className="p-6">
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-bold text-gray-900">상품 검색 및 필터</h2>
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
                        placeholder="상품명이나 메모를 검색하세요..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
                    {/* Category Filter */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">카테고리</label>
                      <div className="flex flex-wrap gap-2">
                        {["전체", "간식·초콜릿", "요거트·발효유", "해산물·생선", "육류·닭고기"].map((category) => (
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

                    {/* Store Filter */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">구매처</label>
                      <div className="flex flex-wrap gap-2">
                        {["전체", "쿠팡", "이마트 노브랜드"].map((store) => (
                          <button
                            key={store}
                            onClick={() => setSelectedStore(store)}
                            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                              selectedStore === store
                                ? "bg-green-600 text-white"
                                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                            }`}
                          >
                            {store}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Storage Filter */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">보관방법</label>
                      <div className="flex flex-wrap gap-2">
                        {["전체", "실온", "냉장", "냉동"].map((storage) => (
                          <button
                            key={storage}
                            onClick={() => setSelectedStorage(storage)}
                            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-1 ${
                              selectedStorage === storage
                                ? "bg-purple-600 text-white"
                                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                            }`}
                          >
                            {storage !== "전체" && getStorageIcon(storage)}
                            {storage}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Price Filter */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        최대 가격: {maxPrice.toLocaleString()}원
                      </label>
                      <input
                        type="range"
                        min="5000"
                        max="25000"
                        step="1000"
                        value={maxPrice}
                        onChange={(e) => setMaxPrice(parseInt(e.target.value))}
                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                      />
                      <div className="flex justify-between text-xs text-gray-500 mt-1">
                        <span>5,000원</span>
                        <span>25,000원</span>
                      </div>
                    </div>

                    {/* Reset Button */}
                    <div className="flex justify-end">
                      <button
                        onClick={resetFilters}
                        className="text-red-600 hover:text-red-700 text-sm font-medium"
                      >
                        필터 초기화
                      </button>
                    </div>
                  </div>

                  <div className="mt-6 pt-6 border-t">
                    <button
                      onClick={() => setIsSearchModalOpen(false)}
                      className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
                    >
                      필터 적용하기 ({filteredItems.length}개 상품)
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Shopping Items Table */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                구매목록 ({filteredItems.length}개)
              </h2>
              
              {filteredItems.length === 0 ? (
                <div className="text-center py-12">
                  <div className="text-6xl mb-4">🛒</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">조건에 맞는 상품이 없습니다</h3>
                  <p className="text-gray-600">필터 조건을 조정해보세요.</p>
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="border-b-2 border-gray-200">
                        <th className="text-left py-4 px-4 font-semibold text-gray-900">완료</th>
                        <th className="text-left py-4 px-4 font-semibold text-gray-900">상품</th>
                        <th className="text-left py-4 px-4 font-semibold text-gray-900">카테고리</th>
                        <th className="text-left py-4 px-4 font-semibold text-gray-900">구매처</th>
                        <th className="text-left py-4 px-4 font-semibold text-gray-900">중량</th>
                        <th className="text-left py-4 px-4 font-semibold text-gray-900">가격</th>
                        <th className="text-left py-4 px-4 font-semibold text-gray-900">100g당</th>
                        <th className="text-left py-4 px-4 font-semibold text-gray-900">보관</th>
                        <th className="text-left py-4 px-4 font-semibold text-gray-900">메모</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredItems.map((item, index) => (
                        <tr
                          key={item.id}
                          className={`border-b border-gray-100 hover:bg-gray-50 transition-colors ${
                            item.completed ? "bg-green-50" : ""
                          }`}
                        >
                          <td className="py-4 px-4">
                            <button
                              onClick={() => toggleComplete(item.id)}
                              className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${
                                item.completed
                                  ? "bg-green-500 border-green-500 text-white"
                                  : "border-gray-300 hover:border-green-500"
                              }`}
                            >
                              {item.completed && (
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                              )}
                            </button>
                          </td>
                          <td className="py-4 px-4">
                            <div className="flex items-center gap-3">
                              <span className="text-2xl">{item.icon}</span>
                              <span className={`font-medium ${
                                item.completed ? "text-gray-500 line-through" : "text-gray-900"
                              }`}>
                                {item.item}
                              </span>
                            </div>
                          </td>
                          <td className="py-4 px-4">
                            <span className="text-sm px-2 py-1 bg-blue-100 text-blue-800 rounded-full">
                              {item.category}
                            </span>
                          </td>
                          <td className="py-4 px-4">
                            <span className="text-sm px-2 py-1 bg-green-100 text-green-800 rounded-full">
                              {item.store}
                            </span>
                          </td>
                          <td className="py-4 px-4 text-gray-700">
                            {item.weight_g}g
                          </td>
                          <td className="py-4 px-4 font-semibold text-gray-900">
                            {item.price_won.toLocaleString()}원
                          </td>
                          <td className="py-4 px-4 text-gray-600">
                            {item.unit_price_won_per_100g.toLocaleString()}원
                          </td>
                          <td className="py-4 px-4">
                            <span className="flex items-center gap-1 text-sm px-2 py-1 bg-purple-100 text-purple-800 rounded-full">
                              {getStorageIcon(item.storage)} {item.storage}
                            </span>
                          </td>
                          <td className="py-4 px-4 text-sm text-gray-600 max-w-xs">
                            <div className="truncate" title={item.memo}>
                              {item.memo}
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </div>

          {/* Statistics - Moved to bottom */}
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">🛒</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">{filteredItems.length}</h3>
                  <p className="text-gray-600">선택된 상품</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">✅</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">{completedItems.length}</h3>
                  <p className="text-gray-600">구매 완료</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">💰</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">{totalPrice.toLocaleString()}원</h3>
                  <p className="text-gray-600">총 예상 금액</p>
                </div>
              </div>
            </div>
          </div>

          {/* Shopping Tips */}
          <div className="bg-white rounded-xl p-8 shadow-lg mt-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">스마트 쇼핑 가이드</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-blue-700 mb-3">💡 가격 비교 팁</h3>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• 100g당 단가를 확인하여 실제 가성비를 비교하세요</li>
                  <li>• 대용량 상품이 항상 저렴한 것은 아닙니다</li>
                  <li>• 할인 혜택과 배송비를 함께 고려하세요</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-green-700 mb-3">🧊 보관 방법별 구매 전략</h3>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• 냉동 상품: 대용량 구매로 장기간 활용</li>
                  <li>• 냉장 상품: 유통기한 확인 후 적정량 구매</li>
                  <li>• 실온 상품: 비상시를 대비해 여분 준비</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}