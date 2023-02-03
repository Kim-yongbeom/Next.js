import Layout from 'components/Layout'
import SubLayout from 'components/SubLayout'
import styles from '/styles/Home.module.css'

export default function UsernameInfo() {

  return (
    <>
      <h1 className={styles.title}>Username Info</h1>
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
