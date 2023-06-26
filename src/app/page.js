"use client"
import Hadith from "@/components/hadith/Hadith"
import Hero from "@/components/hero/Hero"
import Names from "@/components/names/Names"
import { useRef } from "react"

export default function Home() {
  const ref = useRef(null)

  return (
    <main>
      <div>
        <Hero />
      </div>

      <div className="bg-black">
        <Hadith />
        <Names />
      </div>

    </main>
  )
}
