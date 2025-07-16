'use client'

import React, { useState } from 'react'
import Link from 'next/link'

export default function CertificatePage() {
  const [name, setName] = useState('')
  const [courseName, setCourseName] = useState('')
  const [issueDate, setIssueDate] = useState(new Date().toISOString().split('T')[0])
  const [showPreview, setShowPreview] = useState(false)

  const handlePreview = () => {
    if (name && courseName) {
      setShowPreview(true)
    }
  }

  const handleDownload = () => {
    // PDF 다운로드 기능은 나중에 구현
    alert('PDF 다운로드 기능은 추후 구현 예정입니다.')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-green-100">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <Link
              href="/"
              className="text-emerald-600 hover:text-emerald-700 flex items-center gap-2"
            >
              <span className="text-xl">←</span>
              <span className="font-medium">메인으로</span>
            </Link>
          </div>

          <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">수료증 만들기</h1>

          {/* Form Section */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 mb-8">
            <div className="space-y-6">
              {/* Name Input */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  수료자 이름
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                  placeholder="이름을 입력하세요"
                />
              </div>

              {/* Course Name Input */}
              <div>
                <label htmlFor="courseName" className="block text-sm font-medium text-gray-700 mb-2">
                  과정명
                </label>
                <input
                  type="text"
                  id="courseName"
                  value={courseName}
                  onChange={(e) => setCourseName(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                  placeholder="과정명을 입력하세요"
                />
              </div>

              {/* Issue Date Input */}
              <div>
                <label htmlFor="issueDate" className="block text-sm font-medium text-gray-700 mb-2">
                  발급일자
                </label>
                <input
                  type="date"
                  id="issueDate"
                  value={issueDate}
                  onChange={(e) => setIssueDate(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                />
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4 pt-4">
                <button
                  onClick={handlePreview}
                  disabled={!name || !courseName}
                  className="flex-1 bg-emerald-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-emerald-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
                >
                  미리보기
                </button>
                <button
                  onClick={handleDownload}
                  disabled={!name || !courseName}
                  className="flex-1 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
                >
                  PDF 다운로드
                </button>
              </div>
            </div>
          </div>

          {/* Preview Section */}
          {showPreview && (
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8">
              <h2 className="text-xl font-bold text-gray-900 mb-6">수료증 미리보기</h2>
              
              {/* Certificate Preview */}
              <div className="bg-white border-8 border-amber-500 rounded-lg p-12 text-center shadow-lg">
                <div className="mb-8">
                  <div className="text-5xl mb-4">🏆</div>
                  <h3 className="text-4xl font-bold text-gray-800 mb-2">수료증</h3>
                  <div className="w-32 h-1 bg-amber-500 mx-auto"></div>
                </div>

                <div className="space-y-6 mb-10">
                  <p className="text-xl text-gray-700">
                    아래 분은
                  </p>
                  <p className="text-3xl font-bold text-gray-900 underline">
                    {name}
                  </p>
                  <p className="text-xl text-gray-700">
                    <span className="font-semibold text-emerald-600">{courseName}</span> 과정을
                  </p>
                  <p className="text-xl text-gray-700">
                    성공적으로 수료하였기에
                  </p>
                  <p className="text-xl text-gray-700">
                    이 증서를 수여합니다.
                  </p>
                </div>

                <div className="pt-8 border-t border-gray-300">
                  <p className="text-lg text-gray-600">
                    {new Date(issueDate).toLocaleDateString('ko-KR', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}