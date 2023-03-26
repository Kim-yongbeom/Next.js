## Next.js로 블러그 만들기

```
yarn create next-app blog --example "https://github.com/vercel/next-learn/tree/master/basics/learn-starter"
```

## blog 현재 문제점
```
새로운 블로그를 작성하면 date, matter 문제 발생
```

## .md 파일을 해석하기 위해서 도구 설치

```
yarn add remark remark-html
```

## SSG를 사용하면 좋은 페이지

```
데이터가 많이 바뀌지 않을 페이지에 좋다!

사용자가 페이지를 요청하기 전에 pre-render 할 수
있다면 SSG
없다면 SSR 또는 ISR 또는 CSR
```

- Marketing pages
- Blog posts
- E-commerce product listings
- Help and documentation (고객센터, 문서)

## vercel로 배포하기
- vercel과 github 연동
- github 저장소 import -> Deploy (저장소 이름은 유니크하게 지을것 아니면 랜덤하게 지정될 수 있음)
- .md 파일을 생성하는 현재 프로젝트에서 제약이 있을 수 있음 (vercel은 read-only)