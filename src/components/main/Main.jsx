import React from 'react'
import Image from "next/image";

const Main = () => {
  return (
    <div className='w-screen h-screen z-10'>
      <Image
        src="https://images.unsplash.com/photo-1628521495179-ca4448a584d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        quality={100}
        fill
        sizes="100vw"
        priority
        style={{
          objectFit: 'cover',
          filter: 'brightness(65%)'

        }}
      />
      <div className='z-30 text-5xl w-[50%] leading-[1.4] text-center text-white absolute top-[30%] left-[50%] translate-x-[-50%] translate-y-[-30%] flex flex-col title'>
        <div className='flex justify-center items-center gap-4'>
          <span>Beyond Infinity</span>
          <Image
            src="/infinity.svg"
            quality={100}
            width={80}
            height={20}
            style={{ color: 'yellow' }}
          />
        </div>
        <h1 className='mt-2'>The 99 Names of Allah</h1>
      </div>
    </div>
  )
}

export default Main