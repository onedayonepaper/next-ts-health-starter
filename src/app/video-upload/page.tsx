'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { UploadButton } from '@/utils/uploadthing'

export default function VideoUploadPage() {
  const [uploadedVideoUrl, setUploadedVideoUrl] = useState<string | null>(null)

  return (
    <main className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-green-100">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              영상 업로드
            </h1>
            <p className="text-gray-600 text-lg">
              건강한 라이프스타일을 위한 영상을 업로드해보세요
            </p>
          </div>

          {/* Upload Section */}
          <div className="bg-white/30 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-white/20">
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
                  button: "bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105",
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
                <div className="mt-6 p-4 bg-green-100 rounded-lg max-w-md">
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

          {/* Back to Home */}
          <div className="mt-8 text-center">
            <Link href="/" className="inline-flex items-center text-gray-600 hover:text-gray-800 transition-colors">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              메인 페이지로 돌아가기
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}