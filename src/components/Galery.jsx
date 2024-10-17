import React, { useContext, useState } from 'react'
import { useRouter } from 'next/router'

const Galery2 = () => {
  return (
    <div className="grid gap-4">
      <div>
        <img className="h-auto max-w-full rounded-lg" src="http://techolandvzla.com/wp-content/uploads/2019/10/China-factory-fire-proof-polycarbonate-roofing-sunroof.jpg" alt="" />
      </div>
      <div className="grid grid-cols-3 gap-4">
        <div>
          <img className="h-auto max-w-full rounded-lg " src="http://techolandvzla.com/wp-content/uploads/2019/10/Folleto_Policarbonato_Alveolar-24.jpg" alt="" />
        </div>
        <div>
          <img className="h-auto max-w-full rounded-lg" src="http://techolandvzla.com/wp-content/uploads/2019/10/Folleto_Policarbonato_Alveolar-25.jpg" alt="" />
        </div>
        <div>
          <img className="h-auto max-w-full rounded-lg" src="http://techolandvzla.com/wp-content/uploads/2019/10/Folleto_Policarbonato_Alveolar-26-1.jpg" alt="" />
        </div>
        {/* <div>
          <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg" alt="" />
        </div>
        <div>
          <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg" alt="" />
        </div> */}
      </div>
    </div>
  )
}
const Galery = ({addToCart}) => {
  const router = useRouter()
  console.log(router.query.slug)
  const [color, setColor] = useState("Blanco Ice")
  const [thinckness, setThinckness] = useState(null)
  const colors = ["Blanco Ice", "Gris Cenizo", "Transparente", "Azul t", "Bronce", "Verde r"]
  return (
    <section class="py-8 bg-white md:py-16 dark:bg-gray-900 antialiased">
      <div class="max-w-screen-xl px-4 mx-auto 2xl:px-0">
        <div class="lg:grid lg:grid-cols-2 lg:gap-8 xl:gap-16">
          <div class="shrink-0 max-w-xl lg:max-w-lg mx-auto">
            {/* <img class="w-full dark:hidden" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front.svg" alt="" />
            <img class="w-full hidden dark:block" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front-dark.svg" alt="" /> */}
            <Galery2 />
          </div>

          <div class="mt-6 sm:mt-8 lg:mt-0">
            <h1
              class="text-xl font-semibold text-gray-900 sm:text-2xl dark:text-white"
            >
              Laminas de policarbonato Alveolo 2.10mt x 11.80 mt
            </h1>
            <div class="mt-4 sm:items-center sm:gap-4 sm:flex">
              <p
                class="text-2xl font-extrabold text-gray-900 sm:text-3xl dark:text-white"
              >
                $395
              </p>


            </div>
            <p class="my-3 text-gray-500 dark:text-gray-400">
              Espesor:
            </p>
            <div class="mt-6 sm:gap-4 sm:items-center sm:flex sm:mt-8">
              <button type="button" class="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800">6MM</button>
              <button type="button" class="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800">10MM</button>
            </div>
            <p class="my-3 text-gray-500 dark:text-gray-400">
              Colores:
            </p>
            <div class="mt-6 sm:gap-4 sm:items-center sm:flex sm:flex-wrap sm:mt-8">
              {colors.map((item, index) => (<button key={index} type="button" class="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800">{item}</button>))}
            </div>
            <div class="mt-6 sm:gap-4 sm:items-center sm:flex sm:mt-8">
              <button
                class="text-white w-full md:w-auto mt-4 sm:mt-0 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 flex items-center justify-center"
                onClick={() => { addToCart({ id: router.query.slug ,name: 'Laminas', price: 395 }) }}
              >
                <svg
                  class="w-5 h-5 -ms-2 me-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 4h1.5L8 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm.75-3H7.5M11 7H6.312M17 4v6m-3-3h6"
                  />
                </svg>

                Agregar al Carrito
              </button>
            </div>

            <hr class="my-6 md:my-8 border-gray-200 dark:border-gray-800" />

            <p class="mb-6 text-gray-500 dark:text-gray-400">
              Los grandes artistas conocen cuánto podemos hacer con la luz. Los grandes arquitectos y diseñadores buscan el material ideal para brindar el máximo de luz natural en los espacios para un correcto ambiente. Polygal produce láminas de policarbonato estructurado (alveolar) que son ideales para cubiertas, vidriados, claraboyas, señalización y diseño interior. Las láminas permiten administrar la luz, proporcionar aislamiento térmico y protección UV, además de añadir texturas y color a su proyecto.
            </p>

            {/* <p class="text-gray-500 dark:text-gray-400">
            Two Thunderbolt USB 4 ports and up to two USB 3 ports. Ultrafast
            Wi-Fi 6 and Bluetooth 5.0 wireless. Color matched Magic Mouse with
            Magic Keyboard or Magic Keyboard with Touch ID.
          </p> */}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Galery