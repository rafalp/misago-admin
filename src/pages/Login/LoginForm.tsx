import { Trans, t } from "@lingui/macro"
import React from "react"
import { useForm } from "react-hook-form"
import { ButtonPrimary } from "../../components/Button"
import TextInput from "../../components/TextInput"
import { MutationError } from "../../types"
import { FormData } from "./Login.types"
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

        setError(null)
        setDisabled(true)

        try {
          const result = await login({ variables: { username, password } })
          if (result.data?.login?.errors) {
            setError(result.data?.login?.errors[0])
            setDisabled(false)
          } else {
            // SET TOKEN AND REFETCH AUTH QUERY
          }
        } catch (error) {
          setDisabled(false)
        }
      })}
    >
      <div className="d-grid gap-4">
        {error && <div className="text-danger text-center">{error.type}</div>}
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
