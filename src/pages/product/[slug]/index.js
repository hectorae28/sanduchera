import React, { useContext } from 'react'
import Galery from '../../../components/Galery'
import Card from '../../../components/Card'
import AppContext  from '../../../context/AppContext'

const Product = ({ params }) => {
  const {state, addToCart} = useContext(AppContext);
  return (
    <div className='mt-20 min-h-[80vh]'>
      <Galery addToCart={addToCart}/>
      <div class="max-w-screen-xl px-4 mx-auto 2xl:px-0">
      <h2
              class="text-xl font-semibold text-gray-900 sm:text-2xl dark:text-white"
            >Otros Productos</h2>
      </div>
      <div className='m-10 lg:mx-16 flex flex-col gap-6 md:flex-row md:flex-wrap md:justify-center '>
        <Card img={"http://techolandvzla.com/wp-content/uploads/2019/10/China-factory-fire-proof-polycarbonate-roofing-sunroof.jpg"} name={"Laminas de policarbonato Alveolo"} url={"2"} />
        <Card img={"/polibambu.jpg"} name={"Laminas de Polibambu policarbonato"} url={"1"}/>
        <Card img={"http://techolandvzla.com/wp-content/uploads/2019/10/China-factory-fire-proof-polycarbonate-roofing-sunroof.jpg"} name={"Laminas de policarbonato Alveolo"} url={"2"}/>
      </div>
    </div>
  )
}

export default Product