import { createPost } from "../../../lib/posts"
import {format} from 'date-fns'

export default async function handler(req, res) {
    const {id, title, content} = req.body

    try {
        throw new Error('dododd')
        await createPost({id, title, date: format(new Date(), 'yyyy-MM-dd'), content})
        res.status(200).json({message: 'create success'})
    } catch (error) {
        res.status(500).json({message: error})
    }
}