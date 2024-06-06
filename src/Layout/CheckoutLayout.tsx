import CheckoutBody from '@/CheckoutComponent/CheckoutBody'
import CheckoutHead from '@/CheckoutComponent/CheckoutHead'
import ScrollToTop from '@/ScrollToTop'
import Footer from '@/components/Footer'

type Props = {}

function CheckoutLayout({}: Props) {


  return (
    
      <>
      <ScrollToTop />
      <CheckoutHead />
      <CheckoutBody />
      <Footer />
    </>
   
    
  )
}

export default CheckoutLayout