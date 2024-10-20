import React from 'react'
import Mainlayout from './Mainlayout'
 import logo from '../Assets/logo.png'
function Header() {
  return (
    <section className='bg-white shadow-lg'>
        <Mainlayout>
            <div className='flex justify-between items-center px-auto py-2 shadow-lg'>
                <div>
                    <img src={logo} alt='Gitam_logo' className='w-full pt-2' />
                </div>
                <div className='bg-[#007367] px-4 py-2'>
                    <a href='#'><h3 className='text-white'>APPLY NOW</h3></a>
                </div>
            </div>
        </Mainlayout>
    </section>
  )
}

export default Header
