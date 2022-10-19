// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'



type Vault = {
  vault: string,
  address: string
}

export default function vaultAdd(
  req: NextApiRequest,
  res: NextApiResponse<Vault>
) {
  const reqPayload = req?.body;
  res.status(200).json({ vault: 'John Doe', address: '' })
}
