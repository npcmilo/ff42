'use client'

import Image from 'next/image'

import Link from 'next/link'
import Header from './components/header'
import Footer from './components/footer'
import PackStore from './components/packstore'
import StoreHeader from './components/storeheader'
import faSportsRoundLogo from '../public/images/fasports-round-logo.svg';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-gray-800" style={{zIndex: -1}}>
      <Header></Header>
      <div className="flex flex-col items-center justify-between min-w-full" style={{height:"80vh"}}>
        <StoreHeader></StoreHeader>
        <PackStore></PackStore>
        <Footer></Footer>
      </div>
      <Image src={faSportsRoundLogo} alt="FF Sports Round Logo" height={250} width={300}
      style={{
        position: 'absolute',
        bottom: '3%',
        left: '2%',
        zIndex: 0
      }}/>
    </main>
  )
}