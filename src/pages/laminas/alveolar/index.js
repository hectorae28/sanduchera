import Hero from '@/components/Hero'
import Modal from '@/components/Modal'
import Titles from '@/components/Titles'
import Head from 'next/head'
import React, { useState, useContext } from 'react'
import AppContext from '@/context/AppContext'

const Alveolar = () => {
  const { addToCart } = useContext(AppContext);
  const [modalShow, setModalShow] = useState(false)
  const [color, setColor] = useState(null)
  const [grosor, setGrosor] = useState(null)
  const [category, setCategory] = useState(null)
  const grosores = ["6MM", "10MM"]
  const colors = ["Blanco Ice", "Gris Cenizo", "Transparente", "Azul t", "Bronce", "Verde r"]
  const categorias = ["Tradicional","Evolución"]
  return (
    <div>
      <Head>
        <title>Alveolar</title>
      </Head>
      <Hero bg={"bg-[url('/hero-image2.JPG')]"}>
        <div className=' h-auto lg:h-96 flex flex-col items-center justify-center relative'>
          <Titles type="h1" style="text-white">
            LAMINAS POLICARBONATO ALVEOLAR
          </Titles>
          <p className=' text-lg text-white md:text-xl text-center mb-8'>
            Los grandes artistas conocen cuánto podemos hacer con la luz. Los grandes arquitectos y diseñadores buscan el material ideal para brindar el máximo de luz natural en los espacios para un correcto ambiente. Polygal produce láminas de policarbonato estructurado (alveolar) que son ideales para cubiertas, vidriados, claraboyas, señalización y diseño interior. Las láminas permiten administrar la luz, proporcionar aislamiento térmico y protección UV, además de añadir texturas y color a su proyecto.
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
      <div className='max-w-screen-lg flex flex-col gap-6 px-4 mx-6 xl:mx-auto mt-5' >
        <Modal show={modalShow} onHide={() => setModalShow(false)} title={"Agregar al carrito"}>
          <p className="my-3 text-gray-500 dark:text-gray-400">
            Linea:
          </p>
          <div className="mt-6 sm:gap-4 sm:items-center sm:flex sm:mt-8">
            {categorias.map((item, index) => (
              <button key={index} type="button" className={category !== index ? "text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800" : "text-white border border-gray-800 bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"} onClick={() => setCategory(index)}>{item}</button>
            ))}
          </div>
          <p className="my-3 text-gray-500 dark:text-gray-400">
            Espesor:
          </p>
          <div className="mt-6 sm:gap-4 sm:items-center sm:flex sm:mt-8">
            {grosores.map((item, index) => (
              <button key={index} type="button" className={grosor !== index ? "text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800" : "text-white border border-gray-800 bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"} onClick={() => setGrosor(index)}>{item}</button>
            ))}
          </div>
          <p className="my-3 text-gray-500 dark:text-gray-400">
            Colores:
          </p>
          <div className="mt-6 sm:gap-4 sm:items-center sm:flex sm:flex-wrap sm:mt-8 mb-10">
            {colors.map((item, index) => (<button key={index} type="button" className={color !== index ? "text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800" : "text-white border border-gray-800 bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"}
              onClick={() => setColor(index)}>{item}</button>))}
          </div>
          <div className='flex flex-col md:flex-row justify-between md:items-center'>
          <p className="text-lg font-bold text-gray-900 dark:text-white">Precio: $395</p> 
              <button
                className="text-white w-full md:w-auto mt-4 sm:mt-0 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 flex items-center justify-center"
                onClick={() => { addToCart({ name: 'LAMINAS POLICARBONATO ALVEOLAR',category:categorias[category],grosor:grosores[grosor], color:colors[color], price: 395 }); setModalShow(false) }}
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
              </button>
            </div>
        </Modal>
        <Titles type="h2" >
          Usos
        </Titles>
        <section className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
          <img className="w-full" src="/alveolar-2.jpg" alt="laminas image" />

          <div className="mt-4 md:mt-0">
            <ol className='list-decimal'>
              <li className='mb-3 text-lg text-black md:text-xl '>
                <b>Agricultura</b>: Máxima luz natural y aislamiento térmico durante todo el año.
              </li>
              <li className='mb-3 text-lg text-black md:text-xl '>
                <b>Arquitectura</b>: Cubiertas livianas con capas selectivas para manejar la luz.
              </li>
              <li className='mb-3 text-lg text-black md:text-xl '>
                <b>Decoración</b>: Crear diseños con infinidades de colores y opciones de iluminación.
              </li>
              <li className='mb-3 text-lg text-black md:text-xl '>
                <b>D. Señalética</b>: Materiales con bajo peso y excelente difusión de luz para carteles con retroiluminación.
              </li>
            </ol>
          </div>
        </section>
        <section className="bg-white dark:bg-gray-900">
          <div className="gap-16 items-center py-8 px-2 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
            <div className="font-light  sm:text-lg ">
              <Titles type="h2" >Características y Ventajas</Titles>
              <ul className='max-w-screen-lg list-outside list-disc grid gap-2 grid-cols-2 lg:grid-cols-2 lg:gap-8 xl:mx-auto mt-5'>
                <li className='mb-3 text-lg text-black md:text-xl '>
                  Excelente aislamiento.
                </li>
                <li className='mb-3 text-lg text-black md:text-xl '>
                  Transmisión de la luz controlada.
                </li>
                <li className='mb-3 text-lg text-black md:text-xl '>
                  Virtualmente Irrompibles.
                </li>
                <li className='mb-3 text-lg text-black md:text-xl '>
                  Flexibles y fáciles de instalar.
                </li>
                <li className='mb-3 text-lg text-black md:text-xl '>
                  Autoextinguibles.
                </li>
                <li className='mb-3 text-lg text-black md:text-xl '>
                  Bajo Peso.
                </li>
                <li className='mb-3 text-lg text-black md:text-xl '>
                  Protección UV.
                </li>
                <li className='mb-3 text-lg text-black md:text-xl '>
                  Ambiente Agradable.
                </li>
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-8">
              <img className="h-[24rem] w-full object-cover rounded-lg" src="/alveolar.jpg" alt="office content 1" />
              <img className="mt-4 h-[23rem] w-full object-cover lg:mt-10 rounded-lg" src="/alveolar-1.jpg" alt="office content 2" />
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
/*  
: 
:  */
export default Alveolar