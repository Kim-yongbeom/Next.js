import { useEffect, useState } from 'react'
import Layout from 'components/Layout'
import SubLayout from 'components/SubLayout'
import styles from '/styles/Home.module.css'
import { useRouter } from 'next/router'

export default function MyInfo() {
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
      }}>edit(replace)</button>
    </>
  )
}

MyInfo.getLayout = function getLayout(page) {
  return (
    <Layout>
      <SubLayout>{page}</SubLayout>
    </Layout>
  )
}
