const Banner = () => {
  return (
    <div className="flex w-full justify-center flex-col text-center h-[30rem]">
      <h1 className=" mt-8 mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-100 md:text-5xl lg:text-6xl dark:text-white">Especialistas en laminas de Policarbonato</h1>
      <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400">En Techoland te ofrecemos diferentes láminas de
        policarbonato para techar el espacio que desees.
        ¡Dale un cambio a tus espacios con productos de
        calidad!</p>
      <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
        <a href="#" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
          Has tu pedido
          <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" strokeLinecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
          </svg>
        </a>
        <a href="#" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-100 hover:text-black rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
          Sobre Nosotros
        </a>
      </div>

    </div>
  )
}
export default Banner