import Navbar from '@/components/navbar'
import Home from '@/components/Home'
import Services from '@/components/Services'
import Features from '@/components/Features'
import ContactUs from '@/components/contact/index'
import Footer from '@/components/Footer'

function MainLayout() {
    return (
        <>
            <Navbar />
            <Home />
            <Services />
            <Features />
            <ContactUs />
            <Footer />
        </>
    )
}

export default MainLayout