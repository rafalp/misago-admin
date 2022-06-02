import classnames from "classnames"
import React from "react"

type CardFooterProps = {
  children: React.ReactNode
  className?: string
}

const CardFooter: React.FC<CardFooterProps> = ({ children, className }) => (
  <div className={classnames("card-footer", className)}>{children}</div>
)

export default CardFooter
