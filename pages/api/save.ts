// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { writeFileSync } from 'fs'
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
    name: string
}

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    writeFileSync("./tmp/test.json", JSON.stringify({ name: "Fay" }))
    res.status(200).json({ name: 'Done' })
}
