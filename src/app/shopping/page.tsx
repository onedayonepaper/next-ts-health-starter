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
    bgColor: "bg-amber-100"
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
    bgColor: "bg-blue-100"
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
    bgColor: "bg-orange-100"
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
    bgColor: "bg-red-100"
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
  const [selectedItem, setSelectedItem] = useState<ShoppingItem | null>(null)
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false)

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

  const handleItemClick = (item: ShoppingItem) => {
    setSelectedItem(item)
    setIsDetailModalOpen(true)
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

  const handleApiCall = async () => {
    // 새 창에서 쇼핑 API JSON 페이지 열기
    window.open('/api/shopping', '_blank')
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-100">
      <div className="container mx-auto px-3 sm:px-4 py-8 sm:py-16">
        <div className="max-w-6xl mx-auto">
          {/* Header removed - back button moved to bottom */}

          {/* Search Modal */}
          {isSearchModalOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-3 sm:p-4">
              <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
                <div className="p-4 sm:p-6">
                  <div className="flex justify-between items-center mb-4 sm:mb-6">
                    <h2 className="text-lg sm:text-2xl font-bold text-gray-900">상품 검색 및 필터</h2>
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
                        placeholder="상품명이나 메모를 검색하세요..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full px-4 py-3 pl-10 sm:pl-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base"
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
                        {["전체", "간식·초콜릿", "요거트·발효유", "해산물·생선", "육류·닭고기"].map((category) => (
                          <button
                            key={category}
                            onClick={() => setSelectedCategory(category)}
                            className={`px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-colors ${
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
                            className={`px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-colors ${
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
                            className={`px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-colors flex items-center gap-1 ${
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
                        className="text-red-600 hover:text-red-700 text-xs sm:text-sm font-medium"
                      >
                        필터 초기화
                      </button>
                    </div>
                  </div>

                  <div className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t">
                    <button
                      onClick={() => setIsSearchModalOpen(false)}
                      className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors text-sm sm:text-base"
                    >
                      필터 적용하기 ({filteredItems.length}개 상품)
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
                        <h2 className="text-lg sm:text-2xl font-bold text-gray-900 mb-2 break-words">{selectedItem.item}</h2>
                        <span className="text-xs sm:text-sm px-2 sm:px-3 py-1 bg-blue-100 text-blue-800 rounded-full">
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
                    {/* Store and Storage */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                      <div className="bg-green-50 p-3 sm:p-4 rounded-lg">
                        <h3 className="text-xs sm:text-sm font-semibold text-green-800 mb-1 sm:mb-2">구매처</h3>
                        <p className="text-sm sm:text-base text-green-700">{selectedItem.store}</p>
                      </div>
                      <div className="bg-purple-50 p-3 sm:p-4 rounded-lg">
                        <h3 className="text-xs sm:text-sm font-semibold text-purple-800 mb-1 sm:mb-2">보관방법</h3>
                        <p className="text-sm sm:text-base text-purple-700 flex items-center gap-1">
                          {getStorageIcon(selectedItem.storage)} {selectedItem.storage}
                        </p>
                      </div>
                    </div>

                    {/* Weight and Price */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                      <div className="bg-gray-50 p-3 sm:p-4 rounded-lg">
                        <h3 className="text-xs sm:text-sm font-semibold text-gray-800 mb-1 sm:mb-2">중량</h3>
                        <p className="text-xl sm:text-2xl font-bold text-gray-900">{selectedItem.weight_g}g</p>
                      </div>
                      <div className="bg-yellow-50 p-3 sm:p-4 rounded-lg">
                        <h3 className="text-xs sm:text-sm font-semibold text-yellow-800 mb-1 sm:mb-2">가격</h3>
                        <p className="text-xl sm:text-2xl font-bold text-yellow-900">{selectedItem.price_won.toLocaleString()}원</p>
                      </div>
                    </div>

                    {/* Unit Price */}
                    <div className="bg-blue-50 p-3 sm:p-4 rounded-lg">
                      <h3 className="text-xs sm:text-sm font-semibold text-blue-800 mb-1 sm:mb-2">100g당 단가</h3>
                      <p className="text-lg sm:text-xl font-bold text-blue-900">{selectedItem.unit_price_won_per_100g.toLocaleString()}원</p>
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
                      className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors text-sm sm:text-base"
                    >
                      닫기
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Shopping Items - Table with Header */}
          <div className="mb-6 sm:mb-8">
            <div className="mb-4 sm:mb-6">
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-2">
                건강한 쇼핑 목록
              </h2>
            </div>
            
            {filteredItems.length === 0 ? (
              <div className="text-center py-8 sm:py-12 bg-gray-50 rounded-lg">
                <div className="text-4xl sm:text-6xl mb-3 sm:mb-4">🛒</div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">조건에 맞는 상품이 없습니다</h3>
                <p className="text-sm sm:text-base text-gray-600">필터 조건을 조정해보세요.</p>
              </div>
            ) : (
              <div className="bg-white overflow-hidden rounded-lg shadow-lg">
                {/* Table Header */}
                <div className="bg-gray-50 px-3 sm:px-4 py-3 sm:py-4 border-b border-gray-200">
                  <div className="flex items-center gap-3 sm:gap-4 w-full">
                    <span className="text-sm font-semibold text-gray-700 w-6 text-center flex-shrink-0">No.</span>
                    <span className="text-sm font-semibold text-gray-700 w-8 text-center flex-shrink-0">아이콘</span>
                    <span className="text-sm font-semibold text-gray-700 flex-1">상품명</span>
                    <span className="text-sm font-semibold text-gray-700 w-6 text-center flex-shrink-0">상세</span>
                  </div>
                </div>
                
                {/* Table Body */}
                {filteredItems.map((item, index) => (
                  <div
                    key={item.id}
                    onClick={() => handleItemClick(item)}
                    className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 hover:bg-gray-50 cursor-pointer transition-all border-b border-gray-200 last:border-b-0 w-full"
                  >
                    {/* Row Number */}
                    <span className="text-sm text-gray-400 w-6 text-center flex-shrink-0">
                      {index + 1}
                    </span>
                    
                    {/* Icon */}
                    <span className="text-xl sm:text-2xl w-8 text-center flex-shrink-0">{item.icon}</span>
                    
                    {/* Item Name */}
                    <div className="flex-1 min-w-0">
                      <h3 className="font-medium text-gray-900 text-sm sm:text-base break-words">
                        {item.item}
                      </h3>
                    </div>
                    
                    {/* Arrow */}
                    <svg className="w-4 h-4 text-gray-400 w-6 text-center flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 py-3 rounded-lg font-medium transition-colors shadow-lg text-sm sm:text-base"
            >
              🛒 쇼핑 API 호출
            </button>
            <button
              onClick={() => setIsSearchModalOpen(true)}
              className="bg-white hover:bg-gray-50 text-gray-700 px-4 py-3 rounded-lg border border-gray-300 transition-colors shadow-lg text-sm sm:text-base"
            >
              🔍 상품 검색
            </button>
          </div>

          {/* Statistics - Responsive Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mt-6 sm:mt-8">
            <div className="bg-white rounded-xl p-4 sm:p-6 shadow-lg">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <span className="text-lg sm:text-2xl">🛒</span>
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900">{filteredItems.length}</h3>
                  <p className="text-sm sm:text-base text-gray-600">선택된 상품</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl p-4 sm:p-6 shadow-lg">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                  <span className="text-lg sm:text-2xl">💰</span>
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900">{totalPrice.toLocaleString()}원</h3>
                  <p className="text-sm sm:text-base text-gray-600">총 예상 금액</p>
                </div>
              </div>
            </div>
          </div>

          {/* Shopping Tips - Mobile Optimized */}
          <div className="bg-white rounded-xl p-4 sm:p-8 shadow-lg mt-6 sm:mt-8">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">스마트 쇼핑 가이드</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <div>
                <h3 className="text-base sm:text-lg font-semibold text-blue-700 mb-2 sm:mb-3">💡 가격 비교 팁</h3>
                <ul className="text-xs sm:text-sm text-gray-600 space-y-1 sm:space-y-2">
                  <li>• 100g당 단가를 확인하여 실제 가성비를 비교하세요</li>
                  <li>• 대용량 상품이 항상 저렴한 것은 아닙니다</li>
                  <li>• 할인 혜택과 배송비를 함께 고려하세요</li>
                </ul>
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-semibold text-green-700 mb-2 sm:mb-3">🧊 보관 방법별 구매 전략</h3>
                <ul className="text-xs sm:text-sm text-gray-600 space-y-1 sm:space-y-2">
                  <li>• 냉동 상품: 대용량 구매로 장기간 활용</li>
                  <li>• 냉장 상품: 유통기한 확인 후 적정량 구매</li>
                  <li>• 실온 상품: 비상시를 대비해 여분 준비</li>
                </ul>
              </div>
            </div>

            {/* Back to Main Button - Moved to bottom */}
            <div className="flex justify-center mt-8 sm:mt-12">
              <Link 
                href="/" 
                className="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors text-sm sm:text-base bg-white px-4 sm:px-6 py-3 rounded-lg border border-blue-200 hover:border-blue-300 shadow-sm"
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