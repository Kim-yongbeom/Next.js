import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

// root에 posts 경로를 뜻함 (posts 폴더)
const postsDirectory = path.join(process.cwd(), 'posts')

export function getSortedPostsData() {
  // file 이름을 가져오는 node 의 라이브러리(fs)
  const fileNames = fs.readdirSync(postsDirectory)
  const allPostsData = fileNames.map((fileNames) => {
    // .md 라는 텍스트를 지움
    const id = fileNames.replace(/\.md$/, '')

    const fullPath = path.join(postsDirectory, fileNames)
    // 파일 읽어줌
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    // 메타 데이터 가져옴
    const matterResult = matter(fileContents)

    return {
      id,
      ...matterResult.data,
    }
  })
  return allPostsData.sort(({ data: a }, { data: b }) => {
    if (a < b) {
      return 1
    } else if (a > b) {
      return -1
    } else {
      return 0
    }
  })
}

export function getAllPostIds() {
  const fileNames = fs.readdirSync(postsDirectory)
  return fileNames.map((fileNames) => {
    return {
      params: {
        id: fileNames.replace(/\.md$/, ''),
      },
    }
  })
}

export async function getPostData(id) {
  const fullPath = path.join(postsDirectory, `${id}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  const matterResult = matter(fileContents)

  const processedContent = await remark()
    .use(html)
    .process(matterResult.content)
  const contentHtml = processedContent.toString()

  return {
    id,
    contentHtml,
    ...matterResult.data,
  }
}

export async function createPost({ id, title, date, content }) {
  const fullPath = path.join(postsDirectory, `${id}.md`)
  const data = `---
  title: '${title}'
  date: '${date}'
---

${content}
`

  fs.writeFileSync(fullPath, data)
}
