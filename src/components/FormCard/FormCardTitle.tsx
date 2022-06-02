import classnames from "classnames"
import React from "react"
import { CardTitle } from "../Card"

type FormCardTitleProps = {
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
