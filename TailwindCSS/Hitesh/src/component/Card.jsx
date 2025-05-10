import React from 'react'

const Card = () => {
  return (
    <div className='text-white p-4 border-4 border-white rounded-2xl font-semibold items-center justify-center flex flex-col flex-wrap hover:border-10'>
        <img className='w-20 h-20 overflow-hidden rounded-full gap-2' src="https://media.gettyimages.com/id/1131453937/vector/six-steps-cycle-infinite-process-infographic.jpg?s=612x612&w=0&k=20&c=vfQksELs8yMQ2AK7iKIgpxFmDZJxfl-BFqAvqZ-fSTo=" alt="A Laptop Image" />
        <p>600+</p>
        <p className='mb-4'>Different Coruses</p>
    </div>
  )
}

export default Card