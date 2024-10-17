import React from 'react'
import Titles from '@/components/Titles'
import Link from 'next/link'

const ProductsList = ({ data }) => {
  return (
    <div className="bg-fixed bg-no-repeat bg-cover w-full h-full" style={{ backgroundImage: "url('/alveolar-3.jpg')" }} >
      <div className="backdrop-blur-[2px] bg-[#161616]/50 flex flex-col items-center justify-center">
        <div className="max-w-screen-xl md:flex md:flex-wrap">
          {data?.map((item, index) => (
            <section key={item.id} className=" px-4 py-4 antialiased  md:py-8 lg:w-1/2">
              <div className={index % 2 == 0 ? "mx-auto bg-white flex flex-col xl:flex-row rounded-lg  border-gray-600 border-solid border-2 p-4 md:p-8 lg:flex lg:p-8 lg:gap-2 xl:gap-4 lg:h-[28rem]" : "mx-auto bg-white flex flex-col lg:flex-row-reverse max-w-screen-xl rounded-lg  border-gray-600 border-solid border-2 p-4 md:p-8 lg:flex lg:p-8 lg:gap-2 xl:gap-4  lg:h-[28rem]"}>
                <div className=" flex justify-center lg:w-3/5 lg:mt-0">
                  <img className="mb-4 h-56 w-auto sm:h-100 sm:w-96 lg:h-full md:w-full object-contain" src={item.ProductoImagen[0].image_src} alt="product image" />
                </div>
                <div className="mx-auto place-self-center lg:w-3/5">
                  <Titles type="h2" >{item.nombre}</Titles>
                  <p className="mb-6 text-gray-800 dark:text-gray-400">{item.descripcion}</p>
                  <div className="w-full flex justify-center">
                    <Link href={`/product/${item.slug}`} >
                      <button className="inline-flex items-center justify-center rounded-lg bg-primary px-5 py-3 text-center text-base font-medium text-white hover:bg-secondary focus:ring-4 focus:ring-grey">
                        Saber más
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </section>
          ))}
          <section className=" px-4 py-8 antialiased  md:py-16 w-full">
          <div className={data?.length % 2 !== 0 ? "mx-auto bg-white flex flex-col xl:flex-row max-w-screen-xl rounded-lg  border-gray-600 border-solid border-2 p-4 md:p-8 lg:flex lg:p-16 lg:gap-8 xl:gap-16" : "mx-auto bg-white flex flex-col lg:flex-row-reverse max-w-screen-xl rounded-lg  border-gray-600 border-solid border-2 p-4 md:p-8 lg:flex lg:p-16 lg:gap-8 xl:gap-16 "}>
            <div className=" flex justify-center lg:w-2/5 lg:mt-0">
              <img className="mb-4 h-56 w-56 sm:h-96 sm:w-96 md:h-full md:w-full object-contain" src="/topgal-home.png" alt="product image" />
            </div>
            <div className="me-auto place-self-center lg:w-3/5">
              <Titles type="h2" >Accesorios</Titles>
              <p className="mb-6 text-gray-800 dark:text-gray-400">Accesorios diseñados para trabajar en conjunto con láminas de policarbonato, proporcionando una solución integral para la instalación y protección de cubiertas y estructuras.</p>
              <div className="w-full flex justify-center">
                <Link href="/accesorios" >
                  <button className=" lg:mt-10 inline-flex items-center justify-center rounded-lg bg-primary px-5 py-3 text-center text-base font-medium text-white hover:bg-secondary focus:ring-4 focus:ring-grey ">
                    Saber más

                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className=" px-4 py-8 antialiased  md:py-16">
          <div className={data?.length % 2 == 0 ? "mx-auto bg-white flex flex-col xl:flex-row max-w-screen-xl rounded-lg  border-gray-600 border-solid border-2 p-4 md:p-8 lg:flex lg:p-16 lg:gap-8 xl:gap-16" : "mx-auto bg-white flex flex-col lg:flex-row-reverse max-w-screen-xl rounded-lg  border-gray-600 border-solid border-2 p-4 md:p-8 lg:flex lg:p-16 lg:gap-8 xl:gap-16 "}>
            <div className=" flex justify-center lg:w-2/5 lg:mt-0">
              <img className="mb-4 h-56 w-56 sm:h-96 sm:w-96 md:h-full md:w-full object-contain" src="/proyectos-home.jpg" alt="product image" />
            </div>
            <div className="me-auto place-self-center lg:w-3/5">
              <Titles type="h2" >LE ASESORAMOS EN SUS PROYECTOS</Titles>
              <div className="w-full flex justify-center">
                <Link href="/proyectos" >
                  <button className=" lg:mt-10 inline-flex items-center justify-center rounded-lg bg-primary px-5 py-3 text-center text-base font-medium text-white hover:bg-secondary focus:ring-4 focus:ring-grey ">
                    Saber más

                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>
        </div>
      </div>
    </div>
  )
}

export default ProductsList