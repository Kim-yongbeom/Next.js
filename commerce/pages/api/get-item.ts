import type { NextApiRequest, NextApiResponse } from 'next'
import { Client } from '@notionhq/client'

const notion = new Client({
  auth: 'secret_tKgpJgfbzv3p66i35xuIicp9n6SrcpMQpramxi1XRyc'
})

const databaseId = '2871a66787f14742b69503ab696280a4'

async function getItem() {
  try {
    const response = await notion.databases.query({
      database_id: databaseId,
      sorts: [
        {
          property: 'price',
          direction: 'ascending'
        }
      ]
    })
    console.log(response)
    return response
  } catch (error) {
    console.error(JSON.stringify(error))
  }
}

type Data = {
  items?: any
  message: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {

  try {
    const response = await getItem()
    res.status(200).json({ items: response?.results, message: `Success` })
  } catch (error) {
    res.status(400).json({ message: `Failed` })
  }
}
