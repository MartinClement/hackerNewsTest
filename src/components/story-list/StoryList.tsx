import StoryView from "./StoryView";

export default function StoriesList({ stories }: { stories: IStory[]}) {
  return (
    <div>
      { stories.map((story, storyIndex) => {
        return <StoryView key={story.id} index={storyIndex + 1} story={story}></StoryView>
      })}
    </div>
  )
}