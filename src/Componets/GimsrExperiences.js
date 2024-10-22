// import React, { useState, useEffect } from "react";
// import SwipeableViews from "react-swipeable-views";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';


// const Experiences = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [intervalId, setIntervalId] = useState(null);

//   const items = [
//     {
//       image: "./images/experiences_1.png",
//       name: "Dr.sdsdsdd",
//       description:
//         "Attending this medical college has been an incredibly enriching experience. The faculty members were exceptional, creating a supportive and interactive learning environment. The top-notch infrastructure provided the best facilities for our academic growth. The professors and doctors were knowledgeable and student-friendly, encouraging active participation and hands-on experience. These skills have given me a competitive edge in my professional life. The vibrant student life and comfortable hostels made it feel like a home away from home.",
//     },
//     {
//       image: "./images/experiences_2.png",
//       name: "Dr.we22w",
//       description:
//         "My experience at GIMSR has been nothing short of amazing. The college has played a significant role in shaping me into a better person. The state-of-the-art infrastructure and meticulous maintenance leave everyone awestruck. The faculties have been exceptionally friendly and supportive, making the learning journey enjoyable and inspiring. The friendships forged here are truly special, and the memories created will be cherished forever. I am deeply grateful for the invaluable experiences and learning opportunities I received at GIMSR.",
//     },
//     {
//         image: "./images/experiences_3.png",
//         name: "Dr.ggfgfggf",
//         description:
//           "In 2016, I was searching for the perfect undergraduate medical college and fortunately found Gitam Institute of Medical Sciences and Research (GIMSR). The infrastructure and professors exceeded my expectations, providing a comfortable learning environment and valuable guidance. Serving thousands of COVID patients through GIMSR remains an honour. I highly recommend this college for its development of various facilities in multi-speciality and super-speciality courses, producing the finest doctors for our nation."
//       }


//   ];

//   useEffect(() => {
//     const id = setInterval(() => {
//       nextItem();
//     }, 5000);
//     setIntervalId(id);

//     return () => clearInterval(id);
//   }, [currentIndex]); // eslint-disable-line react-hooks/exhaustive-deps

//   const nextItem = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === items.length - 1 ? 0 : prevIndex + 1
//     );
//   };

//   const prevItem = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === 0 ? items.length - 1 : prevIndex - 1
//     );
//   };

//   const handlePrevClick = () => {
//     clearInterval(intervalId);
//     prevItem();
//   };

//   const handleNextClick = () => {
//     clearInterval(intervalId);
//     nextItem();
//   };

//   return (
//     <div className="bg-gray-200 py-8">
//       <h2 className="text-center text-green-700 font-bold text-2xl mb-4">
//         GIMSR Experiences
//       </h2>
//       <div className="flex justify-center items-center mt-8">
//         <button
//           className="flex justify-start pr-4"
//           onClick={handlePrevClick}
//         >
//           <FontAwesomeIcon icon={faChevronLeft} className="text-2xl cursor-pointer" />
//         </button>
//         <div className="border-2 border-white rounded-2xl bg-white overflow-hidden sm:w-4/12 md:w-3/12 lg:w-2/12">
//           <SwipeableViews
//             index={currentIndex}
//             onChangeIndex={(index) => setCurrentIndex(index)}
//             enableMouseEvents
//           >
//             {items.map((item, index) => (
//               <div key={index} >
//                 <div >
//                   <div style={{display:"flex",flexDirection:"row"}}>
//                     <img
//                       src={item.image}
//                       alt="academics"

