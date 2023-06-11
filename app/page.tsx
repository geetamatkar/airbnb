import Head from 'next/head'
import Header from '../components/Header'
import Banner from '../components/Banner'
import SmallCard from '../components/SmallCard'
import MediumCard from '../components/MediumCard'
import LargeCard from '../components/LargeCard'
import Footer from '../components/Footer'
import Image from 'next/image'
import getData from '../components/Data'
import getCard from '../components/Card'




export default async function Home() {

  
  const reply = await getData();
  console.log(reply)

  const card = await getCard();
  console.log(card)
  return (
    <div className=''>
      <Head> 
        <title>AIRBNB</title>
        <link>rel=&quoticon&quot href=&quot/favicon.ico&quot </link>
      </Head>
      {/*Header*/}
      <Header />
      {/*Banner*/}
      <Banner />

      <main className='max-w-5xl mx-auto px-8 sm:px-16'>
      
        <section className='pt-5'>
          <h2 className='text-4xl font-semibold pb-5'>Explore Nearby</h2>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>

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
                    
                    
                    <SmallCard
                    key={img}
                    img={img}
                    distance={distance}
                    location={location}
                    />
                  )
                )}

            </div>  
          
        </section>

        <section>
          <h2 className='text-4xl font-semibold py-8'>Live Anywhere</h2>
          <div className='flex space-x-4 overflow-scroll scrollbar-hide p-5 -ml-3'>

          
              {card?.map(
                  ({
                      img,
                      title,
                    }: {
                      img: string,
                      title: string
                    }) => (
                      <MediumCard
                      key={img}
                      img={img}
                      title={title} />
                    )
                )
              }
          </div>

          
        </section>

        <LargeCard 
          img="https://links.papareact.com/4cj"
          title="The Greatest Outdoors"
					description="Wishlists curated by Airbnb"
					buttonText="Get Inspired"
        />
      </main>

      <Footer />
    </div>    
  ) 
}



  



