import classnames from "classnames"
import React from "react"
import { CardBody } from "../Card"

interface FormCardFieldsetProps {
  children: React.ReactNode
  className?: string
  legend: string
}

const FormCardFieldset: React.FC<FormCardFieldsetProps> = ({
  children,
  className,
  legend,
}) => (
  <CardBody className={classnames("form-card-fieldset", className)}>
    <fieldset>
      <legend className="form-card-legend">{legend}</legend>
      {children}
    </fieldset>
  </CardBody>
)

export default FormCardFieldset
