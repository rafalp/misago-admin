import { Trans, t } from "@lingui/macro"
import React from "react"
import { useForm } from "react-hook-form"
import { ButtonPrimary } from "../../components/Button"
import ClientError from "../../components/ClientError"
import TextInput from "../../components/TextInput"
import { ApiError } from "../../types"
import { FormData } from "./Login.types"
import LoginErrorMessage from "./LoginErrorMessage"
import LoginFormError from "./LoginFormError"
import useLoginMutation from "./useLoginMutation"

const LoginForm: React.FC = () => {
  const [disabled, setDisabled] = React.useState(false)
  const [errors, setErrors] = React.useState<Array<ApiError>>([])
  const [login, { loading, error }] = useLoginMutation()
  const { handleSubmit, register } = useForm<FormData>()

  const submitting = disabled || loading

  return (
    <form
      onSubmit={handleSubmit(async (data) => {
        if (submitting) return false

        const username = data.username.trim()
        const password = data.password.trim()

        if (!username.length || !password.length) {
          setErrors([
            {
              type: "value_error.all_fields_are_required",
              location: "__root__",
              message: "...",
            },
          ])
          return
        }

        setDisabled(true)

        try {
          const result = await login({ variables: { username, password } })
          const { token, errors } = result?.data?.login || {
            token: null,
            errors: null,
          }

          if (token) {
            // SET TOKEN AND REFETCH AUTH QUERY
            console.log(token)
          } else if (errors) {
            setErrors(errors)
            setDisabled(false)
          }
        } catch (error) {
          setErrors([])
          setDisabled(false)
        }
      })}
    >
      <div className="login-form-grid">
        {error ? (
          <ClientError error={error}>
            {({ message }) => <LoginFormError>{message}</LoginFormError>}
          </ClientError>
        ) : (
          errors.map((error, i) => (
            <LoginErrorMessage error={error} key={i}>
              {(message) => <LoginFormError>{message}</LoginFormError>}
            </LoginErrorMessage>
          ))
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
        <ButtonPrimary disabled={submitting} spinner={submitting}>
          {!submitting && <Trans id="login_form.submit">Continue</Trans>}
        </ButtonPrimary>
      </div>
    </form>
  )
}

export default LoginForm
