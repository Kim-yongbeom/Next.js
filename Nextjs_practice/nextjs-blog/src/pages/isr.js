import Head from 'next/head'
import Layout from '../components/Layout'
import SubLayout from '../components/SubLayout'
import styles from '../../styles/Home.module.css'

export async function getStaticProps() {
  console.log('server')
  return {
    props: { time: new Date().toISOString() },
    revalidate: 1,
  }
}

export default function ISR({ time }) {
  return (
    <>
      <h1 className={styles.title}>{time}</h1>
    </>
  )
}

ISR.getLayout = function getLayout(page) {
  return (
    <Layout>
      <SubLayout>{page}</SubLayout>
    </Layout>
  )
}
