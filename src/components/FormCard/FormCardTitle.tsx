import classnames from "classnames"
import React from "react"
import { CardTitle } from "../Card"

interface FormCardTitleProps {
  children: React.ReactNode
  className?: string
}

const FormCardTitle: React.FC<FormCardTitleProps> = ({
  children,
  className,
}) => (
  <CardTitle className={classnames("form-card-title", className)}>
    {children}
  </CardTitle>
)

export default FormCardTitle
