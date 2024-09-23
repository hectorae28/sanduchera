/* eslint-disable react/prop-types */
import Hero from '@/components/Hero'
import Titles from '@/components/Titles'
import Modal from '@/components/Modal'
import FormContact from '@/components/FormContact'
import Head from 'next/head'
import React, { useState } from 'react'

export async function getStaticProps() {
  const res = await fetch('http://localhost:8000/api/products/4/')
  const data = await res.json()
  return { props: { data } }
}

const Macizo = ({ data }) => {
  const [modalShow, setModalShow] = useState(false)
  return (
    <div>
      <Head>
        <title>Techoland | Laminas Macizo</title>
      </Head>
      <Hero bg={"bg-[url('/hero-image.JPG')]"}>
        <div className=' h-auto lg:h-96 flex flex-col items-center justify-center relative'>
          <Titles type="h1" style="text-white">
            {data?.nombre}
          </Titles>
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
      <div className='max-w-screen-lg flex flex-col items-center gap-6 px-4 mx-6 xl:mx-auto mt-5' >
        <section className="flex flex-col items-center mb-8 max-w-screen-lg">
          <Titles type="h2" >Características</Titles>
          <p className=' text-lg md:text-xl text-center md:text-left mb-8'>
            Tienen la mitad del peso del vidrio y son virtualmente irrompibles. Las láminas de Monogal cumplen con las más exigentes aplicaciones para maquinarias, automotor, seguridad, la fabricación de claraboyas, acristalamientos planos y curvos, entre otros tipos de proyectos de arquitectura. Una especial capa de protección UV en uno o dos lados, le permiten resistir las inclemencias del ambiente por largo tiempo.
          </p>
          <img className="w-full md:w-1/2 rounded-lg" src="/macizo-1.jpg" alt="laminas image" />
        </section>
        <section className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-lg xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
          <img className="w-full" src="/macizo-2.jpg" alt="laminas image" />

          <div className="mt-4 md:mt-0">
            <Titles type="h2" >
              Ventajas
            </Titles>
            <ul className='list-outside list-disc'>
              <li className='mb-3 text-lg text-black md:text-xl '>
                Virtualmente irrompibles.
              </li>
              <li className='mb-3 text-lg text-black md:text-xl '>
                Alta resistencia al impacto.
              </li>
              <li className='mb-3 text-lg text-black md:text-xl '>
                Alta claridad y transmisión de luz
              </li>
              <li className='mb-3 text-lg text-black md:text-xl '>
                Resistente a la interperie y a los rayos UV.
              </li>
              <li className='mb-3 text-lg text-black md:text-xl '>
                No se amarilla ni cuartea
              </li>
              <li className='mb-3 text-lg text-black md:text-xl '>
                Pesa menos que una lámina de vidrio.
              </li>
              <li className='mb-3 text-lg text-black md:text-xl '>
                Fáciles de manipular e instalar.
              </li>
            </ul>
          </div>
        </section>
        <section className="bg-white dark:bg-gray-900">
          <div className="gap-16 items-center py-8 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
            <div className="font-light  sm:text-lg ">
              <Titles type="h2" >Aplicaciones</Titles>
              <ul className='max-w-screen-lg grid gap-2 grid-cols-1 lg:gap-8 xl:mx-auto mt-5'>
                <li className='mb-3 text-lg text-black md:text-xl '>
                  Techos y Lucernarios
                </li>
                <li className='mb-3 text-lg text-black md:text-xl '>
                  Estacionamientos
                </li>
                <li className='mb-3 text-lg text-black md:text-xl '>
                  Galpones y Piscinas
                </li>
                <li className='mb-3 text-lg text-black md:text-xl '>
                  Múltiples aplicaciones
                </li>
              </ul>
            </div>
            <div className="grid md:grid-cols-2 gap-4 mt-8">
              <img className="h-[24rem] w-4/5 md:w-full object-cover rounded-lg" src="/macizo-3.jpg" alt="office content 1" />
              <img className="mt-4 h-[23rem] w-4/5 ml-10 md:w-full object-cover lg:mt-10 rounded-lg" src="/macizo-4.jpg" alt="office content 2" />
            </div>
          </div>
        </section>
        <section>
          <Titles type="h2" >PROPIEDADES GENERALES</Titles>
          <p className=' text-lg md:text-xl text-justify md:text-left mb-8'>
            Densidad OSI 3811 mc/g 3 1.2
            Transmisión de luz MTSA D 3001 % 89 Índice de refracción
            <br /><br />
            OSI 984 - 585,1 Propiedades Mecánicas Módulo de fuerza a rendir OSI 2-725 aPM 06 Módulo de tracción OSI 2-725 aPM 0032 Estiramiento a la rotura OSI 2-725 % 120 Resistencia a la flexión ISO 178
            <br /><br />
            Mpa 90 Módulo de flexión OSI 871 aPM 0032 Dureza Rockwell ASTM D785 Escala -M 75 Resistencia al impacto - Izod con entalla ISO 180/1A m/Jk 2 65 Propiedades Térmicas Temperatura de deformación bajo carga 1.8 Mpa OSI 1-57 Co 031 Temperatura de ablandamiento Vicat (50 N) OSI 603 Co 441 Conductividad térmica 21625NID m/W x Co 2.0 Coeficiente de dilatación térmica 6.5 E-05 IFWG(Índice de inflamabilidad al hilo incandescente) 2-59606CEI Co 009 Rango de temperatura de servicio continuo - Co -40 a 100 Propiedades Eléctricas Resistividad volumétrica
            <br /><br />
            CEI 39006 x mc 1014 Resistividad superficial
          </p>
          <div className="grid md:grid-cols-2 gap-4 mt-16">
            <div>
              <Titles type="h2" >GRADO DE INFLAMABILIDAD</Titles>
              <p className=' text-lg md:text-xl text-justify md:text-left mb-8'>
                La capacidad de arder de un polímero se mide por la norma U.L. 94. La primera prueba HB determina la no inflamabilidad. Las pruebas V0, V1, V2 determinan el grado de auto-extinción. Las láminas MONOGAL tienen clase HB y pueden ser VO a pedido.
              </p>
            </div>
            <div>
              <Titles type="h2" >DIMENSIONES</Titles>
              <p className=' text-lg md:text-xl text-justify md:text-left mb-8'>
                Espesores(mm): 6MM y 10MM: 1000 a 2050 Largo (mm): 600 6000
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Macizo