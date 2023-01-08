This is a starter template for [Learn Next.js](https://nextjs.org/learn).

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

<main>
<h1 className={styles.title}>
    {time}
</h1>
</main>
```

새로고침을 할 때마다 터미널에 server 스트링이 찍힘