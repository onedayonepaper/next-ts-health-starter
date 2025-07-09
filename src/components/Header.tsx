'use client'

import React from 'react'
import { Menu, Search } from 'lucide-react'
import Link from 'next/link'

interface HeaderProps {
  onMenuClick: () => void
  onSearchClick: () => void
  title: string
  searchPlaceholder: string
}

export default function Header({ onMenuClick, onSearchClick, title, searchPlaceholder }: HeaderProps) {
  // 타이틀에서 두 번째 단어를 초록색으로 표시
  const renderTitle = () => {
    const words = title.split(' ')
    if (words.length >= 2) {
      return (
        <>
          {words[0]}
          <span className="text-emerald-600">{words[1]}</span>
        </>
      )
    }
    return title
  }

  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* 왼쪽: 동적 타이틀 */}
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
              aria-label={searchPlaceholder}
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