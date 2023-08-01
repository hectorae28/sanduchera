const Hero = ({children}) => {

    return (
        <section className=" bg-[url('/bg.svg')] pt-20  w-full">
            <div className=" p-4 mx-auto max-w-screen-xl lg:py-16">
                {children}
                {/* <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-100 md:text-5xl lg:text-6xl dark:text-white">Hello</h1> */}

            </div>
        </section>
    )
}
export default Hero;