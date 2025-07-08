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
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <span className="text-2xl">🥑</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">아보카도 토스트</h3>
              <p className="text-gray-600 mb-4 text-sm">
                신선한 아보카도와 통곡물 빵으로 만든 영양 만점 토스트입니다.
              </p>
              <div className="text-left space-y-2">
                <h4 className="font-semibold text-green-700 text-sm">재료:</h4>
                <ul className="text-xs text-gray-600 list-disc list-inside space-y-1">
                  <li>통곡물 빵 2조각</li>
                  <li>아보카도 1개</li>
                  <li>레몬즙 1큰술</li>
                  <li>소금, 후추 약간</li>
                </ul>
              </div>
              <div className="mt-4 text-xs text-green-600 font-medium">
                ⏰ 조리시간: 5분 | 🔥 칼로리: 320kcal
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-emerald-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <span className="text-2xl">🥗</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">퀴노아 샐러드</h3>
              <p className="text-gray-600 mb-4 text-sm">
                단백질이 풍부한 퀴노아와 신선한 채소로 만든 건강 샐러드입니다.
              </p>
              <div className="text-left space-y-2">
                <h4 className="font-semibold text-green-700 text-sm">재료:</h4>
                <ul className="text-xs text-gray-600 list-disc list-inside space-y-1">
                  <li>퀴노아 1컵</li>
                  <li>방울토마토 10개</li>
                  <li>오이 1/2개</li>
                  <li>올리브오일 2큰술</li>
                </ul>
              </div>
              <div className="mt-4 text-xs text-green-600 font-medium">
                ⏰ 조리시간: 15분 | 🔥 칼로리: 280kcal
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <span className="text-2xl">🍣</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">연어 스테이크 덮밥</h3>
              <p className="text-gray-600 mb-4 text-sm">
                팬에 구운 연어 스테이크를 간장 버터 소스로 코팅해 밥 위에 얹은 든든한 한 끼.
              </p>
              <div className="text-left space-y-2">
                <h4 className="font-semibold text-green-700 text-sm">재료:</h4>
                <ul className="text-xs text-gray-600 list-disc list-inside space-y-1">
                  <li>연어(생·냉동) 150g</li>
                  <li>현미밥 1공기(200g)</li>
                  <li>버터 5g</li>
                  <li>간장 1큰술 + 맛술 1작은술</li>
                  <li>다진 마늘 ½작은술</li>
                  <li>후추 약간, 레몬즙 약간</li>
                </ul>
              </div>
              <div className="mt-4 text-xs text-green-600 font-medium">
                ⏰ 조리시간: 10분 | 🔥 칼로리: 약 500kcal
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <span className="text-2xl">🐟</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">간장버터 연어덮밥</h3>
              <p className="text-gray-600 mb-4 text-sm">
                버터·간장·꿀로 만든 짭짤·달콤 소스로 풍미를 살린 저녁용 연어덮밥.
              </p>
              <div className="text-left space-y-2">
                <h4 className="font-semibold text-green-700 text-sm">재료:</h4>
                <ul className="text-xs text-gray-600 list-disc list-inside space-y-1">
                  <li>연어 150g</li>
                  <li>밥 1공기</li>
                  <li>버터 10g</li>
                  <li>간장 2큰술</li>
                  <li>꿀(또는 올리고당) 1큰술</li>
                  <li>레몬즙 ½큰술, 통깨 약간</li>
                </ul>
              </div>
              <div className="mt-4 text-xs text-green-600 font-medium">
                ⏰ 조리시간: 12분 | 🔥 칼로리: 약 550kcal
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <span className="text-2xl">🥣</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">오버나이트 오트밀</h3>
              <p className="text-gray-600 mb-4 text-sm">
                저당·고식이섬유 간편 점심. 밤새 불려 두기만 하면 끝!
              </p>
              <div className="text-left space-y-2">
                <h4 className="font-semibold text-green-700 text-sm">재료:</h4>
                <ul className="text-xs text-gray-600 list-disc list-inside space-y-1">
                  <li>귀리 50g(½컵)</li>
                  <li>아몬드우유 150mL</li>
                  <li>치아시드 1큰술</li>
                  <li>메이플시럽 1작은술(선택)</li>
                  <li>토핑: 냉동베리·바나나·견과류 등</li>
                </ul>
              </div>
              <div className="mt-4 text-xs text-green-600 font-medium">
                ⏰ 준비 5분 + 숙성 6-8시간 | 🔥 칼로리: 약 380kcal
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-pink-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <span className="text-2xl">🥛</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">그릭요거트 볼</h3>
              <p className="text-gray-600 mb-4 text-sm">
                단백질 보충 + 가벼운 마무리를 위한 저녁 기본 메뉴.
              </p>
              <div className="text-left space-y-2">
                <h4 className="font-semibold text-green-700 text-sm">재료:</h4>
                <ul className="text-xs text-gray-600 list-disc list-inside space-y-1">
                  <li>무가당 그릭요거트 150g</li>
                  <li>블루베리 ½컵</li>
                  <li>아몬드 10알</li>
                  <li>꿀 1작은술(선택)</li>
                </ul>
              </div>
              <div className="mt-4 text-xs text-green-600 font-medium">
                ⏰ 조리시간: 3분 | 🔥 칼로리: 약 170kcal
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-yellow-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <span className="text-2xl">🍗</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">닭다리살 대파 간장 덮밥</h3>
              <p className="text-gray-600 mb-4 text-sm">
                촉촉한 닭다리살을 파향 가득한 간장 소스로 볶아 낸 고단백 밥 한 그릇.
              </p>
              <div className="text-left space-y-2">
                <h4 className="font-semibold text-green-700 text-sm">재료:</h4>
                <ul className="text-xs text-gray-600 list-disc list-inside space-y-1">
                  <li>닭다리살(껍질 제거) 150g</li>
                  <li>밥 1공기</li>
                  <li>대파 ½대(송송)</li>
                  <li>간장 1½큰술</li>
                  <li>맛술 1큰술</li>
                  <li>참기름 ½큰술, 통깨·후추 약간</li>
                </ul>
              </div>
              <div className="mt-4 text-xs text-green-600 font-medium">
                ⏰ 조리시간: 15분 | 🔥 칼로리: 약 600kcal
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-indigo-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <span className="text-2xl">🥯</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">훈제 연어 베이글 오픈 샌드</h3>
              <p className="text-gray-600 mb-4 text-sm">
                주말 브런치용으로 인기 많은 담백·고단백 오픈 샌드위치.
              </p>
              <div className="text-left space-y-2">
                <h4 className="font-semibold text-green-700 text-sm">재료:</h4>
                <ul className="text-xs text-gray-600 list-disc list-inside space-y-1">
                  <li>통밀 베이글 ½개</li>
                  <li>훈제 연어 60g</li>
                  <li>라이트 크림치즈 1큰술</li>
                  <li>슬라이스 적양파·케이퍼 약간</li>
                  <li>레몬즙 ½작은술, 딜(선택)</li>
                </ul>
              </div>
              <div className="mt-4 text-xs text-green-600 font-medium">
                ⏰ 조리시간: 7분 | 🔥 칼로리: 약 330kcal
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-teal-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <span className="text-2xl">🥦</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">닭가슴살·브로콜리 에어프라이어 볼</h3>
              <p className="text-gray-600 mb-4 text-sm">
                냉동 재료만으로 15분 완성되는 다이어트 기본 식단.
              </p>
              <div className="text-left space-y-2">
                <h4 className="font-semibold text-green-700 text-sm">재료:</h4>
                <ul className="text-xs text-gray-600 list-disc list-inside space-y-1">
                  <li>노브랜드 냉동 닭가슴살 120g</li>
                  <li>냉동 브로콜리·콜리플라워 믹스 150g</li>
                  <li>올리브오일 1작은술</li>
                  <li>소금·후추 약간</li>
                  <li>파프리카가루 약간</li>
                </ul>
              </div>
              <div className="mt-4 text-xs text-green-600 font-medium">
                ⏰ 조리시간: 15분 (해동 포함) | 🔥 칼로리: 약 350kcal
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-red-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <span className="text-2xl">💪</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">단백질 파워 쉐이크</h3>
              <p className="text-gray-600 mb-4 text-sm">
                운동 후 빠른 회복을 위한 한 컵 식사.
              </p>
              <div className="text-left space-y-2">
                <h4 className="font-semibold text-green-700 text-sm">재료:</h4>
                <ul className="text-xs text-gray-600 list-disc list-inside space-y-1">
                  <li>무가당 아몬드우유 200mL</li>
                  <li>바나나 1개</li>
                  <li>시금치 한 줌</li>
                  <li>단백질 파우더 1스쿱</li>
                  <li>땅콩버터 1작은술(선택)</li>
                </ul>
              </div>
              <div className="mt-4 text-xs text-green-600 font-medium">
                ⏰ 조리시간: 2분 | 🔥 칼로리: 약 280kcal
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}