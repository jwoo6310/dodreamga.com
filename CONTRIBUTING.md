# Contributing

Thanks for taking the time to contribute! This repo powers the DoDream Baptist Church website and runs entirely on GitHub Pages — so even small PRs ship directly to production when merged to `main`.

## Ground rules

- Please open an issue before starting non-trivial work so we can align on scope.
- Keep PRs small and focused. One concern per PR.
- Preserve bilingual (Korean / English) support for any user-facing text.
- Don't commit large media files to the repo — upload photos to the Google Drive gallery folder instead.
- Never commit secrets, API keys, Apps Script deployment tokens, or `.env` files.

## Local preview

This site has no build step. Serve the root directory with any static server:

```bash
python3 -m http.server 8000
# or
npx serve .
```

Then visit `http://localhost:8000`.

## Branch & commit workflow

1. Create a feature branch from `main`: `git checkout -b feature/short-description` (use `fix/…` for bug fixes, `chore/…` for housekeeping).
2. Make focused commits with present-tense, imperative messages ("Add prayer request form", not "added form"). Reference issues with `#123` in the body when relevant.
3. Push the branch and open a pull request. The PR template will walk you through what to include.
4. Wait for CI (Vercel deploy preview, Lighthouse CI, link check, HTML validation) to pass.
5. Request review, address feedback, then squash-merge into `main`.

## Adding a new page

1. Place the HTML file under the appropriate directory (`about/`, `event/`, `community/`, etc.).
2. Link it from the navigation in **every** page — nav markup is currently duplicated across pages.
3. Add translatable elements with unique `id` attributes and register translations in the page's `elementsToTranslate` table.
4. Run the link checker locally or let CI catch missing links.

## Adding photos to the gallery

Photos live in Google Drive, not in Git. Drop a new album folder (numbered `1.jpg`, `2.jpg`, …) into the configured Drive parent folder. The Apps Script web app will expose it automatically on the next page load.

## Reporting bugs

Open an issue using the **Bug report** template. Include browser, device, what you expected, what you saw, and a screenshot if possible.

## Suggesting features

Open an issue using the **Feature request** template. Describe the problem first, then propose the solution.
