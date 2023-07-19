# Next.js
- 대표적인 SSR(서버 사이드 랜더링) React 프레임워크
- SEO(Search Engine Optimization)를 위한 SSR(Server-Side Rendering)을 가능하게 함
    - SEO를 사용해 검색엔진들이 Next.js 로 만든 사이트를 더욱 잘(상위에) 노출시키게 만들어 줌
    - 순수 React.js를 사용하면 JS를 해석하지 못하는 엔진에서는 아무것도 읽지 못하지만 SSR을 사용하면 JS를 해석하지 못해도 검색엔진에 필요한 데이터를 제공 할 수 있다.
- 특히 Next.js에서는 모든 페이지를 기본적으로 프리렌더링 함(기존 MPA와는 다른 랜더링을 가짐)
- SSR 뿐만 아니라 정적 사이트 생성 SSG(Static-Site Generate)도 가능함
- SSR과 CSR도 혼합하여 사용 가능

## SPA vs MPA
```
https://github.com/Kim-yongbeom/Vanilla_JS/tree/main/SPA
```

## Next.js가 제공하는 여러 기능들
- 페이지 기반 라우팅 시스템 (동적 라우팅 가능)
- 프리렌더링
- 더 빠른 페이지 로드를 위한 자동 코드 분할(Automatic Code Splitting)
    - 특정 페이지에 접근 할 때는 해당 페이지를 그릴때 필요한 chunk(js 파일)만 로드
    - 페이지 이동을 할 땐 목적지 페이지에 필요한 chunk만 추가 로드
    - 이를 통해 성능을 최적화한다.
- 최적화된 프리페치(Pre Fetching)```메모리에 응용 프로그램이 필요로 하는 파일과 데이터의 정보를 미리 불러 놓아 부팅과 프로그램 실행 시간을 줄여 주는 역할... 인터넷 브라우저의 캐시와 유사한 기능```를 사용한 클라이언트 측 라우팅
    - <Link> 컴포넌트를 이용하면, Viewport에 Link 컴포넌트가 노출되었을 때 href로 연결된 페이지의 chunk를 로드한다.
    - Network 탭에서 확인 가능, Viewport에 이미 노출된 Link를 클릭하면 js파일을 가져오지 않는것을 확인할 수 있다. ```이미 js파일을 가져왓기 때문에```
    - 이를 통해 성능을 최적화 한다.
- API 라우팅 (서버리스```개발자가 서버를 관리할 필요 없이 애플리케이션을 빌드하고 실행할 수 있도록 하는 클라우드 네이티브 개발 모델``` 기능 가능)

## Next.js 프리렌더링
```
MPA는 페이지를 이동할 때 마다 서버에 요청하고 받아오는 방식이다.
하지만 같은 SSR이라도 next.js는 프리렌더링(pre-rendering) 기능을 제공한다
사전에 미리 html을 렌더링 한다는 뜻으로, html을 미리 생성하고 최소한의js를 연결시킨 후 클라이언트에서 요청이 들어오면 해당 html을 로드하면서 나머지js를 불러와 화면에 렌더링 시켜준다

next.js는 주로 세가지 프리렌더링 방법을 제공한다

- Server Side Rendering: SSR (요청 타임에 프리 랜더를 해서 접근 할 때마다 서버에 요청을 보내게 됨)
- Static Site Rendering: SSG (*권장함* 빌드 타임에 프리 렌더를 해서 서버 부하가 덜 함)
- Incremental Static Regeneration: ISR

next.js의 프리렌더링 으로 각 page에 getServerSideProps ,getStaticProps, getStaticPaths 를 사용해서 데이터를 가져옴

server-side에서는 API Routes를 사용하지 않아야 한다.
getStaticProps / getStaticPaths 등은 client-side 코드에 포함되지 않는다.
그렇기에 서버 사이드에서는 DB에 직접 접근하는 등 훨씬 자유도 높은 작업을 할 수 있다.
```

-------------------------------------------------------------------------------------------------------------------------------------------------
## Next.js 쓰면서 생긴 문제점 (아직 해결못함)
- 토큰을 localStorage에 저장하고 만료되면 로그인 페이지로 리다이랙트 시킬려고 했는데 localStorage로 토큰을 저장하면 next.config.js에서 가져올 수 없다... 쿠키로 바꿔야 할 듯 (https://break-your-limit.tistory.com/77)
- 미들웨어 사용해서 리다이랙트 시켜보기(https://velog.io/@hwisaac/NextJS-Middleware) (https://programming119.tistory.com/254)
- 현재 13.4.1 버전에서는 미들웨어를 사용하려면 root 폴더에 middleware.ts를 만들고 build 후 start를 해야함 아무래도 서버를 사용하는건 build를 해야하는것 같다.?
- 굳이 미들웨어 쓰지말고 (https://careerly.co.kr/qnas/3049) 이 방법으로 한번 해보기
