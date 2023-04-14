import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useRef, useState } from 'react'

// 동적인 getServerSideProps가 파일안에 들어가 있으면 build시 js 파일로 가져오고 , 정적인 상태인 경우는 html로 가져온다
// export async function getServerSideProps() {
//   return {}
// }

function write() {
  const router = useRouter()

  useEffect(() => {
    console.log(router.query)
  }, [router.query])
  const idRef = useRef(undefined)
  const titleRef = useRef(undefined)
  const contentRef = useRef(undefined)

  const [showLink, setShowLink] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()

    const id = idRef.current.value
    const title = titleRef.current.value
    const content = contentRef.current.value

    if (id && title && content) {
      fetch('/api/post/write', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          id,
          title,
          content,
        }),
      })
        .then((response) => {
          if (response.ok) {
            return response.json()
          }
          throw new Error('Fetch Error')
        })
        .then((data) => {
          setShowLink(true)
          alert(data.message)
        })
        .catch((error) => alert(error))
    }
  }

  return (
    <>
    <Head>
      <title>Write a post</title>
    </Head>
      <h1>Write a post</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="id" placeholder="id" required ref={idRef} />
        <br />
        <input
          type="text"
          name="title"
          placeholder="title"
          required
          ref={titleRef}
        />
        <br />
        <textarea
          type="text"
          name="content"
          placeholder="content"
          required
          ref={contentRef}
        />
        <br />
        <input type="submit" value="Create" />
      </form>
      {setShowLink && idRef.current && (
        <Link href={`/posts/${idRef.current.value}`}>Create Post Link</Link>
      )}
    </>
  )
}

export default write
