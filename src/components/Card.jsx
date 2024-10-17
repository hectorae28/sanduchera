import Link from 'next/link'
const Card = (props) => {
  return (
    <div className="p-2 w-full">
      <div className=" h-[26rem] w-full md:h-[34rem] mx-4 bg-white border border-gray-200 rounded-lg shadow flex flex-col justify-between">
        <div className="p-4 flex items-center justify-center">
          <img className=" rounded-lg h-64 md:h-96 object-contain md:object-cover" src={props.ProductoImagen[0].image_src} alt="product image" />
        </div>
        <div className="px-4 flex flex-col justify-end gap-2 h-2/5 mb-4">
          <h5 className=" text-sm font-bold tracking-tight text-gray-900">{props.nombre}</h5>
          <Link href={`/product/${props.slug}`}>
            <button className="flex items-center text-white bg-primary hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center h-10 w-32">Saber Mas</button>
          </Link>
        </div>
      </div>
    </div>
  )
}
export default Card