//                     />
//                     <div >
//                       <h3 >
//                         {item.name}
//                       </h3>
//                     </div>
//                   </div>
//                 </div>
//                 <div style={{height:"20rem",width:"100%"}}>
//                   <p style={{textAlign:"justify",width:"100%"}}>{item.description}</p>
//                 </div>
//               </div>
//             ))}
//           </SwipeableViews>
//         </div>
//         <button
//           className="flex justify-end pl-4"
//           onClick={handleNextClick}
//         >
//           <FontAwesomeIcon icon={faChevronRight} className="text-2xl cursor-pointer" />
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Experiences;
import React from 'react'
import Mainlayout from './Mainlayout'
import Headings from './common/Headings'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import experience_1 from "../Assets/experiences_1.png"
import experience_2 from "../Assets/experiences_2.png"
import experience_3 from "../Assets/experiences_3.png"
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

function GimsrExperiences() {
    return (
        <>
            <section className='bg-[#DDDDDD]'>
                <Mainlayout>
                    <div className='pt-20 pb-20'>
                        <div>
                            <Headings title={"GIMSR Experiences"} />
                        </div>
                        <div>
                            <Swiper
                                spaceBetween={30}
                                centeredSlides={true}
                                autoplay={{
                                    delay: 2500,
                                    disableOnInteraction: false,
                                }}
                                pagination={{
                                    clickable: true,
                                }}
                                navigation={true}
                                modules={[Autoplay, Pagination, Navigation]}
                                className="mySwiper"
                            >
                                <SwiperSlide>
                                <div className='flex items-center w-8/12 mx-auto gap-2 bg-white p-12'>
                                    <div className='shadow-lg rounded=lg w-3/12'>
                                        <img src={experience_1} className='w-full h-full'/>
                                        <div className='bg-white text-[#007367] text-md font-bold text-center'>
                                            <h1>Dr. Likitha Jakkampudi</h1>
                                        </div>
                                    </div>
                                    <div className='w-8/12'>
                                        <p>My experience at GIMSR has been nothing short of amazing. The college has played a significant role in shaping me into a better person. The state-of-the-art infrastructure and meticulous maintenance leave everyone awestruck. The faculties have been exceptionally friendly and supportive, making the learning journey enjoyable and inspiring. The friendships forged here are truly special, and the memories created will be cherished forever. I am deeply grateful for the invaluable experiences and learning opportunities I received at GIMSR.</p>
                                    </div>
                                </div>
                                </SwiperSlide>
                                <SwiperSlide >
                                <div className='flex items-center w-8/12 mx-auto gap-2 bg-white p-12'>
                                    <div className='shadow-lg rounded=lg w-3/12'>
                                        <img src={experience_2} className='w-full h-full'/> 
                                        <div className='bg-white text-[#007367] text-md font-bold text-center '>
                                            <h1>Dr. Anoop Reddy</h1>
                                        </div>
                                    </div>
                                    <div className='w-8/12'>
                                        <p>Attending this medical college has been an incredibly enriching experience. The faculty members were exceptional, creating a supportive and interactive learning environment. The top-notch infrastructure provided the best facilities for our academic growth. The professors and doctors were knowledgeable and student-friendly, encouraging active participation and hands-on experience. These skills have given me a competitive edge in my professional life. The vibrant student life and comfortable hostels made it feel like a home away from home.</p>
                                    </div>
                                </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                <div className='flex items-center w-8/12 mx-auto gap-2 bg-white p-12'>
                                    <div className='shadow-lg rounded=lg w-3/12'>
                                        <img src={experience_3} className='w-full h-full'/>
                                        <div className='bg-white text-[#007367] text-md font-bold text-center '>
                                            <h1>Dr. Mortha Sai Lakshmi</h1>
                                        </div>
                                    </div>
                                    <div className='w-8/12'>
                                        <p>In 2016, I was searching for the perfect undergraduate medical college and fortunately found Gitam Institute of Medical Sciences and Research (GIMSR). The infrastructure and professors exceeded my expectations, providing a comfortable learning environment and valuable guidance. Serving thousands of COVID patients through GIMSR remains an honour. I highly recommend this college for its development of various facilities in multi-speciality and super-speciality courses, producing the finest doctors for our nation.</p>
                                    </div>
                                </div>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                </Mainlayout>
            </section>
        </>
    )
}

export default GimsrExperiences
