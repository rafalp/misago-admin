`ROUTES`
======

`ROUTES` is an array of `Route` items defining admin dashboard routes:

```typescript
const ROUTES: Array<Route> = []

export type Route = {
  key: string
  path: string
  element: React.ReactNode
}
```

`Route` is importable from `misago/types` module.
