# Personal Website

This site is built with React, TypeScript, and Vite and is deployed to GitHub Pages.

## Development

Use Node.js 26.13.0 and npm 12.2.1. With [nvm](https://github.com/nvm-sh/nvm), run `nvm install` and `nvm use` to select the version in `.nvmrc`, then install npm with `npm install --global npm@12.2.1`.

Install dependencies with `npm ci`, then run `npm start` to start the Vite development server at [http://localhost:5173](http://localhost:5173).

The `allowScripts` entry in `package.json` explicitly blocks install scripts for `fsevents`, Vite's optional macOS file watcher. The package includes a native binding, and Vite uses another watcher if that binding cannot load. Keep the script blocked unless a verified need requires approval. Use `npm install-scripts ls` with npm 12.2.1 to review unreviewed dependency scripts.

## Validation and deployment

- `npm test` runs the Vitest suite.
- `npm run build` type-checks the application and creates a production bundle in `dist/`.
- `npm run deploy` builds the site and publishes `dist/` to GitHub Pages.
