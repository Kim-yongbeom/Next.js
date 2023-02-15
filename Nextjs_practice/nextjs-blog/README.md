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
-------------------------------------------------------
<main>
<h1 className={styles.title}>
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
export async function getServerSideProps(){
  console.log('server')
  return {
    props: {time: new Date().toISOString()}
  }
}
-------------------------------------------------------
```

## 3

```
export default function Home()에 {time} props 넣어준뒤

main 태그 내용을 바꿔줌
새로고침을 할 때마다 터미널에 server 스트링이 찍힘
-------------------------------------------------------
<main>
<h1 className={styles.title}>
    {time}
</h1>
</main>
-------------------------------------------------------
```

## 4

```
Link는 next에서 routing 제공해주는 태그
파일만 만들어도 route가 설정됨
-------------------------------------------------------
import Link from "next/link"

<main>
    <h1 className={styles.title}>
      {time}
    </h1>
    <h1><Link href="/csr">CSR 로</Link></h1>
</main>
-------------------------------------------------------
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
-------------------------------------------------------
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
-------------------------------------------------------
코드 작성 후

SubLayout을 적용해 주고 싶은 파일(여기선 csr.js)에

csr.js의 함수명이 CSR이므로
-------------------------------------------------------
CSR.getLayout = function getLayout(page) {
  return (
    <Layout>
      <SubLayout>{page}</SubLayout>
    </Layout>
  )
}
-------------------------------------------------------
적용

그리고

_app.js에서 컴포넌트가 getLayout을 가지고 있는것에만 실행하겠다는 뜻으로
-----------------------------------------------------------------------
// return(
//     <Layout>
//         <Component  {...pageProps}/>
//     </Layout>
// )
const getLayout = Component.getLayout || ((page)=><Layout>{page}</Layout>)
return getLayout(<Component{...pageProps}/>)
-----------------------------------------------------------------------
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

## 11
```
pages 폴더 안에 product 폴더를 생성 -> first-item.js 생성

-------------------------------------------------------
import { useEffect, useState } from 'react'
import Layout from '../../components/Layout'
import SubLayout from '../../components/SubLayout'
import styles from '../../../styles/Home.module.css'

export default function FirstItem() {

  return (
    <>
      <h1 className={styles.title}>First Item</h1>
    </>
  )
}

FirstItem.getLayout = function getLayout(page) {
  return (
    <Layout>
      <SubLayout>{page}</SubLayout>
    </Layout>
  )
}
-------------------------------------------------------
코드 입력

만약 경로 설정이 귀찮다면
root 폴더에 jsconfig.json 파일을 만들어 준 뒤
-------------------------------------------------------
{
    "compilerOptions": {
        "baseUrl": "src"
    }
}
-------------------------------------------------------
를 넣게 되면 

FirstItem 컴포넌트의 경로 코드
-------------------------------------------------------
import Layout from 'components/Layout'
import SubLayout from 'components/SubLayout'
import styles from '/styles/Home.module.css'
-------------------------------------------------------
src가 루트가 되어 바로 설정할 수 있게 된다.
styles 폴더는 src 밖에 있어 '/' 추가. (왜 / 만 붙이면 되는지는 잘 모르겠다. 같은 경로면 ./ 해야 하는것 아닌가???)
```

## 12
```
pages 폴더 안에 settings 폴더를 생성 -> my 폴더 생성 -> info.js 생성
first-item.js 와 똑같은 코드 작성 -> 컴포넌트 이름만 변경

웹에서 확인하고 싶다면 
http://localhost:3000/settings/my/info 파일 경로를 넣으면 된다.

http://localhost:3000/settings
http://localhost:3000/settings/my 
위 두개의 경로에 접근하고 싶다면 settings 폴더나 my 폴더에 index.js를 추가해줘야 함
```

## 13
```
Dynamic Routes

pages 폴더 안에 [slug].js를 만들게 되면 설정한 폴더명 뒤에는 아무런 값을 넣어줘도 [slug].js가 보여진다.

설정한 폴더명이란 만약 category 폴더 안에 [slug].js를 만들고 http://localhost:3000/category/asfasfasf
이런 url을 입력을 해도 [slug].js 를 보여준다.

파일에만 해당되는 것이 아니라 폴더에도 사용이 가능하다.
[username] 이라는 폴더를 만들고 ( []안에는 어떠한 텍스트를 넣어도 되지만 유의미한 텍스트를 넣는게 당연히 좋다 )
info.js 파일을 만들게 되면
http://localhost:3000/KIM/info 처럼 자유롭게 사용 가능하다.

만약 category폴더와 [username] 폴더가 동시에 존재 하고
http://localhost:3000/category/info 를 입력하게 되면 category 폴더의 [slug].js 파일이 보여진다. ( 명시된 폴더가 우선순위 )


cart 폴더 안에 [...date].js 를 생성하면

http://localhost:3000/cart/asd/131234
url 처럼 cart 후에 어떠한 경로를 입력하더라도 [...date].js 가 보여지게 된다.
```

## 14
```
[slug].js 파일 안에

-------------------------------------------
import { useRouter } from 'next/router'
const router = useRouter()
const {slug} = router.query
-------------------------------------------
위 코드를 입력하면 slug 파일의 text값(url 정보)을 가져올 수 있다.

http://localhost:3000/category/foodasfa?from=asd&age=123
만약 위 url 의 slug 값과 query 값을 가져오고 싶다면
const {slug, from, age} = router.query 을 선언하면 된다.

slug == foodasfa
from == asd
age == 123
가 나올 것 이다.
```

