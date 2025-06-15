import React from 'react'
import { assets } from '../assets/assets'

const Header = () => {
    return (
        <div className='flex flex-col md:flex-row bg-gradient-to-r from-blue-600 to-teal-500 rounded-xl shadow-lg mx-4 md:mx-10 my-6 overflow-hidden'>
            <div className='md:w-1/2 flex flex-col items-start justify-center gap-6 p-8 md:p-12'>
                <h1 className='text-4xl md:text-5xl font-bold text-black leading-tight'>
                    Expert Care <span className='block'>When You Need It</span>
                </h1>
                <div className='flex items-center gap-4 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2'>
                    <img className='w-16 h-16 rounded-full border-2 object-cover border-white' src={assets.group_profiles} alt="patients" />
                    <p className='text-black text-sm font-medium'>Join thousands who found their perfect doctor match</p>
                </div>
                <a href='#speciality' className='flex items-center gap-3 bg-white px-8 py-3 rounded-full text-black font-medium shadow-md hover:shadow-xl transition-all'>
                    Find Your Specialist
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                </a>
            </div>

            <div className='md:w-1/2 relative min-h-[300px]'>
                <div className='absolute -bottom-2 right-0 w-full h-full md:h-auto'>
                    <img className='w-full h-full object-contain' src={assets.header_img} alt="doctor consultation" />
                    <div className='absolute inset-0 bg-gradient-to-t from-blue-600/50 to-transparent'></div>
                </div>
            </div>
        </div>
    )
}

export default Header