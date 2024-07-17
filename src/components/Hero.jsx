import Image from "next/image";

const Hero = ({children}) => {

    return (
        <section className=" bg-[url('/bg.svg')] bg-no-repeat bg-cover h-[35rem] w-full flex items-center justify-center">
            {/* <Image className=" absolute z-0 w-full cover" src="/hero.svg" fill/> */}
            <div className=" p-4 mx-auto max-w-screen-xl lg:py-16 ">
                {children}
                {/* <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-100 md:text-5xl lg:text-6xl dark:text-white">Hello</h1> */}

            </div>
        </section>
    )
}
export default Hero;