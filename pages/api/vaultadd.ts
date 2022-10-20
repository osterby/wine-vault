// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios';

const { log, info, warn } = console;

type Data = {
  msg: string
}

export default async function vaultAdd(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const reqPayload = req?.body;
  info(reqPayload);
  const {vault, address} = req?.body;

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
    log(request.statusText);
    info("Status: ", request.status);
    // Is it the 429 rate limiting error response?
    info("Data: ", request.data);
    info("ID: ", request.data.id);

    switch(request.status) {
      case 200: {
        return res.status(200).json({ msg:request.data });
      }
      case 429: {
        warn("P2 INCIDENT - Rate limiting error returned.");
        // TODO: Active Alert Required
        return res.status(429).json({ msg:"Rate Limit Reached" });
      }
      case 402: {
        warn("P1 INCIDENT - Airtable Payment Issue encountered");
        // TODO: Active Alert Required
        return res.status(request.status).json({ msg:request.statusText });
      }
      case 500: {
        warn("P1 INCIDENT OUTWARD - Internal Server Error - The server encountered an unexpected condition.");
        // TODO: Active Alert Required
        warn(/** Payload */);
        warn(reqPayload);
        warn(/** End Payload */);
        return res.status(request.status).json({ msg:request.statusText });
      }
      case 502: {
        warn("P1 INCIDENT OUTWARD - Bad Gateway Airtable's servers are restarting or an unexpected outage is in progress. Requests are safe to retry.");
        // TODO: Active Alert Required
        warn(/** Payload */);
        warn(reqPayload);
        warn(/** End Payload */);

        return res.status(request.status).json({ msg:request.statusText });
      }
      case 503: {
        warn("P1 INCIDENT - Service Unavailable - The server could not process your request in time. The server could be temporarily unavailable, or it could have timed out processing your request. You should retry the request with backoffs.");
        // TODO: Active Alert Required
        warn(/** Payload */);
        warn(reqPayload);
        warn(/** End Payload */);
        return res.status(request.status).json({ msg:request.statusText });
      }


      default: {
        return res.status(request.status).json({ msg:request.statusText });
      }
    }

  } catch (error) {
    warn(error);
    warn(/** Payload */);
    warn(reqPayload);
    warn(/** End Payload */);
    return res.status(500).json({ msg:"Internal Error" });
  }
}
