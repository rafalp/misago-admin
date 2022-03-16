import classnames from "classnames"
import React from "react"

interface FormHelpTextProps {
  children: React.ReactNode
  className?: string | null
  id?: string
}

const FormHelpText: React.FC<FormHelpTextProps> = ({
  children,
  className,
  id,
}) => {
  return (
    <div id={id} className={classnames("form-text", className)}>
      {children}
    </div>
  )
}

export default FormHelpText
