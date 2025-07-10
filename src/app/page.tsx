'use client'

import React from 'react'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-green-100">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              서비스
            </h1>
            <div className="w-16 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto rounded-full"></div>
          </div>

          {/* Main Navigation Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-3 gap-4 md:gap-6">
            {/* Recipe Service Card */}
            <Link href="/recipe" className="group">
              <div className="bg-white/30 backdrop-blur-sm rounded-xl p-4 md:p-6 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105 border border-white/20">
                <div className="text-center">
                  <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-3 md:mb-4 bg-gradient-to-br from-green-100 to-emerald-100 rounded-xl flex items-center justify-center group-hover:from-green-200 group-hover:to-emerald-200 transition-colors">
                    <span className="text-2xl md:text-3xl">🥗</span>
                  </div>
                  <h2 className="text-sm md:text-lg font-bold text-gray-900">레시피</h2>
                </div>
              </div>
            </Link>

            {/* Shopping List Card */}
            <Link href="/shopping" className="group">
              <div className="bg-white/30 backdrop-blur-sm rounded-xl p-4 md:p-6 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105 border border-white/20">
                <div className="text-center">
                  <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-3 md:mb-4 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-xl flex items-center justify-center group-hover:from-blue-200 group-hover:to-indigo-200 transition-colors">
                    <span className="text-2xl md:text-3xl">🛒</span>
                  </div>
                  <h2 className="text-sm md:text-lg font-bold text-gray-900">쇼핑</h2>
                </div>
              </div>
            </Link>

            {/* Schedule Management Card */}
            <Link href="/schedule" className="group">
              <div className="bg-white/30 backdrop-blur-sm rounded-xl p-4 md:p-6 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105 border border-white/20">
                <div className="text-center">
                  <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-3 md:mb-4 bg-gradient-to-br from-purple-100 to-pink-100 rounded-xl flex items-center justify-center group-hover:from-purple-200 group-hover:to-pink-200 transition-colors">
                    <span className="text-2xl md:text-3xl">📅</span>
                  </div>
                  <h2 className="text-sm md:text-lg font-bold text-gray-900">일정</h2>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}