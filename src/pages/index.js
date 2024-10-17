/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import AliadosPlaskolite  from '../components/Aliados'
import Head from 'next/head'
import ProductsList from '../components/Solucions'
import { AliadosPlazitPolygal } from '../components'

export async function getServerSideProps() {
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
    </main>
  )
}

export default Home
