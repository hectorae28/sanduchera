/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import AliadosPlaskolite  from '../components/Aliados'
import Head from 'next/head'
import ProductsList from '../components/Solucions'
import { AliadosPlazitPolygal } from '../components'

export async function getStaticProps() {
  const res = await fetch('http://localhost:8000/api/productsList/')
  const data = await res.json()
  return { props: { data } }
}

function Home({data}) {
  return (
    <main className=''>
      <Head>
        <title>Techoland | Inicio</title>
      </Head>
      <Hero bg={"bg-[url('/hero-image.JPG')]"}>
        <Banner />
      </Hero>
      <AliadosPlaskolite/>
      <ProductsList data={data}/>
      <AliadosPlazitPolygal/>
      {/* <div className=' m-10 flex flex-col gap-6 md:flex-row md:flex-wrap md:justify-center '>
        <Card img={"/polibambu.jpg"} name={"Laminas de Polibambu policarbonato "} url={"1"}/>
        <Card img={"http://techolandvzla.com/wp-content/uploads/2019/10/China-factory-fire-proof-polycarbonate-roofing-sunroof.jpg"} name={"Laminas de policarbonato Alveolo"} url={"2"}/>
        <Card img={"/polibambu.jpg"} name={"Laminas de Polibambu policarbonato"} url={"1"}/>
        <Card img={"http://techolandvzla.com/wp-content/uploads/2019/10/China-factory-fire-proof-polycarbonate-roofing-sunroof.jpg"} name={"Laminas de policarbonato Alveolo"} url={"2"}/>
      </div>
       */}
    </main>
  )
}

export default Home
