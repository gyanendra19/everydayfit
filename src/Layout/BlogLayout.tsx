import BlogBody from '@/BlogComponent/BlogBody'
import BlogContent from '@/BlogComponent/BlogContent'
import BlogHead from '@/BlogComponent/BlogHead'
import NewBlog from '@/BlogComponent/NewBlog'
import Footer from '@/components/Footer'
import { BlogContext } from '@/contexts/blogContext'
import { useState } from 'react'

type Props = {}

function BlogLayout({}: Props) {
  const [blogToggle, setBlogToggle] = useState(false)
  const [blogResponse, setBlogResponse] = useState({})
  const [allBlog, setAllBlog] = useState([])
  return (
    <div>
      <BlogContext.Provider value={{blogToggle, setBlogToggle, blogResponse, setBlogResponse, allBlog, setAllBlog}}>
        <div className='relative'>
        {blogToggle && 
      <div onClick={() => setBlogToggle(!blogToggle)} className="absolute z-30 bg-black w-full h-full opacity-65 blur-md"></div>
        }
        <BlogContent />
        <BlogHead />
        <BlogBody />
        <NewBlog />
        <Footer />
        </div>
      </BlogContext.Provider>
    </div>
  )
}

export default BlogLayout