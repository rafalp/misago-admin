import classnames from "classnames"
import React from "react"
import { Card } from "../Card"

interface FormCardProps {
  children: React.ReactNode
  className?: string
}

const FormCard: React.FC<FormCardProps> = ({ children, className }) => (
  <Card className={classnames("form-card", className)}>{children}</Card>
)

export default FormCard
