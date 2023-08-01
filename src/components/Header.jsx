import Link from "next/link";
import Drawer from "./drawer";

const Header = () => {
    globalThis?.window?.addEventListener("scroll", function(){
        var header = document.querySelector("#header");
        header?.classList?.toggle("bg-white",window.scrollY>0);
        var text = document.querySelectorAll(".textHeader");
        text.forEach((item)=>{
            item?.classList?.toggle("text-black",window.scrollY>0);
        })
    })
    return (
        <>

            <nav id="header" className=" bg-transparent fixed w-full z-20 top-0 left-0">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <Link href="/" className="flex items-center ">
                        <div className="flex cursor-pointer text-white">
                            <img src="https://img.freepik.com/iconos-gratis/hamburguesa_318-900282.jpg?w=2000" className="h-8 mr-3" alt="Flowbite Logo" />
                            <span className=" textHeader text-inherit self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Sanduchera</span>
                        </div>
                    </Link>
                    <button  type="button" data-drawer-target="drawer-navigation" data-drawer-show="drawer-navigation" aria-controls="drawer-navigation" data-drawer-backdrop="true" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                        <svg className=" textHeader w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>
                    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                        <ul className=" textHeader  bg-transparent font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:dark:bg-gray-900 dark:border-gray-700 text-white">
                            <li className="textHeader block py-2 pl-3 pr-4   rounded md:bg-transparent md:p-0 ">
                                <Link href="/" aria-current="page">Home</Link>
                            </li>
                            <li className=" textHeader block py-2 pl-3 pr-4  rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0   dark:hover:bg-gray-700  md:dark:hover:bg-transparent">
                                <Link href="/dashboard" >About</Link>
                            </li>
                            <li className="textHeader block py-2 pl-3 pr-4  rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0  md:p-0   dark:hover:bg-gray-700  md:dark:hover:bg-transparent">
                                <a href="#" >Menu</a>
                            </li>
                            <li className="textHeader block py-2 pl-3 pr-4  rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0  md:p-0   dark:hover:bg-gray-700  md:dark:hover:bg-transparent">
                                <a href="#">Events</a>
                            </li>
                            <li className="textHeader block py-2 pl-3 pr-4  rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0  md:p-0   dark:hover:bg-gray-700  md:dark:hover:bg-transparent">
                                <a href="#">Contact</a>
                            </li>
                        </ul>
                    </div>
                    <Drawer />
                </div>
            </nav>

        </>
    )
}

export default Header;