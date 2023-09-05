import React from 'react'
import { MapBodyTitle } from './Data'
import Graduated from '../image/Stgraduate.png'
import Meeting from '../image/Meeting.jpg'
import SuccessMeeting from '../image/SuccessMeeting.jpg'
import Discustion from '../image/Discustion.jpg'
import { BsFacebook, BsTelegram, BsTwitter, BsInstagram } from 'react-icons/bs'
import {AiOutlineArrowRight} from 'react-icons/ai'

function TitleBody() {
    return (
        <>

            <div className="container mx-auto my-10 sm:w-[640px] md:w-[768px] lg:w-[1024px] xl:w-[1280px] 2xl:w-[1536px]">
                <div className="grid p-2 grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4">
                    <div className='col-span-2'>
                        <div className='grid items-center mt-20'>
                            {MapBodyTitle.map((item, index) => {

                                return (

                                    <>

                                        <div key={index} className='p-3'>
                                            <h1 className='text-6xl font-bold'>{item.bodytitles}</h1>
                                        </div>

                                    </>
                                )

                            })}

                            <div className=' flex items-center  justify-center '>
                                <div className='p-3 bg-white  shadow-xl mt-10 h-16'>
                                    <a href="/" className='bg-gray-200 p-3 m-2'>Your name</a>
                                    <a href="/" className='bg-gray-200 p-3 m-2'>Your Address</a>
                                    <a href="/" className='bg-red-400 p-3 m-2 text-white'>Subscripted</a>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className='col-span-2'>
                        <div className='flex items-center'>
                            <img src={Graduated} alt="" />
                            <div className='h-10 w-10 border-8 rounded-full border-orange-500'>

                            </div>
                        </div>
                    </div>

                </div>


                <div className='text-center mt-5 grid gap-y-5'>
                    <div>
                        {MapBodyTitle.map((item, index) => {

                            return (

                                <div key={index}>
                                    <h1 className='text-4xl font-bold'>{item.blog}</h1>
                                    <p className='mt-3'>{item.blogTitle}</p>
                                </div>
                            )

                        })}
                    </div>
                </div>

                <div className='grid mt-5 p-2 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
                    <div className='shadow-lg rounded-xl'>
                        <img src={Meeting} alt="" />
                        <div className='p-5'>

                            <div className=''>
                                {MapBodyTitle.map((item, index) => {

                                    return (
                                        <div key={index}>
                                            <p className='text-sm font-bold'>{item.cardTitle}</p>
                                            <h1 className='text-2xl font-bold'>{item.cardTitle1}</h1>
                                            <p className='text-sm text-gray-400 font-bold'>{item.cardTitle2}</p>
                                        </div>
                                    )

                                })}
                            </div>

                            <div className='mt-5'>
                                <div className='flex justify-end gap-x-3'>
                                    <BsFacebook className='text-blue-700 hover hover:text-blue-500 cursor-pointer  duration-200 transition-all' />
                                    <BsTelegram className='text-blue-500 hover:text-blue-300 cursor-pointer  duration-200 transition-all' />
                                    <BsTwitter className='text-blue-600 hover:text-blue-300 cursor-pointer  duration-200 transition-all' />
                                    <BsInstagram className='text-red-600 hover:text-red-400 cursor-pointer  duration-200 transition-all' />

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='shadow-lg rounded-xl'>
                        <img src={SuccessMeeting} alt="" />
                        <div className='p-5'>

                            <div className=''>
                                {MapBodyTitle.map((item, index) => {

                                    return (
                                        <div key={index}>
                                            <p className='text-sm font-bold'>{item.cardTitle}</p>
                                            <h1 className='text-2xl font-bold'>{item.cardTitle1}</h1>
                                            <p className='text-sm text-gray-400 font-bold'>{item.cardTitle2}</p>
                                        </div>
                                    )

                                })}
                            </div>

                            <div className='mt-5'>
                                <div className='flex justify-end gap-x-3'>
                                    <BsFacebook className='text-blue-700 hover hover:text-blue-500 cursor-pointer  duration-200 transition-all' />
                                    <BsTelegram className='text-blue-500 hover:text-blue-300 cursor-pointer  duration-200 transition-all' />
                                    <BsTwitter className='text-blue-600 hover:text-blue-300 cursor-pointer  duration-200 transition-all' />
                                    <BsInstagram className='text-red-600 hover:text-red-400 cursor-pointer  duration-200 transition-all' />

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='shadow-lg rounded-xl'>
                        <img src={Discustion} alt="" />
                        <div className='p-5'>

                            <div className=''>
                                {MapBodyTitle.map((item, index) => {

                                    return (
                                        <div key={index}>
                                            <p className='text-sm font-bold'>{item.cardTitle}</p>
                                            <h1 className='text-2xl font-bold'>{item.cardTitle1}</h1>
                                            <p className='text-sm text-gray-400 font-bold'>{item.cardTitle2}</p>
                                        </div>
                                    )

                                })}
                            </div>

                            <div className='mt-5'>
                                <div className='flex justify-end gap-x-3'>
                                    <BsFacebook className='text-blue-700 hover hover:text-blue-500 cursor-pointer  duration-200 transition-all' />
                                    <BsTelegram className='text-blue-500 hover:text-blue-300 cursor-pointer  duration-200 transition-all' />
                                    <BsTwitter className='text-blue-600 hover:text-blue-300 cursor-pointer  duration-200 transition-all' />
                                    <BsInstagram className='text-red-600 hover:text-red-400 cursor-pointer  duration-200 transition-all' />


                                </div>
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

export default TitleBody