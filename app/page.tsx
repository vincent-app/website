import { ISbStoriesParams, getStoryblokApi } from "@storyblok/react/rsc";
import StoryblokStory from "@storyblok/react/story";
import Config from "@/components/header/Config";

export default async function Home() {
  const { data } = await fetchData();

  return (
    <div>
      <StoryblokStory story={data.story} />
    </div>
  );
}

export async function fetchData(slug: string = "home") {
  const preview = true;
  const sbParams: ISbStoriesParams = {
    version: "draft",
    cv: new Date().getTime(),
  };

  const storyblokApi = getStoryblokApi();
  return storyblokApi.get(`cdn/stories/home`);
}
