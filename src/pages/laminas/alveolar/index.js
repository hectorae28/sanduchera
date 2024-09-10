import Hero from '@/components/Hero'
import Titles from '@/components/Titles'
import Head from 'next/head'
import React from 'react'

const Alveolar = () => {
  return (
    <div>
      <Head>
        <title>Alveolar</title>
      </Head>
      <Hero bg={"bg-[url('/hero-image2.JPG')]"}>
        <div className=' h-auto lg:h-96 flex flex-col items-center justify-center'>
          <Titles type="h1" style="text-white">
            LAMINAS POLICARBONATO ALVEOLAR
          </Titles>
          <p className=' text-lg text-white md:text-xl text-center'>
            Los grandes artistas conocen cuánto podemos hacer con la luz. Los grandes arquitectos y diseñadores buscan el material ideal para brindar el máximo de luz natural en los espacios para un correcto ambiente. Polygal produce láminas de policarbonato estructurado (alveolar) que son ideales para cubiertas, vidriados, claraboyas, señalización y diseño interior. Las láminas permiten administrar la luz, proporcionar aislamiento térmico y protección UV, además de añadir texturas y color a su proyecto.
          </p>
        </div>
      </Hero>
      <div className='max-w-screen-lg flex flex-col gap-6 px-4 mx-6 xl:mx-auto mt-5' >
        <Titles type="h2" >
          Usos
        </Titles>
        <section class="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
          <img class="w-full" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.acrilicosdelllano.com%2Fwp-content%2Fuploads%2F2022%2F05%2FLaminas-policarbonato.jpg&f=1&nofb=1&ipt=8fc2e0e66a727927f89c45413b38327bc24adf3f2b9fc8c2e39556537bd37443&ipo=images" alt="dashboard image" />

          <div class="mt-4 md:mt-0">
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
        <section class="bg-white dark:bg-gray-900">
          <div class="gap-16 items-center py-8 px-2 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
            <div class="font-light  sm:text-lg ">
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
            <div class="grid grid-cols-2 gap-4 mt-8">
              <img class="h-[24rem] w-full object-cover rounded-lg" src="/alveolar.jpg" alt="office content 1" />
              <img class="mt-4 h-[23rem] w-full object-cover lg:mt-10 rounded-lg" src="/alveolar-1.jpg" alt="office content 2" />
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