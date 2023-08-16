import Hero from "@/components/SingleName/Hero";
import { names } from "@/utils/consts";
import { notFound } from "next/navigation";

async function getNameDetails(id) {
    const res = await fetch(`https://www.99namesofallah.site/api/names/${id}`, {
        cache: "no-store",
    });

    if (!res.ok) {
        return notFound();
    }

    const data = await res.json();
    return data;
}

export async function generateMetadata({ params }) {
    const name = names.find((val) => { return (val.englishName.toLocaleLowerCase() === params.id.toLocaleLowerCase()) })
    return {
        title: name?.title,
        description: name?.meaning,
    };
}

const SingleName = async ({ params }) => {
    const name = await getNameDetails(params.id)

    return (
        <div className="flex flex-col items-center text-white bg-[#1F2937]  ">
            <Hero name={name} />
        </div>
    )
}

export default SingleName