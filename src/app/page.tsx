'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { UploadButton } from '@/lib/uploadthing'

export default function Home() {
  const [uploadedVideoUrl, setUploadedVideoUrl] = useState<string | null>(null)

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
                    <span className="text-2xl md:text-3xl">🛒</span>
                  </div>
                  <h2 className="text-sm md:text-lg font-bold text-gray-900">쇼핑</h2>
                </div>
              </div>
            </Link>
          </div>

          {/* Video Upload Section */}
          <div className="mt-8 bg-white/30 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/20">
            <h2 className="text-lg md:text-xl font-bold text-gray-900 mb-4 text-center">영상 업로드</h2>
            
            <div className="flex flex-col items-center">
              <UploadButton
                endpoint="videoUploader"
                onClientUploadComplete={(res) => {
                  // Do something with the response
                  console.log("Files: ", res);
                  if (res && res[0]) {
                    setUploadedVideoUrl(res[0].url);
                    alert(`업로드 성공! 파일 URL: ${res[0].url}`);
                  }
                }}
                onUploadError={(error: Error) => {
                  // Do something with the error.
                  alert(`업로드 실패: ${error.message}`);
                }}
                appearance={{
                  button: "bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105",
                  allowedContent: "text-gray-600 text-sm mt-2"
                }}
                content={{
                  button({ ready }) {
                    if (ready) return <div>🎥 영상 선택하기</div>;
                    return <div>준비 중...</div>;
                  },
                  allowedContent({ ready, fileTypes, isUploading }) {
                    if (!ready) return "준비 중...";
                    if (isUploading) return "업로드 중...";
                    return `지원 형식: ${fileTypes.join(", ")}`;
                  },
                }}
              />
              
              {uploadedVideoUrl && (
                <div className="mt-4 p-4 bg-green-100 rounded-lg">
                  <p className="text-green-800 text-sm">
                    업로드 완료! 
                    <a href={uploadedVideoUrl} target="_blank" rel="noopener noreferrer" className="ml-2 underline">
                      영상 보기
                    </a>
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}