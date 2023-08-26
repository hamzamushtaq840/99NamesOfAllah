'use client'
import { useEffect, useState } from 'react'
import { GoDot, GoDotFill } from 'react-icons/go'

const Hadith = () => {
  let hadiths = [
    {
      singleHadith: (
        <div className="flex min-h-[225px] items-start gap-[40px] px-[100px] text-white xsm:flex-col xsm:gap-[20px] xsm:px-[32px] xsm:py-[60px]">
          <p className="lime min-w-[470px] text-[40px] xsm:min-w-0 xsm:text-[30px]">Sahih Muslim 2677</p>
          <p className="outfit text-[25px] text-[#c5ccd3] ">
            Abu Huraira reported: The Prophet, peace and blessings be upon him, said, “Allah has ninety-nine names, i.e.
            one-hundred minus one, and whoever knows them will go to Paradise.”
          </p>
        </div>
      ),
    },
    {
      singleHadith: (
        <div className="flex min-h-[225px] items-start gap-[40px] px-[100px] text-white xsm:flex-col xsm:gap-[20px] xsm:px-[32px] xsm:py-[60px]">
          <p className="lime min-w-[470px] text-[40px] xsm:min-w-0 xsm:text-[30px]">Surah Al-Isra 17:1107</p>
          <p className="outfit text-[25px] text-[#c5ccd3] ">
            Say, ˹O Prophet,˺ “Call upon Allah or call upon the Most Compassionate—whichever you call, He has the Most
            Beautiful Names.”
          </p>
        </div>
      ),
    },
  ]

  let dots = [
    {
      name: <GoDot className="cursor-pointer fill-white" />,
    },
    {
      name: <GoDot className="cursor-pointer fill-white" />,
    },
  ]

  const [currentHadees, setCurrentHadees] = useState(0)
  const [fadeTrigger, setFadeTrigger] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentHadees(prevHadees => (prevHadees === 0 ? 1 : 0))
      setFadeTrigger(prevTrigger => !prevTrigger)
    }, 6000)

    return () => {
      clearTimeout(timer)
    }
  })

  return (
    <div className="hadees-container flex min-h-[500px] flex-col justify-center">
      <div key={currentHadees} className={` fade-out-left`}>
        {hadiths[currentHadees].singleHadith}
      </div>

      <div className="flex w-full items-center justify-center gap-1">
        {dots.map((val, index) =>
          currentHadees === index ? (
            <GoDotFill className="fill-white" key={index} />
          ) : (
            <div
              key={index}
              onClick={() => {
                setCurrentHadees(index)
              }}
            >
              {val.name}
            </div>
          )
        )}
      </div>
    </div>
  )
}

export default Hadith
