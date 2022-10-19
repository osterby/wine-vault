// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios';

const { log } = console;

type Vault = {
  vault: string,
  address: string,
}

type Data = {
  msg: string
}

export default async function vaultAdd(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const reqPayload = req?.body;
  console.log(reqPayload);
  const {vault, address} = req?.body;
  console.log(vault);
  console.log(address);
  console.log(process.env.AIRTABLE_BASE);

  if(!vault || !address) {
    return res.status(400).json({msg: "Missing Fields"});
  }
  if (req.method !== "POST") {
    return res.status(405).json({ msg:"Method Not Allowed" });
  }

  try {
    const request = await axios({
      baseURL: `https://api.airtable.com/v0/${process.env.AIRTABLE_BASE}/`,
      url: "/Vault",
      method: "POST",
      headers: {
        "Authorization": "Bearer " + process.env.AIRTABLE_KEY,
        "Content-Type": "application/json"
      },
      data: {
        fields : {
          Vault: vault,
          Address: address,
        }
      }
    });
  } catch (error) {
    log(error)
    return res.status(500).json({ msg:"Internal Error" });
  }
 
  return res.status(200).json({ msg:"Success" });



    // TODO: Do something, submit contract
    // TODO: Send to airtable (prob do that on the original call tho)
}
