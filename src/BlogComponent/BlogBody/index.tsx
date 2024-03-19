// import plan from '@/assets/plan.png'
import { motion } from 'framer-motion'
import { blogContextType, useBlogContext } from '@/contexts/blogContext'
import { useBlogApi, useGetAllBlog } from '../BlogContent/blogAPI'
import { useEffect } from 'react'

type Props = {}

function BlogBody({}: Props) {
  const {blogToggle, setBlogToggle, allBlog, setAllBlog, setBlogResponse} = useBlogContext() as blogContextType
  const showBlogContent = (topic: string) => {
    setBlogToggle(!blogToggle)
    useBlogApi(topic, setBlogResponse)
  }

  useEffect(() => {
    useGetAllBlog(setAllBlog)
  }, [])

  return (
    <section className='md:py-16 py-6 w-full'>
        <div className='mx-auto w-11/12'>
            <div className='md:grid grid-cols-3 gap-16'>

              {allBlog?.map((item: any) => (
                <a onClick={() => showBlogContent(item.topic)}>
                <motion.div
                initial = 'hidden'
                whileHover= 'visible'
                viewport={{amount: 0.4}}
                transition={{duration: 0.5}}
                variants={{
                  hidden:  {scale: 0.98},
                  visible:  {scale: 1}
                }}      
                className='mt-8 md:mt-0 scale-[0.98] z-[-10]'>
                <img src={`/${item.photo}`} alt="" />
                <p className='uppercase mt-3 font-semibold tracking-wider cursor-pointer'>{item.topic}</p>
                </motion.div>
                </a>
              ))}
            </div>
        </div>
    </section>
  )
}

export default BlogBody