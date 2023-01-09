# Next.js
- 대표적인 SSR(서버 사이드 랜더링) React 프레임워크
- SEO(검색 엔진 최적화)
- 쉬운 배포

## SPA vs MPA
```
https://github.com/Kim-yongbeom/Vanilla_JS/tree/main/SPA
```

## Next.js 프리렌더링
```
next.js는 프리렌더링(pre-rendering) 기능을 제공한다
사전에 미리 html을 렌더링 한다는 뜻으로, html을 미리 생성하고 최소한의js를 연결시킨 후 클라이언트에서 요청이 들어오면 해당 html을 로드하면서 나머지js를 불러와 화면에 렌더링 시켜준다

next.js는 주로 두가지 프리렌더링 방법을 제공한다

- Server-side rendering: SSR 
- Static site rendering: SSG

next.js의 프리렌더링 으로 각 page에 getServerSideProps ,getStaticProps, getStaticPaths 를 사용해서 데이터를 가져옴
```
