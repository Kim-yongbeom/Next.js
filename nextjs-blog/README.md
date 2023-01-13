## 1
```
main 태그 안 내용은 <h1>만 남김

<main>
<h1 className={styles.title}>
    Welcome to the <a href="https://nextjs.org">Next.js!</a>
</h1>
</main>
```

## SSR(server side rendering)
- 서버에서 데이터를 가져오고 화면에 

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
getStaticProps을 사용해서 SSG를 구현한다.

SSG는 yarn dev 즉 개발서버에서는 동작하지 않는다.
SSG가 SSR 처럼 동작함

그래서 yarn build 후 yarn start 해야함

yarn build 했을 때 시간을 SSG 페이지에서 그려둔다.
```
