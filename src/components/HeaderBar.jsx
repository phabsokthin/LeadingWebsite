import React, { useEffect, useState } from 'react'

import Grade from '../image/Grade.png'
import Navbar from './Navbar'
import Responsive from './Responsive'



function HeaderBar() {

    const [header, setHeader] = useState(false)

    useEffect(() => {

        window.addEventListener('scroll', () => {

            window.scrollY > 36 ? setHeader(true) : setHeader(false)

        })

    })


    return (
        <div className="container mx-auto">
            <header className={`${header ? 'top-0' : 'top-9'} bg-green-600 px-4 max-w-[90vw] ml-6 h-[80px] 
        sm:max-w-[640px] md:max-w-[768px] lg:max-w-[1024px] xl:max-w-[1280px]   2xl:max-w-[1536px]
        sm:ml-[0px] md:ml-[0px] lg:ml-[0px] xl:ml-[0px] 2xl:ml-[0px] transition-all duration-300
        flex items-center justify-between text-white rounded-lg shadow-lg w-full fixed z-20`}>

                <div className='flex items-center gap-x-2'>
                    <a href="/">
                        <img src={Grade} />
                    </a>
                    <div>
                        <h2 className='font-bold text-orange-300' style={{ marginBottom: "-5px" }}>Happy</h2>
                        <p className='text-sm text-white' style={{ fontSize: "10px" }}>Graduated</p>
                    </div>

                </div>
                <div className='hidden lg:flex'>
                    <Navbar />
                </div>
                <div className='flex items-center'>
                    <div className='flex gap-x-4'>
                        <button className='bg-blue-500 p-2 text-sm rounded-lg text-white hover:bg-blue-400 transition duration-300 cursor-pointer'>Sign In</button>
                        <button className='bg-red-500 p-2 text-sm rounded-lg text-white hover:bg-red-400 transition duration-300 cursor-pointer'>Sign Out</button>
                    </div>


                  <div className='ml-2'>
                     <Responsive />
                  </div>

                </div>


            </header>

        
        </div>
    )
}

export default HeaderBar