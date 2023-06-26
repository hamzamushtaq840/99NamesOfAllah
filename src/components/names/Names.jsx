import React from "react"
import Image from "next/image"
import { names } from "@/utils/consts"

const Names = () => {
  return (
    <div className="flex items-center  justify-center  gap-[25px]">
      <div className="grid grid-cols-3 gap-[40px] xsm:grid-cols-1 xsm:gap-[20px]">
        {names.map((val, index) => (
          <div className="relative transform cursor-pointer transition-transform duration-500 ease-in-out hover:scale-105">
            <Image src={val.image} quality={100} alt="The glimpse of Allah's Majesty" width={415} height={0} className="h-[527px] max-h-[527px] rounded-sm xsm:h-[400px] xsm:max-h-[400px] xsm:w-[320px] "
              style={{
                objectFit: "cover",
                filter: `brightness(${val.imageBrightness})`,
              }}
            />
            <div className="absolute top-0 flex h-full w-full flex-col items-center justify-center text-white hover:bg-[#00000015] hover:text-[#ffffffcf]">
              <h2 className="aref mt-[40px] flex flex-1 items-end text-[80px] xsm:text-[50px]">
                {val.arabicName}
              </h2>
              <p className="syne mt-2 text-[24px] font-[700] tracking-wide xsm:text-[18px]">
                {val.englishName}
              </p>
              <p className="lime flex-1 px-[30px] pt-10 text-center text-[24px]  font-[400] italic xsm:text-[18px]">
                {val.meaning}
              </p>
            </div>
          </div>
        ))}
        <div></div>
      </div>
    </div>
  )
}

export default Names
