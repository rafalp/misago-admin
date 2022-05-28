import {
  SkeletonFormRow,
  SkeletonSentence,
  SkeletonText,
  SkeletonTextInput,
} from "."

export default {
  title: "Components/Skeletons",
}

export const Text = () => <SkeletonText width={80} />
Text.storyName = "Text Skeleton"

export const Sentence = () => <SkeletonSentence words={[100, 40, 90]} />
Sentence.storyName = "Sentence Skeleton"

export const TextInput = () => (
  <SkeletonTextInput>
    <SkeletonSentence words={[100, 40, 90]} />
  </SkeletonTextInput>
)
TextInput.storyName = "Text Input Skeleton"

export const FormRow = () => (
  <SkeletonFormRow
    label={<SkeletonSentence words={[100, 40, 90]} />}
    control={
      <SkeletonTextInput>
        <SkeletonSentence words={[100, 40, 90]} />
      </SkeletonTextInput>
    }
    help={<SkeletonSentence words={[100, 40, 90]} />}
  />
)
FormRow.storyName = "Form Row Skeleton"
