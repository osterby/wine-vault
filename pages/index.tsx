import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Nav from '../components/Nav';
import NFTBanner from '../components/NFTBanner';
import SoulboundBanner from '../components/NFTBanner';

const Home: NextPage = () => {
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
      <div className="p-6 min-h-screen bg-gradient-to-t from-skin-bg-yellow to-skin-bg-red">
        <Nav />
        <div className="p-6"></div>
        <main className="flex flex-col font-medium items-center gap-6 justify-between relative">
          <Hero />
          <NFTBanner />
        </main>
        <div className="p-6"></div>
      </div>
      <Footer />
    </>
  )
}

export default Home
