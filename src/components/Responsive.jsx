import React, { useState } from 'react'
import { Navigation } from './Data'
import {BiMenu} from 'react-icons/bi'


function Responsive() {

    const [isOpen, setIsOpen] = useState(false)

  return (
    <>
    
    <nav>
        
        <div onClick={() => setIsOpen(!isOpen)} className='text-4xl cursor-pointer lg:hidden '>
            <BiMenu/>
        </div>

        <ul className={`${isOpen ? 'max-h-60 p-8' : 'max-h-0 p-0'} w-full space-y-3 rounded-lg transition-all duration-300 flex absolute flex-col lg:hidden left-0 top-24 bg-green-500 overflow-hidden`}>

            {Navigation.map((item, index) => {

                return(

                    <li key={index}>
                        <a href={item.href} className='hover:text-blue-100 transition-all duration-200 ease-in'>{item.name}</a>
                    </li>

                )

            } )}

        </ul>
    </nav>

    </>
  )
}

export default Responsive