import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const TopDoctors = () => {
    const navigate = useNavigate()
    const { doctors } = useContext(AppContext)

    return (
        <div className='py-16 px-4 md:px-10 bg-white'>
            <div className='max-w-6xl mx-auto'>
                <div className='text-center mb-12'>
                    <h2 className='text-3xl font-bold text-black mb-3'>Our Featured Healthcare Providers</h2>
                    <p className='text-black-900 max-w-2xl mx-auto'>
                        Highly qualified professionals dedicated to your wellbeing
                    </p>
                </div>
                
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
                    {doctors.slice(0, 8).map((item, index) => (
                        <div 
                            onClick={() => { navigate(`/appointment/${item._id}`); scrollTo(0, 0) }} 
                            className='bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100 hover:shadow-md transition-all cursor-pointer'
                            key={index}
                        >
                            <div className='relative pt-[70%] bg-gray-100'>
                                <img 
                                    className='absolute top-0 left-0 w-full h-full object-cover' 
                                    src={item.image} 
                                    alt={item.name} 
                                />
                                <span className={`absolute top-3 right-3 px-2 py-1 rounded-full text-xs font-medium ${item.available ? 'bg-green-100 text-black' : 'bg-gray-100 text-gray-900'}`}>
                                    {item.available ? 'Available' : 'Booked'}
                                </span>
                            </div>
                            <div className='p-4'>
                                <h3 className='font-bold text-lg text-gray-900 mb-1'>{item.name}</h3>
                                <p className='text-black text-sm mb-2'>{item.speciality}</p>
                                <div className='flex items-center text-sm text-black'>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                    {item.hospital || "City Hospital"}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                
                <div className='text-center mt-10'>
                    <button 
                        onClick={() => { navigate('/doctors'); scrollTo(0, 0) }} 
                        className='inline-flex items-center px-6 py-3 border border-transparent text-sm font-medium rounded-full shadow-sm text-black bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors'
                    >
                        View All Medical Professionals
                    </button>
                </div>
            </div>
        </div>
    )
}

export default TopDoctors