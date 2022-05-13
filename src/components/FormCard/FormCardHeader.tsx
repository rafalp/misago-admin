import classnames from "classnames"
import React from "react"
import { CardHeader } from "../Card"

interface FormCardHeaderProps {
  children: React.ReactNode
  className?: string
}

const FormCardHeader: React.FC<FormCardHeaderProps> = ({
  children,
  className,
}) => (
  <CardHeader className={classnames("form-card-header", className)}>
    {children}
  </CardHeader>
)

export default FormCardHeader
