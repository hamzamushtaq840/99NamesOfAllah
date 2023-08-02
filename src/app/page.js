import Hadith from "@/components/hadith/Hadith"
import Hero from "@/components/hero/Hero"
import Names from "@/components/names/Names"
import Head from "next/head"


export default function Home() {
  return (
    <>
      <Head>
        <title>My page title</title>
        <meta property="og:title" content="My page title" key="title" />
      </Head>
      <main>
        <section>
          <Hero />
        </section>
        <section className="bg-black">
          <Hadith />
          <Names />
        </section>
      </main>
    </>
  )
}
