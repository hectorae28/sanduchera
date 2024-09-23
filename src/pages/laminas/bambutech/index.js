/* eslint-disable react/prop-types */
import Titles from '@/components/Titles'
import Hero from '@/components/Hero'
import Modal from '@/components/Modal'
import FormContact from '@/components/FormContact'
import Head from 'next/head'
import React from 'react'

export async function getStaticProps() {
  const res = await fetch('http://localhost:8000/api/products/6/')
  const data = await res.json()
  return { props: { data } }
}

const Bambutech = ({ data }) => {
  const [modalShow, setModalShow] = React.useState(false)
  return (
    <div>
      <Head>
        <title>Techoland | Laminas Bambutech</title>
      </Head>
      <Hero bg={"bg-[url('/bambutech-1.png')]"}>
        <div className=' h-auto lg:h-96 flex flex-col items-center justify-center relative'>
          <Titles type="h1" style="text-white">{data?.nombre}</Titles>
          <p className=' text-lg text-white md:text-xl text-center mb-8'>
            {data?.descripcion}
          </p>
          <button
            className="text-white w-full md:absolute md:right-0 md:bottom-[-2rem] md:w-auto mt-4 sm:mt-0 bg-primary hover:bg-secondary focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 flex items-center justify-center"
            onClick={() => setModalShow(true)}
          >
            <svg
              className="w-5 h-5 -ms-2 me-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 4h1.5L8 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm.75-3H7.5M11 7H6.312M17 4v6m-3-3h6"
              />
            </svg>
            Agregar al Carrito
          </button >
        </div>
      </Hero>
      <Modal show={modalShow} onHide={() => setModalShow(false)} title={"Contactanos"}>
        <FormContact onHide={() => setModalShow(false)} />
      </Modal>
      <div className='max-w-screen-lg flex flex-col gap-6 px-4 mx-6 xl:mx-auto mt-5' >
        <Titles type="h2" >Características</Titles>
        <p className=' text-lg md:text-xl text-center md:text-left mb-8'>
          Laminas de Policarbonato alveolar con varas de bambú integradas, es una novedosa solución para uso en espacios interiores y exteriores. Su resistencia, durabilidad y rústico diseño, la convierten en una alternativa estética y funcional, ideal para decoración de terrazas, sombreaderos o separación de ambientes.
        </p>
        <Titles type="h2">Ventajas</Titles>
        <section className="gap-8 items-center py-8 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
          <img className="w-full cover mb-8" src="/bambutech-1.png" alt="laminas image" />
          <ul className='max-w-screen-lg list-outside list-disc grid gap-2 grid-cols-1 lg:gap-4 xl:mx-auto'>
            <li className='mb-3 text-lg text-black md:text-xl '>
              Excelente aislamiento termico.
            </li>
            <li className='mb-3 text-lg text-black md:text-xl '>
              Transmisión controlada de la luz del día.
            </li>
            <li className='mb-3 text-lg text-black md:text-xl '>
              Filtro rayos UV en cara superior que impide su decoloración.
            </li>
            <li className='mb-3 text-lg text-black md:text-xl '>
              Flexible y fácil de instalar, cuenta con accesorios de unión y término.
            </li>
            <li className='mb-3 text-lg text-black md:text-xl '>
              Liviano
            </li>
          </ul>
        </section>
        <section className="bg-white dark:bg-gray-900">
          <div className="gap-16 items-center py-8 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
            <div className="font-light  sm:text-lg ">
              <Titles type="h2" >Usos</Titles>
              <ul className='max-w-screen-lg list-outside list-disc grid gap-2 grid-cols-1 lg:gap-8 xl:mx-auto mt-5'>
                <li className='mb-3 text-lg text-black md:text-xl '>
                  Terrazas y Piscinas
                </li>
                <li className='mb-3 text-lg text-black md:text-xl '>
                  Patios de luz
                </li>
                <li className='mb-3 text-lg text-black md:text-xl '>
                  Separador de ambientes
                </li>
                <li className='mb-3 text-lg text-black md:text-xl '>
                  Lucernarios
                </li>
                <li className='mb-3 text-lg text-black md:text-xl '>
                  Estacionamientos
                </li>
              </ul>
            </div>
            <div className="grid md:grid-cols-2 gap-4 mt-8">
              <img className="h-[24rem] w-4/5 md:w-full object-cover rounded-lg" src="/bambutech-3.jpg" alt="office content 1" />
              <img className="mt-4 h-[23rem] w-4/5 ml-10 md:w-full object-cover lg:mt-10 rounded-lg" src="/bambutech-4.jpg" alt="office content 2" />
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Bambutech