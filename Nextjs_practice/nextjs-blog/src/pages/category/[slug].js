import Layout from 'components/Layout'
import SubLayout from 'components/SubLayout'
import styles from '/styles/Home.module.css'

export default function CategorySlug() {

  return (
    <>
      <h1 className={styles.title}>Category Slug</h1>
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
