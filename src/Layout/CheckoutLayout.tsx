import CheckoutBody from '@/CheckoutComponent/CheckoutBody'
import CheckoutHead from '@/CheckoutComponent/CheckoutHead'
import Footer from '@/components/Footer'

type Props = {}

function CheckoutLayout({}: Props) {


  return (
    
      <>
      <CheckoutHead />
      <CheckoutBody />
      <Footer />
    </>
   
    
  )
}

export default CheckoutLayout