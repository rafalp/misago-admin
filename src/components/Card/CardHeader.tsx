import classnames from "classnames"
import React from "react"

interface CardHeaderProps {
  children: React.ReactNode
  className?: string
}

const CardHeader: React.FC<CardHeaderProps> = ({ children, className }) => (
  <div className={classnames("card-header", className)}>{children}</div>
)

export default CardHeader
