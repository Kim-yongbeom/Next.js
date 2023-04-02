# React Cli를 Next.js로 마이그레이션 !!

## 시작

- react-scripts 제거 -> yarn remove react-scripts
- next 설치 -> yarn add next
- package.json scripts 수정 -> "dev": "next dev", "build": "next build", "start": "next start"
- gitignore 수정 -> .next 추가

## 파일 경로 수정

- logo.svg (public 폴더로 이동)
- root 경로에서 pages 폴더에 \_app.js, \_document.js 추가
- \_document.js에서는 기존 public 폴더의 index.html에서 <head> 부분을 가져옴
- \_app.js는

```
import "../styles/global.css"

function MyApp({Component, pageProps}) {
    return <Component {...pageProps} />
}

export default MyApp
```

추가해줌

- App.css와 index.css는 root 경로에 styles 폴더를 만들고 global.css파일에 모두 옮겨 줌
