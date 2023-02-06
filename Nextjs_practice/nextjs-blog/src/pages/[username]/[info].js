import Layout from 'components/Layout'
import SubLayout from 'components/SubLayout'
import { useRouter } from 'next/router'
import styles from '/styles/Home.module.css'

export default function UsernameInfo() {
  const router = useRouter()
  const {username, info} = router.query

  return (
    <>
      <h1 className={styles.title}>{username}'s {info}</h1>
    </>
  )
}

UsernameInfo.getLayout = function getLayout(page) {
  return (
    <Layout>
      <SubLayout>{page}</SubLayout>
    </Layout>
  )
}
