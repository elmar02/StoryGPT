import { GetStoriesById } from "@/actions/story";
import AuthorSection from "@/containers/stories/AuthorSection";
import StoryDetailSection from "@/containers/stories/StoryDetailSection";

export default async function StoryDetailPage({params}: {params:{id: string}}) {
    const result = await GetStoriesById(params.id)
    
    return (
        <main className="pt-[74px] sm:pt-[121px]">
            {result.story && <StoryDetailSection story={result.story}/>}
            <AuthorSection/>
        </main>
    )
}
