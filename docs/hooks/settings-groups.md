# `SETTINGS_GROUPS`

`SETTINGS_GROUPS` is an array of `SettingsGroup` items defining cards displayed when user clicks "Settings" in main menu:

```typescript
const SETTINGS_GROUPS: Array<SettingsGroup> = []

export type SettingsGroup = {
  key: string
  icon: string
  color: string
  link: string
  name: React.ReactNode
  description?: React.ReactNode
}
```

`SettingsGroup` is importable from `@misago/types` module.
