# whenJAM

## Adding projects

A program is made up of projects. Each project is a single Markdown file in
`src/lib/projects/<slug>.md`, served at `/project/<slug>` and listed at
`/project` (most recently updated first).

Frontmatter:

```yaml
---
title: 'Parachain Service on JAM'
excerpt: 'One-line summary, used in meta tags and the project list.'
start: '2026-07' # month M1 starts (YYYY-MM); may be left empty
updated: '2026-11-09' # bump whenever you tick a box
---
```

Progress is tracked with Markdown task lists (`- [ ]` / `- [x]`). At build
time every task item in the file is counted, and each project's metadata gets
`progress: { done, total, percent }`. `percent` is rounded down, so it is only
100 when every item is ticked; a project with no task items is 0%.

## Building, deploying and hosting

The build command (from package.json) is simply:

```
pnpm run build
```

You can use that as your build command if your repo is connected to a host like
Netlify or Vercel, which automatically deploys.

Or, if you prefer, you can run `pnpm run build` locally to generate the static
files. That will result in a `build` folder you can upload anywhere a static
site can be hosted.

Use `pnpm run preview` _after_ a build to preview the built site locally.
