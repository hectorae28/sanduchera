import Form from "../../components/Form";
import Hero from "../../components/Hero";

const Dashboard=()=>{
    return (
        <>  
            <Hero bg="/hero-image.jpg">
                <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-100 md:text-5xl lg:text-6xl dark:text-white">Login</h1>
            </Hero>
            <Form />
        </>
    )
}
export default Dashboard;