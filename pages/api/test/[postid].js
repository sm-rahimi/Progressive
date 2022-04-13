export default function handler(req, res) {
    const { postid } = req.query
    res.end(`Post: ${postid}`)
    //res.status(200).json({ name: 'John Doe' })
}