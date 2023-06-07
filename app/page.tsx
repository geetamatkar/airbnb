import Head from 'next/head'
import Header from '../components/Header'
import Banner from '../components/Banner'


import Image from 'next/image'

export default async function Home() {

  const reply = await getData();
  console.log(reply)
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

      <main className='max-w-5xl mx-auto px-8 sm:px-16'>
      
        <section className='pt-5'>
          <h2 className='text-4xl font-semibold pb-5'>Explore Nearby</h2>

          {/* Pull data from server */}
          {reply?.map(
							({
								img,
								location,
								distance,
							}: {
								img: string;
								location: string;
								distance: string;
							}) => (
								<h2>{location}</h2>
							)
						)}
          
        </section>
      </main>
    </div>    
  ) 
}

export async function getData() {

  const exploreData = await fetch('https://www.jsonkeeper.com/b/4G1G');

  return exploreData.json()
  
}
