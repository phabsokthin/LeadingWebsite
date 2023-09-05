import React from 'react'
import { Banner } from './Data'
import Teacher from '../image/Teacher.png'
import Staff from '../image/Staff.png'
import GirlsStaff from '../image/GirlsStaff.png'
import BlackTeacher from '../image/BlackTeacher.png'
import Student from '../image/Student.png'
import BannerMenu from './BannerMenu'
import BannerMenuResponsive from './BannerMenuResponsive'
import GridMenuBody from './GridMenuBody'
import { useTypewriter, Cursor } from 'react-simple-typewriter'

function BannerHeader() {


    const [text] = useTypewriter({

     words: ['Start Learning with us now', "We have alot of courses for you!"],
        loop: {},
        typeSpeed: 200,
        delaySpeed: 80,

    });

    const items = {

        marginTop: "140px",
        marginLeft: "30px"


    }

    return (
        <>


            <div className="container mx-auto">
                <div className="row  p-6" style={{ marginTop: items.marginTop }}>
                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  col gap-3'>
                        <div className=' w-14 h-14 rounded-full border-8 border-green-400'>
                            <div className='w-4 h-4 border-2 border-green-400 rounded-full' style={{ marginTop: "50px", marginLeft: items.marginLeft }}></div>
                        </div>
                        <div>
                            
                            {Banner.map((items, index) => {

                                return (
                                    <div div key={index}>

                                        <h1 className='text-4xl font-bold mt-5 md:mt-[0] lg:mt-[0]'>

                                           <span>
                                                {text}
                                                
                                           </span>

                                           <span>
                                                <Cursor cursorStyle="?"/>
                                           </span>

                                        </h1>
                                        <p className='text-sm'>{items.titles}</p>

                                        <div className='flex justify-end mt-5 md:mt-[0] lg:mt-[0]'>
                                            <div className='mt-6'>
                                                <img className="h-10 w-10 mr-[150px] sm:mt-[0]  md:mr-[0] lg:mr-[0] bg-pink-500 rounded-full object-contain" src={Student} alt="" />
                                            </div>
                                        </div>

                                    </div>

                                )

                            })}
                        </div>

                        <div className='w-[250px] z-10'>
                            <div className='mt-6'>
                                <img className=' bg-red-300 rounded-full mt-[-90px] lg:mt-[0] md:mt-[0] sm:mt-[] ' src={Teacher} alt="" />
                            </div>
                            <div className='mt-6'>
                                <img className="h-10 w-10 bg-red-400 sm:ml-[0] sm:ml-[0] rounded-full  ml-[100px] md:ml-[0] lg:ml-[0]  object-contain" src={BlackTeacher} alt="" />
                            </div>

                        </div>
                        <div className=''>
                            <div className='mb-2'>
                                <img className="h-24 w-24 bg-orange-500 sm:ml-[0] sm:mt-[0] ml-[270px] mt-[-170px]  md:mt-[-50px]  md:ml-[550px] lg:mt-[0] lg:ml-[0] rounded-full" src={Staff} alt="" />
                            </div>
                            <div className='mt-6'>
                                <img className="h-16 w-16 bg-blue-400 ml-[200px] sm:mt-[0] sm:ml-[0] md:ml-[0] mt-[-20px] rounded-full md:mt-[-70px] md:ml-[440px] lg:mt-[0] lg:ml-[0] object-contain" src={GirlsStaff} alt="" />
                            </div>
                        </div>

                    </div>

                    <div className=''>
                        <BannerMenuResponsive/>
                    </div>

                     <BannerMenu/>
                     <GridMenuBody/>

                </div>
            </div>


        </>
    )
}

export default BannerHeader