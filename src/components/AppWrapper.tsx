'use client'

import React, { useState, useEffect } from 'react'
import Header from './Header'
import MobileMenu from './MobileMenu'
import SearchModal from './SearchModal'

interface AppWrapperProps {
  children: React.ReactNode
}

export default function AppWrapper({ children }: AppWrapperProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [currentPath, setCurrentPath] = useState('')

  useEffect(() => {
    // 클라이언트 사이드에서 현재 경로 설정
    setCurrentPath(window.location.pathname)
    
    // 경로 변경 감지
    const handleLocationChange = () => {
      setCurrentPath(window.location.pathname)
    }
    
    window.addEventListener('popstate', handleLocationChange)
    return () => window.removeEventListener('popstate', handleLocationChange)
  }, [])

  // 페이지별 헤더 설정
  const getHeaderConfig = () => {
    switch (currentPath) {
      case '/recipe':
        return {
          title: '건강한레시피',
          searchLabel: '레시피 검색',
          searchType: 'recipe' as const
        }
      case '/shopping':
        return {
          title: '스마트장보기',
          searchLabel: '상품 검색',
          searchType: 'product' as const
        }
      default:
        return {
          title: '건강한라이프스타일',
          searchLabel: '통합 검색',
          searchType: 'integrated' as const
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
        searchLabel={headerConfig.searchLabel}
      />
      <MobileMenu 
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
      />
      <SearchModal 
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        searchType={headerConfig.searchType}
      />
      {children}
    </>
  )
}