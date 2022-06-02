import { t, plural } from "@lingui/macro"
import { ValidationError } from "./types"

export const requiredValidationMessage = (
  value: any,
  error: ValidationError
) => {
  if (error.type === "required" || error.type === "value_error.missing") {
    return t({
      id: "value_error.missing",
      message: `This field can't be empty.`,
    })
  }

  return error.message
}

type TextConstraints = {
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

  return requiredValidationMessage(value, error)
}

type NumberConstraints = {
  min?: number
  max?: number
}

export const numberValidationMessage = (
  value: any,
  error: ValidationError,
  constraints?: NumberConstraints
) => {
  const max = constraints?.max || 0
  const min = constraints?.min || 0

  switch (error.type) {
    case "typeError":
    case "type_error.integer":
      return t({
        id: "type_error.integer",
        message: `This value should be a number.`,
      })

    case "min":
    case "value_error.number.not_ge":
    case "value_error.any_str.min_length":
      return t({
        id: "value_error.min",
        message: `This value should not be lower than ${min}.`,
      })

    case "value_error.number.not_lt":
      return t({
        id: "value_error.lower_than",
        message: `This value should be lower than ${max}.`,
      })

    case "max":
    case "value_error.number.not_le":
    case "value_error.any_str.max_length":
      return t({
        id: "value_error.max",
        message: `This value should not be greater than ${max}.`,
      })

    case "value_error.number.not_gt":
      return t({
        id: "value_error.greater_than",
        message: `This value should be greater than ${min}.`,
      })
  }

  return requiredValidationMessage(value, error)
}
