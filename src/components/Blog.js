import React from 'react';
import computer from "../images/computer.png";

import { BsArrowRight } from "react-icons/bs";

const Blog = () => {
  return (
    <div className='my-14 mx-[4%] flex items-start flex-wrap'>
        <div className='m-2'>
            <img src={computer} alt="Blog-Image" className='w-auto laptop:w-52'/>
        </div>
        <div className='m-2 laptop:w-[78%]'> 
            <p className='font-bold text-lg'>UX review presentations</p>
            <p className='text-[#8B8F95] text-xs'>published 2 days ago &bull; 5 min read &bull; 8 comments</p>
            <p className='mt-2'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries...</p>
            <span className='flex items-end text-[#56A6B1] mt-2'><p>read more &nbsp; </p><BsArrowRight/></span>
        </div>
    </div>
  )
}

export default Blog