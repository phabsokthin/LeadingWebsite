import React from 'react'
import { Navigation } from './Data'

function Navbar() {
  return (
    <>
    
        <nav className='ml-[70px]'>
            <ul className='flex gap-x-4 '>
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

export default Navbar