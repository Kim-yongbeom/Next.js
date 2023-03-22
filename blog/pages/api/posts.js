import { getSortedPostsData } from '../../lib/posts'

export default function handler(req, res) {
  // csr 일 때 호출
  const allPostsData = getSortedPostsData()
  console.log(allPostsData)
  res.status(200).json({ allPostsData })
}
