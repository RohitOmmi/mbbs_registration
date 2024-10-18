import React from 'react'

function keyHighLightsDiv({img,title1,title2}) {
  return (
    <>
    <div className='flex flex-col items-center rounded-2xl border-2 bg-white border-[#007367]'>
        <img src={img} className='w-auto h-auto mr-auto ml-auto pt-6 pb-2'/>
        <h3 className='text-[#007367] text-xl font-bold'>{title1}</h3>
        <p className='text-[#007367] text-xl  text-center mb-8'>{title2}</p>
    </div>
    </>
  )
}

export default keyHighLightsDiv