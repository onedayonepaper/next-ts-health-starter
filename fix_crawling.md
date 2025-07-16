# 크롤링 오류 해결 방법

## 문제 상황
- 다운로드 가능한 포맷 정보를 가져올 수 없음
- 메타데이터만 크롤링됨

## 해결 방법

### 1. yt-dlp 업데이트
```bash
# pip를 사용하는 경우
pip install --upgrade yt-dlp

# 또는 직접 다운로드
sudo curl -L https://github.com/yt-dlp/yt-dlp/releases/latest/download/yt-dlp -o /usr/local/bin/yt-dlp
sudo chmod a+rx /usr/local/bin/yt-dlp
```

### 2. 쿠키 파일 사용
일부 사이트는 로그인이 필요합니다:
```bash
yt-dlp --cookies cookies.txt [URL]
```

### 3. User-Agent 변경
```bash
yt-dlp --user-agent "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36" [URL]
```

### 4. 포맷 정보 강제 추출
```bash
# 모든 포맷 정보 표시
yt-dlp -F [URL]

# 재시도 옵션 사용
yt-dlp --retries 10 --fragment-retries 10 [URL]
```

### 5. 네트워크 설정
```bash
# 프록시 사용 (필요한 경우)
yt-dlp --proxy socks5://127.0.0.1:1080 [URL]

# IPv4 강제 사용
yt-dlp --force-ipv4 [URL]
```

### 6. 디버그 모드로 실행
문제 파악을 위해:
```bash
yt-dlp -v [URL]
```

## 추천 명령어
가장 안정적인 다운로드를 위해:
```bash
yt-dlp --no-check-certificate --user-agent "Mozilla/5.0" -f best --retries 10 [URL]
```

## 주의사항
- 저작권이 있는 콘텐츠는 다운로드하지 마세요
- 사이트의 이용약관을 확인하세요
- 너무 많은 요청을 보내지 않도록 주의하세요