import { MockedProvider } from "@apollo/client/testing"
import Login from "./Login"

export default {
  title: "Pages",
}

export const LoginPageStory = () => (
  <MockedProvider>
    <Login />
  </MockedProvider>
)
LoginPageStory.storyName = "Login Page"
