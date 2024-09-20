/* eslint-disable react/prop-types */
import Hero from '@/components/Hero'
import Modal from '@/components/Modal'
import Titles from '@/components/Titles'
import Head from 'next/head'
import React, { useState, useContext } from 'react'
import AppContext from '@/context/AppContext'

export async function getStaticProps() {
  const res = await fetch('http://localhost:8000/api/products/1/')
  const data = await res.json()
  return { props: { data } }
}

const Alveolar = ({ data }) => {
  const { addToCart } = useContext(AppContext);
  const [modalShow, setModalShow] = useState(false)
  const [pedido, setPedido] = useState({
    id: data?.id,
    categoria: null,
    grosor: null,
    color: null,
    cantidad: 1,
  })
  const [cantidad, setCantidad] = useState(1)
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
          <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 md:p-6">
            <div className="space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0">

              <img className="h-20 w-20 dark:hidden" src={data?.product_image} alt="imac image" />


              <label htmlFor="counter-input" className="sr-only">Choose quantity:</label>
              <div className="flex items-center justify-between md:order-3 md:justify-end">
                <div className="flex items-center">
                  <button className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700" onClick={() => {cantidad!==1 && setCantidad(cantidad - 1)}}>
                    <svg className="h-2.5 w-2.5 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h16" />
                    </svg>
                  </button>
                  <input type="text" id="counter-input" data-input-counter className="w-10 shrink-0 border-0 bg-transparent text-center text-sm font-medium text-gray-900 focus:outline-none focus:ring-0 dark:text-white" placeholder="" value={cantidad} required />
                  <button className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700" onClick={() => setCantidad(cantidad + 1)}>
                    <svg className="h-2.5 w-2.5 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 1v16M1 9h16" />
                    </svg>
                  </button>
                </div>
                <div className="text-end md:order-4 md:w-32">
                  <p className="text-base font-bold text-gray-900 dark:text-white">${pedido.grosor ? pedido.grosor?.precio * cantidad: 0}</p>
                </div>
              </div>

              <div className="w-full min-w-0 flex-1 space-y-4 md:order-2 md:max-w-md">
                <span className="text-base font-medium text-gray-900 hover:underline dark:text-white">{data.nombre} {pedido.categoria?.nombre} {pedido.grosor?.grosor} {pedido.color?.color}</span>
              </div>
            </div>
          </div>
          {data.ProductoCategoria.length > 0 &&
            <div>
              <p className="my-3 text-gray-500 dark:text-gray-400">
                Linea:
              </p>
              <div className="mt-6 sm:gap-4 sm:items-center sm:flex sm:mt-8">
                {data.ProductoCategoria.map((item, index) => (
                  <button key={index} type="button" className={pedido.categoria?.id !== data.ProductoCategoria[index].id ? "text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800" : "text-white border border-gray-800 bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"} onClick={() => setPedido({...pedido, categoria:item,grosor: null,color: null,})}>{item.nombre}</button>
                ))}
              </div>
            </div>
          }
          {pedido.categoria?.CategoriaGrosor.length > 0 &&
            /* {data.ProductoCategoria.filter(item => item.id === category.id)[0]?.CategoriaGrosor.length > 0 && */

            <div>
              <p className="my-3 text-gray-500 dark:text-gray-400">
                Espesor:
              </p>
              <div className="mt-6 sm:gap-4 sm:items-center sm:flex sm:mt-8">
                {pedido.categoria?.CategoriaGrosor.map((item, index) => (
                  <button key={index} type="button" className={pedido.grosor?.id !== pedido.categoria.CategoriaGrosor[index].id ? "text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800" : "text-white border border-gray-800 bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"} onClick={() => setPedido({...pedido,grosor: item,color: null,})}>{item.grosor}</button>
                ))}
              </div>
            </div>
          }
          {pedido.grosor?.GrosorColores.length > 0 &&
            <div>
              <p className="my-3 text-gray-500 dark:text-gray-400">
                Colores:
              </p>
              <div className="mt-6 sm:gap-4 sm:items-center sm:flex sm:flex-wrap sm:mt-8 mb-10">
                {pedido.grosor?.GrosorColores.map((item, index) => (<button key={index} type="button" className={pedido.color?.id !== pedido.grosor?.GrosorColores[index].id ? "text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800" : "text-white border border-gray-800 bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"}
                  onClick={() => setPedido({ ...pedido, color: item })}>{item.color}</button>))}
              </div>
            </div>
          }
          <div className='flex flex-col md:flex-row justify-between md:items-center'>
            <p className="text-lg font-bold text-gray-900 dark:text-white">Precio: ${pedido.grosor ? pedido.grosor?.precio * cantidad: 0}</p>
            <button
              className="text-white w-full md:w-auto mt-4 sm:mt-0 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 flex items-center justify-center"
              onClick={() => addToCart(pedido)}
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
              <ul className='max-w-screen-lg list-outside list-disc grid gap-2 grid-cols-1 lg:grid-cols-2 lg:gap-8 xl:mx-auto mt-5'>
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
                  Auto extinguibles.
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