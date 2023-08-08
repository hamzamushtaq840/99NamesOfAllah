'use client';
import { useEffect, useState } from "react";
import { GoDot, GoDotFill } from 'react-icons/go'

const Hadith = () => {
  let hadiths = [
    {
      singleHadith: (
        <div className="flex items-start xsm:flex-col xsm:px-[32px] gap-[40px] px-[100px] xsm:gap-[20px] xsm:py-[60px] min-h-[225px] text-white">
          <p className="lime min-w-[470px] xsm:min-w-0 text-[40px] xsm:text-[30px]">Sahih Muslim 2677</p>
          <p className="albert text-[25px] font-[200]">
            Abu Huraira reported: The Prophet, peace and blessings be upon him,
            said, “Allah has ninety-nine names, i.e. one-hundred minus one, and
            whoever knows them will go to Paradise.”
          </p>
        </div>
      )
    },
    {
      singleHadith: (
        <div className="flex items-start xsm:flex-col xsm:px-[32px] gap-[40px] px-[100px] xsm:gap-[20px] xsm:py-[60px] min-h-[225px] text-white">
          <p className="lime min-w-[470px] xsm:min-w-0 text-[40px] xsm:text-[30px]">Surah Al-Isra 17:1107</p>
          <p className="albert text-[25px] font-[200]">
            Say, ˹O Prophet,˺ “Call upon Allah or call upon the Most Compassionate—whichever
            you call, He has the Most Beautiful Names.”
          </p>
        </div>
      ),
    }
  ]

  let dots = [
    {
      name: (<GoDot className="fill-white cursor-pointer" />)
    },
    {
      name: (<GoDot className="fill-white cursor-pointer" />)
    },
  ]

  const [currentHadees, setCurrentHadees] = useState(0)
  const [fadeTrigger, setFadeTrigger] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentHadees((prevHadees) => (prevHadees === 0 ? 1 : 0));
      setFadeTrigger((prevTrigger) => !prevTrigger);
    }, 4500);

    return () => {
      clearTimeout(timer);
    };
  })

  return (
    <div className="flex flex-col min-h-[500px] justify-center hadees-container">
      <div key={currentHadees} className={` fade-out-left`}>
        {hadiths[currentHadees].singleHadith}
      </div>

      <div className="flex gap-1 w-full items-center justify-center">
        {dots.map((val, index) => (
          currentHadees === index ? <GoDotFill className="fill-white" key={index} /> : <div key={index} onClick={() => { setCurrentHadees(index) }}>{val.name}</div>
        ))}
      </div>
    </div >
  )
}

export default Hadith
