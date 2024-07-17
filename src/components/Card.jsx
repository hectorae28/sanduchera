const Card = () => {
  return (
    <div className=" sm:w-full md:w-[45%] lg:w-[24%] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <img className="p-8 rounded-t-lg" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpromart.vteximg.com.br%2Farquivos%2Fids%2F7001693-1000-1000%2F148751.jpg%3Fv%3D638195377084900000&f=1&nofb=1&ipt=0635cb63d33012877bcbb0e25369526a92e4386471885e5a3b7aac18eec3eba0&ipo=images" alt="product image" />
      </a>
      <div className="px-5 pb-5 flex justify-between">
        <a href="#">
          <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white w-1/2">POLICARBONATO CELULAR</h5>
        </a>
        <a href="#" className="flex items-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Saber Mas</a>

      </div>
    </div>
  )
}
export default Card