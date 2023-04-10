import Layout from '@/components/Layout'
import '../styles/globals.css'
import { useRouter } from 'next/router'

export default function App({ Component, pageProps }) {
  const router = useRouter()
  return (
    <Layout home={router.pathname === '/'}>
      <Component {...pageProps} pathname={router.pathname} />
    </Layout>
  )
}
