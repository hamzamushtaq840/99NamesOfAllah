import React from 'react'
import Image from "next/image";

const Hero = () => {
  return (
    <div className='w-full h-screen z-10'>
      <Image
        src="https://images.unsplash.com/photo-1628521495179-ca4448a584d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        quality={100}
        fill
        sizes="100vw"
        priority
        alt="The glimpse of Allah's Majesty"
        style={{ objectFit: 'cover', filter: 'brightness(40%)' }}
      />
      <div className='w-full text-5xl h-screen leading-[1.4] text-center text-white absolute left-[50%] translate-x-[-50%] flex flex-col title'>
        <div className='flex flex-col items-center relative translate-y-[-37%] top-[37%]'>
          <div className='flex items-center gap-4'>
            <h2>Beyond Infinity</h2>
            <Image
              src="/infinity.svg"
              quality={100}
              alt='Infinity'
              width={80}
              height={20}
            />
          </div>

          <h1 className='flex items-center gap-4'>The 99 Names of Allah <span className='gulzar text-3xl mt-[-6px]'>ﷻ</span></h1>

          <div className='silk flex flex-col text-[#ccc] text-2xl w-[900px] mt-[30px]'>
            <h2 className='lime'>“He is Allah, the Creator, the Originator, The Fashioner, to Him belong the most beautiful names...”</h2>
            <h3 className='text-[18px] albert font-[100] head mt-[25px]'>Surah Al-Hashr 59:24</h3>
            {/* <h3 className='text-[16px] uppercase head mt-[13px]'>Surah Al-Hashr 59:24</h3> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero