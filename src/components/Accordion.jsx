'use client'
import React, { useState } from 'react';

const sections = [
  {
    title: 'Section 1',
    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    title: 'Section 2',
    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    title: 'Section 3',
    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
];

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    console.log(index);
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className='my-28 px-6 flex flex-col gap-1 text-white'>
      {sections.map((section, index) => (
        <div key={index} className={`p-4 bg-[#3b3939]
        ${activeIndex === index ? 'max-h-[1000px]' : 'max-h-[53px]'} 
         transition-all duration-500
        `}>
          <button
            className={`accordion ${activeIndex === index ? 'text-yellow-300' : 'text-white'} mb-2 transition-all duration-1000`}
            onClick={() => toggleAccordion(index)}
          >
            {section.title}
            {/* ${activeIndex === index ? 'h-[48px max-h-[48px]' : ''} */}
          </button>
          <div className={`
       

          `} >
            <p className='text-black'>{section.content}</p>
          </div>
        </div>
      ))
      }
    </div >
  );
};

export default Accordion;
