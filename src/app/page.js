import Accordion from "@/components/Accordion"
import Hadith from "@/components/Hadith"
import Hero from "@/components/Hero"
import Names from "@/components/Names"


export default function Home() {
  return (
    <main>
      <Hero />
      <section className="bg-black">
        <Hadith />
        <Names />
        <Accordion />
      </section>
    </main>
  )
}
