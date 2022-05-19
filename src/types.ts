import React from "react"

export type ApiError = {
  type: string
  location: string
  message: string
}

export type MainNavItem = {
  key: string
  icon: string
  link: string
  text: React.ReactNode
  children?: Array<MainNavChildItem> | null
}

export type MainNavChildItem = {
  key: string
  link: string
  text: React.ReactNode
}
