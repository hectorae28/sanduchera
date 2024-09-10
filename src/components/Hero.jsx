import Image from "next/image";

const Hero = ({children}) => {

    return (
        <section className=" bg-[url('/hero-image.JPG')] bg-no-repeat bg-cover h-[35rem] xl:h-[45rem] w-full flex items-center justify-center">
            <div className="backdrop-blur-[2px] h-full w-full flex items-center justify-center bg-[#161616]/50">
              <div className=" p-4 mx-auto max-w-screen-xl lg:py-16 ">
                  {children}
              </div>
            </div>
        </section>
    )
}
export default Hero;