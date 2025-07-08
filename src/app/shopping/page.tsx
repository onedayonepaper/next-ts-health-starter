'use client'

import React, { useState } from 'react'
import Link from 'next/link'

interface ShoppingItem {
  id: number
  name: string
  category: string
  quantity: number
  unit: string
  completed: boolean
  price?: number
}

const initialShoppingList: ShoppingItem[] = [
  { id: 1, name: "아보카도", category: "과일/채소", quantity: 2, unit: "개", completed: false, price: 3000 },
  { id: 2, name: "통곡물 빵", category: "곡물", quantity: 1, unit: "봉지", completed: false, price: 4500 },
  { id: 3, name: "연어", category: "생선/해산물", quantity: 300, unit: "g", completed: false, price: 12000 },
  { id: 4, name: "퀴노아", category: "곡물", quantity: 1, unit: "컵", completed: false, price: 8000 },
  { id: 5, name: "그릭요거트", category: "유제품", quantity: 1, unit: "개", completed: false, price: 3500 },
  { id: 6, name: "블루베리", category: "과일/채소", quantity: 1, unit: "팩", completed: false, price: 5000 },
  { id: 7, name: "닭가슴살", category: "육류", quantity: 500, unit: "g", completed: false, price: 8000 },
  { id: 8, name: "브로콜리", category: "과일/채소", quantity: 1, unit: "개", completed: false, price: 2500 }
]

export default function ShoppingPage() {
  const [shoppingList, setShoppingList] = useState<ShoppingItem[]>(initialShoppingList)
  const [newItem, setNewItem] = useState({ name: "", category: "기타", quantity: 1, unit: "개" })
  const [filter, setFilter] = useState("전체")

  const categories = ["전체", "과일/채소", "육류", "생선/해산물", "유제품", "곡물", "조미료", "기타"]

  const addItem = () => {
    if (newItem.name.trim()) {
      const item: ShoppingItem = {
        id: Date.now(),
        name: newItem.name,
        category: newItem.category,
        quantity: newItem.quantity,
        unit: newItem.unit,
        completed: false
      }
      setShoppingList([...shoppingList, item])
      setNewItem({ name: "", category: "기타", quantity: 1, unit: "개" })
    }
  }

  const toggleComplete = (id: number) => {
    setShoppingList(shoppingList.map(item => 
      item.id === id ? { ...item, completed: !item.completed } : item
    ))
  }

  const deleteItem = (id: number) => {
    setShoppingList(shoppingList.filter(item => item.id !== id))
  }

  const filteredItems = filter === "전체" 
    ? shoppingList 
    : shoppingList.filter(item => item.category === filter)

  const completedItems = shoppingList.filter(item => item.completed)
  const totalItems = shoppingList.length
  const totalPrice = shoppingList
    .filter(item => item.price)
    .reduce((sum, item) => sum + (item.price || 0), 0)

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
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
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                구매목록
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              건강한 식단을 위한 체계적인 장보기 관리
            </p>
          </div>

          {/* Statistics */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">📝</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">{totalItems}</h3>
                  <p className="text-gray-600">전체 항목</p>
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
                  <p className="text-gray-600">완료 항목</p>
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
                  <p className="text-gray-600">예상 금액</p>
                </div>
              </div>
            </div>
          </div>

          {/* Add New Item */}
          <div className="bg-white rounded-xl p-6 shadow-lg mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">새 항목 추가</h2>
            <div className="grid md:grid-cols-4 gap-4">
              <input
                type="text"
                placeholder="상품명"
                value={newItem.name}
                onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <select
                value={newItem.category}
                onChange={(e) => setNewItem({ ...newItem, category: e.target.value })}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {categories.slice(1).map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
              <div className="flex gap-2">
                <input
                  type="number"
                  min="1"
                  value={newItem.quantity}
                  onChange={(e) => setNewItem({ ...newItem, quantity: parseInt(e.target.value) || 1 })}
                  className="w-20 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <select
                  value={newItem.unit}
                  onChange={(e) => setNewItem({ ...newItem, unit: e.target.value })}
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="개">개</option>
                  <option value="봉지">봉지</option>
                  <option value="팩">팩</option>
                  <option value="g">g</option>
                  <option value="kg">kg</option>
                  <option value="L">L</option>
                  <option value="ml">ml</option>
                </select>
              </div>
              <button
                onClick={addItem}
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                추가
              </button>
            </div>
          </div>

          {/* Category Filter */}
          <div className="bg-white rounded-xl p-6 shadow-lg mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">카테고리 필터</h2>
            <div className="flex flex-wrap gap-2">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setFilter(category)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    filter === category
                      ? "bg-blue-600 text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Shopping List */}
          <div className="bg-white rounded-xl shadow-lg">
            <div className="p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                구매목록 ({filteredItems.length}개)
              </h2>
              
              {filteredItems.length === 0 ? (
                <div className="text-center py-12">
                  <div className="text-6xl mb-4">🛒</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">목록이 비어있습니다</h3>
                  <p className="text-gray-600">새로운 항목을 추가해보세요.</p>
                </div>
              ) : (
                <div className="space-y-3">
                  {filteredItems.map(item => (
                    <div
                      key={item.id}
                      className={`flex items-center gap-4 p-4 rounded-lg border transition-colors ${
                        item.completed
                          ? "bg-green-50 border-green-200"
                          : "bg-gray-50 border-gray-200 hover:bg-gray-100"
                      }`}
                    >
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
                      
                      <div className="flex-grow">
                        <h3 className={`text-lg font-medium ${
                          item.completed ? "text-gray-500 line-through" : "text-gray-900"
                        }`}>
                          {item.name}
                        </h3>
                        <div className="flex items-center gap-3 mt-1">
                          <span className="text-sm px-2 py-1 bg-blue-100 text-blue-800 rounded-full">
                            {item.category}
                          </span>
                          <span className="text-sm text-gray-500">
                            {item.quantity} {item.unit}
                          </span>
                          {item.price && (
                            <span className="text-sm font-medium text-green-600">
                              {item.price.toLocaleString()}원
                            </span>
                          )}
                        </div>
                      </div>
                      
                      <button
                        onClick={() => deleteItem(item.id)}
                        className="text-red-500 hover:text-red-700 transition-colors"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Shopping Tips */}
          <div className="bg-white rounded-xl p-8 shadow-lg mt-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">스마트 장보기 팁</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-blue-700 mb-3">💡 계획적인 쇼핑</h3>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• 일주일 식단을 미리 계획하고 필요한 재료를 정리하세요</li>
                  <li>• 카테고리별로 정리하여 동선을 효율적으로 계획하세요</li>
                  <li>• 할인 정보를 확인하고 예산을 미리 설정하세요</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-green-700 mb-3">🥬 신선식품 구매 요령</h3>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• 신선한 채소와 과일은 가장 마지막에 구매하세요</li>
                  <li>• 냉동식품과 냉장식품은 쇼핑 직전에 담으세요</li>
                  <li>• 유통기한을 꼼꼼히 확인하고 적정량만 구매하세요</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}