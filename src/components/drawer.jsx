import Link from "next/link";

const Drawer = ({ road }) => {
  return (
    <div id="drawer-navigation" className="fixed top-0 left-0 z-100 h-screen p-4 overflow-y-auto transition-transform -translate-x-full bg-white w-64 dark:bg-gray-800" tabindex="-1" aria-labelledby="drawer-navigation-label">
      <h5 id="drawer-navigation-label" className="text-base font-semibold text-gray-500 uppercase dark:text-gray-400">Menu</h5>
      <button type="button" data-drawer-hide="drawer-navigation" aria-controls="drawer-navigation" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 right-2.5 inline-flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white" >
        <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
        </svg>
        <span className="sr-only">Close menu</span>
      </button>
      <div className="py-4 overflow-y-auto">
        <ul className="space-y-2 font-medium">
          {road.map((item, index) => (
            <li key={index}>
              {item.link !== "/laminas"
                ?
                <Link href={item.link}>
                  <div className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group cursor-pointer">
                    <span className="flex-1 ml-3 whitespace-nowrap">{item.name}</span>
                  </div>

                </Link>
                :
                <div>
                  <div >
                  <button type="button" className="flex items-center gap-4 p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group cursor-pointer" aria-controls="dropdown-example" data-collapse-toggle="dropdown-example">
                    <span className="flex-1 ml-3 text-left whitespace-nowrap">{item.name}</span>
                    <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
                    </svg>
                  </button>
                  </div>
                  <ul id="dropdown-example" className="hidden py-2 space-y-2">
                    <li className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                      <Link href="/laminas/alveolar" >Alveolar</Link>
                    </li>
                    <li className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                      <Link href="#" >Corrugal</Link>
                    </li>
                    <li className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                      <Link href="#" >Monogal</Link>
                    </li>
                  </ul>
                </div>
              }
            </li>

          ))}
      </ul>
    </div>
    </div >
  )
}
export default Drawer;