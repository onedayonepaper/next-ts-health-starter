'use client'

import React, { useState } from 'react'
import { Menu, X, Search } from 'lucide-react'
import Link from 'next/link'

interface HeaderProps {
  onMenuClick: () => void
  onSearchClick: () => void
}

export default function Header({ onMenuClick, onSearchClick }: HeaderProps) {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* 왼쪽: 스마트장보기 로고 */}
          <Link href="/" className="flex items-center">
            <h1 className="text-2xl font-bold text-gray-900">
              스마트<span className="text-emerald-600">장보기</span>
            </h1>
          </Link>

          {/* 오른쪽: 아이콘들 */}
          <div className="flex items-center space-x-4">
            {/* 돋보기 아이콘 */}
            <button
              onClick={onSearchClick}
              className="p-2 text-gray-600 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors"
              aria-label="상품 검색"
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