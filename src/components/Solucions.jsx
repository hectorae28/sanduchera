/* eslint-disable react/prop-types */
import React from 'react'
import Titles from '@/components/Titles'
import Link from 'next/link'

const ProductsList = ({ data }) => {
  const info = [
    {
      name: "Laminas Alveolar",
      slug: "alveolar",
      img: "/alveolar-2.jpg",
      description: "Los grandes artistas conocen cuánto podemos hacer con la luz. Los grandes arquitectos y diseñadores buscan el material ideal para brindar el máximo de luz natural en los espacios para un correcto ambiente."
    },
    {
      name: "Standing Seam",
      slug: "Standing Seam",
      img: "/topgal-home.png",
      description: "Polygal introduce la nueva generación de láminas de policarbonato: Sistema Topgal. Respaldado por 35 años de experiencia, desde que se inició con las primeras láminas de policarbonato alveolar del mundo, Polygal ha desarrollado el nuevo sistema Topgal combinando una mayor rigidez, aislamiento térmico, máxima resistencia y un diseño estanco."
    },
    {
      name: "LÁMINAS CORRUGAL",
      slug: "corrugal",
      img: "/corrugal-home2.jpg",
      description: "Son resistentes a cambios bruscos de temperatura y fluctuaciones entre los -400 y los 1000 °C. Tienen una excelente flexibilidad que permite obtener importantes radios de curvatura."
    },
    {
      name: "Laminas Macizo",
      slug: "macizo",
      img: "/macizo-home.jpg",
      description: "Las láminas Monogal son láminas de policarbonato extruidas, muy durables y resistentes al impacto. Pueden utilizarse en altos rangos de temperatura y tienen mejor transmisión de luz que muchos tipos de vidrio."
    }, {
      name: "Laminas Bambútech",
      slug: "bambutech",
      img: "/polibambu-home.jpg",
      description: "Las Lámina de policarbonato alveolar con varas de bambú integradas. Su resistencia, durabilidad y rústico diseño la convierten en una alternativa estética y funcional, ideal para decoración de terrazas, separación de ambientes. Además, posee un excelente desempeño ante la exposición al sol, pues cuenta con filtro UV en la masa."
    },
  ]
  return (
    <div className="bg-fixed bg-no-repeat bg-cover w-full h-full" style={{ backgroundImage: "url('/alveolar.jpg')" }} >
      <div className="backdrop-blur-[2px] bg-[#161616]/50">

        {data?.map((item, index) => (
          <section key={item.id} className=" px-4 py-4 antialiased  md:py-8">
            <div className={index % 2 == 0 ? "mx-auto bg-white flex flex-col xl:flex-row max-w-screen-xl rounded-lg  border-gray-600 border-solid border-2 p-4 md:p-8 lg:flex lg:p-16 lg:gap-8 xl:gap-16" : "mx-auto bg-white flex flex-col lg:flex-row-reverse max-w-screen-xl rounded-lg  border-gray-600 border-solid border-2 p-4 md:p-8 lg:flex lg:p-16 lg:gap-8 xl:gap-16 "}>
              <div className=" flex justify-center lg:w-2/5 lg:mt-0">
                <img className="mb-4 h-56 w-auto sm:h-96 sm:w-96 md:h-full md:w-full object-contain" src={item.product_image} alt="product image" />
              </div>
              <div className="me-auto place-self-center lg:w-3/5">
                <Titles type="h2" >{item.nombre}</Titles>
                <p className="mb-6 text-gray-800 dark:text-gray-400">{item.descripcion} {item.descripcion.length}</p>
                <Link href={`/laminas/${item.slug}`} >
                  <button className="inline-flex items-center justify-center rounded-lg bg-primary px-5 py-3 text-center text-base font-medium text-white hover:bg-secondary focus:ring-4 focus:ring-grey ">
                    Saber más
                  </button>
                </Link>
              </div>
            </div>
          </section>
        ))}
        <section className=" px-4 py-8 antialiased  md:py-16">
          <div className={data?.length % 2 == 0 ? "mx-auto bg-white flex flex-col xl:flex-row max-w-screen-xl rounded-lg  border-gray-600 border-solid border-2 p-4 md:p-8 lg:flex lg:p-16 lg:gap-8 xl:gap-16" : "mx-auto bg-white flex flex-col lg:flex-row-reverse max-w-screen-xl rounded-lg  border-gray-600 border-solid border-2 p-4 md:p-8 lg:flex lg:p-16 lg:gap-8 xl:gap-16 "}>
            <div className=" flex justify-center lg:w-2/5 lg:mt-0">
              <img className="mb-4 h-56 w-56 sm:h-96 sm:w-96 md:h-full md:w-full object-contain" src="/proyectos-home.jpg" alt="product image" />
            </div>
            <div className="me-auto place-self-center lg:w-3/5">
              <Titles type="h2" >LE ASESORAMOS EN SUS PROYECTOS</Titles>
              <Link href="/proyectos" >
                <button className=" lg:mt-10 inline-flex items-center justify-center rounded-lg bg-primary px-5 py-3 text-center text-base font-medium text-white hover:bg-secondary focus:ring-4 focus:ring-grey ">
                  Saber más

                </button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default ProductsList