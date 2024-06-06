import Navbar from '@/components/navbar'
import Home from '@/components/Home'
import Services from '@/components/Services'
import Features from '@/components/Features'
import ContactUs from '@/components/contact/index'
import Footer from '@/components/Footer'
import ScrollToTop from '@/ScrollToTop'

function MainLayout() {
    return (
        <>
            <ScrollToTop />
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