'use client'

import React from 'react'
import { X, Home, ChefHat, ShoppingCart, Calendar, User, Settings } from 'lucide-react'
import Link from 'next/link'

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50" onClick={onClose}>
      <div 
        className="fixed right-0 top-0 h-full w-80 bg-white shadow-xl transform transition-transform duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* 헤더 */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <h2 className="text-xl font-bold text-gray-900">메뉴</h2>
          <button
            onClick={onClose}
            className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
            aria-label="메뉴 닫기"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* 메뉴 항목들 */}
        <div className="p-4">
          <nav className="space-y-2">
            <Link 
              href="/"
              onClick={onClose}
              className="flex items-center gap-3 p-3 text-gray-700 hover:bg-emerald-50 hover:text-emerald-600 rounded-lg transition-colors"
            >
              <Home className="w-5 h-5" />
              <span className="font-medium">홈</span>
            </Link>
            
            <Link 
              href="/recipe"
              onClick={onClose}
              className="flex items-center gap-3 p-3 text-gray-700 hover:bg-emerald-50 hover:text-emerald-600 rounded-lg transition-colors"
            >
              <ChefHat className="w-5 h-5" />
              <span className="font-medium">레시피</span>
            </Link>
            
            <Link 
              href="/shopping"
              onClick={onClose}
              className="flex items-center gap-3 p-3 text-gray-700 hover:bg-emerald-50 hover:text-emerald-600 rounded-lg transition-colors"
            >
              <ShoppingCart className="w-5 h-5" />
              <span className="font-medium">쇼핑 리스트</span>
            </Link>
            
            <Link 
              href="/schedule"
              onClick={onClose}
              className="flex items-center gap-3 p-3 text-gray-700 hover:bg-emerald-50 hover:text-emerald-600 rounded-lg transition-colors"
            >
              <Calendar className="w-5 h-5" />
              <span className="font-medium">건강한 일정</span>
            </Link>
            
            <div className="border-t border-gray-200 my-4"></div>
            
            <Link 
              href="/dashboard"
              onClick={onClose}
              className="flex items-center gap-3 p-3 text-gray-700 hover:bg-emerald-50 hover:text-emerald-600 rounded-lg transition-colors"
            >
              <User className="w-5 h-5" />
              <span className="font-medium">대시보드</span>
            </Link>
            
            <Link 
              href="/settings"
              onClick={onClose}
              className="flex items-center gap-3 p-3 text-gray-700 hover:bg-emerald-50 hover:text-emerald-600 rounded-lg transition-colors"
            >
              <Settings className="w-5 h-5" />
              <span className="font-medium">설정</span>
            </Link>
          </nav>
        </div>
      </div>
    </div>
  )
}