// prisma는 지운 상태
import type { NextApiRequest, NextApiResponse } from 'next'
import {PrismaClient} from '@prisma/client'

const prisma = new PrismaClient()

async function getProducts(skip: number, take: number) {
  try {
    const response = await prisma.products.findMany({
      skip: skip,
      take: take
    })
    console.log(response)
    return response
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
  const {skip, take} = req.query;

  if(skip==null || take==null) {
    res.status(400).json({message: 'no skip or take'})
    return
  }

  try {
    const products = await getProducts(Number(skip), Number(take))
    res.status(200).json({ items: products, message: `Success!!!!` })
  } catch (error) {
    res.status(400).json({ message: `Failed` })
  }
}
