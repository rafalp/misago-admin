`MAIN_NAV`
========

`MAIN_NAV` is an array of `MainNav` items defining admin dashboard's main menu:

```typescript
MAIN_NAV = Array<MainNavItem>

type MainNavItem = {
  key: string
  icon: string
  link: string
  text: React.ReactNode
  children?: Array<MainNavChildItem> | null
}

type MainNavChildItem = {
  key: string
  link: string
  text: React.ReactNode
}
```

`MainNavItem` and `MainNavChildItem` are importable from `misago/types` module.
