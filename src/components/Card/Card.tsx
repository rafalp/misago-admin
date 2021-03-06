import classnames from "classnames"
import React from "react"

type CardProps = {
  children: React.ReactNode
  className?: string
}

const Card: React.FC<CardProps> = ({ children, className }) => (
  <div className={classnames("card", className)}>{children}</div>
)

export default Card
