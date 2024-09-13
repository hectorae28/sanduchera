import Hero from '@/components/Hero'
import Modal from '@/components/Modal'
import Titles from '@/components/Titles'
import React, { useState } from 'react'

const Proyectos = () => {
  const data = [
    "http://techolandvzla.com/wp-content/uploads/2019/10/UNIVERSIDAD-CHARALLAVE.jpg",
    "http://techolandvzla.com/wp-content/uploads/2019/10/TOWN-HOUSE-EL-REFUGIO.jpg",
    "http://techolandvzla.com/wp-content/uploads/2019/10/TOWN-HOUSE-EL-REFUGIO.-CANEY.jpg",
    "http://techolandvzla.com/wp-content/uploads/2019/10/UNIVERSIDAD-CHARALLAVE.jpg",
    "http://techolandvzla.com/wp-content/uploads/2019/10/TOWN-HOUSE-EL-REFUGIO.jpg",
    "http://techolandvzla.com/wp-content/uploads/2019/10/TOWN-HOUSE-EL-REFUGIO.-CANEY.jpg",
    "http://techolandvzla.com/wp-content/uploads/2019/10/UNIVERSIDAD-CHARALLAVE.jpg",
    "http://techolandvzla.com/wp-content/uploads/2019/10/TOWN-HOUSE-EL-REFUGIO.jpg",
    "http://techolandvzla.com/wp-content/uploads/2019/10/TOWN-HOUSE-EL-REFUGIO.-CANEY.jpg",
    "http://techolandvzla.com/wp-content/uploads/2019/10/UNIVERSIDAD-CHARALLAVE.jpg",
    "http://techolandvzla.com/wp-content/uploads/2019/10/TOWN-HOUSE-EL-REFUGIO.jpg",
    "http://techolandvzla.com/wp-content/uploads/2019/10/TOWN-HOUSE-EL-REFUGIO.-CANEY.jpg",
    "http://techolandvzla.com/wp-content/uploads/2019/10/UNIVERSIDAD-CHARALLAVE.jpg",
    "http://techolandvzla.com/wp-content/uploads/2019/10/TOWN-HOUSE-EL-REFUGIO.jpg",
    "http://techolandvzla.com/wp-content/uploads/2019/10/TOWN-HOUSE-EL-REFUGIO.-CANEY.jpg",
  ]
  const [imageSelected, setImageSelected] = useState({ index: 0, src: "" })
  const [modalShow, setModalShow] = useState(false)
  console.log(imageSelected)
  const handleImage = () => {
    if (imageSelected.index === data.length - 1) {
      return {
        index: 0,
        src: data[0]
      }
    }
    return {
      index: imageSelected.index + 1,
      src: data[imageSelected.index + 1]
    }
  }
  return (
    <div>
      <Hero bg={"bg-[url('/hero-image2.JPG')]"}>
        <div className=' h-auto lg:h-96 flex flex-col items-center justify-center relative'>
          <Titles type="h1" style="text-white">
            Proyectos
          </Titles>
          <p className=' text-lg text-white md:text-xl text-center mb-8'>
            Tenemos 20 años de experiencia en estructuras y cubiertas para techos.
            Garantizamos el cuidado de las láminas desde su traslado y aseguramos una correcta instalación.
            Techoland es el único distribuidor autorizado de Laminas de Policarbonato Alveolar marca Plazit
            Polygal en Venezuela. <br />
            La lamina de policarbonato alveolar Plazit Polygal, es un producto formado a partir de una resina
            de policarbonato. Ofrece una alta transmisión luminosa proporcionando así un ambiente
            agradable en áreas interiores y exteriores, es un lamina liviana, por lo que su sistema estructural
            también es liviano y de fácil instalación.
          </p>
        </div>
      </Hero>
      <div className='max-w-screen-xl flex flex-col gap-6 px-4 mx-6 xl:mx-auto mt-5 md:grid md:grid-cols-3'>
        {data.map((item, index) => (
          <img key={index} src={item} alt="proyectos" className="w-full h-auto hover:shadow-xl" onClick={() => { setImageSelected({ index, src: item }); setModalShow(true) }} />
        ))}
      </div>
      <Modal show={modalShow} onHide={() => setModalShow(false)} title={`Proyecto ${imageSelected.index + 1} / ${data.length}`}>
        <button className="absolute top-1/2 right-0 opacity-60 md:-right-14 md:opacity-100" onClick={() => { setImageSelected(handleImage()) }}>
          <svg className="w-6 h-6 md:w-14 md:h-14" viewBox="0 0 26 43" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.4954 8.96933C17.8048 13.3185 22.1227 17.6784 26 21.4929C21.9877 25.4856 17.9896 29.489 12.4954 34.0342C8.77802 37.1108 4.20421 40.5901 -1.90735e-06 43C2.31001 38.8861 5.95626 34.0984 8.93795 30.4658C11.6709 27.1433 14.3078 24.2485 16.9483 21.5071C14.3114 18.8085 11.056 15.1259 8.93084 12.5414C4.31083 6.92663 1.50683 2.68082 -1.90735e-06 0C2.74357 1.56856 6.88737 4.33137 12.4954 8.96933Z" fill="#606060" />
          </svg>
        </button>
        <img src={imageSelected.src} alt="proyectos" className="w-full h-auto" />
        <button className="absolute top-1/2 left-0 rotate-180 opacity-60 md:-left-14 md:opacity-100" onClick={() => { setImageSelected(handleImage()) }}>
          <svg className="w-6 h-6 md:w-14 md:h-14" viewBox="0 0 26 43" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.4954 8.96933C17.8048 13.3185 22.1227 17.6784 26 21.4929C21.9877 25.4856 17.9896 29.489 12.4954 34.0342C8.77802 37.1108 4.20421 40.5901 -1.90735e-06 43C2.31001 38.8861 5.95626 34.0984 8.93795 30.4658C11.6709 27.1433 14.3078 24.2485 16.9483 21.5071C14.3114 18.8085 11.056 15.1259 8.93084 12.5414C4.31083 6.92663 1.50683 2.68082 -1.90735e-06 0C2.74357 1.56856 6.88737 4.33137 12.4954 8.96933Z" fill="#606060" />
          </svg>
        </button>
      </Modal>
    </div>
  )
}
/**/
export default Proyectos