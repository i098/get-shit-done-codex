# Changelog

## 1.25.0

- Publish as `@i098/get-shit-done-codex`. The installer, the update check hook and the README use the new name.
- `@undeemed/get-shit-done-codex` is deprecated and points to the new name. Its published versions stay installable.
- To move an existing install to the new name, run `npx @i098/get-shit-done-codex@latest --global` (or `--local`).

## 1.24.4

- Move the source repository to https://github.com/i098/get-shit-done-codex. The npm package name does not change.
- Publish releases from GitHub Actions with npm trusted publishing and provenance.
- Add CI that runs `npm test` on pull requests and pushes to `main`.
