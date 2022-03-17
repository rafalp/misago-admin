import React from "react"

interface FormFieldData {
  name: string
  help?: boolean
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
  help,
  invalid,
}) => (
  <FormFieldContext.Provider value={{ name, help, invalid }}>
    {children}
  </FormFieldContext.Provider>
)

export default FormField

export { FormFieldContext, useFormFieldContext }
