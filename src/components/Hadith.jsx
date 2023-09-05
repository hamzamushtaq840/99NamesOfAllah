'use client'
import { dots, hadiths } from '@/utils/consts'
import { useEffect, useState } from 'react'
import { GoDot, GoDotFill } from 'react-icons/go'

const Hadith = () => {


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
