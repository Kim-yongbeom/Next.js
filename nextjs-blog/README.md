https://chaeyoung2.tistory.com/53

## 1
```
main 태그 안 내용은 <h1>만 남김

<main>
<h1 className={styles.title}>
    Welcome to the <a href="https://nextjs.org">Next.js!</a>
</h1>
</main>
```

## 2
```
getServerSidePrps
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

<main>
    <h1 className={styles.title}>
      {time}
    </h1>
    <h1><Link href="/csr">CSR 로</Link></h1>
</main>
```
