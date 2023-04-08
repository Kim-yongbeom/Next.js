import Date from '../../components/Date'
import Layout from '../../components/Layout'
import { getAllPostIds, getPostData } from '../../lib/posts'
import utilStyles from '../../styles/utils.module.css'
import { useRouter } from 'next/router'
import { MDXRemote } from 'next-mdx-remote'
import CodeBlock from '../../components/CodeBlock'
import dynamic from 'next/dynamic'

const Button = dynamic(() => import('../../components/Button'), {
  loading: () => <div>Loading...</div>,
})

export async function getStaticPaths() {
  const paths = getAllPostIds()
  // const paths = [
  //   {
  //     params: {
  //       id: 'ssg-ssr',
  //     },
  //   },
  // ]
  return {
    paths,
    // fallback은 url 주소가 잘못 입력될때의 상황을 제어할 수 있는것 같음.
    // fallback: false,
    fallback: true,
    // fallback: 'blocking'
  }
}

export async function getStaticProps({ params, preview }) {
  console.log(`>>>>>>>> ${preview}`)
  const postData = await getPostData(params.id)
  return {
    props: {
      postData,
    },
  }
}

const components = { Button, CodeBlock }

export default function Post({ postData }) {
  const router = useRouter()

  if (router.isFallback) {
    return <div>Loading...</div>
  }

  return (
    <Layout>
      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>
        <br />
        {postData.contentHtml && (
          <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        )}
        {postData.mdxSource && (
          <MDXRemote {...postData.mdxSource} components={components} />
        )}
      </article>
    </Layout>
  )
}
