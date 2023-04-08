// preview는 쿠키를 이용해서 getStaticProps를 request time에도 사용하게 만들어 준다
export default function handler(req, res) {
  if (req.query.token !== 'kim' || !req.query.post) {
    return res.status(401).json({
      message: 'Invalid Token',
    })
  }

  res.setPreviewData({})

  res.redirect(`/posts/${req.query.post}`)
}
