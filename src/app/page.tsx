'use client'

import React from 'react'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-green-100">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              건강한{' '}
              <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                라이프스타일
              </span>
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto rounded-full"></div>
          </div>

          {/* Main Navigation Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Recipe Service Card */}
            <Link href="/recipe" className="group">
              <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 group-hover:scale-105 border border-gray-100">
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-green-100 to-emerald-100 rounded-2xl flex items-center justify-center group-hover:from-green-200 group-hover:to-emerald-200 transition-colors">
                    <span className="text-4xl">🥗</span>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">레시피</h2>
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
                  <h2 className="text-2xl font-bold text-gray-900">쇼핑</h2>
                </div>
              </div>
            </Link>

            {/* Schedule Management Card */}
            <Link href="/schedule" className="group">
              <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 group-hover:scale-105 border border-gray-100">
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl flex items-center justify-center group-hover:from-purple-200 group-hover:to-pink-200 transition-colors">
                    <span className="text-4xl">📅</span>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">일정</h2>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}