'use client'
import React, { useEffect, useState } from 'react'

const Hero = ({ name }) => {

  const speakText = () => {
    const synth = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance(name?.arabic?.name);

    // Set language for Arabic
    // utterance.name = "Microsoft Saleh Online (Natural) - Arabic (Yemen)"
    utterance.rate = 0.8
    utterance.lang = 'ar-BH';
    // utterance.lang = 'ar-KW';

    synth.speak(utterance);
  };

  return (
    <div className="my-[60px] flex flex-col items-center">
      <div className='flex gap-4 items-center '>
        <svg onClick={speakText} className='cursor-pointer' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5.68181 16.4263L14.4517 20.0842C14.5446 20.124 14.6444 20.1449 14.7454 20.1457C14.8653 20.1469 14.9828 20.1123 15.0829 20.0464C15.1729 19.9824 15.2454 19.8969 15.2939 19.7978C15.3425 19.6986 15.3654 19.5889 15.3607 19.4786V14.7928C16.0269 14.7231 16.6435 14.4091 17.0918 13.9115C17.54 13.4139 17.7881 12.7679 17.7881 12.0981C17.7881 11.4284 17.54 10.7824 17.0918 10.2848C16.6435 9.78715 16.0269 9.47319 15.3607 9.40348V4.51929C15.3695 4.4085 15.3483 4.29738 15.2994 4.19762C15.2504 4.09785 15.1754 4.01312 15.0824 3.95233C14.9894 3.89154 14.8817 3.85693 14.7706 3.85214C14.6596 3.84735 14.5493 3.87255 14.4514 3.9251L5.67956 7.77166H4.14019C3.49617 7.77241 2.87874 8.02856 2.42334 8.48393C1.96793 8.9393 1.71173 9.55671 1.71094 10.2007V13.997C1.71168 14.6411 1.96786 15.2585 2.42327 15.714C2.87868 16.1694 3.49614 16.4255 4.14019 16.4263H5.68181ZM15.3604 9.97254C15.8766 10.04 16.3506 10.293 16.694 10.6842C17.0375 11.0755 17.2268 11.5783 17.2268 12.0989C17.2268 12.6195 17.0375 13.1223 16.694 13.5135C16.3506 13.9048 15.8766 14.1577 15.3604 14.2252V9.97254ZM6.01931 8.23666L14.6775 4.44016C14.7382 4.41354 14.7696 4.42141 14.7744 4.42385C14.7793 4.42629 14.7984 4.4531 14.7984 4.51929V19.4788C14.7984 19.5386 14.7821 19.5712 14.7711 19.5784C14.754 19.5831 14.7361 19.5843 14.7186 19.5821C14.701 19.5798 14.684 19.5741 14.6687 19.5652L6.01931 15.9577V8.23666ZM2.27344 13.997V10.2007C2.27398 9.7058 2.47083 9.2313 2.8208 8.88134C3.17076 8.53137 3.64526 8.33452 4.14019 8.33398H5.45681V15.8638H4.14019C3.64526 15.8632 3.17076 15.6664 2.8208 15.3164C2.47083 14.9665 2.27398 14.492 2.27344 13.997Z" fill="white" />
          <path d="M17.5743 8.74129C17.54 8.80751 17.5334 8.88465 17.5559 8.95574C17.5784 9.02684 17.6283 9.08608 17.6945 9.12042C18.2869 9.42746 18.776 9.90181 19.1011 10.4845C19.4261 11.0672 19.5728 11.7326 19.5229 12.398C19.4729 13.0633 19.2286 13.6993 18.8202 14.227C18.4118 14.7547 17.8573 15.1507 17.2258 15.3659C17.1551 15.3899 17.097 15.441 17.064 15.5079C17.0311 15.5749 17.0261 15.6521 17.0502 15.7228C17.0742 15.7934 17.1253 15.8515 17.1923 15.8845C17.2592 15.9174 17.3365 15.9224 17.4071 15.8984C18.143 15.6476 18.7891 15.1861 19.2649 14.5713C19.7408 13.9564 20.0255 13.2153 20.0836 12.44C20.1417 11.6646 19.9708 10.8893 19.5919 10.2104C19.2131 9.53143 18.643 8.97878 17.9527 8.62111C17.8866 8.58701 17.8096 8.58052 17.7387 8.60304C17.6678 8.62557 17.6087 8.67528 17.5743 8.74129Z" fill="white" />
          <path d="M19.3949 7.3406C19.3288 7.30731 19.2522 7.30142 19.1818 7.32421C19.1114 7.34699 19.0528 7.39662 19.0187 7.46232C18.9846 7.52802 18.9778 7.60451 18.9998 7.67519C19.0217 7.74588 19.0707 7.80506 19.1359 7.83992C19.9713 8.27266 20.6611 8.94138 21.1196 9.76294C21.5781 10.5845 21.785 11.5227 21.7147 12.4609C21.6443 13.3991 21.2998 14.2959 20.724 15.0399C20.1481 15.7839 19.3663 16.3423 18.4758 16.6457C18.4408 16.6576 18.4085 16.6762 18.3808 16.7006C18.353 16.725 18.3304 16.7546 18.314 16.7878C18.2977 16.8209 18.2881 16.8569 18.2857 16.8938C18.2834 16.9306 18.2883 16.9676 18.3002 17.0026C18.3121 17.0375 18.3307 17.0698 18.3551 17.0976C18.3795 17.1253 18.4091 17.148 18.4423 17.1643C18.4754 17.1806 18.5114 17.1902 18.5483 17.1926C18.5851 17.195 18.6221 17.1901 18.6571 17.1782C19.652 16.8393 20.5254 16.2155 21.1687 15.3843C21.8121 14.5531 22.197 13.5512 22.2756 12.5031C22.3542 11.455 22.123 10.4069 21.6109 9.48903C21.0987 8.5712 20.3281 7.8241 19.3949 7.3406Z" fill="white" />
        </svg>
        <h1 className="mr-2 rakkas leading-[180px] text-[96px]  text-transparent bg-clip-text bg-gradient-to-r from-[#FE6F2D] to-[#FDCE38]">{name?.arabic?.name}</h1>
      </div>
      <p className="lime mt-[-20px] text-white text-center text-[24px] font-[400] mb-4 xsm:text-[18px]">
        {name?.english?.meaning}
      </p>
      <div className='outfit text-[#c5ccd3] leading-[28px] text-[18px] w-[70%] text-center mt-4'>
        The name Ar-Raheem comes from the same root as Ar-Rahman which refers to Allah’s attribute of being Merciful. Although similarly related the meanings are different. Ar-Rahman can be understood to refer to Allah as the origination/source of all mercy, whereas Ar-Raheem refers to its sustaining/infiniteness. Some view the name of Ar-Raheem as being merciful to His creation deserving of mercy (primarily the mercy reserved for the believers).
      </div>

      <svg className='mt-10' width="322" height="41" viewBox="0 0 322 41" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M171.722 36.8605C177.974 21.2962 227.625 18.2902 267.469 31.6863C273.436 33.1983 277.971 34.405 283.34 34.2323C286.17 34.1413 288.763 33.5297 291.013 32.2191C297.848 28.2377 296.329 16.1525 285.822 17.0733M285.822 17.0733C285.522 17.0997 285.213 17.1367 284.898 17.1849M285.822 17.0733C285.511 17.086 285.202 17.1242 284.898 17.1849M285.822 17.0733C285.886 17.0707 285.951 17.0692 286.015 17.0687M284.898 17.1849C284.824 17.1961 284.75 17.2079 284.676 17.2204M284.898 17.1849C281.12 17.9391 278.125 22.1769 281.473 24.4222C283.838 26.0088 287.477 24.7511 287.258 21.4762" stroke="white" />
        <path d="M150.524 36.8605C144.272 21.2962 94.6207 18.2902 54.7766 31.6863C48.81 33.1983 44.2747 34.405 38.9061 34.2323C36.0758 34.1413 33.4835 33.5297 31.2333 32.2191C24.3977 28.2377 25.917 16.1525 36.4238 17.0733M36.4238 17.0733C36.7246 17.0997 37.0327 17.1367 37.3482 17.1849M36.4238 17.0733C36.7351 17.086 37.0442 17.1242 37.3482 17.1849M36.4238 17.0733C36.3597 17.0707 36.2956 17.0692 36.2314 17.0687M37.3482 17.1849C37.4217 17.1961 37.4957 17.2079 37.57 17.2204M37.3482 17.1849C41.1265 17.9391 44.121 22.1769 40.7734 24.4222C38.408 26.0088 34.7692 24.7511 34.9885 21.4762" stroke="white" />
        <path fill-rule="evenodd" clip-rule="evenodd" d="M157.864 19.5649C157.013 17.6161 156.477 14.79 156.477 11.6453C156.477 9.31454 158.349 3.12908 160.657 1C162.965 3.12908 164.837 9.31454 164.837 11.6453C164.837 14.9082 164.26 17.8282 163.353 19.7809C172.227 13.9913 179.376 19.6881 183.84 21.2631C177.755 21.0508 169.862 24.335 165.217 28.5108C163.306 30.2291 161.807 32.1782 160.722 34.2584C159.617 31.8458 157.975 29.5853 155.794 27.6252C151.333 23.6151 143.743 20.3259 137.896 20.3626C142.642 18.4909 149.469 14.02 157.864 19.5649Z" stroke="white" />
        <path d="M22.24 31.6867C20.0372 32.2817 16.9068 32.5088 13.4785 32.2198C10.9374 32.0056 3.52451 29.3622 1.4155 27.067C7.52485 25.5013 14.7111 24.9003 17.2628 24.8714C21.4128 24.8244 19 27.2007 22.24 31.6867Z" stroke="white" />
        <path d="M299.76 31.6867C301.963 32.2817 305.093 32.5088 308.522 32.2198C311.063 32.0056 318.475 29.3622 320.585 27.067C314.475 25.5013 307.289 24.9003 304.737 24.8714C300.587 24.8244 303 27.2007 299.76 31.6867Z" stroke="white" />
        <path d="M299.76 31.6867C301.963 32.2817 305.093 32.5088 308.522 32.2198C311.063 32.0056 318.475 29.3622 320.585 27.067C314.475 25.5013 307.289 24.9003 304.737 24.8714C300.587 24.8244 303 27.2007 299.76 31.6867Z" stroke="white" />
      </svg>

      <p className='text-white rubik font-[600] text-[26px] mt-8'>Mentions</p>

      <section className='flex gap-12 w-full mt-6 px-[55px] justify-center  '>
        <aside className='max-w-[580px] flex flex-col'>
          <span className='text-center text-white rubik font-[600] text-xl'>QURAN</span>
          <div className='flex flex-col gap-6 mt-4'>
            <p className='outfit text-[#c5ccd3] text-justify leading-[28px] text-[18px]'>From the root ra-ha-mim (ر ح م), which has the following classical Arabic connotations: to have tenderness, kindness to love to have mercy, to have pity to show favor and goodness to have all that is required for beneficence.This Allah سُبْحَٰنَهُۥ وَتَعَٰلَىٰ is mentioned in the Qur'an for a total 114 times. Twice as much as the Ar-Rahman.From the root ra-ha-mim (ر ح م), which has the following classical Arabic connotations: to have tenderness, kindness to love to have mercy, to have pity to show favor and goodness to have all that is required for beneficence.This Allah سُبْحَٰنَهُۥ وَتَعَٰلَىٰ is mentioned in the Qur'an for a total 114 times. Twice as much as the Ar-Rahman.
            </p>

            <p className='quranAyah outfit flex flex-col p-4 rounded text-[#c5ccd3] text-justify leading-[28px] text-[16px]'>
              <span className='self-start text-[12px] font-[700] text-[#ccc] uppercase mb-1'>English Translation:</span>
              "Say, “Call upon Allah or call upon the Most Merciful. Whichever [name] you call – to Him best names.” And do not recite [too] loudly in your prayer or [too] quietly but seek between [intermediate] way."
              <span className='self-end text-[#2faee0] cursor-pointer'>— (Qur'an 17:110)</span>
            </p>

            <p className='outfit text-[#c5ccd3] text-justify leading-[28px] text-[18px]'>From the root ra-ha-mim (ر ح م), which has the following classical Arabic connotations: to have tenderness, kindness to love to have mercy, to have pity to show favor and goodness to have all that is required for beneficence.This Allah سُبْحَٰنَهُۥ وَتَعَٰلَىٰ is mentioned in the Qur'an for a total 114 times. Twice as much as theAr-Rahman.</p>
          </div>
        </aside>

        <aside className='max-w-[580px] flex flex-col'>
          <span className='text-center text-white rubik font-[600] text-xl'>HADITH</span>
          <div className='flex flex-col gap-6 mt-4'>
            <p className='outfit text-[#c5ccd3] text-justify leading-[28px] text-[18px]'>From the root ra-ha-mim (ر ح م), which has the following classical Arabic connotations: to have tenderness, kindness to love to have mercy, to have pity to show favor and goodness to have all that is required for beneficence.This Allah سُبْحَٰنَهُۥ وَتَعَٰلَىٰ is mentioned in the Qur'an for a total 114 times. Twice as much as theAr-Rahman.</p>

            <p className='bg-[#1F1D2B] quranAyah2 outfit flex flex-col p-4 rounded text-[#c5ccd3] text-justify leading-[28px] text-[16px]'>
              <span className='self-start text-[12px] font-[700] text-[#ccc] uppercase mb-1'>English Translation:</span>
              "Say, “Call upon Allah or call upon the Most Merciful. Whichever [name] you call – to Him best names.” And do not recite [too] loudly in your prayer or [too] quietly but seek between [intermediate] way."
              <span className='self-end text-[#2faee0] cursor-pointer'>— (Qur'an 17:110)</span>
            </p>

            <p className='outfit text-[#c5ccd3] text-justify leading-[28px] text-[18px]'>From the root ra-ha-mim (ر ح م), which has the following classical Arabic connotations: to have tenderness, kindness to love to have mercy, to have pity to show favor and goodness to have all that is required for beneficence.This Allah سُبْحَٰنَهُۥ وَتَعَٰلَىٰ is mentioned in the Qur'an for a total 114 times. Twice as much as the Ar-Rahman.From the root ra-ha-mim (ر ح م), which has the following classical Arabic connotations: to have tenderness, kindness to love to have mercy, to have pity to show favor and goodness to have all that is required for beneficence.This Allah سُبْحَٰنَهُۥ وَتَعَٰلَىٰ is mentioned in the Qur'an for a total 114 times. Twice as much as the Ar-Rahman.
            </p>
          </div>
        </aside>
      </section>

    </div>
  )
}

export default Hero