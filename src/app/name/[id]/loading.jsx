import Image from 'next/image'
import React from 'react'

const loading = () => {
  return (
    <div className='text-white flex justify-center items-center min-h-screen'>
      <Image
        src="/loader.svg"
        className="xsm:w-[30px]"
        alt="Infinity"
        width={70}
        height={70}
      />
    </div>

  )
}

export default loading