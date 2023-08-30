'use client'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

const Hero = ({ name }) => {
  const [isPlaying, setIsPlaying] = useState(false)
  const audioRef = useRef(null) // Add a ref to keep track of the audio element

  useEffect(() => {
    const audio = new Audio()

    if (isPlaying) {
      const audioFileName = `${name?.english?.name}.mp3`
      const audioPath = `/namesAudios/${audioFileName}`
      audio.src = audioPath
      audio.play()
    } else {
      audio.pause()
      audio.currentTime = 0
    }

    audioRef.current = audio // Store the audio element in the ref

    const audioEndedHandler = () => {
      setIsPlaying(false)
    }

    audio.addEventListener('ended', audioEndedHandler)

    return () => {
      console.log('component is unmounted')
      audio.removeEventListener('ended', audioEndedHandler)

      if (audioRef.current) {
        audioRef.current.pause()
        audioRef.current.currentTime = 0
      }
    }
  }, [isPlaying, name?.english?.name])

  const playAudio = () => {
    setIsPlaying(true)
  }

  return (
    <div className="my-[60px] flex flex-col items-center">
      <div className="flex items-center gap-4 ">
        <h1 className="rakkas ml-5 bg-gradient-to-r from-[#FE6F2D]  to-[#FDCE38] bg-clip-text text-[96px] leading-[180px] text-transparent">{name?.arabic?.name}</h1>
        {isPlaying ? <Image src="/playing2.gif"
          className="xsm:w-[30px] bg-transparent cursor-not-allowed"
          alt="Infinity"
          width={40}
          height={80} /> :
          <Image src="/play.png"
            onClick={playAudio}
            className="xsm:w-[30px] cursor-pointer"
            alt="Infinity"
            width={40}
            height={80} />
        }
      </div>
      <p className="lime mb-4 mt-[-20px] text-center text-[24px] font-[400] text-white xsm:text-[18px]">{name?.english?.meaning}</p>
      <div className="outfit mt-4 w-[70%] text-center text-[18px] leading-[28px] text-[#c5ccd3]">{name?.singlePageData?.intro}</div>

      <svg className="mt-10" width="322" height="41" viewBox="0 0 322 41" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M171.722 36.8605C177.974 21.2962 227.625 18.2902 267.469 31.6863C273.436 33.1983 277.971 34.405 283.34 34.2323C286.17 34.1413 288.763 33.5297 291.013 32.2191C297.848 28.2377 296.329 16.1525 285.822 17.0733M285.822 17.0733C285.522 17.0997 285.213 17.1367 284.898 17.1849M285.822 17.0733C285.511 17.086 285.202 17.1242 284.898 17.1849M285.822 17.0733C285.886 17.0707 285.951 17.0692 286.015 17.0687M284.898 17.1849C284.824 17.1961 284.75 17.2079 284.676 17.2204M284.898 17.1849C281.12 17.9391 278.125 22.1769 281.473 24.4222C283.838 26.0088 287.477 24.7511 287.258 21.4762" stroke="white" />
        <path d="M150.524 36.8605C144.272 21.2962 94.6207 18.2902 54.7766 31.6863C48.81 33.1983 44.2747 34.405 38.9061 34.2323C36.0758 34.1413 33.4835 33.5297 31.2333 32.2191C24.3977 28.2377 25.917 16.1525 36.4238 17.0733M36.4238 17.0733C36.7246 17.0997 37.0327 17.1367 37.3482 17.1849M36.4238 17.0733C36.7351 17.086 37.0442 17.1242 37.3482 17.1849M36.4238 17.0733C36.3597 17.0707 36.2956 17.0692 36.2314 17.0687M37.3482 17.1849C37.4217 17.1961 37.4957 17.2079 37.57 17.2204M37.3482 17.1849C41.1265 17.9391 44.121 22.1769 40.7734 24.4222C38.408 26.0088 34.7692 24.7511 34.9885 21.4762" stroke="white" />
        <path fillRule="evenodd" clipRule="evenodd" d="M157.864 19.5649C157.013 17.6161 156.477 14.79 156.477 11.6453C156.477 9.31454 158.349 3.12908 160.657 1C162.965 3.12908 164.837 9.31454 164.837 11.6453C164.837 14.9082 164.26 17.8282 163.353 19.7809C172.227 13.9913 179.376 19.6881 183.84 21.2631C177.755 21.0508 169.862 24.335 165.217 28.5108C163.306 30.2291 161.807 32.1782 160.722 34.2584C159.617 31.8458 157.975 29.5853 155.794 27.6252C151.333 23.6151 143.743 20.3259 137.896 20.3626C142.642 18.4909 149.469 14.02 157.864 19.5649Z" stroke="white" />
        <path d="M22.24 31.6867C20.0372 32.2817 16.9068 32.5088 13.4785 32.2198C10.9374 32.0056 3.52451 29.3622 1.4155 27.067C7.52485 25.5013 14.7111 24.9003 17.2628 24.8714C21.4128 24.8244 19 27.2007 22.24 31.6867Z" stroke="white" />
        <path d="M299.76 31.6867C301.963 32.2817 305.093 32.5088 308.522 32.2198C311.063 32.0056 318.475 29.3622 320.585 27.067C314.475 25.5013 307.289 24.9003 304.737 24.8714C300.587 24.8244 303 27.2007 299.76 31.6867Z" stroke="white" />
        <path d="M299.76 31.6867C301.963 32.2817 305.093 32.5088 308.522 32.2198C311.063 32.0056 318.475 29.3622 320.585 27.067C314.475 25.5013 307.289 24.9003 304.737 24.8714C300.587 24.8244 303 27.2007 299.76 31.6867Z" stroke="white" />
      </svg>

      <p className="rubik mt-8 text-[26px] font-[600] text-white">Mentions</p>

      <section className="mt-6 flex w-full justify-center gap-12 px-[55px] xsm:flex-col  ">
        <aside className="flex max-w-[580px] flex-col">
          <span className="rubik text-center text-xl font-[600] text-white">QURAN</span>
          <div className="mt-4 flex flex-col gap-6">
            {name?.singlePageData?.quranMentions?.map((val, index) => {
              if (val.contentType === 'text') return <p className="outfit text-justify text-[18px] leading-[28px] text-[#c5ccd3]">{val.content}</p>
              else
                return (
                  <p className="quranAyah2 outfit flex flex-col rounded bg-[#2020218c] p-4 text-justify text-[16px] leading-[28px] text-[#c5ccd3]">
                    <span className="mb-1 self-start text-[12px] font-[700] uppercase text-[#ccc]">English Translation:</span>
                    {val.content}
                    <a target="_blank" href={val.link} rel="noopener noreferrer" className="cursor-pointer self-end text-[#2faee0]">
                      — (Quran {val.ayahNo})
                    </a>
                  </p>
                )
            })}
          </div>
        </aside>

        <aside className="flex max-w-[580px] flex-col">
          <span className="rubik text-center text-xl font-[600] text-white">HADITH</span>
          <div className="mt-4 flex flex-col gap-6">
            {name?.singlePageData?.hadithMentions?.map((val, index) => {
              if (val.contentType === 'text') return <p className="outfit text-justify text-[18px] leading-[28px] text-[#c5ccd3]">{val.content}</p>
              else
                return (
                  <p className="quranAyah2 outfit flex flex-col rounded bg-[#2020218c] p-4 text-justify text-[16px] leading-[28px] text-[#c5ccd3]">
                    <span className="mb-1 self-start text-[12px] font-[700] uppercase text-[#ccc]">English Translation:</span>
                    {val.content}
                    <span className="cursor-pointer self-end text-[#2faee0]">— (Quran 17:110)</span>
                  </p>
                )
            })}
          </div>
        </aside>
      </section>
    </div>
  )
}

export default Hero
