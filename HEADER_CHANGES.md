# 헤더 변경사항 구현 완료

## 요구사항
- **메인페이지 헤더**: "스마트장보기" → "건강한라이프스타일", 검색은 "통합검색"
- **레시피페이지 헤더**: "스마트장보기" → "건강한레시피", 검색은 "레시피 검색"
- **스마트장보기 헤더**: 검색은 "상품검색"

## 구현된 변경사항

### 1. Header 컴포넌트 (`src/components/Header.tsx`)
- `title`과 `searchLabel` props 추가
- 페이지별 색상 강조 기능 구현:
  - **메인페이지**: "건강한<span className="text-emerald-600">라이프스타일</span>"
  - **레시피페이지**: "건강한<span className="text-green-600">레시피</span>"
  - **스마트장보기**: "스마트<span className="text-emerald-600">장보기</span>"

### 2. SearchModal 컴포넌트 (`src/components/SearchModal.tsx`)
- `searchType` props 추가: `'integrated' | 'recipe' | 'product'`
- 페이지별 검색 설정:

#### 통합 검색 (메인페이지)
- 제목: "통합 검색"
- placeholder: "레시피나 상품을 검색하세요..."
- 최근 검색어: 건강 레시피, 다이어트 식단, 오트밀, 닭가슴살, 아보카도
- 인기 검색어: 단백질 레시피, 저칼로리 간식, 비타민 보충제, 홈트레이닝, 건강한 아침식사

#### 레시피 검색 (레시피페이지)
- 제목: "레시피 검색"
- placeholder: "레시피를 검색하세요..."
- 최근 검색어: 아보카도 토스트, 퀴노아 샐러드, 연어 스테이크, 오트밀, 그릭요거트
- 인기 검색어: 간단한 아침식사, 고단백 요리, 다이어트 레시피, 건강한 간식, 저칼로리 요리

#### 상품 검색 (스마트장보기페이지)
- 제목: "상품 검색"
- placeholder: "상품명을 검색하세요..."
- 최근 검색어: 사과, 바나나, 우유, 빵, 계란
- 인기 검색어: 올리브오일, 양파, 토마토, 닭가슴살, 쌀

### 3. AppWrapper 컴포넌트 (`src/components/AppWrapper.tsx`)
- 현재 경로 감지 기능 추가 (`useEffect`와 `window.location.pathname` 사용)
- 페이지별 헤더 설정 함수 `getHeaderConfig()` 구현
- Header와 SearchModal에 적절한 props 전달

## 페이지별 헤더 설정

| 페이지 | 경로 | 제목 | 검색 라벨 | 검색 타입 |
|--------|------|------|-----------|-----------|
| 메인페이지 | `/` | 건강한라이프스타일 | 통합 검색 | integrated |
| 레시피페이지 | `/recipe` | 건강한레시피 | 레시피 검색 | recipe |
| 스마트장보기 | `/shopping` | 스마트장보기 | 상품 검색 | product |

## 추가 기능
- 각 페이지에 맞는 색상 테마 적용
- 검색어 제안 기능 (최근 검색어, 인기 검색어)
- 반응형 디자인 유지
- 접근성 (aria-label) 개선

## 테스트 방법
1. 개발 서버 실행: `npm run dev`
2. 각 페이지로 이동하여 헤더 제목 확인:
   - http://localhost:3000/ → "건강한라이프스타일"
   - http://localhost:3000/recipe → "건강한레시피"
   - http://localhost:3000/shopping → "스마트장보기"
3. 각 페이지에서 검색 아이콘 클릭하여 검색 모달 확인