# 헤더 변경사항 요약

## 요구사항
- **메인페이지 헤더**: "건강한라이프스타일" 텍스트, "통합검색"
- **레시피페이지 헤더**: "건강한레시피" 텍스트, "레시피 검색"

## 구현된 변경사항

### 1. Header 컴포넌트 (`src/components/Header.tsx`)
- `title`과 `searchPlaceholder` props 추가
- 동적 제목 렌더링 기능 구현 (두 번째 단어는 초록색으로 표시)
- Props를 통해 페이지별로 다른 텍스트 표시 가능

### 2. SearchModal 컴포넌트 (`src/components/SearchModal.tsx`)
- `searchType`과 `placeholder` props 추가
- 검색 타입에 따른 차별화된 검색 데이터:
  - **통합검색**: 일반적인 상품 검색어 (사과, 바나나, 올리브오일 등)
  - **레시피 검색**: 레시피 관련 검색어 (아보카도 토스트, 다이어트 레시피 등)

### 3. AppWrapper 컴포넌트 (`src/components/AppWrapper.tsx`)
- `usePathname` 훅을 사용하여 현재 경로 감지
- 페이지별 헤더 설정 로직 구현:

```javascript
// 메인페이지 (/)
{
  title: '건강한 라이프스타일',
  searchType: '통합검색',
  placeholder: '상품명을 검색하세요...'
}

// 레시피페이지 (/recipe)
{
  title: '건강한 레시피',
  searchType: '레시피 검색',
  placeholder: '레시피를 검색하세요...'
}
```

## 결과
✅ 메인페이지에서 "건강한**라이프스타일**" 헤더와 "통합검색" 기능  
✅ 레시피페이지에서 "건강한**레시피**" 헤더와 "레시피 검색" 기능  
✅ 페이지별로 적절한 검색 데이터 제공  
✅ 빌드 성공 및 개발 서버 정상 작동

## 접근 방법
이제 http://localhost:3000에서 메인페이지를, http://localhost:3000/recipe에서 레시피페이지를 확인하면 각각 다른 헤더 텍스트와 검색 기능을 볼 수 있습니다.