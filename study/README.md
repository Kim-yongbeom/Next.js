## Next.js 프로젝트 띄워보기

- node 설치 (진행한 버전은 v16.17.1)
- yarn 설치 (npm install -g yarn)
- npx create-next-app [프로젝트명]

![캡처](https://github.com/Kim-yongbeom/Next.js/assets/89058117/2ed887ea-eb2c-49c0-a3ba-33fd4676a936)

- 프로젝트 개발 버전 실행: npm run dev
- 프로젝트 빌드: npm run build
- 프로젝트 빌드 버전 실행: npm run start

## 1

styles 폴더에
Home.module.css 추가 후

```
.container {
  min-height: 100%;
  padding: 0 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.title a {
  color: #0070f3;
  text-decoration: none;
}

.title a:hover,
.title a:focus,
.title a:active {
  text-decoration: underline;
}

.title {
  margin: 0 0 1rem;
  line-height: 1.15;
  font-size: 3.6rem;
}

.title {
  text-align: center;
}

.title,
.description {
  text-align: center;
}

.description {
  line-height: 1.5;
  font-size: 1.5rem;
}

.grid {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  max-width: 800px;
  margin-top: 3rem;
}

.card {
  margin: 1rem;
  flex-basis: 45%;
  padding: 1.5rem;
  text-align: left;
  color: inherit;
  text-decoration: none;
  border: 1px solid #eaeaea;
  border-radius: 10px;
  transition: color 0.15s ease, border-color 0.15s ease;
}

.card:hover,
.card:focus,
.card:active {
  color: #0070f3;
  border-color: #0070f3;
}

.card h3 {
  margin: 0 0 1rem 0;
  font-size: 1.5rem;
}

.card p {
  margin: 0;
  font-size: 1.25rem;
  line-height: 1.5;
}

.logo {
  height: 1em;
}

@media (max-width: 600px) {
  .grid {
    width: 100%;
    flex-direction: column;
  }
}
```

---

```
index.tsx 에서 main 태그 안 내용은 <h1>만 남김
-------------------------------------------------------
<main>
  <h1>
      Welcome to the <a href="https://nextjs.org">Next.js!</a>
  </h1>
</main>
-------------------------------------------------------
```

## SSR(server side rendering)

- 서버에서 데이터를 가져오고 화면에 그려준다.

## 2

```
getServerSidePrps 를 사용해서 SSR을 구현한다.
- 해당 컴포넌트를 사용자가 요청하면 getServerSideProps 를 먼저 실행후 서버에서 데이터를 가져오고 화면에 그려줌
- 컴포넌트에 data를 props로 전달하여 렌더링 할 수 있다
- getServerSideProps 는 계속 데이터가 바뀌어야하는 페이지의 경우 사용한다
-------------------------------------------------------
index.tsx 에

export async function getServerSideProps(){
  console.log('server')
  return {
    props: {time: new Date().toISOString()}
  }
}

추가
-------------------------------------------------------
```

## 3

```
export default function Home()에 {time} props 넣어준뒤

ts 로 만들었다면
type Time = {
  time: string
}
을 넣어주고 props로 전달해야함

main 태그 내용을 바꿔줌
새로고침을 할 때마다 터미널에 server 스트링이 찍힘
-------------------------------------------------------
export async function getServerSideProps(){
  console.log('server')
  return {
    props: {time: new Date().toISOString()}
  }
}

type Time = {
  time: string
}

export default function Home({time}: Time) {
  return (
    <main>
      <h1>
        {time}
      </h1>
    </main>
  )
}
-------------------------------------------------------
```

## 4

```
<Link>는 HTML <a> 요소를 확장하여 경로 간 프리페칭 및 클라이언트 측 탐색을 제공하는 React 구성 요소이다.
Next.js에서 경로 사이를 탐색하는 기본 방법이다.
프리페칭은 사용자가 방문하기 전에 백그라운드에서 경로를 미리 로드하는 방법입니다.

프리페칭 방법 두가지
- <Link>component : 사용자의 뷰포트에 표시될 때 자동으로 미리 가져온다. 프리페칭은 페이지가 처음 로드되거나 스크롤을 통해 표시될 때 발생한다.
- router.prefetch(): useRouter후크를 사용하여 프로그래밍 방식으로 경로를 미리 가져올 수 있습니다.
-------------------------------------------------------
import Link from "next/link"

...

<main>
  <h1>
    {time}
  </h1>
  <h1>
    <Link href="/csr">CSR 로</Link>
    <br/>
    <Link href="/ssg">SSG 로</Link>
    <br/>
    <Link href="/isr">ISR 로</Link>
  </h1>
</main>
-------------------------------------------------------

Routing
- next.js 에서 라우팅 처리는 pages 폴더 안에 파일만 넣어주면 알아서 처리해 줌
- pages 폴더에 isr.tsx, csr.tsx, ssg.tsx 파일을 만들어 준다.
```

## CSR (Client Side rendering)

- 클라이언트 측에서 최초에 1번 서버에서 전체 페이지를 로딩하여 보여준다.
- 그 이후에는 사용자의 요청이 올 때마다, 자원을 서버에서 제공한 후 클라이언트가 해석하고 렌더링 하는 방식이다.

## 5

```
csr.tsx
-------------------------------------------------------
import { useEffect, useState } from "react"

export default function CSR() {
  const [time, setTime] = useState<string>()

  useEffect(() => {
    console.log('client')
    setTime(new Date().toISOString())
  }, [])

  return (
    <>
      <h1>{time}</h1>
    </>
  )
}
-------------------------------------------------------

csr.tsx 파일을 만들면 index.tsx 의 Link 컴포넌트에서 프리페칭을 사용해 csr.tsx 파일을 미리 불러온다.
Sources 탭 또는 Network 탭에서 확인할 수 있다.
```

## SSG (Static-Site Generation)

- 정적인 사이트를 데이터를 가져와서 그려둔다.

## 6

```
getStaticProps를 사용해서 SSG를 구현한다.
SSG를 구현할 때 정적인 페이지에 동적 라우팅을 사용하려면 getStaticPaths를 사용해야 한다.
- Page의 내용물이 외부 데이터에 의존적인 상황 (getStaticProps만 가지고도 가능)
- Page Paths 까지 외부 데이터에 의존적인 상황 (getStaticPaths도 함께 활용해야 가능)

SSG는 npm run dev 즉 개발서버에서는 동작하지 않는다.
dev 서버에서는 SSG가 SSR 처럼 동작함

빌드 했을 때 시간을 SSG 페이지에서 나타나게 됨

ssg.tsx
-------------------------------------------------------
export async function getStaticProps() {
  console.log('static server')
  return {
    props: { time: new Date().toISOString() },
  }
}

type Time = {
  time: string
}

export default function SSG({ time }: Time) {
  return (
    <>
      <h1>{time}</h1>
    </>
  )
}
-------------------------------------------------------
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

isr.tsx
-------------------------------------------------------
export async function getStaticProps() {
    console.log('server')
    return {
        props: { time: new Date().toISOString() },
        revalidate: 1,
    }
}

type Time = {
    time: string
}

export default function ISR({ time }: Time) {
    return (
        <>
            <h1>{time}</h1>
        </>
    )
}
-------------------------------------------------------
```

## Layouts

- 여러 페이지의 공통 처리
- 하나의 공통된 레이아웃을 쓰는 경우(Nav, Footer)

## 8

```
root에서 components 폴더 -> Layout.tsx 생성 (pages 가 아니라 components 라서 SSR 불가능)

Layout.tsx 에서는 children을 props로 받아준다

Layout.tsx
-------------------------------------------------------
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

export default function Layout({ children }: Props) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Next.js 연습</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>{children}</main>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/favicon.ico" alt="Vercel" className={styles.logo} />
        </a>
      </footer>

      <style jsx>{`
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        footer img {
          margin-left: 0.5rem;
        }
        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          color: inherit;
        }
        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
