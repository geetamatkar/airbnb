import Head from 'next/head'
import Header from '../components/Header'
import Banner from '../components/Banner'

import Image from 'next/image'

export default function Home() {
  return (
    <div className=''>
      <Head> 
        <title>AIRBNB</title>
        <link>rel="icon" href="/favicon.ico" </link>
      </Head>
      {/*Header*/}
      <Header />
      {/*Banner*/}
      <Banner />

    </div>
    
  )
}
