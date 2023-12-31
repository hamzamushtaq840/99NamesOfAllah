'use client'
import React, { useEffect, useRef } from 'react'
import Image from 'next/image'
import gsap from 'gsap'
import { CustomEase } from 'gsap/CustomEase'

gsap.registerPlugin(CustomEase)
CustomEase.create('cubic-text', '0.25, 1, 0.5, 1')

const Hero = () => {
  const titleRef = useRef([])

  useEffect(() => {
    titleRef.current.forEach((title, index) => {
      const el = title.querySelectorAll('div span')
      const delay = index * 0.08

      gsap.to(el, {
        y: 0,
        duration: 1.5,
        ease: 'cubic-text',
        delay: delay,
      })
    })
  }, [])

  // const videoRef = useRef(null);

  // useEffect(() => {
  //   const videoElement = videoRef.current;

  //   const loopStart = 19; // Start loop at 5 seconds
  //   const loopEnd = 27; // End loop at 10 seconds

  //   const handleTimeUpdate = () => {
  //     if (videoElement.currentTime >= loopEnd) {
  //       videoElement.currentTime = loopStart; // Jump back to loop start
  //     }
  //   };

  //   videoElement.addEventListener('timeupdate', handleTimeUpdate);

  //   return () => {
  //     videoElement.removeEventListener('timeupdate', handleTimeUpdate);
  //   };
  // }, []);

  // add this function to handle adding refs
  const addToRefs = el => {
    if (el && !titleRef.current.includes(el)) {
      titleRef.current.push(el)
    }
  }

  return (
    <section className="z-10 h-screen w-full">
      <Image
        // src="https://images.unsplash.com/photo-1647292545204-1c537d2ffb71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        src="https://images.unsplash.com/photo-1491466424936-e304919aada7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"
        // src="https://images.unsplash.com/photo-1628521495179-ca4448a584d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        // quality={100}
        fill
        priority
        sizes="100vw"
        className="mx-auto max-w-[1920px] opacity-80"
        alt="The glimpse of Allah's Majesty"
        style={{ objectFit: 'cover', filter: 'brightness(70%)' }}
      />
      {/* <div className="max-h-[100vh] min-h-[100vh] overflow-hidden">
        <video
          ref={videoRef}
          autoPlay
          muted
          width={'100vw'}
          className="w-[100vw] " style={{ filter: "brightness(70%)" }} >
          <source src='/cave.mp4' type="video/mp4" />
        </video>
      </div> */}
      {/* <div className="title absolute left-[50%] top-0 flex h-screen w-full translate-x-[-50%] flex-col text-center text-5xl xsm:text-[24px] leading-[1.4] text-white"> */}
      <div className="title absolute left-[50%] flex h-screen w-full translate-x-[-50%] flex-col text-center text-5xl leading-[1.4] text-white xsm:text-[24px]">
        <div className="relative top-[37%] flex translate-y-[-37%] flex-col items-center">
          <div className="h_title" ref={addToRefs}>
            <div className="flex items-center gap-4 overflow-hidden xsm:gap-2">
              <span className="translate-y-full">
                <p>Beyond Infinity</p>
              </span>
              <span className="translate-y-[170%] xsm:translate-y-[200%]">
                <Image
                  src="/infinity.svg"
                  // quality={100}
                  className="xsm:w-[30px]"
                  alt="Infinity"
                  width={80}
                  height={20}
                />
              </span>
            </div>
          </div>
          <div className="h_title" ref={addToRefs}>
            <div className="flex items-center gap-4 overflow-hidden">
              <span className="translate-y-full">
                <h1 className="flex items-center gap-3 xsm:gap-[3px]">
                  <span>The 99 Names of Allah</span>
                  <div className="gulzar mt-[-6px] text-3xl xsm:text-lg">ﷻ</div>
                </h1>
              </span>
            </div>
          </div>
          <div className="h_title" ref={addToRefs}>
            <div className="flex items-center gap-4 overflow-hidden">
              <span className="translate-y-full">
                <div className="silk mt-[30px] flex w-[900px] flex-col text-2xl text-[#ccc] xsm:w-[320px] xsm:text-base">
                  <p className="lime">“He is Allah, the Creator, the Originator, The Fashioner, to Him belong the most beautiful names...”</p>
                  <p className="albert head mt-[25px] text-[18px] font-[300] xsm:text-base">(Surah Al-Hashr 59:24)</p>
                </div>
              </span>
            </div>
          </div>
        </div>
        <div className='absolute bottom-5 xsm:bottom-20 left-[49.5%] translate-x-[-49.5%]'>
          <Image
            src="/abc3.gif"
            className="xsm:w-[50px] "
            alt="Infinity"
            width={70}
            height={70}
          />
        </div>
      </div>
    </section>
  )
}

export default Hero
