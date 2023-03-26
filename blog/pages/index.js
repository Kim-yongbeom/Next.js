import Head from 'next/head'
import { useEffect, useState } from 'react'
import Layout, { siteTitle } from '../components/Layout'
import { getSortedPostsData } from '../lib/posts'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import Date from '../components/Date'

// ********************* ssg *********************
export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData,
    },
  }
}

//ssg
// ********************* ssr *********************
// export async function getServerSideProps() {
//   const allPostsData = getSortedPostsData()
//   return {
//     props: {
//       allPostsData,
//     }
//   }
// }

// csr 일때는 {allPostsData} props 를 빼고
// ssg, ssr 일때는 {allPostsData} props 를 넣는다
export default function Home({ allPostsData }) {
  // ********************* csr *********************
  // const [allPostsData, setAllPostsData] = useState([])
  // useEffect(()=>{
  //   fetch('/api/posts')
  //   .then((res) => res.json())
  //   .then((data) => {
  //     console.log(JSON.stringify(data))
  //     setAllPostsData(data.allPostsData)
  //   })
  // },[])

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>[Your Self Introduction]</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
          <h2 className={utilStyles.headingLg}>Blog</h2>
          <Link href='/post/write' style={{marginTop: '20px'}}>글쓰기</Link>
        </div>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}
