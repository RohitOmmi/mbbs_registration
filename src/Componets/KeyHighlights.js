import React from 'react'
import Mainlayout from './Mainlayout'
import KeyHighLightsDiv from './common/keyHighLightsDiv'
import mbbsicon1 from '../Assets/mbbs_icon_1.png'
import Headings from './common/Headings'
function KeyHighlights() {
    return (
        <>
            <section className=' bg-[#DDDDDD]'>
                <Mainlayout>
                    <div className='pt-40 pb-16 '>
                        <Headings title={"Key Highlights"}/>
                        
                        <div className='grid grid-cols-4 gap-8 pt-14 pb-8'>
                            <KeyHighLightsDiv img={mbbsicon1} title1={"349"} title2={"Doctors"}/>
                            <KeyHighLightsDiv img={mbbsicon1} title1={"349"} title2={"Average Daily Out-Patients"}/>
                            <KeyHighLightsDiv img={mbbsicon1} title1={"349"} title2={"Modular Operation Theatres"}/>
                            <KeyHighLightsDiv img={mbbsicon1} title1={"349"} title2={"Bedded Hospital"}/>
                            <KeyHighLightsDiv img={mbbsicon1} title1={"349"} title2={"Accredited"}/>
                            <KeyHighLightsDiv img={mbbsicon1} title1={"349"} title2={"Cath Lab"}/>
                            <KeyHighLightsDiv img={mbbsicon1} title1={"349"} title2={"NABL Accredited and ICMR Approved"}/>
                            <KeyHighLightsDiv img={mbbsicon1} title1={"349"} title2={"High-quality NExT Based Training Program"}/>
                        </div>
                     </div>

                </Mainlayout>
            </section>

        </>
    )
}

export default KeyHighlights