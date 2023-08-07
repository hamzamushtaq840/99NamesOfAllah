import Image from 'next/image'
import React from 'react'

const loading = () => {
  return (
    <div className='text-white flex justify-center items-center min-h-screen'>
      <Image
        src="/loader.svg"
        // quality={100}
        className="xsm:w-[30px]"
        alt="Infinity"
        width={50}
        height={50}
      />
    </div>

  )
}

export default loading