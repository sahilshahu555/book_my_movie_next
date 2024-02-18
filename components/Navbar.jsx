"use client"
import Image from 'next/image'
import Link from 'next/link'
import React ,{useState, useEffect}from 'react'
import { signIn, signOut, useSession, getProviders } from "next-auth/react";

const Navbar = () => {

  const { data: session } = useSession();

  const [providers, setProviders] = useState(null);
  const [toggleDropdown, setToggleDropdown] = useState(true);

  useEffect(() => {
    (async () => {
      const res = await getProviders();
      setProviders(res);
    })();
  }, []);
    
  return (
    <div className='Navbar flex py-3  justify-around  z-50 items-center bg-blue-300  sticky top-0'>
        <div className='logo'>
          <Link href="/">
              <h1 className='text-blue-400   text-xl font-[900] bg-white  px-2 rounded-xl flex'>Book <Image width={30} height={10} alt="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIw5fZnR-DK3elMUUx0mdigA42aRQIZvlompLRDhqEU5asPEcTUCWk&usqp=CAE&s"/> Movie</h1>
           </Link>
        </div>

        <div className='Laptop flex justify-between items-center gap-32 '>

            <div className='hidden md:block'>
                <input type="text"  placeholder="Search Your Favourite Movies" className="w-96  rounded-l-xl text-center"/>
                <button className='bg-blue-500 text-white  hover:text-black hover:bg-blue-400 px-3  rounded-r-xl'> 🔍 </button>
            </div>

            {/* <button className='bg-blue-500 text-white text-md hover:text-black hover:bg-blue-400 px-3  rounded'> Profile </button> */}
              {/* Desktop Navigation */}
            <div className='sm:flex hidden'>
              {session?.user ? (
                <div className='flex gap-3 md:gap-5'>
                
                    <Image
                      src={session?.user.image}
                      width={37}
                      height={37}
                      className='rounded-full'
                      alt='profile'
                    />

                  <button type='button' onClick={signOut} className='outline_btn'>
                    Sign Out
                  </button>
                  
                </div>
              ) : (
                <>
                  {providers &&
                    Object.values(providers).map((provider) => (
                      <button
                        type='button'
                        key={provider.name}
                        onClick={() => {
                          signIn(provider.id);
                        }}
                        className='black_btn'
                      >
                        Sign in
                      </button>
                    ))}
                </>
              )}
            </div>

        </div>
        {/* <div className='Mobile md:hidden'>world</div> */}
          {/* Mobile Navigation */}
      <div className='sm:hidden flex relative'>
        {session?.user ? (
          <div className='flex'>
            <Image
              src={session?.user.image}
              width={37}
              height={37}
              className='rounded-full mr-2'
              alt='profile'
              onClick={() => setToggleDropdown(!toggleDropdown)}
            />

            
              
              
                <button
                  type='button'
                  onClick={() => {
                    setToggleDropdown(false);
                    signOut();
                  }}
                  className='  black_btn'
                >
                  Sign Out
                </button>
              
            
          </div>
        ) : (
          <>
            {providers &&
              Object.values(providers).map((provider) => (
                <button
                  type='button'
                  key={provider.name}
                  onClick={() => {
                    signIn(provider.id);
                  }}
                  className='black_btn'
                >
                  Sign in
                </button>
              ))}
          </>
        )}
      </div>
    </div>
  )
}

export default Navbar

