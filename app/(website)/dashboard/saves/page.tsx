import Label from "@/components/common/Label";
import StoriesSection from "@/containers/stories/StoriesSection";

export default function SavesPage() {
    return (
        <main className="pt-[74px] sm:pt-[121px]">
            <Label className="text-center">Your Saves</Label>
            <StoriesSection />
        </main>
    )
}
