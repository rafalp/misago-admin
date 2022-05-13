import classnames from "classnames"
import React from "react"
import { CardFooter } from "../Card"

interface FormCardFooterProps {
  children: React.ReactNode
  className?: string
}

const FormCardFooter: React.FC<FormCardFooterProps> = ({ children, className }) => (
  <CardFooter className={classnames("form-card-footer", className)}>{children}</CardFooter>
)

export default FormCardFooter
