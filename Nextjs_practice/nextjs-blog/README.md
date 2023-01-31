## Next.js 프로젝트 띄워보기

- node 설치
- yarn 설치 (npm install -g yarn)
- npx create-next-app nextjs-blog --use-npm --example "https://github.com/vercel/next-learn/tree/master/basics/learn-starter"

## prettier 설정

```
.prettierignore
.prettierrc

추가 후

package.json 에 "prettier-fix": "prettier --write ."

추가 후

터미널에 yarn add -D prettier

yarn prettier-fix 입력하면 파일들 정렬!!
```

## 1

```
index.js 에서 main 태그 안 내용은 <h1>만 남김

<main>
<h1 className={styles.title}>
    Welcome to the <a href="https://nextjs.org">Next.js!</a>
</h1>
</main>
```

## SSR(server side rendering)

- 서버에서 데이터를 가져오고 화면에 그려준다.

## 2

```
getServerSidePrps 를 사용해서 SSR을 구현한다.
- 해당 컴포넌트를 사용자가 요청하면 getServerSideProps 를 먼저 실행후 서버에서 데이터를 가져오고 화면에 그려줌
- 컴포넌트에 data를 props로 전달하여 렌더링 할 수 있다
- getServerSideProps 는 계속 데이터가 바뀌어야하는 페이지의 경우 사용한다

export async function getServerSideProps(){
  console.log('server')
  return {
    props: {time: new Date().toISOString()}
  }
}
```

## 3

```
export default function Home()에 {time} props 넣어준뒤

main 태그 내용을 바꿔줌
새로고침을 할 때마다 터미널에 server 스트링이 찍힘

<main>
<h1 className={styles.title}>
    {time}
</h1>
</main>
```

## 4

```
Link는 next에서 routing 제공해주는 태그
파일만 만들어도 route가 설정됨

import Link from "next/link"

<main>
    <h1 className={styles.title}>
      {time}
    </h1>
    <h1><Link href="/csr">CSR 로</Link></h1>
</main>
```

## CSR (Client Side rendering)

- 클라이언트 측에서 최초에 1번 서버에서 전체 페이지를 로딩하여 보여준다.
- 그 이후에는 사용자의 요청이 올 때마다, 자원을 서버에서 제공한 후 클라이언트가 해석하고 렌더링 하는 방식이다.

## 5

```
CSR을 만드는 것은 일반 React와 똑같이 만들면 된다.

index.js를 복사해서 같은 경로에 붙여넣은 후 csr.js로 rename
getServerSideProps 함수를 삭제 해준다.
```

## SSG (Static-Site Generation)

- 정적인 사이트를 데이터를 가져와서 그려둔다.

## 6

```
getStaticProps를 사용해서 SSG를 구현한다.
SSG를 구현할 때 정적인 페이지에 동적 라우팅을 사용하려면 getStaticPaths를 사용해야 한다.
- Page의 내용물이 외부 데이터에 의존적인 상황 (getStaticProps만 가지고도 가능)
- Page Paths 까지 외부 데이터에 의존적인 상황 (getStaticPaths도 함께 활용해야 가능)

SSG는 yarn dev 즉 개발서버에서는 동작하지 않는다.
SSG가 SSR 처럼 동작함

그래서 ssg.js 파일을 만들고 routing 설정한 후에 yarn build 후 yarn start 해야함

yarn build 했을 때 시간을 SSG 페이지에서 그려둔다.
```

## ISR (Incremental Static Regeneration)

- 증분(점점 증가하는) 정적 사이트를 재생성
- 특정 주기로 정적인 사이트를 데이터를 가져와서 다시 그려둔다.

## 7

```
getStaticProps를 사용해서 ISR을 구현한다. 하지만  SSG와는 다르게 revalidate를 return 해줘야한다.

isr.js 파일을 만들고 routing 설정한 후에 yarn build 후 yarn start 해야함

만약 revalidate: 1 이면 1초 간격으로 다시 패칭한다는 뜻이다.

SSG의 장점과 SSR의 장점을 적절하게 사용할 수 있다.
```

## Layouts

- 여러 페이지의 공통 처리
- 하나의 공통된 레이아웃을 쓰는 경우(Nav, Footer)

## 8

```
root에서 components 폴더 -> Layout.js 생성 (pages 가 아니라 components 라서 SSR 불가능)

Layout.js 에서는 children을 props로 받아준다

pages 폴더에서 _app.js 파일 생성 후
import Layout from "../components/Layout";

export default function App({Component, pageProps}) {
    return(
        <Layout>
            <Component  {...pageProps}/>
        </Layout>
    )
}

코드를 작성하고 yarn dev를 사용해 페이지를 들어가게 되면 footer가 2개가 된다.
현재 공통된 부분을 지워주지 않아서 그러므로

index.js에서

<h1></h1> 태그 부분만 남기고 모두 제거
```

## SubLayout

- 세부적인 레이아웃을 쓰는 경우 사용

## 9

```
components 폴더 안에 SubLayout.js를 만든다

import Link from 'next/link'
import styles from '../styles/Home.module.css';

export default function SubLayout({children}) {
  return (
    <div>
      <h1>
        <Link href="/">
          Home으로
        </Link>
      </h1>
      {children}
    </div>
  )
}

코드 작성 후

SubLayout을 적용해 주고 싶은 파일(여기선 csr.js)에

csr.js의 함수명이 CSR이므로
CSR.getLayout = function getLayout(page) {
  return (
    <Layout>
      <SubLayout>{page}</SubLayout>
    </Layout>
  )
}

적용

그리고

_app.js에서 컴포넌트가 getLayout을 가지고 있는것에만 실행하겠다는 뜻으로
// return(
//     <Layout>
//         <Component  {...pageProps}/>
//     </Layout>
// )
const getLayout = Component.getLayout || ((page)=><Layout>{page}</Layout>)
return getLayout(<Component{...pageProps}/>)

기존 코드를 주석하고 const getLayout을 추가해준다.

ssg.js, isr.js 에도 그대로 적용
```

## 10

```
Next.js 의 라우팅은 file-system기반(pages/ 혹은 src/pages/  다른 폴더는 안됨)

root 폴더에 src 를 만들고 components폴더 pages폴더를 붙여넣는다 (기존에 했던 경로들 수정해야함)

만약 1. root폴더에 pages 폴더에 index.js가 있고
     2. root폴더에 src 폴더에 pages 폴더에 index.js 가 동시에 있다면

     1번 항목이 실행이 되는것을 확인할 수 있다. 그리고 2번의 src 폴더의 pages는 404에러가 난다.

연습 단계에서는 src 폴더의 pages를 사용한다. (각자 편할걸로 사용해라)
```
