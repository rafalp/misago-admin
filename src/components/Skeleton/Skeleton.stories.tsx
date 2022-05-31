import { SkeletonSentence, SkeletonText, SkeletonTextInput } from "."

export default {
  title: "Components/Skeletons",
}

export const Text = () => <SkeletonText width={80} />
Text.storyName = "Text Skeleton"

export const Sentence = () => <SkeletonSentence words={[100, 40, 90]} />
Sentence.storyName = "Sentence Skeleton"

export const TextInput = () => <SkeletonTextInput words={[100, 40, 90]} />
TextInput.storyName = "Text Input Skeleton"
