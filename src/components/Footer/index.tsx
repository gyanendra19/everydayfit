import Logo from '@/assets/logo.png'
type Props = {}

function Footer({ }: Props) {
    return (
        <section className='pt-16 w-full'>
            <div className=' bg-box-primary py-16 md:flex justify-between px-12 gap-8'>
                <div className='mt-10 md:mt-0 basis-1/2'>
                    <img src={Logo} alt="" />
                    <p className='my-5'>
                        Lorem vitae ut augue auctor faucibus eget eget ut libero. Elementum
                        purus et arcu massa dictum condimentum. Augue scelerisque iaculis
                        orci ut habitant laoreet. Iaculis tristique.
                    </p>
                    <p>© Everydayfit All Rights Reserved.</p>
                </div>

                <div className='mt-10 md:mt-0 basis-1/4'>
                <h4 className='font-bold'>Links</h4>
                    <p className="my-5">Massa orci senectus</p>
                    <p className="my-5">Et gravida id et etiam</p>
                    <p>Ullamcorper vivamus</p>
                </div>

                <div className='mt-10 md:mt-0 basis-1/4'>
                <h4 className='font-bold'>Conatct us</h4>
                    <p className="my-5">Tempus metus mattis risus volutpat egestas.</p>
                    <p>(333)425-6825</p>
                </div>
            </div>

        </section>
    )
}

export default Footer