/* eslint-disable react/prop-types */
import Titles from '@/components/Titles'
import Hero from '@/components/Hero'
import Head from 'next/head'
import React from 'react'

export async function getStaticProps() {
  const res = await fetch('http://localhost:8000/api/products/3/')
  const data = await res.json()
  return { props: { data } }
}

const Corrugal = ({ data }) => {
  return (
    <div>
      <Head>
        <title>Techoland | Laminas Corrugal</title>
      </Head>
      <Hero bg={"bg-[url('/corrugal-hero.jpg')]"}>
        <div className=' h-auto lg:h-96 flex flex-col items-center justify-center relative'>
          <Titles type="h1" style="text-white">{data?.nombre}</Titles>
          <p className=' text-lg text-white md:text-xl text-center mb-8'>
            {data?.descripcion}
          </p>
          <button
            className="text-white w-full md:absolute md:right-0 md:bottom-[-2rem] md:w-auto mt-4 sm:mt-0 bg-primary hover:bg-secondary focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 flex items-center justify-center"
          /* onClick={() => setModalShow(true)} */
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
      <div className='max-w-screen-lg flex flex-col gap-6 px-4 mx-6 xl:mx-auto mt-5' >
        <Titles type="h2" >Características</Titles>
        <p className=' text-lg md:text-xl text-center md:text-left mb-8'>
          Las láminas Corrugal de  Polygal, están fabricadas en Chile con materias primas de la más alta calidad.
          <br />
          Tienen una excelente flexibilidad que permite obtener importantes radios de curvatura en aplicaciones en donde dicha característica es necesaria. Su durabilidad y alta resistencia al impacto, 200 veces superior a la del vidrio, reducen los riesgos de ruptura antes, durante y después de la instalación. Su peso es sumamente liviano, por lo que no se requieren estructuras complejas y caras para su instalación. Son fáciles y rápidas de instalar. Permiten el paso de la luz natural, controlando los rayos UV, pues tienen una capa coextruida de filtro UV, permitiendo diseñar espacios iluminados naturalmente, favoreciendo el ahorro energético. Además, son muy resistente al viento y al granizo.
          <br />
          La gran variedad de geometrías, espesores y colores que ofrece Corrugal, hace que sus productos sean la mejor elección para revestimientos y cubiertas en edificios urbanos, rurales, viviendas, industriales y comerciales
        </p>
        <Titles type="h2">Ventajas</Titles>
        <section className="gap-8 items-center py-8 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
          <img className="w-full cover mb-8" src="/corrugal-1.jpg" alt="laminas image" />
          <ul className='max-w-screen-lg list-outside list-disc grid gap-2 grid-cols-1 lg:grid-cols-2 lg:gap-8 xl:mx-auto'>
            <li className='mb-3 text-lg text-black md:text-xl '>
              Altamente transparentes.
            </li>
            <li className='mb-3 text-lg text-black md:text-xl '>
              Alta Resistencia al impacto.
            </li>
            <li className='mb-3 text-lg text-black md:text-xl '>
              Virtualmente irrompibles.
            </li>
            <li className='mb-3 text-lg text-black md:text-xl '>
              Livianas y flexibles.
            </li>
            <li className='mb-3 text-lg text-black md:text-xl '>
              Amplio rango Temperatura de Servicio.
            </li>
            <li className='mb-3 text-lg text-black md:text-xl '>
              Buen comportamiento al Fuego.
            </li>
            <li className='mb-3 text-lg text-black md:text-xl '>
              No emite gases tóxicos.
            </li>
            <li className='mb-3 text-lg text-black md:text-xl '>
              Fáciles de manipular, cortar e instalar.
            </li>
            <li className='mb-3 text-lg text-black md:text-xl '>
              Protección UV.
            </li>
            <li className='mb-3 text-lg text-black md:text-xl '>
              Fácil limpieza y mantenimiento.
            </li>
          </ul>
        </section>
        <section className="flex flex-col items-center">
          <Titles type="h2" >CORRUGAL SINUS</Titles>
          <p className=' text-lg md:text-xl mb-8'>
            Las Láminas Corrugal Sinus  de Policarbonato  están diseñadas para su aplicación en cubiertas y revestimientos de galpones y cobertizos industriales del área minera, química, comercial y manufacturera, entre otros. Su objetivo es generar espacios iluminados naturalmente, en complementación con perfiles metálicos.
            <br />
            Excelente resistencia a condiciones climáticas y atmosféricas. Ofrecemos garantía de rendimiento continuo ante
            exposición a la intemperie. Es completamente liso y se limpia con las precipitaciones. La lámina tiene una capa
            coextruída de filtro UV por una cara.
          </p>
          <img className="w-full md:w-1/2 rounded-lg" src="/corrugal-3.jpg" alt="laminas image" />
        </section>
        <section className="flex flex-col items-center my-10">
          <Titles type="h2" >CORRUGAL GRECA</Titles>
          <p className=' text-lg md:text-xl mb-8'>
            Las láminas Greca de Policarbonato Polygal están diseñados para su aplicación en cubiertas y revestimientos de galpones y cobertizos industriales del área minera, química, comercia y manufacturera, entre otros.
            <br />
            Su objetivo es generar espacios iluminados naturalmente, en complementación con perfiles metálicos. Excelente resistencia a condiciones climáticas y atmosféricas. Ofrecemos garantía de rendimiento continuo ante
            exposición a la intemperie. Es completamente liso y se limpia con las precipitaciones. La lámina tiene una capa
            coextruida de filtro UV por una cara.
            <br />
            Planchas livianas, de fácil manejo y corte. Necesitan una estructura de soporte liviana y no requieren de gran mantenimiento
          </p>
          <img className="w-full md:w-1/2 rounded-lg" src="/corrugal-2.jpg" alt="laminas image" />
        </section>
      </div>
    </div>
  )
}

export default Corrugal