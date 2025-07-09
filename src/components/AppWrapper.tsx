'use client'

import React, { useState } from 'react'
import { usePathname } from 'next/navigation'
import Header from './Header'
import MobileMenu from './MobileMenu'
import SearchModal from './SearchModal'

interface AppWrapperProps {
  children: React.ReactNode
}

export default function AppWrapper({ children }: AppWrapperProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const pathname = usePathname()

  // 페이지별 헤더 설정
  const getHeaderConfig = () => {
    if (pathname.startsWith('/recipe')) {
      return {
        title: '건강한 레시피',
        searchType: '레시피 검색',
        placeholder: '레시피를 검색하세요...'
      }
    } else {
      return {
        title: '건강한 라이프스타일',
        searchType: '통합검색',
        placeholder: '상품명을 검색하세요...'
      }
    }
  }

  const headerConfig = getHeaderConfig()

  return (
    <>
      <Header 
        onMenuClick={() => setIsMenuOpen(true)}
        onSearchClick={() => setIsSearchOpen(true)}
        title={headerConfig.title}
        searchPlaceholder={headerConfig.placeholder}
      />
      <MobileMenu 
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
      />
      <SearchModal 
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        searchType={headerConfig.searchType}
        placeholder={headerConfig.placeholder}
      />
      {children}
    </>
  )
}