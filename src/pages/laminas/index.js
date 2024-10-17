import Hero from '@/components/Hero'
import Titles from '@/components/Titles'
import SliderComponent from '@/components/Slider'
import React from 'react'
import Head from 'next/head'
export async function getServerSideProps() {
  const listRes = await fetch('http://localhost:8000/api/productsList/')
  const listData = await listRes.json()
  return { props: { listData } }
}

const Laminas = ({listData}) => {
  return (
    <div>
      <Head>
        <title>Laminas de Policarbonato</title>
      </Head>
      <Hero bg={"bg-[url('/hero-image.JPG')]"}>
        <Titles type="h1" style="text-white">
          LAMINAS POLICARBONATO
        </Titles>
        <p className=' text-lg text-white md:text-xl text-center md:text-left'>
          El Policarbonato, es un grupo de termoplásticos, fácil de trabajar, moldear y termoformar, y es utilizado ampliamente en la manufactura moderna. El nombre policarbonato se basa en que se trata de polímero que presentan grupos funcionales unidos por grupos de carbonato en una larga cadena molecular. Que resultan bastante interesantes pues es muy resistente al impacto, al calor y tiene una transparencia óptica  que lo hace apto para una amplia variable de opciones. Empieza a ser muy común tanto en los hogares como en la industria o en la arquitectura.
        </p>
      </Hero>
      <div className='max-w-screen-lg flex flex-col gap-6 px-4 mx-6 xl:mx-auto mt-5' >
        <Titles type="h2" >
          Caracteristicas
        </Titles>
        <p className='mb-3 text-lg text-black md:text-xl '>
          Una lámina traslucida de policarbonato es utilizada en una amplia variedad de proyectos de construcción de cubiertas pues las propiedades y características que ofrece le otorga unos beneficios importantes.
        </p>
        <ul className='flex flex-col gap-3 list-inside list-disc'>
          <li className=' text-lg text-black md:text-xl '>
            Es fácilmente moldeable así que según el tipo del proyecto en el cual se requiera puede ser adaptado de la mejor forma acomodándose a las necesidades específicas de cada lugar, haciéndolo flexible y útil.
          </li>
          <li className=' text-lg text-black md:text-xl '>
            Permite que la luz pase de forma directa lo cual favorece la iluminación de las construcciones donde es utilizada lo cual es una gran ventaja.
          </li>
          <li className=' text-lg text-black md:text-xl '>
            Tiene un aislamiento térmico lo que cuida a los lugares a evitar la pérdida de calor por cual hace que este sea utilizado en obras como invernaderos y piscinas, donde se vuelve prácticamente indispensable.
          </li>
          <li className=' text-lg text-black md:text-xl '>
            Es un material liviano lo que permite que sea instalado sin estructuras complejas para poder sostenerse lo que hace los costos finales de construcción sean notablemente menores.
          </li>
          <li className=' text-lg text-black md:text-xl '>
            Es muy resistente a golpes, caídas de objetos entre otras cosas, lo cual lo hace un material fuerte a diferencia de otros traslúcidos como el vidrio.
          </li>
          <li className=' text-lg text-black md:text-xl '>Tiene tres presentaciones comunes diferentes que son en primer lugar una lámina sólida que es conocida como Monolítica o Monogal, en segundo lugar una lámina celular la cual es llamada como Alveolar y finalmente una lámina acanalada sólida conocida como corrugal en sus modelos Sinus y Greca.</li>

        </ul>
        <p className='mt-3 mb-12 text-lg text-black md:text-xl '>
          Finalmente tiene una larga vida lo cual le ayudará también a disminuir los costos de mantenimiento y valoriza su propiedad.
        </p>
      </div>
      <section className="flex flex-col items-center justify-center">
        <Titles type="h2" >Nuestros Productos</Titles>
        <div className=" slider-container flex justify-center w-full md:max-w-screen-xl sm:max-w-screen-sm">
          <SliderComponent data={listData} />
        </div>
      </section>
    </div>
  )
}

export default Laminas