import React from 'react'
import School from '../image/school.png'
import { Abouts } from './Data'
import { GiBlackBook, GiPencil } from 'react-icons/gi'
import { FaBook, FaPlaneDeparture, FaUserGraduate, FaBookmark, FaRegPaperPlane } from 'react-icons/fa'
import Landscape4 from '../image/Landscape4.jpg'
import Landscape1 from '../image/Landscape1.jpg'
import Landscape3 from '../image/Landscape3.jpg'

import { BsFacebook, BsTelegram, BsTwitter, BsInstagram } from 'react-icons/bs'
import {AiOutlineArrowRight} from 'react-icons/ai'

import { MapBodyTitle } from './Data'



function About() {
  return (
    <>

      <div className="container mx-auto mt-[7rem]">
        <div className="grid grid-cols-1 h-full sm:grid-cols-md-2 md:grid-cols-2 lg:grid-cols-2 gap-3 p-6 lg:p-0">
          <div className='flex items-center justify-center' >
            <div className="sm:w-[640px] md:w-[768px] lg:w-[1024px] xl:w-[1280px]">
              {Abouts.map((item, index) => {

                return (

                  <div key={index}>
                    <div className='grid-y-5'>
                      <h1 className='text-7xl font-bold text-green-500'>{item.online}</h1>
                      <p className='mt-4 text-bold'>{item.template}</p>
                      <p className='mt-4 text-gray-500'>{item.title}</p>

                      <div className='flex gap-x-3 mt-3'>
                        <button className='px-4 bg-red-500 hover:border-blue-500 transition-all duation-200 ease-in hover:border-2 p-2 mt-3 text-white rounded-lg'>Try Now</button>
                        <button className='px-4 border-2 border-red-500 p-2 mt-3 text-red-500 hover:bg-red-500 hover:text-white transition-all duation-200 ease-in rounded-full'>SEE MORE</button>
                      </div>
                    </div>
                  </div>

                )

              })}
            </div>
          </div>
          <div className='' >
            <div className=''>
              <img src={School} />
            </div>
          </div>
        </div>


        <div className="grid grid-cols-1 h-full sm:grid-cols-md-2 md:grid-cols-2 lg:grid-cols-2 gap-3 p-3">
          <div className="flex items-center">
            <div className=' px-4'>
              <GiBlackBook className='text-4xl' />
            </div>
            <div className="">
              <h1 className='text-4xl text-green-500 font-bold'>News</h1>
              {Abouts.map((item, index) => {

                return (

                  <div key={index}>

                    <p>{item.title}</p>

                  </div>

                )

              })}
            </div>
          </div>
          <div className="flex items-center">
            <div className=' px-4'>
              <GiPencil className='text-4xl' />
            </div>
            <div className="">
              <h1 className='text-4xl text-green-500 font-bold'>Writing</h1>
              {Abouts.map((item, index) => {

                return (

                  <div key={index}>

                    <p>{item.title}</p>

                  </div>

                )

              })}
            </div>
          </div>
        </div>

        <div className='m-10'>
          <p className='text-center text-sm font-bold'>Category</p>
          <h1 className='text-center text-3xl'>We Offer Best Services</h1>
        </div>

        <div className="grid grid-cols-1 h-full sm:grid-cols-md-2 md:grid-cols-3 lg:grid-cols-4 gap-3 p-3">

          <div className=' '>
            <div className='flex justify-center'>

              <div className='grid gap-y-2 text-center '>
                <div className='flex justify-center'>
                  <FaBook className='text-4xl' />
                </div>

                <h1 className='text-2xl font-bold'>Calcualted Weather</h1>
                <p className='text-ellipsis overflow-hidden'>Build wichket longer <br /> admire do barton<br /> vanity itsefl do in it.</p>
              </div>
            </div>
          </div>
          <div className=' '>
            <div className='flex justify-center'>

              <div className='grid gap-y-2 text-center '>
                <div className='flex justify-center'>
                  <FaPlaneDeparture className='text-4xl' />
                </div>

                <h1 className='text-2xl font-bold'>Study Abroad</h1>
                <p className='text-ellipsis overflow-hidden'>Build wichket longer <br /> admire do barton<br /> vanity itsefl do in it.</p>
              </div>
            </div>
          </div>
          <div className=' '>
            <div className='flex justify-center'>

              <div className='grid gap-y-2 text-center '>
                <div className='flex justify-center'>
                  <FaUserGraduate className='text-4xl' />
                </div>

                <h1 className='text-2xl font-bold '>Graduate</h1>
                <p className='text-ellipsis overflow-hidden'>Build wichket longer <br /> admire do barton<br /> vanity itsefl do in it.</p>
              </div>
            </div>
          </div>
          <div className=' '>
            <div className='flex justify-center'>

              <div className='grid gap-y-2 text-center '>
                <div className='flex justify-center'>
                  <FaBookmark className='text-4xl' />
                </div>

                <h1 className='text-2xl font-bold'>Reward Yearly</h1>
                <p className='text-ellipsis overflow-hidden'>Build wichket longer <br /> admire do barton<br /> vanity itsefl do in it.</p>
              </div>
            </div>
          </div>
        </div>


        <div className='mt-10 text-center'>
          <p className='text-sm'>Entertanment</p>
          <h1 className='text-2xl'>Top Destinations</h1>
        </div>

        <div className="grid grid-cols-1 h-full sm:grid-cols-md-2 md:grid-cols-3 lg:grid-cols-3 gap-3 p-3 mt-10">

          <div className='shadow rounded-lg'>
            <img src={Landscape4} style={{width: "100%"}}/>
            <div className='p-4'>
              <div className='flex justify-between'>
                <p className='font-bold'>Americe</p>
                <p className='text-sm'>$501.00k</p>

              </div>
              <div className='flex gap-x-3 mt-3'>
                <FaRegPaperPlane className='mt-1 text-sm' />
                <p className='text-sm'>10 Day trip</p>
              </div>
            </div>
          </div>
          <div className='shadow rounded-lg'>
            <img src={Landscape1} alt="" style={{width: "100%"}} />
            <div className='p-4'>
              <div className='flex justify-between'>
                <p className='font-bold'>Americe</p>
                <p className='text-sm'>$501.00k</p>

              </div>
              <div className='flex gap-x-3 mt-3'>
                <FaRegPaperPlane className='mt-1 text-sm' />
                <p className='text-sm'>10 Day trip</p>
              </div>
            </div>
          </div>
          <div className='shadow rounded-lg'>
            <img src={Landscape3} alt="" />
            <div className='p-4'>
              <div className='flex justify-between'>
                <p className='font-bold'>Americe</p>
                <p className='text-sm'>$501.00k</p>

              </div>
              <div className='flex gap-x-3 mt-3'>
                <FaRegPaperPlane className='mt-1 text-sm' />
                <p className='text-sm'>10 Day trip</p>
              </div>
            </div>
          </div>

        </div>

      </div>
      
      <section className='mt-5 bg-black/80 text-white rounded-br-[50px]'>
                    <div className="container mx-auto py-10">
                        <div className='grid grid-cols-1 p-3 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-3'>

                            <div className=''>
                                <div className=''>
                                    {MapBodyTitle.map((item, index) => {

                                        return (

                                            <div key={index}>
                                                <h1 className='text-2xl font-bold mt-3'>{item.getNotification}</h1>
                                                <p className='text-sm text-gray-200 '>{item.titleNorti}</p>
                                            </div>

                                        )

                                    })}

                                    <div className='flex'>
                                        <input type="text" className='w-full hover:border-2  focus:outline-none focus:ring focus:ring-violet-300 p-2 border-none' />
                                        <button className='bg-blue-800 px-5 hover:bg-blue-700 transition-all duration-all ease-in'><AiOutlineArrowRight/></button>
                                    </div>

                                </div>
                            </div>
                            <div className=''>
                                <div className=''>
                                    {MapBodyTitle.map((item, index) => {

                                        return (
                                            <div key={index}>

                                                <h1 className='text-2xl font-bold mt-3'>{item.followUs}</h1>
                                            </div>
                                        )

                                    })}
                                    <div className='flex  gap-x-5'>
                                    <BsFacebook className='text-2xl hover hover:text-blue-500 cursor-pointer  duration-200 transition-all' />
                                    <BsTelegram className='text-2xl hover:text-blue-300 cursor-pointer  duration-200 transition-all' />
                                    <BsTwitter className='text-2xl hover:text-blue-300 cursor-pointer  duration-200 transition-all' />
                                    <BsInstagram className=' text-2xl hover:text-red-400 cursor-pointer  duration-200 transition-all' />

                                    </div>
                                </div>
                            </div>
                            <div className=''>
                                <div className=''>
                                    {MapBodyTitle.map((item, index) => {

                                        return (
                                            <div key={index} className='leading-4'>
                                               
                                                <h1 className='text-2xl font-bold mt-3'>{item.usefull}</h1>
                                  
                                                <p className='text-sm text-gray-300'>{item.case}</p>
                                                <p className='text-sm text-gray-300 '>{item.Blogs}</p>
                                                <p className='text-sm text-gray-300'>{item.Client}</p>
                                                <p className='text-sm text-gray-300'>{item.search}</p>
                            
                                            </div>
                                        )

                                    })}
                                </div>
                            </div>
                            <div className=''>
                                <div className=''>
                                    {MapBodyTitle.map((item, index) => {

                                        return(

                                            <div key={item}>
                                                <h1 className='text-2xl font-bold mt-3'>{item.contact}</h1>

                                                <p className='text-sm text-gray-300'>{item.price}</p>
                                                <p className='text-sm text-gray-300 '>{item.Fearture}</p>
                                                <p className='text-sm text-gray-300'>{item.Customer}</p>
                                                <p className='text-sm text-gray-300'>{item.FeedBack}</p>
                                            </div>

                                        )

                                    })}
                                </div>
                            </div>

                        </div>
                    </div>
                </section>



    </>
  )
}

export default About