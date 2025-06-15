import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const Banner = () => {
    const navigate = useNavigate()

    return (
        <div className='relative bg-gradient-to-r from-indigo-700 to-purple-600 rounded-2xl overflow-hidden mx-4 md:mx-10 my-16'>
            <div className='absolute inset-0 opacity-10'>
                <div className='absolute inset-0 bg-[url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxkZWZzPjxwYXR0ZXJuIGlkPSJwYXR0ZXJuIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHBhdHRlcm5UcmFuc2Zvcm09InJvdGF0ZSg0NSkiPjxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjA1KSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNwYXR0ZXJuKSIvPjwvc3ZnPg==")]'></div>
            </div>
            
            <div className='relative z-10 py-12 px-8 md:px-16 lg:flex lg:items-center lg:justify-between'>
                <div className='lg:w-1/2'>
                    <h2 className='text-3xl font-bold text-black sm:text-4xl'>
                        <span className='block'>Ready to prioritize</span>
                        <span className='block'>your health?</span>
                    </h2>
                    <p className='mt-3 text-lg text-black max-w-md'>
                        Join our network of patients receiving exceptional care from top-rated physicians.
                    </p>
                </div>
                
                <div className='mt-8 lg:mt-0'>
                    <button 
                        onClick={() => { navigate('/login'); scrollTo(0, 0) }} 
                        className='flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-black bg-white hover:bg-indigo-50 md:py-4 md:text-lg md:px-10 transition-colors shadow-lg hover:shadow-xl'
                    >
                        Get Started Today
                        <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                    </button>
                </div>
                
                <div className='hidden lg:block lg:w-1/3 lg:absolute lg:right-0 lg:bottom-0'>
                    <img className='w-full h-auto max-h-64 object-contain' src={assets.appointment_img} alt="medical appointment" />
                </div>
            </div>
        </div>
    )
}

export default Banner