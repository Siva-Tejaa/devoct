import React from 'react';
import { GrSearch } from "react-icons/gr";

const Main = () => {
  return (
    <div className='bg-[#E5F1F3] flex items-center justify-center text-center p-16 pb-20 mobile:p-6'>
      <div> 
        <p className='text-[#56A6B1] text-lg'>Our blog</p>
        <p className='text-3xl font-normal m-5'>Stories and interviews</p>
        <p className='text-[#475467] text-xl font-medium max-w-3xl m-6'>The blog is the best source of information for interviews, tips, guides, industry best practices and news. Subscribe for updates in your inbox every week.</p>
        <div className='flex items-center justify-center'>
          
        <button className='bg-[#DCE8E9] p-3 rounded-l-xl text-[#7C8185]'><GrSearch style={{color:"#7C8185"}} /></button><input type="text" placeholder="Search" className='pt-2 pb-2 pr-2 bg-[#DCE8E9] rounded-r-xl placeholder:text-[#7C8185]'/>
      </div>
      </div>
    </div>
  )
}

export default Main