'use client'
import { accordions } from '@/utils/consts'
import React, { useState } from 'react'

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState([])

  const toggleAccordion = index => {
    let temp = [...activeIndex]
    if (activeIndex.includes(index)) {
      let filteredTemp = temp.filter(val => {
        return val !== index
      })
      setActiveIndex(filteredTemp)
    } else {
      temp.push(index)
      setActiveIndex(temp)
    }
  }

  return (
    <div className="my-28 flex flex-col gap-1 px-24 text-white">
      {accordions.map((section, index) => (
        <div
          key={index}
          onClick={() => toggleAccordion(index)}
          className={`cursor-pointer rounded-[3px]
        bg-[#201f1f]
        ${activeIndex.includes(index) ? 'max-h-[1000px]' : 'max-h-[52px]'} overflow-hidden transition-all duration-500`}
        >
          <div className={`${activeIndex.includes(index) ? '  ' : 'border-none '} p-4`}>
            <button className={`duration-350 mb-2 flex w-full justify-between transition-all`}>
              <h2 className={`aref tracking-[0.05em] ${activeIndex.includes(index) ? 'text-lg text-white' : ' text-[#ccccccb1]'} transition-all duration-500`}>{section.title}</h2>
              <span className={`${activeIndex.includes(index) ? 'rotate-[-90deg]' : 'rotate-[90deg]'} transition-all duration-500`}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15.5031 11.3008L9.90312 5.60078C9.50312 5.20078 8.90313 5.20078 8.50313 5.60078C8.10313 6.00078 8.10313 6.60078 8.50313 7.00078L13.4031 11.9008L8.50313 16.8008C8.30313 17.0008 8.20312 17.2008 8.20312 17.5008C8.20312 18.1008 8.60312 18.5008 9.20312 18.5008C9.50312 18.5008 9.70312 18.4008 9.90312 18.2008L15.6031 12.5008C15.9031 12.3008 15.9031 11.7008 15.5031 11.3008Z" fill="white" />
                </svg>
              </span>
            </button>

            <div className="poppins text-[14px] text-[#ccccccda]">{section.content}</div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Accordion
