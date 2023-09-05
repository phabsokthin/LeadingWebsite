import React from 'react'
import { MapBodyTitle } from './Data'
import Employee from '../image/Employee.jpg'
import WhiteEmployee from '../image/WhiteEmployee.jpg'
import Man from '../image/Man.jpg'
import BlackMen from '../image/BlackMan.jpg'
import Nurse from '../image/Nurse.jpg'
import BussinessMan from '../image/BusinessMan.jpg'

function MapBody() {
    return (
        <>

            <section className='bg-red-200 p-5'>
                <div className='container mx-auto mt-[100px]'>
                    <div className="row">
                        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-3">
                            <div className='grid gap-y-10 justify-center'>
                                <div className='flex gap-x-32 '>
                                    <div className='h-12 w-12 rounded-full border-8 border-orange-500'>
                                    </div>
                                    <div>
                                        <img className='w-16 h-16 rounded-full object-cover' src={Employee} />
                                    </div>
                                </div>
                                <div className='flex gap-x-32 mt-10'>
                                    <div>
                                        <img className='w-16 h-16 rounded-full object-cover' src={WhiteEmployee} />
                                    </div>
                                    <div className='mt-10'>
                                        <img className='w-16 h-16 rounded-full object-cover' src={Man} />
                                    </div>
                                </div>
                            </div>
                            <div className=''>
                                <div>
                                    {MapBodyTitle.map((item, index) => {

                                        return (

                                            <div key={index}>

                                                <div className='text-center gap-y-5 grid justify-center'>
                                                    <h2 className='text-5xl'>{item.mapTitle}</h2>
                                                    <p className='text-gray-400'>{item.mapTitle1}</p>

                                                </div>

                                            </div>

                                        )

                                    })}
                                  
                                </div>
                            </div>
                            <div className=' '>
                                <div className='grid gap-y-10 justify-center'>
                                    <div className='flex gap-x-32 '>
                                        <div>
                                            <img className='w-16 h-16 rounded-full object-cover' src={BlackMen} />
                                        </div>
                                        <div className='mt-14'>
                                            <img className='w-16 h-16 rounded-full object-cover' src={BussinessMan} />
                                        </div>
                                    </div>
                                    <div className='flex gap-x-32'>
                                        <div className=''>
                                            <img className='w-16 h-16 rounded-full object-cover' src={Nurse} />
                                        </div>
                                        <div className='h-12 w-12 rounded-full border-8 border-orange-500'>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default MapBody