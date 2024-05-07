"use client"

import React from 'react'

const Hero = () => {
   return (
      <section className={`w-full bg-black h-[680px] p-10`}>
         <div className="flex flex-col sm:flex-row justify-between">
            <div className='flex flex-col justify-center'>
               <h1 className='text-white text-5xl font-robotoBold'>Ratu Jaya Motors</h1>
               <p className='text-slate-300 text-xl'>
                  Penyok anda adalah kesan pertama kami!
               </p>
            </div>
            <div className='w-[300px] h-[300px] bg-slate-500'></div>
         </div>
      </section>
   )
}

export default Hero