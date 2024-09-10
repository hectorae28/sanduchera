const Card = (props) => {
  const {img,name,url} = props
  return (
    <div className=" sm:w-full md:w-[45%] lg:w-[24%] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <a href="/product">
        <img className="p-8 rounded-t-lg" src={img} alt="product image" />
      </a>
      <div className="pl-8 pb-5 flex justify-between md:flex-row gap-2 md:flex-wrap flex-wrap">
        <a href="/product">
          <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white w-1/2">{name}</h5>
        </a>
        <a href={"/product/"+url} className="flex items-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Saber Mas</a>

      </div>
    </div>
  )
}
export default Card