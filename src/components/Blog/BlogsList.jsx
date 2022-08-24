import React from 'react'
import blogs from '../../data/blogs'
import BlogCard from './BlogCard'
function BlogsList() {
  return (
    <>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {/* Collection Card  */}
        {blogs.map((blog) => {
          return <BlogCard img={blog.img} title={blog.title} desc={blog.desc} />
        })}
      </div>
    </>
  )
}

export default BlogsList
