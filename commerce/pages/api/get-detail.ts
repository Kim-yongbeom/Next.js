import type { NextApiRequest, NextApiResponse } from 'next'
import { Client } from '@notionhq/client'

const notion = new Client({
  auth: 'secret_tKgpJgfbzv3p66i35xuIicp9n6SrcpMQpramxi1XRyc'
})

const databaseId = '2871a66787f14742b69503ab696280a4'

async function getDetail(pageId: string, propertyId: string) {
  try {
    const response = await notion.pages.properties.retrieve({
      page_id: pageId,
      property_id: propertyId
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
    const {pageId, propertyId} = req.query
    const response = await getDetail(String(pageId), String(propertyId))
    res.status(200).json({ items: response, message: `Success` })
  } catch (error) {
    res.status(400).json({ message: `Failed` })
  }
}
