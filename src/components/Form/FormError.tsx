import React from "react"

type FormErrorProps = {
  children: React.ReactNode
  id?: string
}

const FormError: React.FC<FormErrorProps> = ({ children, id }) => (
  <div id={id} className="invalid-feedback">
    {children}
  </div>
)

export default FormError
