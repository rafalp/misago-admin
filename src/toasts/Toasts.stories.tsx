import React from "react"
import { ButtonDanger, ButtonSuccess } from "../components/Button"
import TextInput from "../components/TextInput"
import { Toast, ToastsContainer, ToastsContext, ToastsProvider } from "."

export default {
  title: "Components/Toasts",
}

export const ToastSuccess = () => (
  <Toast type="success" message="Hello world!" show />
)
ToastSuccess.storyName = "Success Toast"

export const ToastError = () => (
  <Toast type="danger" message="Oops! Something wrong has happened!" show />
)
ToastError.storyName = "Error Toast"

export const ToastsProviderStory = () => {
  const [message, setMessage] = React.useState("Hello world!")
  const cleanMessage = React.useMemo(() => message.trim(), [message])

  return (
    <ToastsProvider>
      <ToastsContainer />
      <ToastsContext.Consumer>
        {({ success, error }) => (
          <>
            <TextInput
              value={message}
              onChange={(event) => {
                setMessage(event.target.value)
              }}
            />
            <br />
            <ButtonSuccess
              disabled={!cleanMessage.length}
              onClick={() => success(cleanMessage)}
            >
              Primary
            </ButtonSuccess>{" "}
            <ButtonDanger
              disabled={!cleanMessage.length}
              onClick={() => error(cleanMessage)}
            >
              Error
            </ButtonDanger>
          </>
        )}
      </ToastsContext.Consumer>
    </ToastsProvider>
  )
}
ToastsProviderStory.storyName = "Toasts provider"
