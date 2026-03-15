This is the web frontend for the project, built with [Next.js](https://nextjs.org).

## Base path configuration

The project reads `NEXT_PUBLIC_BASE_PATH` from `web/.env.production` during build.

### Root deployment

If the site is deployed at the domain root, leave it empty:

```dotenv
NEXT_PUBLIC_BASE_PATH=
```

You can also write `null`, which is treated the same as empty.

### Subpath deployment

If the site is deployed under a subdirectory such as `/claude`, set:

```dotenv
NEXT_PUBLIC_BASE_PATH=/claude
```

## Build

From `web/` run:

```powershell
Set-Location "E:\project\learn-claude-code\learn-claude-code\web"
npm run build
```

The static export output is written to `web/out`.

## Local development

```powershell
Set-Location "E:\project\learn-claude-code\learn-claude-code\web"
npm run dev
```

Then open:

```text
http://localhost:3000
```

## Local override without committing changes

If you want to test a different path on your own machine, create `web/.env.production.local`.
This file is ignored by Git and will override `web/.env.production`.

Example:

```dotenv
NEXT_PUBLIC_BASE_PATH=/claude
```

## Notes

- Empty or `null` means root deployment.
- A value like `/claude` means subpath deployment.
- Trailing slashes are normalized automatically.
- Internal links are generated from the same base-path setting, so the built site stays consistent.
