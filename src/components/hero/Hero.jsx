'use client'
import React, { useEffect } from "react"
import Image from "next/image"
import gsap from "gsap"
import { CustomEase } from 'gsap/dist/CustomEase'

gsap.registerPlugin(CustomEase);
CustomEase.create('cubic-text', '0.25, 1, 0.5, 1');

const Hero = () => {
  useEffect(() => {
    const titles = document.querySelectorAll('.h_title');
    const tl = gsap.timeline({ defaults: { duration: 1 } });

    titles.forEach((title, index) => {
      const el = title.querySelectorAll('span span');
      const delay = index * 0.08;

      tl.to(
        el,
        {
          y: 0,
          duration: 1.5,
          ease: 'cubic-text',
        },
        // delay
      );
    });

    return () => { };
  }, []);

  return (
    <div className="z-10 h-screen w-full">
      <Image
        src="https://images.unsplash.com/photo-1628521495179-ca4448a584d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        quality={100}
        fill
        priority
        sizes="100vw"
        className="mx-auto max-w-[1700px]"
        alt="The glimpse of Allah's Majesty"
        style={{ objectFit: "cover", filter: "brightness(70%)" }}
      />
      <div className="title absolute left-[50%] flex h-screen w-full translate-x-[-50%] flex-col text-center text-5xl xsm:text-[24px] leading-[1.4] text-white">
        <div className="relative top-[37%] flex translate-y-[-37%] flex-col items-center">
          <div className="h_title">
            <span className="overflow-hidden xsm:gap-2 flex items-center gap-4">
              <span className="translate-y-full">
                <h2>Beyond Infinity</h2>
              </span>
              <span className="translate-y-[170%] xsm:translate-y-[200%]">
                <Image
                  src="/infinity.svg"
                  quality={100}
                  className="xsm:w-[30px]"
                  alt="Infinity"
                  width={80}
                  height={20}
                />
              </span>
            </span>
          </div>
          <div className="h_title">
            <span className="overflow-hidden flex items-center gap-4">
              <span className="translate-y-full">
                <h2 className="flex gap-3 items-center xsm:gap-[3px]">
                  <span>The 99 Names of Allah</span>
                  <div className="gulzar mt-[-6px] xsm:text-lg text-3xl">ﷻ</div>
                </h2>
              </span>
            </span>
          </div>
          <div className="h_title">
            <span className="overflow-hidden flex items-center gap-4">
              <span className="translate-y-full">
                <div className="silk mt-[30px] flex w-[900px] flex-col xsm:w-[320px] xsm:text-base text-2xl text-[#ccc]">
                  <h2 className="lime">
                    “He is Allah, the Creator, the Originator, The Fashioner, to Him
                    belong the most beautiful names...”
                  </h2>
                  <h3 className="albert head mt-[25px] xsm:text-base text-[18px] font-[100]">
                    Surah Al-Hashr 59:24
                  </h3>
                </div>
              </span>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
