import classnames from "classnames"
import React from "react"
import { CardBody } from "../Card"

type FormCardFieldsetProps = {
  children: React.ReactNode
  className?: string
  legend: React.ReactNode
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