-------------------------------------------------------
추가해줌

pages 폴더에 _app.tsx 파일
-------------------------------------------------------
import Layout from "../components/Layout";

export default function App({Component, pageProps}) {
    return(
        <Layout>
            <Component  {...pageProps}/>
        </Layout>
    )
}
-------------------------------------------------------
```

## 9

```
Dynamic Routes

pages 폴더 안에 [slug].tsx를 만들게 되면 설정한 폴더명 뒤에는 아무런 값을 넣어줘도 [slug].tsx가 보여진다.

설정한 폴더명이란 만약 category 폴더 안에 [slug].tsx를 만들고 http://localhost:3000/category/asfasfasf
이런 url을 입력을 해도 [slug].tsx 를 보여준다.

파일에만 해당되는 것이 아니라 폴더에도 사용이 가능하다.
[username] 이라는 폴더를 만들고 ( []안에는 어떠한 텍스트를 넣어도 되지만 유의미한 텍스트를 넣는게 당연히 좋다 )
info.tsx 파일을 만들게 되면
http://localhost:3000/KIM/info 처럼 자유롭게 사용 가능하다.

만약 category폴더와 [username] 폴더가 동시에 존재 하고
http://localhost:3000/category/info 를 입력하게 되면 category 폴더의 [slug].tsx 파일이 보여진다. ( 명시된 폴더가 우선순위 )


cart 폴더 안에 [...date].tsx 를 생성하면

http://localhost:3000/cart/asd/131234
url 처럼 cart 후에 어떠한 경로를 입력하더라도 [...date].tsx 가 보여지게 된다.
```

## 10

```
[slug].tsx 파일 안에

-------------------------------------------
import { useRouter } from 'next/router'
const router = useRouter()
const {slug} = router.query
-------------------------------------------
위 코드를 입력하면 slug 파일의 text값(url 정보)을 가져올 수 있다.
무조건 router.query로 가져오는 값은 파일 이름을 동일하게 가져와야한다

