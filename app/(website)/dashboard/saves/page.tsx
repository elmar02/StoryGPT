import { GetStories } from "@/actions/story";
import Label from "@/components/common/Label";
import SavesWrapper from "@/components/providers/SavesWrapper";
import StoriesSection from "@/containers/stories/StoriesSection";

export default async function SavesPage() {
    const stories = await GetStories()

    return (
        <main className="pt-[74px] sm:pt-[121px]">
            <Label className="text-center">Your Saves</Label>
            <SavesWrapper stories={stories}/>
        </main>
    )
}
