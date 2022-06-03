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

export type Route = {
  key: string
  path: string
  element: React.ReactNode
}

export type SettingsGroup = {
  key: string
  icon: string
  color: string
  link: string
  name: React.ReactNode
  description?: React.ReactNode
}
