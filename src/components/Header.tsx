'use client'

import React from 'react'
import { Menu, Search } from 'lucide-react'
import Link from 'next/link'

interface HeaderProps {
  onMenuClick: () => void
  onSearchClick: () => void
  title?: string
  searchLabel?: string
}

export default function Header({ 
  onMenuClick, 
  onSearchClick, 
  title = "건강한라이프스타일",
  searchLabel = "통합 검색" 
}: HeaderProps) {
  
  // 제목에 따른 색상 강조 렌더링
  const renderTitle = () => {
    if (title === "스마트장보기") {
      return (
        <span>
          스마트<span className="text-emerald-600">장보기</span>
        </span>
      )
    } else if (title === "건강한레시피") {
      return (
        <span>
          건강한<span className="text-green-600">레시피</span>
        </span>
      )
    } else {
      return (
        <span>
          건강한<span className="text-emerald-600">라이프스타일</span>
        </span>
      )
    }
  }

  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* 왼쪽: 페이지별 제목 */}
          <Link href="/" className="flex items-center">
            <h1 className="text-2xl font-bold text-gray-900">
              {renderTitle()}
            </h1>
          </Link>

          {/* 오른쪽: 아이콘들 */}
          <div className="flex items-center space-x-4">
            {/* 돋보기 아이콘 */}
            <button
              onClick={onSearchClick}
              className="p-2 text-gray-600 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors"
              aria-label={searchLabel}
            >
              <Search className="w-6 h-6" />
            </button>

            {/* 햄버거 아이콘 */}
            <button
              onClick={onMenuClick}
              className="p-2 text-gray-600 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors"
              aria-label="메뉴 열기"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}