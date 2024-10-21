import React from 'react'

function AcademicCard({image,Title,description}) {
    return (
        <>
            <div className='AcademicCard mb-10 rounded-lg'>
                <div className='visible-div rounded-lg  '>
                    <img src={image} className='w-full' />
                    <h6 className='bg-[#007367] pt-10 pb-10 text-white text-xl font-bold text-center'>{Title}</h6>
                </div>
                <div className='hiden-div rounded-lg p-2 bg-white'>
                    <h6 className='text-[#007367] text-center'>{Title}</h6>
                    <p>{description}</p>
                </div>
            </div>
        </>
    )
}

export default AcademicCard