
import React from "react"
import Image from "next/image"
import { names } from "@/utils/consts"
import Link from "next/link";

const Names = () => {
  return (
    <div className="flex items-center  justify-center  gap-[25px]">
      <div className="grid grid-cols-3 gap-[40px] xsm:grid-cols-1 xsm:gap-[20px]">

        {names.map((val, index) => (
          <Link href={`/${val.englishName}`} key={index} className="relative transform cursor-pointer image-box">
            <Image src={val.image} quality={100} alt="The glimpse of Allah's Majesty" width={415} height={0} className="img h-[527px] max-h-[527px] rounded-sm xsm:h-[400px] xsm:max-h-[400px] xsm:w-[320px] "
              style={{
                objectFit: "cover",
                filter: `brightness(${val.imageBrightness})`,
              }}
            />
            <div className="hover:bg-[#00000015] absolute top-0 flex h-full w-full">
              <div className="absolute top-0 flex h-full w-full flex-col items-center justify-center text-white ">
                {/* {index + 1} */}
                <p className="aref mt-[40px] flex flex-1 items-end text-[80px] xsm:text-[50px]">
                  {val.arabicName}
                </p>
                <p className="syne mt-2 text-[24px] font-[700] tracking-wide xsm:text-[18px]">
                  {val.englishName}
                </p>
                <p className="lime flex-1 px-[30px] pt-10 text-center text-[24px] font-[400] italic xsm:text-[18px]">
                  {val.meaning}
                </p>
              </div>
              <span className="absolute bottom-[20px] z-50 right-[20px] text-white hidden"> {`--->`} </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Names
