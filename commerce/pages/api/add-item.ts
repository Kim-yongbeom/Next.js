import type { NextApiRequest, NextApiResponse } from 'next'
import {Client} from '@notionhq/client'

const notion = new Client({
  auth: 'secret_oLv71qbMHnSskWbgs4uFHdSwQhGKC6HeGU1o8OxSkUh'
})

const databaseId = '63dce21733464284a93b92b8f61fd35c'

async function addItem(name: string) {
  
}

type Data = {
  message: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const {name} = req.query
  res.status(200).json({ message: `Success ${name} added` })
}
