import React from 'react'
import Mainlayout from './Mainlayout'
import Headings from './common/Headings'
import HowToChoosegimsrDivs from './common/HowToChoosegimsrDivs'
import mbbs_choose1 from "../Assets/mbbs_choose_1.png"
import mbbs_choose2 from "../Assets/mbbs_choose_2.png"
import mbbs_choose3 from "../Assets/mbbs_choose_3.png"
import mbbs_choose4 from "../Assets/mbbs_choose_4.png"
import mbbs_choose5 from "../Assets/mbbs_choose_5.png"
import mbbs_choose6 from "../Assets/mbbs_choose_6.png"

function HowToChooseGimsr() {
  
  return (
    <>
    <section className='bg-[#007367]'>
        <Mainlayout>
            <div className='pt-20 pb-20 '>
                <div className='text-white pb-12'>
                    <Headings title={"How to choose GIMSR"}/>
                </div>
                <div className='grid grid-cols-3 gap-4 '>
                    <HowToChoosegimsrDivs image={mbbs_choose1} title1={"Step1"} para={"Ensure NEET qualification for MBBS admission."}/>
                    <HowToChoosegimsrDivs image={mbbs_choose2} title1={"Step2"} para={"Register online at www.mcc.nic.in for All India Quota (AIQ) counselling and select Deemed Medical Colleges."}/>
                    <HowToChoosegimsrDivs image={mbbs_choose3} title1={"Step3"} para={"Prioritize GIMSR as your first choice during choice filling in round 1 for MBBS."}/>
                    <HowToChoosegimsrDivs image={mbbs_choose4} title1={"Step4"} para={"Stay updated on All India Quota (AIQ) merit announcements at www.mcc.nic.in"}/>
                    <HowToChoosegimsrDivs image={mbbs_choose5} title1={"Step5"} para={"If allotted a seat at GIMSR, download the allotment letter and complete verification and fee payment as per scheduled dates."}/>
                    <HowToChoosegimsrDivs image={mbbs_choose6} title1={"Step6"} para={"In case of non-allotment, continue with subsequent counselling rounds (Round 2, Mop-up round, and stray vacancy) with GIMSR as your first preference."}/>
                </div>
            </div>
        </Mainlayout>
    </section>
    </>
  )
}

export default HowToChooseGimsr