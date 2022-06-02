import React from "react"

type FormData = {
  disabled?: boolean
  id?: string
}

const FormContext = React.createContext<FormData>({ disabled: false })

const useFormContext = () => React.useContext(FormContext)

type FormProps = {
  children: React.ReactNode
  className?: string
  disabled?: boolean
  id?: string
  onSubmit?: React.FormEventHandler<HTMLFormElement>
}

const Form: React.FC<FormProps> = ({
  children,
  className,
  id,
  disabled,
  onSubmit,
}) => (
  <FormContext.Provider value={{ disabled, id }}>
    <form
      id={id}
      className={className}
      onSubmit={async (event) => {
        if (disabled) {
          event.preventDefault()
          return false
        }

        if (onSubmit) {
          return await onSubmit(event)
        }
      }}
    >
      {children}
    </form>
  </FormContext.Provider>
)

export default Form

export { FormContext, useFormContext }
