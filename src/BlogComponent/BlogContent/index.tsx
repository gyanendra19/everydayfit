import { blogContextType, useBlogContext } from "@/contexts/blogContext"
import useMediaQuery from "@/hooks/useMediaQuery"


function BlogContent() {
  const {blogToggle, blogResponse} = useBlogContext() as blogContextType
  const isAboveMediumScreen = useMediaQuery("(min-width: 1060px)")
  return (
    <section>
    {blogToggle && 
    <div className="fixed md:w-1/2 w-11/12 bottom-0 pb-8 top-0 right-0 z-50 bg-[#FFE5EC]">
      <div className="py-6 w-full">
        <div className="w-5/6 mx-auto">
          <div className="md:text-4xl text-2xl text-[#FEB43B] font-extrabold">
            <p>{blogResponse.topic}</p>
          </div>

          <div className={isAboveMediumScreen ? '' : "h-[500px] overflow-y-scroll"}>
            <div className="mt-4 text-[#B14343] leading-5 font-semibold relative">
              <div className="before:absolute before:content-utilOne before:z-[-1] md:before:-right-4 md:before:-top-20
              before:right-6 before:top-3">
                <p>{blogResponse.blogHead}</p>
              </div>
            </div>

            <div className="md:h-[370px] overflow-y-scroll scrollbar-hide relative">
              <ul className="text-[#FA7E9D] my-3">
                <li className="mt-5 leading-5">{blogResponse.blogFirst}</li>
                <li className="mt-5 leading-5">{blogResponse.blogSecond}</li>
                <div className="before:absolute before:content-utilTwo before:z-[-1] before:left-1 before:top-64">
                  <li className="mt-5 leading-5">
                  {blogResponse.blogThird}</li>
                </div>
                <li className="mt-5 leading-5">{blogResponse.blogFourth}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    }
    </section>

  )
}

export default BlogContent