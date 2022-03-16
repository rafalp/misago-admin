import React from "react"

interface FormFieldData {
  name: string
  helpText?: boolean
  invalid?: boolean
}

const FormFieldContext = React.createContext<FormFieldData>({ name: "" })

const useFormFieldContext = () => React.useContext(FormFieldContext)

interface FormFieldProps extends FormFieldData {
  children: React.ReactNode
}

const FormField: React.FC<FormFieldProps> = ({
  children,
  name,
  helpText,
  invalid,
}) => (
  <FormFieldContext.Provider value={{ name, helpText, invalid }}>
    {children}
  </FormFieldContext.Provider>
)

export default FormField

export { FormFieldContext, useFormFieldContext }
