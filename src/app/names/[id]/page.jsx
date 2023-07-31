import { names } from "@/utils/consts";

export async function generateMetadata({ params }) {
    const name = names.find((val) => { return (val.id.toString() === params.id.toString()) })

    return {
        title: name?.englishName,
        description: name?.meaning,
    };
}


const SingleName = (params) => {

    return (
        <div className="text-white">
            Gynarating dynamic meta data
        </div>
    )
}

export default SingleName