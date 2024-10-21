import React from 'react'
import Mainlayout from './Mainlayout'
import Headings from './common/Headings'

function FeeStructure() {
    return (
        <>
            <section className='bg-[#F4E4C9]'>
                <Mainlayout>
                    <div className='pt-20 pb-20'>
                        <div>
                            <Headings title={"Fee Structure"} />
                        </div>
                        <div className='grid grid-cols-6  pt-12 pb-12 flex-row justify-evenly item-center'>
                                <div className='w-32 h-32  gap-x-10 rounded-full bg-[#004740] p-24  flex justify-center items-center  flex-col lines'>
                                    <div>
                                        <span className=' text-white block w-10/12 mx-auto text-xl font-bold '>Management/
                                            <br />
                                            Paid Seats
                                        </span>
                                    </div>
                                </div>
                                <div className='w-24 h-24  rounded-full bg-white p-24  flex justify-center items-center  flex-col lines'>
                                    <div>
                                        <span className='  text-[#004740] flex w-10/12 mx-auto text-xl font-bold '> 1<sup>st</sup> year</span>
                                          <h5><i class="fa-solid fa-indian-rupee-sign" style={{color: "#004740"}}>25,37,000</i></h5>  
                                    </div>
                                </div>
                                <div  className='w-28 h-28  rounded-full bg-white p-24  flex justify-center items-center  flex-col lines'>
                                <div>
                                        <span className='  text-[#004740]  w-10/12 mx-auto text-xl font-bold flex'> 2<sup>nd</sup> year</span>
                                          <h5><i class="fa-solid fa-indian-rupee-sign" style={{color: "#004740"}}>25,37,000</i></h5>  
                                    </div>
                                </div>
                                <div  className='w-28 h-28 rounded-full bg-white p-24  flex justify-center items-center  flex-col lines'>
                                <div>
                                        <span className='  text-[#004740]  flex w-10/12 mx-auto text-xl font-bold '> 3<sup>rd</sup> year</span>
                                          <h5><i class="fa-solid fa-indian-rupee-sign" style={{color: "#004740"}}>25,37,000</i></h5>  
                                    </div>
                                </div>
                                <div  className='w-28 h-28 rounded-full bg-white p-24  flex justify-center items-center  flex-col lines'>
                                <div>
                                        <span className='  text-[#004740] flex w-10/12 mx-auto text-xl font-bold '> 4<sup>th</sup> year</span>
                                          <h5><i class="fa-solid fa-indian-rupee-sign" style={{color: "#004740"}}>25,37,000</i></h5>  
                                    </div>
                                </div> 
                                <div  className='w-28 h-28  rounded-full bg-white p-24  flex justify-center items-center  flex-col lines'>
                                <div>
                                        <span className='  text-[#004740] flex w-10/12 mx-auto text-xl font-bold '> 5<sup>th</sup> year</span>
                                          <h5><i class="fa-solid fa-indian-rupee-sign" style={{color: "#004740"}}>12,70,000</i></h5>  
                                    </div>
                                </div>

                        </div>
                        <div className='grid grid-cols-6  pt-12 pb-12 flex-row justify-evenly item-center'>
                                <div className='w-32 h-32  gap-x-10 rounded-full bg-[#004740] p-24  flex justify-center items-center  flex-col lines'>
                                    <div>
                                        <span className=' text-white block w-10/12 mx-auto text-xl font-bold '>NRI Seats
        
                                        </span>
                                    </div>
                                </div>
                                <div className='w-24 h-24  rounded-full bg-white p-24  flex justify-center items-center  flex-col lines'>
                                    <div>
                                        <span className='  text-[#004740] flex w-10/12 mx-auto text-xl font-bold '> 1<sup>st</sup> year</span>
                                          <h5><i class="fa-solid fa-dollar-sign" style={{color: "#004740"}}>45,000</i></h5>  
                                    </div>
                                </div>
                                <div  className='w-28 h-28  rounded-full bg-white p-24  flex justify-center items-center  flex-col lines'>
                                <div>
                                        <span className='  text-[#004740]  w-10/12 mx-auto text-xl font-bold flex'> 2<sup>nd</sup> year</span>
                                        <h5><i class="fa-solid fa-dollar-sign" style={{color: "#004740"}}>45,000</i></h5>   
                                    </div>
                                </div>
                                <div  className='w-28 h-28 rounded-full bg-white p-24  flex justify-center items-center  flex-col lines'>
                                <div>
                                        <span className='  text-[#004740]  flex w-10/12 mx-auto text-xl font-bold '> 3<sup>rd</sup> year</span>
                                        <h5><i class="fa-solid fa-dollar-sign" style={{color: "#004740"}}>45,000</i></h5> 
                                    </div>
                                </div>
                                <div  className='w-28 h-28 rounded-full bg-white p-24  flex justify-center items-center  flex-col lines'>
                                <div>
                                        <span className='  text-[#004740] flex w-10/12 mx-auto text-xl font-bold '> 4<sup>th</sup> year</span>
                                        <h5><i class="fa-solid fa-dollar-sign" style={{color: "#004740"}}>45,000</i></h5> 
                                    </div>
                                </div> 
                                <div  className='w-28 h-28  rounded-full bg-white p-24  flex justify-center items-center  flex-col lines'>
                                <div>
                                        <span className='  text-[#004740] flex w-10/12 mx-auto text-xl font-bold '> 5<sup>th</sup> year</span>
                                        <h5><i class="fa-solid fa-dollar-sign"style={{color: "#004740"}}>22,000</i></h5>  
                                    </div>
                                </div>

                        </div>
                        <div className='text-center'>
                            <p>Note: *The candidate must pay the total 1st-year fee upon admission. Starting from the 2nd year, following university rules, fee may be paid in instalments upon request.</p>
                        </div>
                    </div>
                </Mainlayout>
            </section>
        </>
    )
}

export default FeeStructure