import React from 'react'

function MeritScholarDivs({para1,title,para2,keys}) {
  return (
    <>
    <div className=' bg-[#ffffff] rounded-lg shadow-lg flex-col items-center p-8' key={keys}>
        <p className='text-lg'>{para1}</p>
        <h3 className='text-[#004740] text-2xl font-bold '>{title}</h3>
        <p  className='text-lg' >{para2}</p>
    </div>
    </>
  )
}

export default MeritScholarDivs