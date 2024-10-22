import React from 'react'
import Mainlayout from './Mainlayout'
import fearless from "../Assets/gitam_fearless.png"

function FearlessHeart() {
  return (
    <>
    <section>
        <Mainlayout>
            <div className='pt-20 pb-20'>
                <div className='grid grid-cols-2 gap-8'>
                    <div className='pt-14'>
                        <div>
                        <h1 className='text-[#007367] text-2xl font-bold'>Fearless Heart:</h1>
                        <h1 className='text-[#007367] text-2xl font-bold'>The Story of Dr. Swathi Reddy</h1>
                        </div>
                        <h4 className='pt-10 text-xl '>Dr. Swathi Reddy, a GIMSE alumna, embodies the spirit of empathy and dedication. On September 12, 2023, she answered destiny's call, aiding a fellow passenger in labour on a train. Armed with her training and resourcefulness, she facilitated a safe delivery, showcasing the essence of a true healer.

GIMSR's core values and Dr. Reddy's commitment converge in her remarkable journey. She proves that education coupled with compassion can create impactful moments, inspiring both her peers and future medical practitioners. Her story is a living testament to the power of education and humanity, echoing GIMSR's founding principles.</h4>
                       
                    </div>
                    <div className='pt-10'>
                        <img src={fearless} className='w-full'/>
                    </div>
                </div>
            </div>
        </Mainlayout>
    </section>
    </>
  )
}

export default FearlessHeart