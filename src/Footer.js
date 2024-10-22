import React from 'react'
import Mainlayout from './Componets/Mainlayout'
import Headings from './Componets/common/Headings'
import gimsrlogo from "./Assets/gimsrlogo.png"
function Footer() {
    const data = [
        {
            id: 1,
            title: "Prof. Narendra",
            contact: "9908035979"

        },
        {
            id: 1,
            title: "Mr. Mahendra Manoj",
            contact: "+91 9781517851"
        },
        {
            id: 3,
            title: "Dr. R. Ramana Rao",
            contact: "+91 9848330640"
        }
    ]
    return (
        <>
            <Mainlayout>
                <div className='pt-20 pb-20'>
                    <div>
                        <Headings title={"For Admissions, Contact"} />
                    </div>
                    <div className='w-8/12 grid grid-cols-3 mx-auto p-16'>
                        {
                            data.map((each) => {
                                return (
                                    <div key={each.id} className="text-center py-4 border-adm">
                                        <h4 className="text-2xl text-[#A58255] font-semibold mb-1">
                                            {each.title}
                                        </h4>
                                        <p>{each.contact}</p>
                                    </div>
                                );
                            })
                        }
                    </div>
                    <div className='text-center flex items-center flex-col gap-2 mb-8'>
                        <div className='w-24 h-24 items-center'>
                            <img src={gimsrlogo} className='w-full h-full px-auto py-auto' alt="gimsr_logo"/>
                        </div>
                        <div className='items-center'>
                            <h1>GITAM Institute of Medical Sciences & Research</h1>
                            <h4>GITAM (Deemed to be University), Rushikonda, Visakhapatnam – 530 045.
                            Andhra Pradesh, India</h4>
                        </div>
                    </div>
                </div>
            </Mainlayout>
            <div className='bg-[#2D2D2D] text-center py-3 text-white pb-4 text-lg'>
            © 2024 GITAM - All Rights Reserved. | Privacy Policy
            </div>
        </>
    )
}

export default Footer