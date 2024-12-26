import { GetStories } from "@/actions/story";
import Label from "@/components/common/Label";
import StoriesSection from "@/containers/stories/StoriesSection";

export default async function StoriesPage() {
  const stories = await GetStories()
  
  return (
    <main className="pt-[74px] sm:pt-[121px]">
      <Label className="text-center">All Generated Stories</Label>
      <StoriesSection stories={stories}/>
    </main>
  )
}
