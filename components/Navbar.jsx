import Image from 'next/image'
import React from 'react'

const Navbar = () => {
    
  return (
    <div className='Navbar flex py-3  justify-around items-center'>
        <div className='logo'>
            <h1 className='text-blue-400 text-3xl font-[900] bg-white py-1 px-3 rounded-xl flex'>Book <Image width={100} height={100} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIw5fZnR-DK3elMUUx0mdigA42aRQIZvlompLRDhqEU5asPEcTUCWk&usqp=CAE&s"
            className='w-10 h-10 rounded-full'/> Movie</h1>
        </div>
        <div className='Laptop hidden md:flex justify-between items-center gap-32 '>

            <div>
                <input type="text"  placeHolder="Search Your Favourite Movies" className="w-96 p-1 rounded-l-xl text-center"/>
                <button className='bg-blue-500 text-white  hover:text-black hover:bg-blue-400 px-3 py-[4px] rounded-r-xl'> 🔍 </button>
            </div>

            <button className='bg-blue-500 text-white text-xl hover:text-black hover:bg-blue-400 px-3 py-1 rounded'> Profile </button>
        </div>
        <div className='Mobile md:hidden'>world</div>
    </div>
  )
}

export default Navbar

