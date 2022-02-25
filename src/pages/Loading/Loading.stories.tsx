import Loading from "."

export default {
  title: "Pages",
  parameters: {
    layout: 'fullscreen',
  },
}

export const LoadingPageStory = () => <Loading />
LoadingPageStory.storyName = "Loading Page"
