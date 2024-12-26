import { GetStories } from "@/actions/story";
import AboutSection from "@/containers/home/AboutSection";
import FeatureSection from "@/containers/home/FeatureSection";
import HeroSection from "@/containers/home/HeroSection";
import StartSection from "@/containers/home/StartSection";
import StoriesSection from "@/containers/home/StoriesSection";

export default async function Home() {
    const stories = await GetStories()
  
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <FeatureSection />
      <StartSection />
      <StoriesSection stories={stories.slice(0, 4)}/>
    </main>
  );
}