http://localhost:3000/category/foodasfa?from=asd&age=123
만약 위 url 의 slug 값과 query 값을 가져오고 싶다면
const {slug, from, age} = router.query 을 선언하면 된다.

slug == foodasfa
from == asd
age == 123
가 나올 것 이다.
```

## 11

```
[...slug]에서 slug 는 배열로 받아진다.
[...date].tsx 파일에서 확인 가능하다.

-------------------------------------------------------------------------------
const {date} = router.query

<>
  <h1 className={styles.title}>Cart Date Slug {JSON.stringify(date)}</h1>
</>
-------------------------------------------------------------------------------

만약 cart폴더의 [...date].tsx 파일이 존재할 때
http://localhost:3000/cart 로 접속하게 되면 404 에러가 발생한다. (...date에 해당하는 값이 존재하지 않기 때문)

이를 해결 하기 위해선 [[...date]].tsx 로 []를 한번더 감싸 주어야 한다.

routing 하는 방법
-------------------------------------------------------------------------------
location.replace('url') : 로컬 state 유지 안됨 (리렌더)
router.push(url) : 로컬 state 유지 / data fetching은 일어남
router.push(url, as, {shallow: true}) : 로컬 state 유지 / data fetching x
-------------------------------------------------------------------------------
세가지 정도가 있다.
```

## 12

```
Next.js가 제공하는 API Routes(pages/api/*)

pages/api/user.ts 파일을 만들고

---------------------------------------------
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ name: 'Kim' })
}

---------------------------------------------
추가 후에

pages 폴더에서 apiTest.tsx 파일을 만들고
---------------------------------------------
  const [name, setName] = useState('?')

  useEffect(()=>{
    fetch('/api/user')
    .then((res)=>res.json())
    .then((data)=>{
      setName(data.name)
    })
  },[])

  ...

  return (
    <h1 className={styles.title}>Name: {name}</h1>
  )
---------------------------------------------
추가 해준다
```

## 13
```
next.js 에서 지원하는 Image

Pages 폴더 안에 Image.tsx 생성
---------------------------------------------
import Image from "next/image";

export default function image() {
  return (
    <div>
        <Image
            alt="Next.js logo"
            src="https://cdn.aitimes.kr/news/photo/202303/27617_41603_044.jpg" (구글에서 가져온 이미지)
            width={1200}
            height={400}
            style={{
            maxWidth: '100%',
            height: 'auto',
            }}
        />
    </div>
  )
}
---------------------------------------------

src에 입력한 이미지 도메인을 next.config.js 에 추가 해줘야 함
---------------------------------------------
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['cdn.aitimes.kr'], // 이미지를 가져올 수 있는 호스트 이름을 여기에 추가
  },
}

module.exports = nextConfig
---------------------------------------------
```
- 장점
```
- lazy loading (로딩 안된 이미지는 블러 처리)
- 이미지 사이즈 최적화
- 레이아웃 안정성 (이미지 로드 전에 placeholder를 제공해서 CLS(Cumulative Layout Shift) 방지)
```

## 14
```미들웨어```
- 현재 13.4.1 버전에서는 미들웨어를 사용하려면 root 폴더에 middleware.ts를 만들고 build 후 start를 해야함 (버전에 따라 middleware의 위치와 이름이 달라짐)
- 미들웨어의 저장 경로에 따라 실행되는 동작이 다름
- https://nextjs.org/docs/app/building-your-application/routing/middleware

```
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { thisEndYear, threeMonthsAgo } from './components/thisYear'

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  let cookie = request.cookies.get('loginToken')?.value
  let companyName = request.cookies.get('companyName')?.value

  if (
    request.nextUrl.pathname.startsWith('/login') &&
    cookie &&
    companyName === '인포플라'
  ) {
    return NextResponse.redirect(
      new URL(
        `/?option=전체&page=1&startedDate=${threeMonthsAgo()}&endedDate=${thisEndYear()}`,
        request.url
      )
    )
  } else if (
    request.nextUrl.pathname.startsWith('/login') &&
    cookie &&
    companyName !== '인포플라'
  ) {
    return NextResponse.redirect(
      new URL(
        `/?page=1&startedDate=${threeMonthsAgo()}&endedDate=${thisEndYear()}`,
        request.url
      )
    )
  } else if (!request.nextUrl.pathname.startsWith('/login') && !cookie) {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  if (
    request.nextUrl.pathname.startsWith('/company') &&
    companyName !== '인포플라'
  ) {
    return NextResponse.redirect(
      new URL(
        `/?page=1&startedDate=${threeMonthsAgo()}&endedDate=${thisEndYear()}`,
        request.url
      )
    )
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    //  * 다음으로 시작하는 경로를 제외한 모든 요청 경로를 일치시킵니다.
    '/((?!api|_next/static|_next/image|assets|favicon.ico|logo.png|sw.js).*)',
  ],
}

```
