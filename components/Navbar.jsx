import Image from 'next/image'
import React from 'react'

const Navbar = () => {
    
  return (
    <div className='Navbar flex py-3  justify-around  z-50 items-center bg-blue-300  sticky top-0'>
        <div className='logo'>
            <h1 className='text-blue-400   text-xl font-[900] bg-white  px-2 rounded-xl flex'>Book <Image width={30} height={10} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIw5fZnR-DK3elMUUx0mdigA42aRQIZvlompLRDhqEU5asPEcTUCWk&usqp=CAE&s"
          /> Movie</h1>
        </div>
        <div className='Laptop flex justify-between items-center gap-32 '>

            <div className='hidden md:block'>
                <input type="text"  placeHolder="Search Your Favourite Movies" className="w-96  rounded-l-xl text-center"/>
                <button className='bg-blue-500 text-white  hover:text-black hover:bg-blue-400 px-3  rounded-r-xl'> 🔍 </button>
            </div>

            <button className='bg-blue-500 text-white text-md hover:text-black hover:bg-blue-400 px-3  rounded'> Profile </button>
        </div>
        {/* <div className='Mobile md:hidden'>world</div> */}
    </div>
  )
}

export default Navbar

