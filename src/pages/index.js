/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import Head from 'next/head'
import Solucions from '../components/Solucions'

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
      <Solucions data={data}/>
      {/* <div className=' m-10 flex flex-col gap-6 md:flex-row md:flex-wrap md:justify-center '>
        <Card img={"/polibambu.jpg"} name={"Laminas de Polibambu policarbonato "} url={"1"}/>
        <Card img={"http://techolandvzla.com/wp-content/uploads/2019/10/China-factory-fire-proof-polycarbonate-roofing-sunroof.jpg"} name={"Laminas de policarbonato Alveolo"} url={"2"}/>
        <Card img={"/polibambu.jpg"} name={"Laminas de Polibambu policarbonato"} url={"1"}/>
        <Card img={"http://techolandvzla.com/wp-content/uploads/2019/10/China-factory-fire-proof-polycarbonate-roofing-sunroof.jpg"} name={"Laminas de policarbonato Alveolo"} url={"2"}/>
      </div>
      <Aliados/> */}
    </main>
  )
}

export default Home
