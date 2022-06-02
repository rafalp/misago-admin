import classnames from "classnames"
import React from "react"
import { CardBody } from "../Card"

type FormCardBodyProps = {
  children: React.ReactNode
  className?: string
}

const FormCardBody: React.FC<FormCardBodyProps> = ({
  children,
  className,
}) => (
  <CardBody className={classnames("form-card-body", className)}>
    {children}
  </CardBody>
)

export default FormCardBody
