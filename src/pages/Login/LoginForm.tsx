import { Trans, t } from "@lingui/macro"
import React from "react"
import { useForm } from "react-hook-form"
import { ButtonPrimary } from "../../components/Button"
import TextInput from "../../components/TextInput"
import { MutationError } from "../../types"
import { FormData } from "./Login.types"
import LoginFormError from "./LoginFormError"
import LoginMessage from "./LoginMessage"
import useLoginMutation from "./useLoginMutation"

const LoginForm: React.FC = () => {
  const [disabled, setDisabled] = React.useState(false)
  const [error, setError] = React.useState<MutationError | null>(null)
  const [login, { loading }] = useLoginMutation()
  const { handleSubmit, register } = useForm<FormData>()

  const submitting = disabled || loading

  return (
    <form
      onSubmit={handleSubmit(async (data) => {
        if (submitting) return false

        const username = data.username.trim()
        const password = data.password.trim()

        if (!username.length || !password.length) {
          setError({
            type: "value_error.all_fields_are_required",
            location: "__root__",
            message: "...",
          })
          return
        }

        setDisabled(true)

        try {
          const result = await login({ variables: { username, password } })
          const { token, errors } = result?.data?.login || { token: null, errors: null }

          if (token) {
            // SET TOKEN AND REFETCH AUTH QUERY
            console.log(token)
          } else if (errors) {
            setError(errors[0])
            setDisabled(false)
          }
        } catch (error) {
          setError(null)
          setDisabled(false)
        }
      })}
    >
      <div className="login-form-grid">
        {error && (
          <LoginMessage error={error}>
            {(message) => (
              <LoginFormError>{message}</LoginFormError>
              )}
          </LoginMessage>
        )}
        <TextInput
          disabled={submitting}
          placeholder={t({
            id: "login_form.username",
            message: "Username or e-mail",
          })}
          {...register("username")}
        />
        <TextInput
          disabled={submitting}
          placeholder={t({
            id: "login_form.password",
            message: "Password",
          })}
          type="password"
          {...register("password")}
        />
        <ButtonPrimary spinner={submitting}>
          {!submitting && <Trans id="login_form.submit">Continue</Trans>}
        </ButtonPrimary>
      </div>
    </form>
  )
}

export default LoginForm
