import React, { useState } from 'react'

import { AiFillSetting } from 'react-icons/ai'
import BannerMenu from './BannerMenu'
import { BannerMenus } from './Data'

function BannerMenuResponsive() {

    const [isOpen, setIsOpen] = useState(false)

    return (
        <>

            <nav className='p-4'>
                <div onClick={() => setIsOpen(!isOpen)} className='text-2xl w-[0] sm:ml-[200px] sm:mt-[-90px] cursor-pointer lg:hidden'>
                    <AiFillSetting />
                </div>

                <ul className={`${ isOpen ? 'max-h-60 p-2' :'max-h-0 p0' } mt-[40px] transition-all duration-300 w-[200px] sm:ml-[200px] sm:mt-[0px] lg:hidden rounded-lg overflow-hidden
                 bg-white shadow-xl flex flex-col gap-y-2 top-0 left-0`} >
                    {BannerMenus.map((item, index) => {

                        return (

                            <li key={index}>

                                <a className='mx-[20px] hover:text-blue-100 transition-all duration-200 ease-in ' href={item.href} >{item.menuname}</a>

                            </li>
                        )

                    })}

                    <div className='bg-red-500 text-center rounded-lg p-3 mt-[-30px]'>
                     <a href="#" className='mx-[20px] w-24  m-4 rounded-full text-white hover:bg-red-400 transition duration-300'>Contact</a>

                    </div>

                </ul>



            </nav>

        </>
    )
}

export default BannerMenuResponsive