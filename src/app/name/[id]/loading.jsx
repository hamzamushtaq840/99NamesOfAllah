import Image from 'next/image'
import React from 'react'

const loading = () => {
  return (
    <div className="flex min-h-screen items-center justify-center text-white">
      <Image src="/loader.svg" className="xsm:w-[30px]" alt="Infinity" width={70} height={70} />
    </div>
  )
}

export default loading
