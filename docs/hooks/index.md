Misago Admin Dashboard Hooks
============================

All hooks defined by admin dashboard are importable from `@misago/hooks` module:

- [`MAIN_NAV`](main-nav.md) - Main menu structure.
- [`ROUTES`](routes.md) - Routes.
- [`SETTINGS_GROUPS`](settings-groups.md) - Settings groups displayed on "settings" page.


Replacing default `.ts` and `.tsx` files
----------------------------------------

To replace default `.ts` or `.tsx` file with custom one, put customized file in the `admin/replace` directory.

For example, to replace `src/components/Card/Card.tsx` file, put custom file in `admin/admin/replace/components/Card/Card.tsx` path.

> **Note:** If more than one plugin replaces same file, no error will be raised by Misago and file will be replaced multiple times. No guarantees are made for final file used.
