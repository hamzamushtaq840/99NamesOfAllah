import { names } from "@/utils/consts";

export async function generateMetadata({ params }) {
    const name = names.find((val) => { return (val.englishName.toLocaleLowerCase() === params.id.toLocaleLowerCase()) })
    return {
        title: name?.title,
        description: name?.meaning,
    };
}


const SingleName = (params) => {

    return (
        <div className="text-white">
            Gynarating dynamic meta data (NEW)
        </div>
    )
}

export default SingleName