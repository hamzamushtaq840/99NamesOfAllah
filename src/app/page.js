import Hadith from "@/components/hadith/Hadith"
import Hero from "@/components/hero/Hero"
import Names from "@/components/names/Names"

export const metadata = {
  title: '99 Names of Allah',
  description: 'This website has 99 names of Allah',
}

export default function Home() {

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
