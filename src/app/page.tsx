export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto text-center">
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
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {/* 아보카도 토스트 */}
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <span className="text-2xl">🥑</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">아보카도 토스트</h3>
              <div className="flex items-center justify-between mb-3">
                <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">초급</span>
                <span className="text-xs text-green-600 font-medium">⭐⭐⭐⭐⭐ 건강지수</span>
              </div>
              <p className="text-gray-600 mb-4 text-sm">
                신선한 아보카도와 통곡물 빵으로 만든 영양 만점 토스트입니다.
              </p>
              
              <div className="text-left space-y-3 mb-4">
                <h4 className="font-semibold text-green-700 text-sm">재료:</h4>
                <ul className="text-xs text-gray-600 list-disc list-inside space-y-1">
                  <li>통곡물 빵 2조각</li>
                  <li>아보카도 1개 (잘 익은 것)</li>
                  <li>레몬즙 1큰술</li>
                  <li>소금, 후추 약간</li>
                  <li>올리브오일 1작은술 (선택)</li>
                </ul>
              </div>

              <div className="text-left space-y-3 mb-4">
                <h4 className="font-semibold text-blue-700 text-sm">조리 방법:</h4>
                <ol className="text-xs text-gray-600 list-decimal list-inside space-y-1">
                  <li>빵을 토스터기에 굽거나 팬에 구워 바삭하게 만들기</li>
                  <li>아보카도를 반으로 갈라 씨를 제거하고 숟가락으로 과육 떠내기</li>
                  <li>아보카도를 포크로 으깨며 레몬즙, 소금, 후추 넣고 섞기</li>
                  <li>구운 빵 위에 아보카도 페이스트 발라 완성</li>
                </ol>
              </div>

              <div className="text-left space-y-2 mb-4">
                <h4 className="font-semibold text-purple-700 text-sm">💡 팁:</h4>
                <p className="text-xs text-gray-600">아보카도가 너무 딱딱하면 바나나와 함께 종이봉지에 넣어 하루 정도 두면 빨리 익습니다.</p>
              </div>

              <div className="text-xs text-green-600 font-medium border-t pt-3">
                ⏰ 조리시간: 5분 | 🔥 칼로리: 320kcal | 🥗 식이섬유: 12g
              </div>
            </div>

            {/* 퀴노아 샐러드 */}
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-emerald-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <span className="text-2xl">🥗</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">퀴노아 샐러드</h3>
              <div className="flex items-center justify-between mb-3">
                <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full">중급</span>
                <span className="text-xs text-green-600 font-medium">⭐⭐⭐⭐⭐ 건강지수</span>
              </div>
              <p className="text-gray-600 mb-4 text-sm">
                단백질이 풍부한 퀴노아와 신선한 채소로 만든 건강 샐러드입니다.
              </p>
              
              <div className="text-left space-y-3 mb-4">
                <h4 className="font-semibold text-green-700 text-sm">재료:</h4>
                <ul className="text-xs text-gray-600 list-disc list-inside space-y-1">
                  <li>퀴노아 1컵</li>
                  <li>방울토마토 10개 (반으로 자른 것)</li>
                  <li>오이 1/2개 (깍둑썰기)</li>
                  <li>적양파 1/4개 (얇게 썬 것)</li>
                  <li>올리브오일 2큰술</li>
                  <li>레몬즙 1큰술</li>
                  <li>파슬리 2큰술 (다진 것)</li>
                </ul>
              </div>

              <div className="text-left space-y-3 mb-4">
                <h4 className="font-semibold text-blue-700 text-sm">조리 방법:</h4>
                <ol className="text-xs text-gray-600 list-decimal list-inside space-y-1">
                  <li>퀴노아를 찬물에 헹군 후 물 2컵과 함께 끓이기</li>
                  <li>끓으면 불을 줄이고 15분간 뚜껑 덮고 끓이기</li>
                  <li>불을 끄고 5분간 그대로 둔 후 포크로 풀어주기</li>
                  <li>식힌 퀴노아에 모든 채소와 드레싱 재료 넣고 섞기</li>
                  <li>30분간 냉장고에서 재워 맛이 어우러지게 하기</li>
                </ol>
              </div>

              <div className="text-left space-y-2 mb-4">
                <h4 className="font-semibold text-purple-700 text-sm">💡 팁:</h4>
                <p className="text-xs text-gray-600">퀴노아는 미리 대량으로 삶아서 냉장보관하면 일주일간 다양한 요리에 활용할 수 있습니다.</p>
              </div>

              <div className="text-xs text-green-600 font-medium border-t pt-3">
                ⏰ 조리시간: 25분 | 🔥 칼로리: 280kcal | 💪 단백질: 8g
              </div>
            </div>

            {/* 연어 스테이크 덮밥 */}
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <span className="text-2xl">🍣</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">연어 스테이크 덮밥</h3>
              <div className="flex items-center justify-between mb-3">
                <span className="bg-orange-100 text-orange-800 text-xs px-2 py-1 rounded-full">고급</span>
                <span className="text-xs text-green-600 font-medium">⭐⭐⭐⭐ 건강지수</span>
              </div>
              <p className="text-gray-600 mb-4 text-sm">
                팬에 구운 연어 스테이크를 간장 버터 소스로 코팅해 밥 위에 얹은 든든한 한 끼.
              </p>
              
              <div className="text-left space-y-3 mb-4">
                <h4 className="font-semibold text-green-700 text-sm">재료:</h4>
                <ul className="text-xs text-gray-600 list-disc list-inside space-y-1">
                  <li>연어(생·냉동) 150g</li>
                  <li>현미밥 1공기(200g)</li>
                  <li>버터 5g</li>
                  <li>간장 1큰술 + 맛술 1작은술</li>
                  <li>다진 마늘 ½작은술</li>
                  <li>후추 약간, 레몬즙 약간</li>
                  <li>대파 (송송 썬 것) 1큰술</li>
                </ul>
              </div>

              <div className="text-left space-y-3 mb-4">
                <h4 className="font-semibold text-blue-700 text-sm">조리 방법:</h4>
                <ol className="text-xs text-gray-600 list-decimal list-inside space-y-1">
                  <li>연어에 소금, 후추로 밑간하고 10분간 재우기</li>
                  <li>팬에 기름 두르고 연어를 앞뒤로 3-4분씩 굽기</li>
                  <li>연어를 그릇에 옮기고 같은 팬에 버터, 마늘 볶기</li>
                  <li>간장, 맛술을 넣고 소스 만들기</li>
                  <li>밥 위에 연어 올리고 소스 뿌린 후 대파 올려 완성</li>
                </ol>
              </div>

              <div className="text-left space-y-2 mb-4">
                <h4 className="font-semibold text-purple-700 text-sm">💡 팁:</h4>
                <p className="text-xs text-gray-600">연어는 중심부가 약간 생 느낌이 날 정도로 구우면 촉촉하고 맛있습니다.</p>
              </div>

              <div className="text-xs text-green-600 font-medium border-t pt-3">
                ⏰ 조리시간: 15분 | 🔥 칼로리: 약 500kcal | 💪 단백질: 35g
              </div>
            </div>

            {/* 간장버터 연어덮밥 */}
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <span className="text-2xl">🐟</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">간장버터 연어덮밥</h3>
              <div className="flex items-center justify-between mb-3">
                <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">중급</span>
                <span className="text-xs text-green-600 font-medium">⭐⭐⭐⭐ 건강지수</span>
              </div>
              <p className="text-gray-600 mb-4 text-sm">
                버터·간장·꿀로 만든 짭짤·달콤 소스로 풍미를 살린 저녁용 연어덮밥.
              </p>
              
              <div className="text-left space-y-3 mb-4">
                <h4 className="font-semibold text-green-700 text-sm">재료:</h4>
                <ul className="text-xs text-gray-600 list-disc list-inside space-y-1">
                  <li>연어 150g</li>
                  <li>밥 1공기</li>
                  <li>버터 10g</li>
                  <li>간장 2큰술</li>
                  <li>꿀(또는 올리고당) 1큰술</li>
                  <li>레몬즙 ½큰술, 통깨 약간</li>
                  <li>브로콜리 50g (데친 것)</li>
                </ul>
              </div>

              <div className="text-left space-y-3 mb-4">
                <h4 className="font-semibold text-blue-700 text-sm">조리 방법:</h4>
                <ol className="text-xs text-gray-600 list-decimal list-inside space-y-1">
                  <li>연어를 한입 크기로 자르고 소금, 후추로 간하기</li>
                  <li>팬에 연어를 굽고 익으면 한쪽으로 밀어두기</li>
                  <li>빈 공간에 버터를 녹이고 간장, 꿀 넣기</li>
                  <li>소스가 끓으면 연어와 섞어 코팅하기</li>
                  <li>밥 위에 연어와 브로콜리 올리고 통깨 뿌려 완성</li>
                </ol>
              </div>

              <div className="text-left space-y-2 mb-4">
                <h4 className="font-semibold text-purple-700 text-sm">💡 팁:</h4>
                <p className="text-xs text-gray-600">소스가 너무 짜다면 맛술이나 물을 조금 넣어 농도를 조절하세요.</p>
              </div>

              <div className="text-xs text-green-600 font-medium border-t pt-3">
                ⏰ 조리시간: 12분 | 🔥 칼로리: 약 550kcal | 💪 단백질: 33g
              </div>
            </div>

            {/* 오버나이트 오트밀 */}
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <span className="text-2xl">🥣</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">오버나이트 오트밀</h3>
              <div className="flex items-center justify-between mb-3">
                <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">초급</span>
                <span className="text-xs text-green-600 font-medium">⭐⭐⭐⭐⭐ 건강지수</span>
              </div>
              <p className="text-gray-600 mb-4 text-sm">
                저당·고식이섬유 간편 아침. 밤새 불려 두기만 하면 끝!
              </p>
              
              <div className="text-left space-y-3 mb-4">
                <h4 className="font-semibold text-green-700 text-sm">재료:</h4>
                <ul className="text-xs text-gray-600 list-disc list-inside space-y-1">
                  <li>귀리 50g(½컵)</li>
                  <li>아몬드우유 150mL</li>
                  <li>치아시드 1큰술</li>
                  <li>메이플시럽 1작은술(선택)</li>
                  <li>바닐라 에센스 2-3방울</li>
                  <li>토핑: 냉동베리·바나나·견과류 등</li>
                </ul>
              </div>

              <div className="text-left space-y-3 mb-4">
                <h4 className="font-semibold text-blue-700 text-sm">조리 방법:</h4>
                <ol className="text-xs text-gray-600 list-decimal list-inside space-y-1">
                  <li>유리병이나 밀폐용기에 귀리, 치아시드 넣기</li>
                  <li>아몬드우유, 메이플시럽, 바닐라 에센스 추가</li>
                  <li>잘 섞은 후 뚜껑 덮어 냉장고에서 6-8시간 보관</li>
                  <li>아침에 꺼내서 토핑 올리고 바로 드시기</li>
                </ol>
              </div>

              <div className="text-left space-y-2 mb-4">
                <h4 className="font-semibold text-purple-700 text-sm">💡 팁:</h4>
                <p className="text-xs text-gray-600">한 번에 여러 개를 만들어 두면 일주일간 간편한 아침식사가 준비됩니다.</p>
              </div>

              <div className="text-xs text-green-600 font-medium border-t pt-3">
                ⏰ 준비 5분 + 숙성 6-8시간 | 🔥 칼로리: 약 380kcal | 🥗 식이섬유: 15g
              </div>
            </div>

            {/* 그릭요거트 볼 */}
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-pink-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <span className="text-2xl">🥛</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">그릭요거트 볼</h3>
              <div className="flex items-center justify-between mb-3">
                <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">초급</span>
                <span className="text-xs text-green-600 font-medium">⭐⭐⭐⭐⭐ 건강지수</span>
              </div>
              <p className="text-gray-600 mb-4 text-sm">
                단백질 보충 + 가벼운 마무리를 위한 저녁 기본 메뉴.
              </p>
              
              <div className="text-left space-y-3 mb-4">
                <h4 className="font-semibold text-green-700 text-sm">재료:</h4>
                <ul className="text-xs text-gray-600 list-disc list-inside space-y-1">
                  <li>무가당 그릭요거트 150g</li>
                  <li>블루베리 ½컵</li>
                  <li>아몬드 10알 (잘게 썬 것)</li>
                  <li>꿀 1작은술(선택)</li>
                  <li>그래놀라 2큰술</li>
                  <li>민트잎 2-3장 (장식용)</li>
                </ul>
              </div>

              <div className="text-left space-y-3 mb-4">
                <h4 className="font-semibold text-blue-700 text-sm">조리 방법:</h4>
                <ol className="text-xs text-gray-600 list-decimal list-inside space-y-1">
                  <li>그릭요거트를 그릇에 담기</li>
                  <li>블루베리를 요거트 위에 고르게 올리기</li>
                  <li>아몬드와 그래놀라 뿌리기</li>
                  <li>꿀을 가볍게 뿌리고 민트잎으로 장식</li>
                </ol>
              </div>

              <div className="text-left space-y-2 mb-4">
                <h4 className="font-semibold text-purple-700 text-sm">💡 팁:</h4>
                <p className="text-xs text-gray-600">계절 과일로 토핑을 바꿔가며 먹으면 질리지 않고 즐길 수 있습니다.</p>
              </div>

              <div className="text-xs text-green-600 font-medium border-t pt-3">
                ⏰ 조리시간: 3분 | 🔥 칼로리: 약 220kcal | 💪 단백질: 18g
              </div>
            </div>

            {/* 닭다리살 대파 간장 덮밥 */}
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-yellow-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <span className="text-2xl">🍗</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">닭다리살 대파 간장 덮밥</h3>
              <div className="flex items-center justify-between mb-3">
                <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full">중급</span>
                <span className="text-xs text-green-600 font-medium">⭐⭐⭐⭐ 건강지수</span>
              </div>
              <p className="text-gray-600 mb-4 text-sm">
                촉촉한 닭다리살을 파향 가득한 간장 소스로 볶아 낸 고단백 밥 한 그릇.
              </p>
              
              <div className="text-left space-y-3 mb-4">
                <h4 className="font-semibold text-green-700 text-sm">재료:</h4>
                <ul className="text-xs text-gray-600 list-disc list-inside space-y-1">
                  <li>닭다리살(껍질 제거) 150g</li>
                  <li>밥 1공기</li>
                  <li>대파 ½대(송송)</li>
                  <li>간장 1½큰술</li>
                  <li>맛술 1큰술</li>
                  <li>참기름 ½큰술, 통깨·후추 약간</li>
                  <li>양파 ¼개 (채썬 것)</li>
                </ul>
              </div>

              <div className="text-left space-y-3 mb-4">
                <h4 className="font-semibold text-blue-700 text-sm">조리 방법:</h4>
                <ol className="text-xs text-gray-600 list-decimal list-inside space-y-1">
                  <li>닭다리살을 한입 크기로 자르고 소금, 후추로 밑간</li>
                  <li>팬에 기름 두르고 닭다리살 볶아 익히기</li>
                  <li>양파 넣고 함께 볶다가 간장, 맛술 넣기</li>
                  <li>소스가 졸아들면 대파 넣고 1분간 더 볶기</li>
                  <li>밥 위에 올리고 참기름, 통깨 뿌려 완성</li>
                </ol>
              </div>

              <div className="text-left space-y-2 mb-4">
                <h4 className="font-semibold text-purple-700 text-sm">💡 팁:</h4>
                <p className="text-xs text-gray-600">닭다리살은 완전히 익힌 후 대파를 넣어야 파의 향이 살아납니다.</p>
              </div>

              <div className="text-xs text-green-600 font-medium border-t pt-3">
                ⏰ 조리시간: 15분 | 🔥 칼로리: 약 600kcal | 💪 단백질: 32g
              </div>
            </div>

            {/* 훈제 연어 베이글 오픈 샌드 */}
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-indigo-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <span className="text-2xl">🥯</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">훈제 연어 베이글 오픈 샌드</h3>
              <div className="flex items-center justify-between mb-3">
                <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">중급</span>
                <span className="text-xs text-green-600 font-medium">⭐⭐⭐⭐ 건강지수</span>
              </div>
              <p className="text-gray-600 mb-4 text-sm">
                주말 브런치용으로 인기 많은 담백·고단백 오픈 샌드위치.
              </p>
              
              <div className="text-left space-y-3 mb-4">
                <h4 className="font-semibold text-green-700 text-sm">재료:</h4>
                <ul className="text-xs text-gray-600 list-disc list-inside space-y-1">
                  <li>통밀 베이글 ½개</li>
                  <li>훈제 연어 60g</li>
                  <li>라이트 크림치즈 1큰술</li>
                  <li>슬라이스 적양파·케이퍼 약간</li>
                  <li>레몬즙 ½작은술, 딜(선택)</li>
                  <li>루콜라 한 줌</li>
                </ul>
              </div>

              <div className="text-left space-y-3 mb-4">
                <h4 className="font-semibold text-blue-700 text-sm">조리 방법:</h4>
                <ol className="text-xs text-gray-600 list-decimal list-inside space-y-1">
                  <li>베이글을 반으로 자르고 토스터에 굽기</li>
                  <li>구운 베이글에 크림치즈 발라주기</li>
                  <li>루콜라, 훈제 연어 순서로 올리기</li>
                  <li>적양파, 케이퍼 올리고 레몬즙 뿌리기</li>
                  <li>딜로 마지막 장식하여 완성</li>
                </ol>
              </div>

              <div className="text-left space-y-2 mb-4">
                <h4 className="font-semibold text-purple-700 text-sm">💡 팁:</h4>
                <p className="text-xs text-gray-600">베이글을 너무 많이 굽지 말고 겉만 바삭하게 구우면 식감이 좋습니다.</p>
              </div>

              <div className="text-xs text-green-600 font-medium border-t pt-3">
                ⏰ 조리시간: 7분 | 🔥 칼로리: 약 350kcal | 💪 단백질: 20g
              </div>
            </div>

            {/* 닭가슴살·브로콜리 에어프라이어 볼 */}
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-teal-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <span className="text-2xl">🥦</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">닭가슴살·브로콜리 에어프라이어 볼</h3>
              <div className="flex items-center justify-between mb-3">
                <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">초급</span>
                <span className="text-xs text-green-600 font-medium">⭐⭐⭐⭐⭐ 건강지수</span>
              </div>
              <p className="text-gray-600 mb-4 text-sm">
                냉동 재료만으로 15분 완성되는 다이어트 기본 식단.
              </p>
              
              <div className="text-left space-y-3 mb-4">
                <h4 className="font-semibold text-green-700 text-sm">재료:</h4>
                <ul className="text-xs text-gray-600 list-disc list-inside space-y-1">
                  <li>냉동 닭가슴살 120g</li>
                  <li>냉동 브로콜리·콜리플라워 믹스 150g</li>
                  <li>올리브오일 1작은술</li>
                  <li>소금·후추 약간</li>
                  <li>파프리카가루 약간</li>
                  <li>레몬 1/4개 (즙용)</li>
                </ul>
              </div>

              <div className="text-left space-y-3 mb-4">
                <h4 className="font-semibold text-blue-700 text-sm">조리 방법:</h4>
                <ol className="text-xs text-gray-600 list-decimal list-inside space-y-1">
                  <li>에어프라이어를 180°C로 예열하기</li>
                  <li>냉동 재료에 올리브오일, 소금, 후추 버무리기</li>
                  <li>에어프라이어에 넣고 12분간 조리</li>
                  <li>중간에 한 번 뒤집어 주기 (6분 후)</li>
                  <li>완료 후 파프리카가루, 레몬즙 뿌려 완성</li>
                </ol>
              </div>

              <div className="text-left space-y-2 mb-4">
                <h4 className="font-semibold text-purple-700 text-sm">💡 팁:</h4>
                <p className="text-xs text-gray-600">해동 없이 바로 조리 가능하며, 여러 개를 미리 만들어 보관해도 좋습니다.</p>
              </div>

              <div className="text-xs text-green-600 font-medium border-t pt-3">
                ⏰ 조리시간: 15분 | 🔥 칼로리: 약 280kcal | 💪 단백질: 35g
              </div>
            </div>

            {/* 단백질 파워 쉐이크 */}
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-red-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <span className="text-2xl">💪</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">단백질 파워 쉐이크</h3>
              <div className="flex items-center justify-between mb-3">
                <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">초급</span>
                <span className="text-xs text-green-600 font-medium">⭐⭐⭐⭐⭐ 건강지수</span>
              </div>
              <p className="text-gray-600 mb-4 text-sm">
                운동 후 빠른 회복을 위한 한 컵 식사.
              </p>
              
              <div className="text-left space-y-3 mb-4">
                <h4 className="font-semibold text-green-700 text-sm">재료:</h4>
                <ul className="text-xs text-gray-600 list-disc list-inside space-y-1">
                  <li>무가당 아몬드우유 200mL</li>
                  <li>바나나 1개 (냉동 가능)</li>
                  <li>시금치 한 줌 (30g)</li>
                  <li>단백질 파우더 1스쿱 (30g)</li>
                  <li>땅콩버터 1작은술(선택)</li>
                  <li>아마씨 1작은술</li>
                </ul>
              </div>

              <div className="text-left space-y-3 mb-4">
                <h4 className="font-semibold text-blue-700 text-sm">조리 방법:</h4>
                <ol className="text-xs text-gray-600 list-decimal list-inside space-y-1">
                  <li>믹서기에 모든 재료 넣기</li>
                  <li>1-2분간 고속으로 갈아 부드럽게 만들기</li>
                  <li>농도가 너무 진하면 물이나 우유 추가</li>
                  <li>유리컵에 담아 바로 마시기</li>
                </ol>
              </div>

              <div className="text-left space-y-2 mb-4">
                <h4 className="font-semibold text-purple-700 text-sm">💡 팁:</h4>
                <p className="text-xs text-gray-600">운동 후 30분 이내에 마시면 근육 회복에 가장 효과적입니다.</p>
              </div>

              <div className="text-xs text-green-600 font-medium border-t pt-3">
                ⏰ 조리시간: 3분 | 🔥 칼로리: 약 320kcal | 💪 단백질: 25g
              </div>
            </div>
          </div>

          {/* Additional Info Section */}
          <div className="bg-white rounded-xl p-8 shadow-lg mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">건강한 식단 관리 팁</h2>
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div>
                <h3 className="text-lg font-semibold text-green-700 mb-3">🥗 균형잡힌 영양소</h3>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• 매 끼니마다 단백질, 탄수화물, 건강한 지방을 포함하세요</li>
                  <li>• 다양한 색깔의 채소를 섭취하여 비타민과 미네랄을 충분히 공급받으세요</li>
                  <li>• 가공식품보다는 자연식품을 우선적으로 선택하세요</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-blue-700 mb-3">⏰ 식사 타이밍</h3>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• 규칙적인 식사 시간을 유지하여 신진대사를 활성화하세요</li>
                  <li>• 운동 전후 적절한 영양 공급으로 효과를 극대화하세요</li>
                  <li>• 저녁 식사는 가볍게, 잠들기 3시간 전에 마무리하세요</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}