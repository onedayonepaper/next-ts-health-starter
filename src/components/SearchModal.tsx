'use client'

import React, { useState } from 'react'
import { X, Search, TrendingUp, Clock } from 'lucide-react'

interface SearchModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [searchTerm, setSearchTerm] = useState('')
  const [recentSearches] = useState(['사과', '바나나', '우유', '빵', '계란'])
  const [popularSearches] = useState(['올리브오일', '양파', '토마토', '닭가슴살', '쌀'])

  if (!isOpen) return null

  const handleSearch = (term: string) => {
    setSearchTerm(term)
    // 여기에 실제 검색 로직을 추가할 수 있습니다.
    console.log('검색어:', term)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchTerm.trim()) {
      handleSearch(searchTerm)
    }
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-start justify-center pt-16" onClick={onClose}>
      <div 
        className="bg-white rounded-lg shadow-xl w-full max-w-md mx-4 max-h-[80vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* 헤더 */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <h2 className="text-xl font-bold text-gray-900">상품 검색</h2>
          <button
            onClick={onClose}
            className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
            aria-label="검색 창 닫기"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* 검색 입력 */}
        <div className="p-4 border-b border-gray-200">
          <form onSubmit={handleSubmit} className="relative">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="상품명을 검색하세요..."
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
              autoFocus
            />
            <Search className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
          </form>
        </div>

        {/* 최근 검색어 */}
        <div className="p-4 border-b border-gray-200">
          <div className="flex items-center gap-2 mb-3">
            <Clock className="w-5 h-5 text-gray-500" />
            <h3 className="font-semibold text-gray-900">최근 검색어</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {recentSearches.map((search, index) => (
              <button
                key={index}
                onClick={() => handleSearch(search)}
                className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-emerald-100 hover:text-emerald-700 transition-colors"
              >
                {search}
              </button>
            ))}
          </div>
        </div>

        {/* 인기 검색어 */}
        <div className="p-4">
          <div className="flex items-center gap-2 mb-3">
            <TrendingUp className="w-5 h-5 text-gray-500" />
            <h3 className="font-semibold text-gray-900">인기 검색어</h3>
          </div>
          <div className="space-y-2">
            {popularSearches.map((search, index) => (
              <button
                key={index}
                onClick={() => handleSearch(search)}
                className="flex items-center gap-3 w-full p-2 text-left text-gray-700 hover:bg-emerald-50 rounded-lg transition-colors"
              >
                <span className="flex-shrink-0 w-6 h-6 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center text-sm font-medium">
                  {index + 1}
                </span>
                <span>{search}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}