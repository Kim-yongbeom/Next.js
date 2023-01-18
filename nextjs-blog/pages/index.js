import Head from 'next/head'
import styles from '../styles/Home.module.css';
import Link from "next/link"

export async function getServerSideProps(){
  console.log('server')
  return {
    props: {time: new Date().toISOString()}
  }
}

export default function Home({time}) {
  return (
      <>
        <h1 className={styles.title}>
          {time}
        </h1>
        <h1><Link href="/csr">CSR 로</Link></h1>
        <h1><Link href="/ssg">SSG 로</Link></h1>
        <h1><Link href="/isr">ISR 로</Link></h1>
      </>
  )
}