import React from 'react'
import Mainlayout from './Mainlayout'
import mbbs_admissions1 from "../Assets/gitam_mbbs_admissions.png"
import eligibilty from "../Assets/gitam_mbbs_eligibility.png"

function MbbsAdmission() {
  return (
    <>
    <section className='bg-white'>
        <Mainlayout>
            <div className='pt-20 pb-20'>
                <div className='div1 pb-28 grid grid-cols-2 gap-8'>
                        <div className='pt-32'>
                            <h1 className='text-[#007367] text-4xl font-bold'>MBBS Admissions 2024-2025</h1>
                            <p className='text-xl pt-10'>Embrace the noble path of medicine with our prestigious Bachelor of Medicine, Bachelor of Surgery (MBBS) programme! At GIMSR, our 4.5 years MBBS programme (excluding 1 year of Internship) provides comprehensive medical knowledge and hands-on surgical skills to prepare you for a rewarding medical career while fostering holistic development and immersive learning experiences. Join us now and make a difference in people's lives!</p>
                        </div>
                        <div>
                            <img src={mbbs_admissions1} alt="admssions_img" className='w-full h-auto'/>
                        </div>
                </div>
                <div className='div2 grid grid-cols-2 gap-8 pt-28 '>
                    <div>
                    <img src={eligibilty} alt="admssions_img" className='w-full h-auto'/>
                    </div>
                    <div className='pt-28'>
                    <h1 className='text-[#007367] text-4xl font-bold'>Eligibility</h1>
                    <p className='text-xl pt-10'>To be eligible for MBBS admission, candidates must be at least 17 years old on or before 31st December of the admission year and have completed their intermediate / H.S.C / +2 or equivalent with English, Physics, Chemistry, and Biology/Botany & Zoology, meeting the minimum marks required by the National Medical Council (NMC). Additionally, they must qualify the undergraduate National Eligibility cum Entrance Test (NEET) with the score prescribed by the National Medical Council (NMC).</p>
                    </div>
                </div>
            </div>
        </Mainlayout>
    </section>
    </>
  )
}

export default MbbsAdmission