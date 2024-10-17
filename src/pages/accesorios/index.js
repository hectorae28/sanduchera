import Head from 'next/head'
import React, { useState } from 'react'
import Hero from '@/components/Hero'
import Modal from '@/components/Modal'
import FormContact from '@/components/FormContact'
import Titles from '@/components/Titles'
export async function getServerSideProps() {
  const res = await fetch('http://localhost:8000/api/accesorios/')
  const data = await res.json()
  return { props: { data } }
}

const Accesorios = ({ data }) => {
  const [modalShow, setModalShow] = useState(false)
  return (
    <div>
      <Head>
        <title>Techoland | Accesorios</title>
      </Head>
      <Hero bg={"bg-[url('/hero-image2.JPG')]"}>
        <div className=' h-auto lg:h-96 flex flex-col items-center justify-center relative'>
          <Titles type="h1" style="text-white">
            Accesorios
          </Titles>
          <p className=' text-lg text-white md:text-xl text-center mb-8'>
            accesorios diseñados para trabajar en conjunto con láminas de policarbonato, proporcionando una solución integral para la instalación y protección de cubiertas y estructuras.
          </p>
        </div>
      </Hero>
      <Modal show={modalShow} onHide={() => setModalShow(false)} title={"Contactanos"}>
        <FormContact onHide={() => setModalShow(false)} />
      </Modal>
      <div className="flex flex-col items-center justify-center">

        <div className="max-w-screen-xl md:flex md:flex-wrap">
          {data?.map((item, index) => (
            <section key={item.id} className=" px-4 py-4 antialiased  md:py-8 lg:w-1/2">
              <div className={index % 2 == 0 ? "mx-auto bg-white flex flex-col xl:flex-row rounded-lg  border-gray-300 border-solid border-2 p-4 md:p-8 lg:flex lg:p-8 lg:gap-2 xl:gap-4 lg:h-[28rem]" : "mx-auto bg-white flex flex-col lg:flex-row-reverse max-w-screen-xl rounded-lg  border-gray-300 border-solid border-2 p-4 md:p-8 lg:flex lg:p-8 lg:gap-2 xl:gap-4  lg:h-[28rem]"}>
                <div className=" flex justify-center lg:w-3/5 lg:mt-0">
                  <img className="mb-4 h-56 w-auto sm:h-100 sm:w-96 lg:h-full md:w-full object-contain" src={item?.ProductoImagen[0].image_src} alt="product image" />
                </div>
                <div className="me-auto place-self-center lg:w-3/5">
                  <Titles type="h2" >{item.nombre}</Titles>
                  <p className="mb-6 text-gray-800 dark:text-gray-400">{item.descripcion}</p>
                  <div className="w-full flex justify-center">
                    <button className="inline-flex items-center justify-center rounded-lg bg-primary px-5 py-3 text-center text-base font-medium text-white hover:bg-secondary focus:ring-4 focus:ring-grey"
                      onClick={() => setModalShow(true)}>
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
                      Contactanos
                    </button>
                  </div>
                </div>
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Accesorios