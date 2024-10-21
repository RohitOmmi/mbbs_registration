import React from 'react'
import Mainlayout from './Mainlayout'
import Headings from './common/Headings'
import MeritScholarDivs from './common/MeritScholarDivs'

function MeritScholars() {
    const data = [{
        id: 1,
        para1: " 1-25,000 ",
        title: "Scholarship: 100%",
        para2: "Fee Waiver up to ₹ 25,37,000"
    },
    {
        id: 2,
        para1: " 25,001-75,000 ",
        title: "Scholarship:75%",
        para2: "Fee Waiver up to ₹ 19,02,750"
    },
    {
        id: 3,
        para1: " 75,001-1,50,000 ",
        title: "Scholarship:50%",
        para2: "Fee Waiver up to ₹ 12,68,500"
    },
    {
        id: 4,
        para1: " 1,50,001 - 3,00,000 ",
        title: "Scholarship: 25%",
        para2: "Fee Waiver up to ₹ 6,34,250"
    },
    {
        id: 5,
        para1: " 3,00,001 - 4,50,000 ",
        title: "Scholarship: 15%",
        para2: "Fee Waiver up to ₹ 3,80,550"
    },
    {
        id: 6,
        para1: " 4,50,001 - 6,00,000 ",
        title: "Scholarship: 10%",
        para2: "Fee Waiver up to ₹ 2,53,700"
    },
    ]
    return (
        <>
            <section>
                <Mainlayout>
                    <div className='pt-20 pb-20'>
                        <div>
                            <Headings title={"Merit Scholarships for NEET 2024 Ranks"} />
                        </div>
                        <div className='grid grid-cols-4 gap-4 pt-12'>
                            {data.map((each, index) => {
                                //   console.log("index",index)
                                //   console.log("id",each.id)
                                return (
                                    <MeritScholarDivs title={each.title} para1={each.para1} para2={each.para2} keys={each.id} />
                                )
                            }
                            )}
                            {/* <MeritScholarDivs title={"Scholarship: 100%"} para1={"1-25,000 "} para2={"Fee Waiver up to ₹ 25,37,000"}/>
                <MeritScholarDivs title={"Scholarship: 100%"} para1={"1-25,000 "} para2={"Fee Waiver up to ₹ 25,37,000"}/>
                <MeritScholarDivs title={"Scholarship: 100%"} para1={"1-25,000 "} para2={"Fee Waiver up to ₹ 25,37,000"}/>
                <MeritScholarDivs title={"Scholarship: 100%"} para1={"1-25,000 "} para2={"Fee Waiver up to ₹ 25,37,000"}/>
                <MeritScholarDivs title={"Scholarship: 100%"} para1={"1-25,000 "} para2={"Fee Waiver up to ₹ 25,37,000"}/> */}

                        </div>
                        <div className='w-8/12 mx-auto mt-12'>
                            <div><h3>General Terms:</h3></div>
                            <div className=' pl-10'>
                                <ul className='list-disc'>
                                    <li>An additional 20% scholarship will be allocated specifically for hostel fees, covering both food and accommodation.</li>
                                    <li>The merit scholarships will continue in the subsequent years of study (2nd, 3rd, 4th, and 5th year of MBBS), provided the student scores 65% and above aggregate marks every year.</li>
                                    <li>Apart from the above, the top 5% of students (subject to a maximum of seven students), who are not admitted under this merit scholarship scheme, will also be awarded a 10% scholarship in the 2nd, 3rd, 4th, and 5th year of MBBS, subject to scoring 65% and above aggregate marks every year.</li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </Mainlayout>
            </section>
        </>

    )
}

export default MeritScholars