## 15
```
[username] 폴더 안에 info.js 파일을 [info.js]로 바꿔보자

-------------------------------------------
const router = useRouter()
const {username, info} = router.query
-------------------------------------------
역시나 아무런 텍스트를 입력해도 잘 받아온다.
```

## 16
```
[...slug]에서 slug 는 배열로 받아진다.
[...date].js 파일에서 확인 가능하다.

-------------------------------------------------------------------------------
const {date} = router.query

<>
  <h1 className={styles.title}>Cart Date Slug {JSON.stringify(date)}</h1>
</>
-------------------------------------------------------------------------------

만약 cart폴더의 [...date].js 파일이 존재할 때 
http://localhost:3000/cart 로 접속하게 되면 404 에러가 발생한다. (...date에 해당하는 값이 존재하지 않기 때문)

이를 해결 하기 위해선 [[...date]].js 로 []를 한번더 감싸 주어야 한다.

routing 하는 방법
-------------------------------------------------------------------------------
location.replace('url') : 로컬 state 유지 안됨 (리렌더)
router.push(url) : 로컬 state 유지 / data fetching은 일어남
router.push(url, as, {shallow: true}) : 로컬 state 유지 / data fetching x
-------------------------------------------------------------------------------
세가지 정도가 있다.
```

## 17
```
Shallow Routing

setting / my / info.js 파일에

-------------------------------------------------------------------------------
export async function getServerSideProps() {
  console.log('server')
  return {
    props: { time: new Date().toISOString() },
  }
}

...

const router = useRouter()

const [clicked, setClicked] = useState(false)
const {status = 'initial'} = router.query

return (
  <>
    <h1 className={styles.title}>My Info</h1>
    <h1 className={styles.title}>Clicked: {String(clicked)}</h1>
    <h1 className={styles.title}>Status: {status}</h1>
    <button onClick={()=>{
      alert('edit')
      setClicked(true)
      location.replace('/settings/my/info?status=editing')
    }}>edit(replace)</button>
  </>
)
-------------------------------------------------------------------------------
코드 추가
location.replace를 사용해서
status가 editing으로는 잘 들어가지만 리렌더가 일어나면서 clicked는 다시 false가 되고
server에 'server' 텍스트가 찍히는 것을 확인할 수 있다.
`로컬 state 유지 안됨 (리렌더)`

-------------------------------------------------------------------------------
<button onClick={()=>{
  alert('edit')
  setClicked(true)
  router.push('/settings/my/info?status=editing')
}}>edit(push)</button>
-------------------------------------------------------------------------------
location.replace를 router.push 로 바꾸고 클릭을 하게 되면 clicked가 true가 되는것을 확인할 수 있다.
하지만 server에 'server' 텍스트가 찍힌다. 
`로컬 state 유지 / data fetching은 일어남`

-------------------------------------------------------------------------------
router.push('/settings/my/info?status=editing', undefined, {shallow: true})
-------------------------------------------------------------------------------
shallow를 true를 주게 되면
`로컬 state 유지 / data fetching X`
```

## 18
```
Next.js가 제공하는 API Routes(pages/api/*)

pages/api/user.js 파일을 만들고

---------------------------------------------
export default function handler(req, res) {
    res.status(200).json({
        name: "Kim"
    })
}
---------------------------------------------
추가 후에

기존에 있던 [username]/[info].js 파일에 가서
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

## 19
```
src/constants/userDetail.js 파일을 만들어 주고
userDetail.js 에는 json 형식으로 

---------------------------------------------
export const userDetail = {
    name: 'Kim',
    age: 12,
    height: '2m',
    weight: '50g'
}
---------------------------------------------
추가해줌

다시 src/api/user.js로 와서

import {userDetail}  from 'constants/userDetail'

res.status(200).json(userDetail)

기존 json을 userDetail로 변경
```

## 20
```
다이나믹 api
api/user-info/[uid].js

---------------------------------------------
export default function handler(req, res) {
    const {uid} = req.query
    res.status(200).json({uid})
}
---------------------------------------------
추가해줌 

[username]/[info].js 파일로 가서
---------------------------------------------
uid query에 추가
const {username, info, uid} = router.query

useEffect(()=>{
    if(uid != null){
      fetch(`/api/user-info/${uid}`)
    .then((res)=>res.json())
    .then((data)=>{
      setName(data.uid)
    })
    }
  },[uid])
---------------------------------------------

http://localhost:3000/kim/name?uid=1
접속시 1이 붙는 것을 볼 수 있다.

Routing에서 다뤘던 여러 Slug 활용법 적용 가능
```

## 21
```
API Middlewares
내장 Middleware (req.cookies / req.query ...)
req/res 관련 다양한 Middleware 기능들을 사용할 수 있다.

api/[uid].js에서
----------------------------------------
const cookies = req.cookies
res.status(200).json(`${uid} ${JSON.stringify(cookies)}`)
----------------------------------------

[info].js에서
---------------------------------------
useEffect(()=>{
    if(uid != null){
      fetch(`/api/user-info/${uid}`)
    .then((res)=>res.json())
    .then((data)=>{
      console.log(data)
      setName(data.name)
    })
    }
  },[uid])
---------------------------------------
수정해줌

개발자 도구에서 쿠키 설정해 주면 보여짐
```