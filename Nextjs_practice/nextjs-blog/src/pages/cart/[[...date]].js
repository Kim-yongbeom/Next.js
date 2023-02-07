import Layout from 'components/Layout'
import SubLayout from 'components/SubLayout'
import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from '/styles/Home.module.css'

export default function CartDateSlug() {
  const router = useRouter()
  const {date} = router.query

  return (
    <>
      <h1 className={styles.title}>Cart Date Slug {JSON.stringify(date)}</h1>
      <Link href="/cart/2023/02/07">2023년 2월 7일로</Link>
      <br/>
      <button onClick={()=>router.push('/cart/2023/02/01')}>2023년 2월 1일로</button>
    </>
  )
}

CartDateSlug.getLayout = function getLayout(page) {
  return (
    <Layout>
      <SubLayout>{page}</SubLayout>
    </Layout>
  )
}
