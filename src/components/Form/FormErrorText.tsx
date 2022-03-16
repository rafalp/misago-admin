import React from "react"

interface FormErrorTextProps {
  children: React.ReactNode
  id?: string
}

const FormErrorText: React.FC<FormErrorTextProps> = ({ children, id }) => (
  <div id={id} className="invalid-feedback">
    {children}
  </div>
)

export default FormErrorText
