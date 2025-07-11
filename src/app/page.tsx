'use client'

import React from 'react'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-green-100">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          {/* Main Navigation Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {/* Schedule Management Card - Now First */}
            <Link href="/schedule" className="group">
              <div className="bg-white/30 backdrop-blur-sm rounded-xl p-4 md:p-6 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105 border border-white/20">
                <div className="text-center">
                  <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-3 md:mb-4 bg-gradient-to-br from-purple-100 to-pink-100 rounded-xl flex items-center justify-center group-hover:from-purple-200 group-hover:to-pink-200 transition-colors">
                    <span className="text-2xl md:text-3xl">📅</span>
                  </div>
                  <h2 className="text-sm md:text-lg font-bold text-gray-900">건강한 일정</h2>
                </div>
              </div>
            </Link>

            {/* Diet Management Card */}
            <Link href="/diet" className="group">
              <div className="bg-white/30 backdrop-blur-sm rounded-xl p-4 md:p-6 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105 border border-white/20">
                <div className="text-center">
                  <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-3 md:mb-4 bg-gradient-to-br from-orange-100 to-yellow-100 rounded-xl flex items-center justify-center group-hover:from-orange-200 group-hover:to-yellow-200 transition-colors">
                    <span className="text-2xl md:text-3xl">🍱</span>
                  </div>
                  <h2 className="text-sm md:text-lg font-bold text-gray-900">건강한 식단</h2>
                </div>
              </div>
            </Link>

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
                    <span className="text-2xl md:text-3xl">�</span>
                  </div>
                  <h2 className="text-sm md:text-lg font-bold text-gray-900">쇼핑</h2>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}