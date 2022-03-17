import { t, plural } from "@lingui/macro"
import { ValidationError } from "./types"

interface TextConstraints {
  min?: number
  max?: number
}

export const textValidationMessage = (
  value: string,
  error: ValidationError,
  constraints?: TextConstraints
) => {
  const max = constraints?.max || 0
  const min = constraints?.min || 0

  switch (error.type) {
    case "required":
    case "value_error.missing":
      return t({
        id: "value_error.missing",
        message: `This field can't be empty.`,
      })

    case "min":
    case "value_error.any_str.min_length":
      return t({
        id: "value_error.min_length",
        message: plural(min, {
          one: `This value should be at least # character long (it has ${value.length}).`,
          other: `This value should be at least # characters long (it has ${value.length}).`,
        }),
      })

    case "max":
    case "value_error.any_str.max_length":
      return t({
        id: "value_error.max_length",
        message: plural(max, {
          one: `This value should be no longer than # character (it has ${value.length}).`,
          other: `This value should be no longer than # characters (it has ${value.length}).`,
        }),
      })
  }

  return null
}
