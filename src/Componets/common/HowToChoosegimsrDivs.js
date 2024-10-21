import React from 'react'

function HowToChoosegimsrDivs({image,title1,para}) {
  return (
    <>
    <div className='bg-white rounded-lg flex items-center px-10 py-8'>
        <div className='items-center p-3 w-32'>
            <img src={image} className='w-full'/>
        </div>
        <div className='items-center w-10/12'>
            <h6 className='text-[#007367] text-lg font-bold'>{title1}</h6>
            <p>{para}</p>
        </div>
    </div>
    </>
  )
}

export default HowToChoosegimsrDivs