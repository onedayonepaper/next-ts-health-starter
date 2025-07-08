export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          {/* Hero Section */}
          <div className="mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              건강한{' '}
              <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                식단 레시피
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              맛있고 건강한 레시피로 당신의 라이프스타일을 변화시켜보세요. 
              영양 가득한 요리들로 건강한 하루를 시작하세요.
            </p>
          </div>

          {/* Recipe Cards */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <span className="text-2xl">🥑</span>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">아보카도 토스트</h3>
              <p className="text-gray-600 mb-4">
                신선한 아보카도와 통곡물 빵으로 만든 영양 만점 토스트입니다.
              </p>
              <div className="text-left space-y-2">
                <h4 className="font-semibold text-green-700">재료:</h4>
                <ul className="text-sm text-gray-600 list-disc list-inside space-y-1">
                  <li>통곡물 빵 2조각</li>
                  <li>아보카도 1개</li>
                  <li>레몬즙 1큰술</li>
                  <li>소금, 후추 약간</li>
                </ul>
              </div>
              <div className="mt-4 text-sm text-green-600 font-medium">
                ⏰ 조리시간: 5분 | 🔥 칼로리: 320kcal
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-emerald-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <span className="text-2xl">🥗</span>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">퀴노아 샐러드</h3>
              <p className="text-gray-600 mb-4">
                단백질이 풍부한 퀴노아와 신선한 채소로 만든 건강 샐러드입니다.
              </p>
              <div className="text-left space-y-2">
                <h4 className="font-semibold text-green-700">재료:</h4>
                <ul className="text-sm text-gray-600 list-disc list-inside space-y-1">
                  <li>퀴노아 1컵</li>
                  <li>방울토마토 10개</li>
                  <li>오이 1/2개</li>
                  <li>올리브오일 2큰술</li>
                </ul>
              </div>
              <div className="mt-4 text-sm text-green-600 font-medium">
                ⏰ 조리시간: 15분 | 🔥 칼로리: 280kcal
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}