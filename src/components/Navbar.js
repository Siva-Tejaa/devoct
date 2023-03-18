import React from 'react';
import logo from "../images/3.png";

import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {


  // function Menu(e){
  //   let list = document.querySelector('ul');
  //   e.name === 'menu' ? (e.name = "close",list.classList.add('top-[80px]') , list.classList.add('opacity-100')) :( e.name = "menu" ,list.classList.remove('top-[80px]'),list.classList.remove('opacity-100'))
  // }


  return (
    <div className='bg-[#FFEFE5] px-8'>
      {/* <div className=''>
        <img src={logo} alt="Logo" className='h-10'/>
      </div>
      <div className='flex items-center gap-x-14'>
        <ul className='flex items-center gap-x-14 text-black font-bold text-lg'>
          <li>Home</li>
          <li>Project</li>
          <li className='text-[#F17411]'>Blog</li>
          <li>Roadmap</li>
          <li>Contact Us</li>
        </ul>
        <button className='text-white font-bold px-6 py-1 rounded-md bg-[#FC6300]'>LOGIN</button>
      </div> */}


<nav class="bg-[#FFEFE5] md:flex md:items-center laptop:justify-between">

    <div class="flex justify-between items-center ">
      
        <img class="h-20 inline"
          src={logo}/>

      <span class="text-3xl cursor-pointer mx-2 md:hidden block">
        <RxHamburgerMenu name="menu"/>
      </span>
    </div>

    <ul class="md:flex md:items-center z-[-1] md:z-auto md:static absolute w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 md:opacity-100 opacity-0 top-[-400px] transition-all ease-in duration-500 font-bold gap-6 laptop:flex items-center justify-between gap-2">

      <li class="mx-4 my-6 md:my-0">Home</li>
      <li class="mx-4 my-6 md:my-0">Project</li>
      <li class="mx-4 my-6 md:my-0 text-[#F17411]">Blog</li>
      <li class="mx-4 my-6 md:my-0">Roadmap</li>
      <li class="mx-4 my-6 md:my-0">Contact Us</li>

      <button class="bg-[#FC6300] text-white font-[Poppins] duration-500 px-6 py-2 mx-4 rounded ">
        Login
      </button>

      {/* <h2 class=""></h2> */}
    </ul>
  </nav>


    </div>
  )
}

export default Navbar