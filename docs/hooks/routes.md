`ROUTES`
======

`ROUTES` is an array of `Route` items defining admin dashboard routes:

```typescript
export type Route = {
  key: string
  path: string
  element: React.ReactNode
}
```

`Route` is importable from `misago/types` module.