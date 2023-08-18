
import React from "react"
import Image from "next/image"
import { names } from "@/utils/consts"
import Link from "next/link";

const Names = () => {
  return (
    <div className="flex items-center px-10 justify-center">
      <div className="grid grid-cols-3 gap-[40px] xsm:grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xsm:gap-[20px] lg:grid-cols-2 2xl:grid-cols-4">
        {names.map((val, index) => (
          <Link href={`/name/${val.english.name}`} key={index} className="relative transform cursor-pointer image-box">
            <Image src={val.image} quality={100} alt={val.metaTitle} width={415} height={0} className="img h-[527px] max-h-[527px] rounded-sm xsm:h-[400px] xsm:max-h-[400px] xsm:w-[320px] "
              style={{
                objectFit: "cover",
                filter: `brightness(${val.imageBrightness})`,
              }}
            />
            <div className="hover:bg-[#00000015] absolute top-0 flex h-full w-full">
              <div className="absolute top-0 flex h-full w-full flex-col items-center justify-center text-white ">
                <span className="absolute bottom-10 left-4 sans font-extrabold opacity-[0.3] text-[75px] leading-[31px]">{index + 1}</span>
                <p className="rakkas text-center  mt-[40px] flex flex-1 items-end text-[80px] xsm:text-[50px]">
                  {val.arabic.name}
                </p>
                <p className="syne mt-2 text-[24px] font-[700] tracking-wide xsm:text-[18px]">
                  {val.english.name}
                </p>
                <p className="lime flex-1 px-[30px] pt-10 text-center text-[24px] font-[400] italic xsm:text-[18px]">
                  {val.english.meaning}
                </p>
                {/* <p className="gulzar flex-1 px-[30px] pt-10 text-center text-[30px] font-[400]  xsm:text-[18px]">
                  {val.urdu.meaning}
                </p> */}
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
