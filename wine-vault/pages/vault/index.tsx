import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Footer from '../../components/Footer';
import Nav from '../../components/Nav';
import UserVault from '../../components/UserVault';

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
      {/** 
       * p-6 padding: 1.5rem; * 24px * https://tailwindcss.com/docs/padding
       * min--screen minimum height min-height: 100vh; https://tailwindcss.com/docs/min-height#setting-the-minimum-height
       * bg-gradient-to-t 
       *  from-skin-bg-yellow 
       *  via-?? 
       *  to-skin-bg-red
       */}
      <div className="p-6 
                      min-h-screen 
                      bg-gradient-to-t 
                      from-skin-bg-yellow 
                      via-skin-bg-red
                      to-skin-bg-purple
                      ">
        <Nav />
        <div className="p-6"></div>
        {/**
         * flex - Sets as flexbox
         * flex-col - flex in columns, positioned vertically
         * font-medium - 
         * items-center - aligns to the center of the cross axis items-start would be along the top
         * gap-6 - gap between the rows and columns
         * justify-between - pushes the left and right items as far wide as they can go
         * relative - positioning elements
         */}
        <main className="flex 
                        flex-col 
                        font-medium 
                        items-center 
                        gap-6 
                        justify-between 
                        relative">
            <UserVault />
        </main>

      </div>
      <Footer />
    </>
  )
}

export default Vault
