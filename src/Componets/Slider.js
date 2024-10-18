import React from 'react'
import { Carousel } from "flowbite-react";
import gitamlogo1 from '../Assets/gitam_mbbs_1.png'
import gitamlogo2 from '../Assets/gitam_mbbs_2.png'
import gitamlogo3 from '../Assets/gitam_mbbs_3.png'
function Slider() {
  return (
    <div className="h-auto sm:h-auto xl:h-auto 2xl:h-96">
      <Carousel leftControl="" rightControl="">
        <img src={gitamlogo1} alt="..." className='w-full' />
        <img src={gitamlogo2} alt="..."  className='w-full'/>
        <img src={gitamlogo3} alt="..."  className='w-full'/>
       
      </Carousel>
    </div>
  )
}

export default Slider