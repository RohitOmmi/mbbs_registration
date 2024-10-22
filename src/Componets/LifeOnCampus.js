import React from 'react'
import Mainlayout from './Mainlayout'
import Headings from './common/Headings'
import  { useState } from "react";
import img1 from "../Assets/GITAM-Lp-June-2024-1.png";
import img2 from "../Assets/GITAM-Lp-June-2024-2.png";
import img3 from "../Assets/GITAM-Lp-June-2024-3.png";
import img4 from "../Assets/GITAM-Lp-June-2024-4.png";

function LifeOnCampus() {
    const [currentImage, setCurrentImage] = useState(img1);
   
    const images = {
        "Vibrant Festivities": img1,
        "Comfortable Hostels": img2,
        "Diverse Student Clubs": img3,
        "Sports Excellence": img4,
    };

    const handleImageChange = (heading) => {
        setCurrentImage(images[heading]);
      };

    return (
        <>
            <section>
                <Mainlayout>
                    <div className='pt-20 pb-20'>
                        <div>
                            <Headings title={"Life on Campus"} />
                        </div>
                        <div className='w-8/12 mx-auto text-centerr pb-10'>
                            <p className='text-center items-center'>GITAM fosters a vibrant culture that keeps the student body engaged with a calendar packed with cultural events, conferences, exhibitions, sports and a lot more</p>
                        </div>
                        <div className="mx-auto w-11/12 mt-12 rounded-xl overflow-hidden relative">
                            <picture>
                                <source media="(min-width: 641px)" srcSet={currentImage} />
                                <img src={currentImage} className="w-full " alt="Campus images" />
                            </picture>
                            <div className="w-full absolute bottom-10  top-1/4  right-1/4 text-white  text-left font-semibold text-2xl grid grid-cols-1  gap-y-6">
                                {Object.keys(images).map((heading) => (
                                    <h5
                                        key={heading}
                                        onClick={() => handleImageChange(heading)}
                                        className="cursor-pointer w-full text-center"
                                    >
                                        {heading}
                                    </h5>
                                ))}
                            </div>
                        </div>
                    </div>
                </Mainlayout>
            </section>
        </>
    )
}

export default LifeOnCampus