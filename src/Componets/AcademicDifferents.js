import React from 'react'
import Mainlayout from './Mainlayout'
import Headings from './common/Headings'
import academic_1 from '../Assets/academic_1.png'
import academic_2 from "../Assets/academic_2.png"
import academic_3 from "../Assets/academic_3.png"
import academic_4 from "../Assets/academic_4.png"
import academic_5 from "../Assets/academic_5.png"
import academic_6 from "../Assets/academic_6.png"
import academic_7 from "../Assets/academic_7.png"
import academic_8 from "../Assets/academic_8.png"
import AcademicCard from './common/AcademicCard'
function AcademicDifferents() {
  return (
    <>
    <section>
        <Mainlayout>
            <div className='pt-20 pb-20'>
                <div>
                    <Headings title={"Academic Differentiators: Theory Meets Real-World Applications at GIMSR"}/>
                </div>
                <div className=' w-8/12 mx-auto text-center pb-10'>
                    <p className='pt-4'>Embark on a transformative journey at GIMSR, where theory meets practice through hands-on experience in our state-of-the-art labs and facilities, empowering healthcare professionals for excellence.</p>
                </div>
                <div className='grid grid-cols-4 gap-0'>
                    <AcademicCard image={academic_1} Title={"Skills Lab"} description={"Step into a world of innovation and learning at GIMSR's Skill Lab for Simulation & Research. As you embark on your medical journey, our state-of-the-art facility awaits, offering advanced training in various medical and surgical areas. With cutting-edge technology and lifelike mannequins, you'll experience a hands-on approach to learning, bridging the gap between theory and practice."}/>
                    <AcademicCard image={academic_2} Title={"Technology Rich Learning Spaces"} description={"Step into a world of innovation and learning at GIMSR's Skill Lab for Simulation & Research. As you embark on your medical journey, our state-of-the-art facility awaits, offering advanced training in various medical and surgical areas. With cutting-edge technology and lifelike mannequins, you'll experience a hands-on approach to learning, bridging the gap between theory and practice."}/>
                    <AcademicCard image={academic_3} Title={"Cath Lab"} description={"Step into a world of innovation and learning at GIMSR's Skill Lab for Simulation & Research. As you embark on your medical journey, our state-of-the-art facility awaits, offering advanced training in various medical and surgical areas. With cutting-edge technology and lifelike mannequins, you'll experience a hands-on approach to learning, bridging the gap between theory and practice."}/>
                    <AcademicCard image={academic_4} Title={"Computer Assisted Learning"} description={"Step into a world of innovation and learning at GIMSR's Skill Lab for Simulation & Research. As you embark on your medical journey, our state-of-the-art facility awaits, offering advanced training in various medical and surgical areas. With cutting-edge technology and lifelike mannequins, you'll experience a hands-on approach to learning, bridging the gap between theory and practice."}/>
                    <AcademicCard image={academic_5} Title={"Pathology Museum"} description={"Step into a world of innovation and learning at GIMSR's Skill Lab for Simulation & Research. As you embark on your medical journey, our state-of-the-art facility awaits, offering advanced training in various medical and surgical areas. With cutting-edge technology and lifelike mannequins, you'll experience a hands-on approach to learning, bridging the gap between theory and practice."}/>
                    <AcademicCard image={academic_6} Title={"Anatomy Museum"} description={"Step into a world of innovation and learning at GIMSR's Skill Lab for Simulation & Research. As you embark on your medical journey, our state-of-the-art facility awaits, offering advanced training in various medical and surgical areas. With cutting-edge technology and lifelike mannequins, you'll experience a hands-on approach to learning, bridging the gap between theory and practice."}/>
                    <AcademicCard image={academic_7} Title={"Experimental Learning through Family Adoption Program"} description={"Step into a world of innovation and learning at GIMSR's Skill Lab for Simulation & Research. As you embark on your medical journey, our state-of-the-art facility awaits, offering advanced training in various medical and surgical areas. With cutting-edge technology and lifelike mannequins, you'll experience a hands-on approach to learning, bridging the gap between theory and practice."}/>
                    <AcademicCard image={academic_8} Title={"All phases Computerized high-quality NExT based Training"} description={"Step into a world of innovation and learning at GIMSR's Skill Lab for Simulation & Research. As you embark on your medical journey, our state-of-the-art facility awaits, offering advanced training in various medical and surgical areas. With cutting-edge technology and lifelike mannequins, you'll experience a hands-on approach to learning, bridging the gap between theory and practice."}/>


                    {/* <div className='AcademicCard'>
                        <div className='visible-div rounded-lg  '>
                            <img src={skillslab} className='w-full'/>
                            <h3 className='bg-[#007367] p-10 text-white text-3xl font-bold text-center'>Skills Lab</h3>
                        </div>
                        <div className='hiden-div rounded-lg p-2 bg-white'>
                            <h6 className='text-[#007367] text-center'>Skills Lab</h6>
                            <p></p>Step into a world of innovation and learning at GIMSR's Skill Lab for Simulation & Research. As you embark on your medical journey, our state-of-the-art facility awaits, offering advanced training in various medical and surgical areas. With cutting-edge technology and lifelike mannequins, you'll experience a hands-on approach to learning, bridging the gap between theory and practice.
                        </div>
                    </div>   */}
                </div>
            </div>
        </Mainlayout>
    </section>
    </>
  )
}

export default AcademicDifferents