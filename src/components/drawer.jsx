/* eslint-disable react/prop-types */
import Link from "next/link";
import React from "react";

const Drawer = ({ road, cart }) => {
  return (
    <div id="drawer-navigation" className="fixed top-0 left-0 z-100 h-screen p-4 overflow-y-auto transition-transform -translate-x-full bg-white w-64 dark:bg-gray-800" tabIndex="-1" aria-labelledby="drawer-navigation-label">
      <img src="/logo-black.png" className="h-12 mr-3 logo" alt="Techoland-Logo" />
      <button type="button" data-drawer-hide="drawer-navigation" aria-controls="drawer-navigation" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 right-2.5 inline-flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white" >
        <svg className="w-3 h-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
        </svg>
        <span className="sr-only">Cerrar menu</span>
      </button>
      <div className="py-4 overflow-y-auto">
        <ul className="space-y-2 font-medium">
          {road.map((item, index) => (
            <li key={index}>
              {item.link !== "/laminas"
                ?
                <Link href={item.link} data-drawer-hide="drawer-navigation">
                  <div className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group cursor-pointer">
                    <span className="flex-1 ml-3 whitespace-nowrap">{item.name}</span>
                    {(item.name === "Carrito" && (cart?.length > 0)) && <span className="inline-flex items-center justify-center w-3 h-3 p-3 ms-1 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">{cart?.length}</span>}
                  </div>
                </Link>
                :
                <div>
                  <div >
                    <button type="button" className="flex items-center gap-4 p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group cursor-pointer" aria-controls="dropdown-example" data-collapse-toggle="dropdown-example">
                      <span className="flex-1 ml-3 text-left whitespace-nowrap">{item.name}</span>
                      <svg className="w-3 h-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                      </svg>
                    </button>
                  </div>
                  <ul id="dropdown-example" className="hidden py-2 space-y-2">
                    <Link href="/product/tradicional" >
                      <li className="flex cursor-pointer items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                        Alveolar Tradicional
                      </li>
                    </Link>
                    <Link href="/product/evolucion" >
                      <li className="flex cursor-pointer items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                        Alveolar Evolución
                      </li>
                    </Link>
                    <Link href="/product/sinus" >
                      <li className="flex cursor-pointer items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                        Corrugal Sinus
                      </li>
                    </Link>
                    <Link href="/product/greca" >
                      <li className="flex cursor-pointer items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                        Corrugal Greca
                      </li>
                    </Link>
                    <Link href="/product/macizo" >
                      <li className="flex cursor-pointer items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                        Macizo
                      </li>
                    </Link>
                    <Link href="/product/bambutech" >
                      <li className="flex cursor-pointer items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                        BambuTech
                      </li>
                    </Link>
                    <Link href="/product/standing-seam" >
                      <li className="flex cursor-pointer items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                        Standig Seam
                      </li>
                    </Link>
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