import Hero from '@/components/hero/Hero'
import Image from 'next/image'
import { names } from '@/utils/consts'

export default function Home() {
  return (
    <div >
      <Hero />

      <div className='bg-black min-h-screen'>
        <div className='flex py-56 pb-[350px] items-start text-white  gap-[40px] px-[100px]'>
          <h2 className='lime text-[40px] min-w-[470px]'>Sahih Muslim 2677</h2>
          <p className='albert font-[200] text-[25px]'>Abu Huraira reported: The Prophet, peace and blessings be upon him, said, “Allah has ninety-nine names, i.e. one-hundred minus one, and whoever knows them will go to Paradise.”</p>
        </div>
        <div className='flex justify-center  gap-[25px]  items-center'>
          <div className='grid grid-cols-3 gap-[40px] mt-[-130px]'>
            {names.map((val, index) => (
              <div className='relative cursor-pointer'>
                <Image
                  src={val.image}
                  quality={100}
                  alt="The glimpse of Allah's Majesty"
                  width={415}
                  height={0}
                  className='max-h-[527px] h-[527px] rounded-sm'
                  style={{ objectFit: 'cover', filter: `brightness(${val.imageBrightness})` }}
                />
                {/* <div className='absolute top-0 w-full flex flex-col justify-center h-full text-white items-center'>
                  <h2 className='text-[80px] aref'>{val.arabicName}</h2>
                  <p className='text-[24px]  mt-[3px] font-[700] tracking-wide syne'>{val.englishName}</p>
                  <p className='text-[24px] px-[30px] italic mt-[40px] text-center font-[400] lime'>{val.meaning}</p>
                </div> */}
                <div className='absolute hover:bg-[#00000015] hover:text-[#ffffffcf] top-0 w-full flex flex-col justify-center h-full text-white items-center'>
                  <h2 className='text-[80px] flex-1 mt-[40px] flex items-end aref'>{val.arabicName}</h2>
                  <p className='text-[24px]   font-[700] mt-2 tracking-wide syne'>{val.englishName}</p>
                  <p className='text-[24px] flex-1 pt-10 px-[30px] italic  text-center font-[400] lime'>{val.meaning}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
