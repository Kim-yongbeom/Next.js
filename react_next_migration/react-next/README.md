# React Cli를 Next.js로 마이그레이션 !!

## 시작

- react-scripts 제거 -> yarn remove react-scripts
- next 설치 -> yarn add next
- package.json scripts 수정 -> "dev": "next dev", "build": "next build", "start": "next start"
- gitignore 수정 -> .next 추가

## 파일 경로 수정

- logo.svg (public 폴더로 이동)
- root 경로에서 pages 폴더에 \_app.js, \_document.js 추가
- \_document.js에서는 기존 public 폴더의 index.html에서 <head> 부분을 가져오고 next.js에 맞게 태그들을 변경해줌
  - <meta> 태그에서 charset을 charSet 으로 변경
- \_app.js는

```
import "../styles/global.css"

function MyApp({Component, pageProps}) {
    return <Component {...pageProps} />
}

export default MyApp

추가해주고 _document.js 에서 바로 <title> 태그를 사용할 수 없으므로 _document.js 에서 <title>을 삭제하고

<Head>
    <title>React App</title>
</Head>
를 컴포넌트 위에 추가 해줌

여기서 Head는 import Head from "next/head"; 여기서 가져옴
기존 import {Head} from 'next/document'는 pages/_document.js 에서만 사용해야 함
```

- App.css와 index.css는 root 경로에 styles 폴더를 만들고 global.css파일에 모두 옮겨 주고 삭제
- App.js 복사해서 pages의 index.js 에 복사해줌 style 경로는 \_app.js에서 적용했기 때문에 삭제해주고 App.js, App.test.js, index.js도 삭제
  - <img> 태그는 next.js의 <Image> 태그로 변경해줌
