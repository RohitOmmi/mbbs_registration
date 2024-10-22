import React from 'react'
import Mainlayout from './Mainlayout'
 import logo from '../Assets/logo.png'
function Header() {
  return (
   <>
    <section className='bg-white shadow-lg'>
        <Mainlayout>
            <div className='  bg-white flex justify-between items-center px-auto py-2 shadow-lg'>
                <div>
                    <img src={logo} alt='Gitam_logo' className='w-full pt-2' />
                </div>
                <div>
                    <a href='#' className='bg-[#007367] px-4 py-2 text-white'>APPLY NOW</a>
                </div>
            </div>
        </Mainlayout>
    </section>
    <a className='bg-[#007367] px-4 py-2 fixed z-50 -right-10 top-3/4 text-white -rotate-90 rounded-md' href="#">Apply Now</a>
    <a className='bg-[#007367] px-4 py-2 fixed z-50 -right-10 top-96 text-white -rotate-90 rounded-md' href="#">7894561203</a>
   </>
  )
}

export default Header
