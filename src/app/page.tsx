'use client'

import React from 'react'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-green-100">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-6xl md:text-7xl font-bold text-gray-900 mb-6">
              건강한{' '}
              <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                라이프스타일
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              건강한 식단 관리와 스마트한 쇼핑을 위한 올인원 플랫폼
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto rounded-full"></div>
          </div>

          {/* Main Navigation Cards */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* Recipe Service Card */}
            <Link href="/recipe" className="group">
              <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 group-hover:scale-105 border border-gray-100">
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-green-100 to-emerald-100 rounded-2xl flex items-center justify-center group-hover:from-green-200 group-hover:to-emerald-200 transition-colors">
                    <span className="text-4xl">🥗</span>
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">레시피 서비스</h2>
                  <p className="text-gray-600 mb-6 text-lg">
                    건강한 식단을 위한 다양한 레시피를 탐색하고 검색하세요
                  </p>
                  <div className="space-y-3 text-left">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-gray-700">10가지 건강 레시피</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-gray-700">난이도별 필터링</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-gray-700">영양 정보 제공</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-gray-700">조리 팁 포함</span>
                    </div>
                  </div>
                  <div className="mt-8">
                    <div className="inline-flex items-center gap-2 text-green-600 font-semibold group-hover:text-green-700 transition-colors">
                      레시피 탐색하기
                      <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </Link>

            {/* Shopping List Card */}
            <Link href="/shopping" className="group">
              <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 group-hover:scale-105 border border-gray-100">
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl flex items-center justify-center group-hover:from-blue-200 group-hover:to-indigo-200 transition-colors">
                    <span className="text-4xl">🛒</span>
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">구매목록 관리</h2>
                  <p className="text-gray-600 mb-6 text-lg">
                    체계적인 장보기를 위한 스마트한 구매목록을 관리하세요
                  </p>
                  <div className="space-y-3 text-left">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-gray-700">카테고리별 정리</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-gray-700">가격 추적</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-gray-700">구매 완료 체크</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-gray-700">쇼핑 팁 제공</span>
                    </div>
                  </div>
                  <div className="mt-8">
                    <div className="inline-flex items-center gap-2 text-blue-600 font-semibold group-hover:text-blue-700 transition-colors">
                      구매목록 관리하기
                      <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>

          {/* Features Section */}
          <div className="bg-white rounded-2xl p-8 shadow-xl mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">왜 우리 서비스를 선택해야 할까요?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-yellow-100 to-orange-100 rounded-xl flex items-center justify-center">
                  <span className="text-2xl">⚡</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">빠른 접근</h3>
                <p className="text-gray-600">
                  간편한 인터페이스로 빠르게 원하는 정보에 접근할 수 있습니다
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-purple-100 to-pink-100 rounded-xl flex items-center justify-center">
                  <span className="text-2xl">📊</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">체계적 관리</h3>
                <p className="text-gray-600">
                  레시피부터 구매목록까지 모든 것을 체계적으로 관리할 수 있습니다
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-teal-100 to-cyan-100 rounded-xl flex items-center justify-center">
                  <span className="text-2xl">💡</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">유용한 팁</h3>
                <p className="text-gray-600">
                  건강한 식단과 스마트한 쇼핑을 위한 실용적인 팁을 제공합니다
                </p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl p-12 text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">건강한 생활을 시작해보세요!</h2>
            <p className="text-xl mb-8 opacity-90">
              지금 바로 레시피를 탐색하거나 구매목록을 만들어보세요
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/recipe" 
                className="bg-white text-emerald-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center gap-2"
              >
                <span className="text-xl">🥗</span>
                레시피 보기
              </Link>
              <Link 
                href="/shopping" 
                className="bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold hover:bg-emerald-800 transition-colors inline-flex items-center justify-center gap-2"
              >
                <span className="text-xl">🛒</span>
                쇼핑 리스트 만들기
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}