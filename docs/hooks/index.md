Misago Admin Dashboard Hooks
============================

All hooks defined by admin dashboard are importable from `@misago/hooks` module:

- [`MAIN_NAV`](main-nav.md) - Main menu structure.
- [`ROUTES`](routes.md) - Routes.
- [`SETTINGS_GROUPS`](settings-groups.md) - Settings groups displayed on "settings" page.


Overriding default `.ts` and `.tsx` files
-----------------------------------------

To override default `.ts` or `.tsx` file with custom one, put override file in the `admin/override` directory.

For example, to override `src/components/Card/Card.tsx` file, put custom file in `admin/admin/override/components/Card/Card.tsx` path.

> **Note:** If more than one plugin overrides same file, this file no error will be raised by Misago and file will be overridden multiple times. No guarantees are made for final file used.
