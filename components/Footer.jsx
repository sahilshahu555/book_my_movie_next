import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <div className='border-t p-2 text-center bg-blue-300'>
      <div className='logo'>
         <h1 className='text-blue-400 text-xl font-[900] my-2 w-40 m-auto  bg-white  px-2 rounded-xl flex'>Book <Image width={30} height={10} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIw5fZnR-DK3elMUUx0mdigA42aRQIZvlompLRDhqEU5asPEcTUCWk&usqp=CAE&s"
            /> Movie</h1>
      </div>
      <div className='SVG flex justify-center gap-10 items-center py-2 '>

        <div className='FACEBOOK w-8 bg-white p-1 rounded-2xl'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z"/></svg>
        </div>

        <div className='TWEETER w-8 bg-white p-1 rounded-2xl'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M459.4 151.7c.3 4.5 .3 9.1 .3 13.6 0 138.7-105.6 298.6-298.6 298.6-59.5 0-114.7-17.2-161.1-47.1 8.4 1 16.6 1.3 25.3 1.3 49.1 0 94.2-16.6 130.3-44.8-46.1-1-84.8-31.2-98.1-72.8 6.5 1 13 1.6 19.8 1.6 9.4 0 18.8-1.3 27.6-3.6-48.1-9.7-84.1-52-84.1-103v-1.3c14 7.8 30.2 12.7 47.4 13.3-28.3-18.8-46.8-51-46.8-87.4 0-19.5 5.2-37.4 14.3-53 51.7 63.7 129.3 105.3 216.4 109.8-1.6-7.8-2.6-15.9-2.6-24 0-57.8 46.8-104.9 104.9-104.9 30.2 0 57.5 12.7 76.7 33.1 23.7-4.5 46.5-13.3 66.6-25.3-7.8 24.4-24.4 44.8-46.1 57.8 21.1-2.3 41.6-8.1 60.4-16.2-14.3 20.8-32.2 39.3-52.6 54.3z"/></svg>
        </div>

        <div className='INSTAGRAM w-8 bg-white p-1 rounded-2xl'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg>
        </div>

        <div className='YOUTUBE w-8 bg-white p-1 rounded-2xl'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z"/></svg>
        </div>

        <div className='LINKDIN w-8 bg-white p-1 rounded-2xl'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M407.4 32H40.6C18.2 32 0 50.2 0 72.6v366.8C0 461.8 18.2 480 40.6 480h366.8c22.4 0 40.6-18.2 40.6-40.6V72.6c0-22.4-18.2-40.6-40.6-40.6zM176.1 145.6c.4 23.4-22.4 27.3-26.6 27.4-14.9 0-27.1-12-27.1-27 .1-35.2 53.1-35.5 53.7-.4zM332.8 377c-65.6 0-34.1-74-25-106.6 14.1-46.4-45.2-59-59.9 .7l-25.8 103.3H177l8.1-32.5c-31.5 51.8-94.6 44.4-94.6-4.3 .1-14.3 .9-14 23-104.1H81.7l9.7-35.6h76.4c-33.6 133.7-32.6 126.9-32.9 138.2 0 20.9 40.9 13.5 57.4-23.2l19.8-79.4h-32.3l9.7-35.6h68.8l-8.9 40.5c40.5-75.5 127.9-47.8 101.8 38-14.2 51.1-14.6 50.7-14.9 58.8 0 15.5 17.5 22.6 31.8-16.9L386 325c-10.5 36.7-29.4 52-53.2 52z"/></svg>
        </div>
      
      </div>
      <p className='text-white text-md m-3'>Copyright 2024 © Bigtree Entertainment Pvt. Ltd. All Rights Reserved.</p>

    </div>
  )
}

export default Footer

