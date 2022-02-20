import React from "react"
import { useForm, FormProvider, useFormContext } from "react-hook-form"
import { ButtonPrimary } from "../../components/Button"

interface FormData {
  username: string
  password: string
}

const LoginForm: React.FC = () => {
  const methods = useForm<FormData>()

  return (
    <form
      onSubmit={methods.handleSubmit((data, event) => {
        console.log(data)
        console.log(event)
      })}
    >
      <div className="d-grid gap-4">
        <input
          className="form-control"
          placeholder="Username or e-mail"
          type="text"
          {...methods.register("username")}
        />
        <input
          className="form-control"
          placeholder="Password"
          type="password"
          {...methods.register("password")}
        />
        <ButtonPrimary>Login!</ButtonPrimary>
      </div>
    </form>
  )
}

export default LoginForm
