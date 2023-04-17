// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { readFileSync } from 'fs'
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const jjj = JSON.parse(readFileSync("./tmp/test.json").toString())
  res.status(200).json(jjj)
}
