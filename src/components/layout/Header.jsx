import React from 'react'
import { Outlet } from 'react-router-dom'

const Header = () => {
    return (
        <>
            <div className='poke-header'>
                <nav className='bg-sky-800 text-white py-2 md:py-6 border-b border-gray-300'>
                    <div className='container px-4 mx-auto md:flex md:items-center'>
                        <div className='flex justify-between items-center'>
                            <div>
                                <h1 className='text-2xl md:text-5xl font-bold'>Poke-View</h1>
                            </div>
                        </div>
                        <div className='hidden md:flex flex-col md:flex-row md:ml-auto mt-3 md:mt-0'>
                            <div className='text-xl'>
                                <p>Pokemon Data for You</p>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
            <Outlet />
        </>
    )
}


export default Header