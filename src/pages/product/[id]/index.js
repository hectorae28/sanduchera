/* eslint-disable react/prop-types */
import Hero from '@/components/Hero'
import Titles from '@/components/Titles'
import Modal from '@/components/Modal'
import FormContact from '@/components/FormContact'
import SliderComponent from '@/components/Slider'
import Head from 'next/head'
import React, { useState } from 'react'
import Button from '@/components/Button'

export async function getServerSideProps(context) {
  const { id } = context.query
  const itemRes = await fetch(`http://localhost:8000/api/products/${id}/`)
  const itemData = await itemRes.json()
  const listRes = await fetch('http://localhost:8000/api/productsList/')
  const listData = await listRes.json()
  return { props: { itemData, listData } }
}

const ProductItem = ({ itemData, listData }) => {
  const [modalShow, setModalShow] = useState(false)
  return (
    <div>
      <Head>
        <title>Techoland | Laminas {itemData?.nombre}</title>
      </Head>
      <Hero bg={"bg-[url('/hero-image.JPG')]"}>
        <div className=' h-auto lg:h-96 flex flex-col items-center justify-center relative'>
          <Titles type="h1" style="text-white">
            {itemData?.nombre}
          </Titles>
          <p className=' text-lg text-white md:text-xl text-center mb-8'>
            {itemData?.descripcion}
          </p>
          <Button onClick={() => setModalShow(true)}>Contactanos</Button>
        </div>
      </Hero>
      <Modal show={modalShow} onHide={() => setModalShow(false)} title={"Contactanos"}>
        <FormContact onHide={() => setModalShow(false)} />
      </Modal>
      <div className='max-w-screen-lg flex flex-col items-center gap-6 px-4 mx-6 xl:mx-auto mt-5' >
        <section className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-lg xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
          <img className="w-full" src={itemData?.ProductoImagen[0].image_src} alt="laminas image" />

          <div className="mt-4 md:mt-0">
            <Titles type="h2" >
              Características
            </Titles>
            <ul className='list-outside list-disc'>
              {itemData?.info.caracteristicas.map((item, index) => (
                <li key={index} className='mb-3 text-lg text-black md:text-xl '>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="bg-white dark:bg-gray-900">
          <div className="gap-16 items-center py-8 mx-auto max-w-screen-xl md:grid md:grid-cols-2 md:py-16 md:px-6">
            <div className="font-light  sm:text-lg ">
              <Titles type="h2" >Usos</Titles>
              <ul className='max-w-screen-lg grid gap-2 grid-cols-1 lg:gap-8 xl:mx-auto mt-5'>
                {itemData?.info.usos.map((item, index) => (
                  <li key={index} className='mb-3 text-lg text-black md:text-xl '>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <img className="w-full" src={itemData?.ProductoImagen[1].image_src} alt="laminas image" />
          </div>
        </section>
          {itemData?.info.accesorios.length > 0 &&
        <section className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-lg xl:gap-16 md:flex md:flex-row-reverse sm:py-16 lg:px-6">
            <div className="mt-4 md:mt-0 md:w-1/2">
              <Titles type="h2" >
                Accesorios
              </Titles>
              <ul className='list-outside list-disc'>
                {itemData?.info.accesorios.map((item, index) => (
                  <li key={index} className='mb-3 text-lg text-black md:text-xl '>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          <img className=" self-end w-full md:w-1/2" src={itemData?.ProductoImagen[2].image_src} alt="accesorios imagen" />
        </section>
            }
      </div>
      <section className="max-w-screen-xl mx-auto md:max-w-screen-sm lg:max-w-screen-lg">
        <div className=" slider-container flex justify-center w-full md:max-w-screen-xl sm:w-full">
          <SliderComponent data={listData} />
        </div>
      </section>
    </div>
  )
}

export default ProductItem