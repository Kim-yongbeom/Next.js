# Next.js
- 대표적인 SSR(서버 사이드 랜더링) React 프레임워크
- SEO(Search Engine Optimization)를 위한 SSR(Server-Side Rendering)을 가능하게 함
- SSR 뿐만 아니라 정적 사이트 생성 SSG(Static-Site Generate)도 가능함
- SSR과 CSR도 혼합하여 사용 가능
- 쉬운 배포

## SPA vs MPA
```
https://github.com/Kim-yongbeom/Vanilla_JS/tree/main/SPA
```

## Next.js 프리렌더링
```
MPA는 페이지를 이동할 때 마다 서버에 요청하고 받아오는 방식이다.
하지만 같은 SSR이라도 next.js는 프리렌더링(pre-rendering) 기능을 제공한다
사전에 미리 html을 렌더링 한다는 뜻으로, html을 미리 생성하고 최소한의js를 연결시킨 후 클라이언트에서 요청이 들어오면 해당 html을 로드하면서 나머지js를 불러와 화면에 렌더링 시켜준다

next.js는 주로 세가지 프리렌더링 방법을 제공한다

- Server Side Rendering: SSR 
- Static Site Rendering: SSG
- Incremental Static Regeneration: ISR

next.js의 프리렌더링 으로 각 page에 getServerSideProps ,getStaticProps, getStaticPaths 를 사용해서 데이터를 가져옴
```
