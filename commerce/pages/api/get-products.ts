import type { NextApiRequest, NextApiResponse } from 'next'
import {PrismaClient} from '@prisma/client'

const prisma = new PrismaClient()

async function getProducts() {
  try {
    const response = await prisma.products.findMany()
    console.log(response)
  } catch (error) {
    console.error(error)
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
    const response = await getProducts()
    res.status(200).json({ items: response, message: `Success` })
  } catch (error) {
    res.status(400).json({ message: `Failed` })
  }
}
