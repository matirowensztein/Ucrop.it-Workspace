import Head from 'next/head'
import {useQuery} from 'react-query'
import {getHomepagePosts} from "../queries/queries";
import PostCard from "../components/PostCard";

export default function Home() {
    const {data: inputs, isSuccess} = useQuery("inputs", async () => await getHomepagePosts())

    console.log(inputs);

    return (
        <div className="flex flex-col items-center py-2 max-w-2xl mx-auto">
            <Head>
                <title>Ucrop.it</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            {isSuccess && inputs.map(input => <PostCard name={input.name}/>)}
        </div>
    )
}
