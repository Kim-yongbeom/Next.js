import Layout from 'components/Layout'
import SubLayout from 'components/SubLayout'
import { useRouter } from 'next/router'
import styles from '/styles/Home.module.css'

export default function CategorySlug() {
  const router = useRouter()
  const {slug, from, age} = router.query

  return (
    <>
      <h1 className={styles.title}>Category {slug} from {from} {age}</h1>
    </>
  )
}

CategorySlug.getLayout = function getLayout(page) {
  return (
    <Layout>
      <SubLayout>{page}</SubLayout>
    </Layout>
  )
}
