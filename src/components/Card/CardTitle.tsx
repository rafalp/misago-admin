import classnames from "classnames"
import React from "react"

interface CardTitleProps {
  children: React.ReactNode
  className?: string
}

const CardTitle: React.FC<CardTitleProps> = ({ children, className }) => (
  <strong className={classnames("card-title", className)}>{children}</strong>
)

export default CardTitle
