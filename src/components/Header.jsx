import Link from "next/link";
import Drawer from "./drawer";
import React, { useEffect, useContext } from "react";
import AppContext from "@/context/AppContext";

const Header = () => {
  const { state } = useContext(AppContext)
  const road = [
    {
      name: "Inicio",
      link: "/"
    },
    {
      name: "Proyectos",
      link: "/proyectos"
    },
    {
      name: "Laminas Policarbonato",
      link: "/laminas"
    },
    {
      name: "Accesorios",
      link: "/accesorios"
    },
    /* {
      name: "Carrito",
      link: "/cart"
    } */
  ]
  useEffect(() => {
    const $dropdownSelector = document.querySelector("#dropdownSelector");
    const $dropdown = document.querySelector("#dropdown");
    $dropdownSelector.addEventListener("mouseover", () => {
      $dropdown.classList.remove("hidden");
    })
    $dropdownSelector.addEventListener("mouseout", () => {
      $dropdown.classList.add("hidden");
    })
  }, [])
  return (
    <nav className="bg-primary fixed w-full z-20 top-0 left-0">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto h-20 md:h-24 px-4">
        <Link href="/" className="flex items-center text-white">
          <div className="flex cursor-pointer text-white">
            <img src="/logo.png" className="h-12 mr-3 logo" alt="Techoland-Logo" />
          </div>
        </Link>
        <button type="button" data-drawer-target="drawer-navigation" data-drawer-show="drawer-navigation" aria-controls="drawer-navigation" data-drawer-backdrop="true" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
          <svg className=" textHeader w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
          </svg>
        </button>
        <div className="hidden w-full lg:block md:w-auto h-full" id="navbar-default">
          <ul className=" bg-transparent h-full font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:dark:bg-gray-900 dark:border-gray-700 text-white" >
            {road.map((item, index) => (
              <li key={index} className="pl-3 pr-4 rounded md:bg-transparent md:p-0 h-full py-6 flex items-center">
                {item.link !== "/laminas"
                  ?
                  <Link href={item.link}>
                    <div className="cursor-pointer" >
                      {item.name}
                      {(item.name === "Carrito" && (state?.cart?.length > 0)) && <span className="inline-flex items-center justify-center w-3 h-3 p-3 ms-1 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">{state?.cart?.length}</span>}
                    </div>
                  </Link>
                  :
                  <div className="flex relative h-full items-center cursor-pointer" id="dropdownSelector">
                    <Link href={item.link}>
                      <span className="flex-1 text-left whitespace-nowrap">{item.name}</span>
                    </Link>
                    <button type="button" className="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group ">
                      <svg className="w-3 h-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                        <path stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                      </svg>
                    </button>
                    <ul id="dropdown" className="bg-primary absolute space-y-2 top-24 right-0 rounded-b-lg hidden">
                      <Link href="/product/tradicional" >
                        <li className="flex items-center w-full p-2 transition duration-75 px-8 group hover:bg-secondary">
                          Alveolar Tradicional
                        </li>
                      </Link>
                      <Link href="/product/evolucion" >
                        <li className="flex items-center w-full p-2 transition duration-75 px-8 group hover:bg-secondary">
                          Alveolar Evolución
                        </li>
                      </Link>
                      <Link href="/product/sinus" >
                        <li className="flex items-center w-full p-2 transition duration-75 px-8 group hover:bg-secondary">
                          Corrugal Sinus
                        </li>
                      </Link>
                      <Link href="/product/greca" >
                        <li className="flex items-center w-full p-2 transition duration-75 px-8 group hover:bg-secondary">
                          Corrugal Greca
                        </li>
                      </Link>
                      <Link href="/product/macizo" >
                        <li className="flex items-center w-full p-2 transition duration-75 px-8 group hover:bg-secondary rounded-b-lg">
                          Macizo
                        </li>
                      </Link>
                      <Link href="/product/bambutech" >
                        <li className="flex items-center w-full p-2 transition duration-75 px-8 group hover:bg-secondary rounded-b-lg">
                          BambuTech
                        </li>
                      </Link>
                      <Link href="/product/standing-seam" >
                        <li className="flex items-center w-full p-2 transition duration-75 px-8 group hover:bg-secondary rounded-b-lg">
                          Standing Seam
                        </li>
                      </Link>
                    </ul>
                  </div>
                }
              </li>
            ))}
          </ul>
        </div>
        <Drawer road={road} cart={state?.cart} />
      </div>
    </nav>
  )
}

export default Header;
