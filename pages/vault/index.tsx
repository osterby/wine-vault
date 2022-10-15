import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

const Vault: NextPage = () => {
    return (
      <>
        <Head>
          <title>Wine Vault</title>
          <meta
              name="Wine Vault"
              content="Community data project for wine geeks."
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div>Hello Vault</div>
      </>
    )
}

export default Vault