import Stamp from "../Stamp"
import { MediaObject, MediaObjectDescription, MediaObjectTitle } from "."

export default {
  title: "Components/Media Object",
}

export const MediaObjectMinimalStory = () => (
  <MediaObject media={<Stamp color="#4361ee" icon="fas fa-cog" />}>
    <MediaObjectTitle>Hello world!</MediaObjectTitle>
  </MediaObject>
)
MediaObjectMinimalStory.storyName = "Minimal"

export const MediaObjectDescriptionStory = () => (
  <MediaObject media={<Stamp color="#4361ee" icon="fas fa-cog" />}>
    <MediaObjectTitle>Hello world!</MediaObjectTitle>
    <MediaObjectDescription>
      Lorem ipsum dolor met sit amet elit.
    </MediaObjectDescription>
  </MediaObject>
)
MediaObjectDescriptionStory.storyName = "With Description"
