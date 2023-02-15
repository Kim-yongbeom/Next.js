export default function handler(req, res) {
    const {uid} = req.query
    const cookies = req.cookies
    res.status(200).json({name: `${uid}, ${JSON.stringify(cookies)}`})
}