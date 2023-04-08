// preview는 쿠키를 이용해서 getStaticProps를 request time에도 사용하게 만들어 준다
export default function handler(req, res) {
  res.clearPreviewData()

  res.status(200).json({
    message: 'cookies cleared',
  })
}
