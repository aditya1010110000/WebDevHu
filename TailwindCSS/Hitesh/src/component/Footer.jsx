import React from 'react'
import Card from './card'

const Footer = () => {
    return (
        <div className='text-semibold bg-blue-600'>
            <div>
                <div className='text-white text-3xl md:text-4xl p-4 font-bold flex flex-wrap flex-col w-full h-auto items-center'>
                    <h2>"Achievements"</h2>
                    <div className='border-b-4 border-white w-30 h-1 mt-2 rounded-2xl'></div>
                </div>
                <div className='flex w-full flex-wrap justify-evenly bg-blue-600 p-5'>
                    <Card />
                    <Card />
                    <Card />
                </div>
            </div>
            <div>
                <div>

                </div>
                <div>

                </div>
            </div>
        </div>
    )
}

export default Footer