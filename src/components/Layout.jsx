import Footer from "./Footer"
import Header from "./Header"

const Layout = ({children}) => {
    return(
        <div className="flex flex-col min-h-[100vh]">
            {/* <link href="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.8.0/flowbite.min.css" rel="stylesheet" /> */}
            <link rel="shortcut icon" href="/favicon.png" type="image/x-icon" />
            <Header />
            <main className="min-h-[60vh] pt-20">
                {children}
            </main>
            <Footer />
            <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.8.0/flowbite.min.js"></script>
        </div>
    )
}
export default Layout;