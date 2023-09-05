
import React from 'react'

import ReactLogo from '../image/logo512.png'
import { TitleBody } from './Data'
import {FaLightbulb} from 'react-icons/fa'
import {GiPowerLightning} from 'react-icons/gi'
import {RiGraduationCapFill} from 'react-icons/ri'
import Teach from '../image/Teach.jpg'

function GridMenuBody() {
  return (
   <>
   
    <div className=''>
        <div className='grid sm:w-[640px] md:w-[768px] lg:w-[1024px] xl:w-[1280px] 2xl:w-[1536px]  grid-cols-1 gap-x-8 sm:grid-cols-2 justify-center md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-2'>

            <div className='col-span-2'>
                <div className='relative'>
                    <img className='w-96 h-96 rounded-full' src={Teach} alt="" />
                    <div className='h-24 bottom-0 right-20 sm:bottom-[0] md:bottom-[50px] sm:right-[200px]  md:right-[300px] lg:bottom-[100px] lg:right-[170px]  w-24 bg-gray-200 flex items-center  justify-center shadow-lg absolute bottom-24 rounded-full right-[180px]'>
                        <div className='grid grap-y-2 text-center'>
                            <h1 className='text-orange-400'>Discount</h1>
                            <h1 className='text-2xl'>120</h1>
                        </div>
                    </div>
                </div>
            </div>
           
            <div className='col-span-2 flex items-center'>
                <div>
                    {TitleBody.map((item, index) => {

                        return(

                            <div key={index}>
                                <h1 className='text-5xl font-bold'>{item.titleBar}</h1>
                               <div className='mt-4 grid gap-y-4'>
                                    <p className='text-gray-500 font-bold flex'><FaLightbulb/><span className='ml-3'>{item.title1}</span></p>
                                    <p className='text-gray-500 font-bold flex'><GiPowerLightning/><span className='ml-3'>{item.title2}</span></p>
                                    <p className='text-gray-500 font-bold flex'><RiGraduationCapFill/><span className='ml-3'>{item.title3}</span></p>
                                    
                                </div>
                                <button className='bg-orange-500 p-2 mt-5 text-white hover:bg-orange-400 transition-all duration-300'>Learn More</button>
                            </div>
                        )

                    })}
                 
                </div>
            </div>
            
        </div>
    </div>
   
   </>
  )
}

export default GridMenuBody