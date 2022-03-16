import { plural, t } from "@lingui/macro"
import React from "react"

type Error = {
  type: string
  message: string
}

interface ValidationErrorProps {
  children(error: Error): React.ReactElement
  error?: Error
  value?: number
  min?: number
  max?: number
}

const ValidationError: React.FC<ValidationErrorProps> = ({
  error,
  value = 0,
  min = 0,
  max = 0,
  children,
}) => {
  if (!error) return null

  switch (error.type) {
    case "required":
    case "value_error.missing":
      return children({
        type: error.type,
        message: t({
          id: "value_error.missing",
          message: "This field can't be empty.",
        }),
      })

    case "min":
    case "value_error.any_str.min_length":
      return children({
        type: error.type,
        message: t({
          id: "value_error.min_length",
          message: plural(min, {
            one: `This value should be at least # character long (it has ${value}).`,
            other: `This value should be at least # characters long (it has ${value}).`,
          }),
        }),
      })

    case "max":
    case "value_error.any_str.max_length":
      return children({
        type: error.type,
        message: t({
          id: "value_error.max_length",
          message: plural(max, {
            one: `This value should be no longer than # character (it has ${value}).`,
            other: `This value should be no longer than # characters (it has ${value}).`,
          }),
        }),
      })
  }

  return children(error)
}

export default ValidationError

export type { Error, ValidationErrorProps }
