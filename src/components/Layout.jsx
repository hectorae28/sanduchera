import Footer from "./Footer"
import Header from "./Header"

const Layout = ({children}) => {
    return(
        <div className="flex flex-col min-h-[100vh]">
            <link href="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.8.0/flowbite.min.css" rel="stylesheet" />
            <Header />
            <main className="min-h-[60vh]">
                {children}
            </main>
            <Footer />
            <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.8.0/flowbite.min.js"></script>
        </div>
    )
}
export default Layout;