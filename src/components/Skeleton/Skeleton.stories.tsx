import {
  SkeletonInput,
  SkeletonRadioSelect,
  SkeletonSelectMultiple,
  SkeletonSentence,
  SkeletonText,
} from "."

export default {
  title: "Components/Skeletons",
}

export const SkeletonTextStory = () => <SkeletonText width={80} />
SkeletonTextStory.storyName = "Text Skeleton"

export const SkeletonSentenceStory = () => (
  <SkeletonSentence words={[100, 40, 90]} />
)
SkeletonSentenceStory.storyName = "Sentence Skeleton"

export const SkeletonInputStory = () => <SkeletonInput words={[100, 40, 90]} />
SkeletonInputStory.storyName = "Input Skeleton"

export const SkeletonSelectMultipleStory = () => (
  <SkeletonSelectMultiple options={[[100, 50], [130], [120, 30]]} />
)
SkeletonSelectMultipleStory.storyName = "Select Multiple Skeleton"

export const SkeletonRadioSelectStory = () => (
  <SkeletonRadioSelect options={[[100, 50], [130], [120, 30]]} />
)
SkeletonRadioSelectStory.storyName = "Radio Select Skeleton"
