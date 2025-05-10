import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
       <div className='bg-blue-300 relative'>
        <nav className='flex'>
            <div>
                <Link className='text-blue-600 p-3 inline-block text-2xl min-w-50 font-bold' to="/">ZP Academy</Link>
            </div>
            <div className='w-full justify-center items-center m-auto'>
                <ul className='lg:flex hidden justify-center gap-3 text-3 md:none'>
                    <li> 
                        <button className="px-6 py-2 bg-blue-600 cursor-pointer text-white font-semibold rounded-full border-2 border-white shadow-md hover:shadow-lg hover:bg-blue-700 active:translate-y-0.5 active:shadow-sm transition-all duration-200">
                        <Link to="/home">Home</Link>
                        </button>
                        
                    </li>
                    <li>
                        <button className="px-6 py-2 bg-blue-600 cursor-pointer text-white font-semibold rounded-full border-2 border-white shadow-md hover:shadow-lg hover:bg-blue-700 active:translate-y-0.5 active:shadow-sm transition-all duration-200">
                        <Link to="/about">About</Link>
                        </button>
                    </li>
                    <li>
                        <button className="px-6 py-2 bg-blue-600 cursor-pointer text-white font-semibold rounded-full border-2 border-white shadow-md hover:shadow-lg hover:bg-blue-700 active:translate-y-0.5 active:shadow-sm transition-all duration-200">
                        <Link to="/contact">Login</Link>
                        </button>
                    </li>
                    <li>
                        <button className="px-6 py-2 bg-blue-600 cursor-pointer text-white font-semibold rounded-full border-2 border-white shadow-md hover:shadow-lg hover:bg-blue-700 active:translate-y-0.5 active:shadow-sm transition-all duration-200">
                        <Link to="/contact">Contact Us</Link>
                        </button>
                    </li>

                </ul>
            </div>
            <div className='min-w-80 md:flex hidden'>
                    <form className='flex m-2 text-center'>
                        <input className='text-center bg-blue-100 rounded-l-2xl hover:border-blue-500' type="text" placeholder='Search' aria-label='Search' />
                        <button className='px-6 py-2 bg-blue-600 text-white font-semibold rounded-r-2xl border-2 border-blue-700 shadow-md hover:shadow-lg hover:bg-blue-700  active:shadow-sm transition-all duration-200' type='submit'>Search</button>
                    </form>
            </div>
            <div className='md:hidden'>
                <a className='text-5xl text-blue-950 m-2' href="#">&#8801;</a>
            </div>
        </nav>
       </div>
    )
}

export default Navbar

// {
//     <div>
//             <div>

//             </div>
//             <div>
//                 <div>

//                 </div>
//                 <div>

//                 </div>
                
//             </div>
//             <div>

//             </div>
//         </div>
// }