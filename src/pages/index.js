import Hero from '../components/Hero'
import Banner from '../components/Banner'
import Card from '../components/Card'
import Head from 'next/head'
import Solucions from '../components/Solucions'
import Aliados from '../components/Aliados'

function Home() {
  const props={img:"/polibambu.jpg",name:"Laminas",url:"1"}
  return (
    <main className=''>
      <Head>
        <title>Home</title>
      </Head>
      <Hero bg={"bg-[url('/hero-image.JPG')]"}>
        <Banner />
      </Hero>
      <Solucions/>
      <div className=' m-10 flex flex-col gap-6 md:flex-row md:flex-wrap md:justify-center '>
        <Card img={"/polibambu.jpg"} name={"Laminas de Polibambu policarbonato "} url={"1"}/>
        <Card img={"http://techolandvzla.com/wp-content/uploads/2019/10/China-factory-fire-proof-polycarbonate-roofing-sunroof.jpg"} name={"Laminas de policarbonato Alveolo"} url={"2"}/>
        <Card img={"/polibambu.jpg"} name={"Laminas de Polibambu policarbonato"} url={"1"}/>
        <Card img={"http://techolandvzla.com/wp-content/uploads/2019/10/China-factory-fire-proof-polycarbonate-roofing-sunroof.jpg"} name={"Laminas de policarbonato Alveolo"} url={"2"}/>
      </div>
      <Aliados/>
    </main>
  )
}

export default Home
