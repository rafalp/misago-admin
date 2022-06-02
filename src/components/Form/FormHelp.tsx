import classnames from "classnames"
import React from "react"

type FormHelpProps = {
  children: React.ReactNode
  className?: string | null
  id?: string
}

const FormHelp: React.FC<FormHelpProps> = ({ children, className, id }) => {
  return (
    <div id={id} className={classnames("form-text", className)}>
      {children}
    </div>
  )
}

export default FormHelp
