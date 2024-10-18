import React from 'react'
import Mainlayout from './Mainlayout'

function About() {
  return (

    <>
      <section>
        <Mainlayout>
          <div className='grid grid-cols-2 pt-20 pb-4 relative'>
            <div>
              <h1 className='text-2xl text-bold text-[#007367]'>GITAM Institute of Medical Sciences and Research (GIMSR)</h1>
              <p className='pt-8 pb-4 text-lg ' >Discover GIMSR, your gateway to excellence in medical education! Established in 2015, we are the first deemed medical college in Andhra Pradesh, nestled alongside the picturesque GITAM (Deemed to be University) campus in Visakhapatnam. With 600 undergraduate students and post-graduate programmes in 12 clinical and 2 para-Clinical disciplines, we offer top-notch medical education, attracting students from all corners of India and beyond. Our serene environment and modern amenities foster the growth of outstanding medical professionals. Benefit from strong academic and research linkages within GITAM Deemed to be University, providing incredible opportunities for learning and research. Explore our sprawling campus with state-of-the-art facilities, including museums, libraries, and sports facilities. Begin an exciting journey towards becoming an exceptional medical professional at GIMSR!</p>
            </div>
            <div className='px-64'>
              <form className='px-8 py-4 bg-white shadow-lg absolute -top-32 '>
                <h3 className='text-[#007367] text-lg text-center pb-2'>Get in touch</h3>
                <div className='grid  grid-cols-1  pb-2'>
                  <input  type="text" placeholder="Full Name" className='w-full rounded-md'/>
                </div>
                <div className='grid  grid-cols-1  pb-2'>
                  <input  type="email" placeholder="Email" className='w-full rounded-md'/>
                </div>
                <div className='grid grid-cols-3 gap-1 pb-2 '>
                  <input type="number" placeholder='Mobile number' className='col-span-2 border-md rounded-md '/>
                  <button className='px-4 py-2 bg-[#007367] rounded-md text-white'>Send OTP</button>
                </div>
                <div className='grid  grid-cols-1  pb-2'>
                  <input  type="text" placeholder="City*" className='w-full rounded-md'/>
                </div>
                <div className='grid  grid-cols-1  pb-2'>
                  <input  type="text" placeholder="NEET Roll No*" className='w-full rounded-md'/>
                </div>
                <div className='grid  grid-cols-1  pb-2'>
                  <input  type="text" placeholder="NEET 2024 Rank*" className='w-full rounded-md'/>
                </div>
                <div className='grid  grid-cols-1  pb-2'>
                  <input  type="text" placeholder="NEET Score*" className='w-full rounded-md'/>
                </div>
                <h3>NEET Score card</h3>
                <div className='grid grid-cols-4 pb-2 gap-2 '>
                  <input type="Button" value='Choose file' className='  bg-orange-100 col-span-1 border-md rounded-md '/>
                  <input  placeholder="Drop the fle"className=' col-span-3 px-4 py-2 rounded-md'/>
                </div>
                <div className="flex items-start pb-2">
                  <input type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500  focus:ring-2 " id="hs-checked-checkbox" name="agreement" value="" checked=""/>
                  <label for="hs-checked-checkbox" className="ms-2 text-sm font-medium text-gray-900">
                    By clicking the ‘Submit' button, you consent to receive communication from us
                     such as our newsletters, updates, new programme releases, etc via email, SMS,
                      WhatsApp, and voice call. GITAM (Deemed to be University) is committed to
                       protecting the privacy of the visitor and user's personal information. The 
                       information you provide will not be sold, rented, given away or traded to any third 
                       party not engaged by GITAM to perform authorized services. You may opt-out at any time.
                  </label>
                </div>
                <div className='text-center'>
                  <button className='bg-[#007367] text-white px-7 py-3 text-lg'>Submit</button>
                </div>
              </form>
            </div>
          </div>

        </Mainlayout>
      </section>
    </>
  )
}

export default About