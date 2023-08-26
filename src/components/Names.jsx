import React from 'react'
import Image from 'next/image'
import { names } from '@/utils/consts'
import Link from 'next/link'

const Names = () => {
  return (
    <div className="flex items-center justify-center px-10">
      <div className="grid grid-cols-3 gap-[40px] sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 2xl:grid-cols-4 xsm:grid-cols-1 xsm:gap-[20px]">
        {names.map((val, index) => (
          <Link href={`/name/${val.english.name}`} key={index} className="image-box relative transform cursor-pointer">
            <Image
              src={val.image}
              quality={100}
              alt={val.metaTitle}
              width={415}
              height={0}
              className="img h-[527px] max-h-[527px] rounded-sm xsm:h-[400px] xsm:max-h-[400px] xsm:w-[320px] "
              style={{
                objectFit: 'cover',
                filter: `brightness(${val.imageBrightness})`,
              }}
            />
            <div className="absolute top-0 flex h-full w-full hover:bg-[#00000015]">
              <div className="absolute top-0 flex h-full w-full flex-col items-center justify-center text-white ">
                <span className="sans absolute bottom-10 left-4 text-[75px] font-extrabold leading-[31px] opacity-[0.3]">
                  {index + 1}
                </span>
                <p className="rakkas mt-[40px]  flex flex-1 items-end text-center text-[80px] xsm:text-[50px]">
                  {val.arabic.name}
                </p>
                <p className="syne mt-2 text-[24px] font-[700] tracking-wide xsm:text-[18px]">{val.english.name}</p>
                <p className="lime flex-1 px-[30px] pt-10 text-center text-[24px] font-[400] italic xsm:text-[18px]">
                  {val.english.meaning}
                </p>
                {/* <p className="gulzar flex-1 px-[30px] pt-10 text-center text-[30px] font-[400]  xsm:text-[18px]">
                  {val.urdu.meaning}
                </p> */}
              </div>
              <span className="absolute bottom-[20px] right-[20px] z-50 hidden text-white"> {`--->`} </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Names
