# Requirements

1. NodeJS => v14 (https://nodejs.org/en/)
2. Docker (https://www.docker.com/)

# Turborepo install

If you wanna use the Docker, don't install the dependencies localy because there is a bug about
Pnpm. So you have use the normal build with

1. npm install -g pnpm
2. npm install -g commitizen
3. npx playwright install
4. pnpm install
5. pnpm dev

or with Docker

1. make sure that you dont have any node_modules folder localy
2. docker-compose up -d

# Turborepo starter

This is an official starter Turborepo.

## What's inside?

This Turborepo includes the following packages/apps:

### Apps and Packages

- `web`: another [Next.js](https://nextjs.org/) app with [Tailwind CSS](https://tailwindcss.com/)
- `ui`: a stub React component library with [TypeScript](https://www.typescriptlang.org/) and
  [Tailwind CSS](https://tailwindcss.com/) shared by `web` application.
- `eslint-config-react`: `eslint` configurations (includes `eslint-config-next` and
  `eslint-config-prettier`)
- `tailwind-config`: `tailwind.config.js`s used throughout the monorepo
- `tsconfig`: `tsconfig.json`s used throughout the monorepo
- `web-tests`: [Playwright](https://playwright.dev/) tests for `web` application.

### Building packages/ui

This example is setup to build `packages/ui` and output the transpiled source and compiled styles to
`dist/`. This was chosen to make sharing one `tailwind.config.js` as easy as possible, and to ensure
only the CSS that is used by the current application and its dependencies is generated.

Another option is to consume `packages/ui` directly from source without building. If using this
option, you will need to update your `tailwind.config.js` to be aware of your package locations, so
it can find all usages of the `tailwindcss` class names.

For example, in [tailwind.config.js](packages/tailwind-config/tailwind.config.js):

```js
  content: [
    `src/**/*.{js,ts,jsx,tsx}`,
    "../../packages/**/*.{js,ts,jsx,tsx}",
  ],
```

### Utilities

This Turborepo has some additional tools already setup for you:

- [Tailwind CSS](https://tailwindcss.com/) for styles
- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting
- [Playwright](https://playwright.dev/) for end-to-end testing for modern web apps.
- [Storybook](https://storybook.js.org/) for building UI components and pages in isolation. Instaled
  on UI package.
- [GitHub Actions](https://docs.github.com/en/actions) for build, test and release on GitHub.
- [GitHub Issues](https://docs.github.com/en/actions) for bug report and feature requests.
- [GitLab CI](https://docs.gitlab.com/ee/ci/) for build, test and deploy on GitLab.
- [Husky](https://typicode.github.io/husky/#/) for commit check and best practices.
- [Commitlint](https://typicode.github.io/husky/#/) helps your team adhere to a commit convention.
- [Commitizen](https://commitizen-tools.github.io/commitizen/) to define a standard way of
  committing rules and communicating it.
- [Dotenv](https://github.com/motdotla/dotenv) for loads environment variables.
- [Lint-staged](https://github.com/okonet/lint-staged) for running linters against staged files.
- [NPMRC](https://docs.npmjs.com/cli/v9/configuring-npm/npmrc) npm/pnpm configs.
- [Semantic Release](https://github.com/semantic-release/semantic-release) automates the whole
  package release workflow including: determining the next version number, generating the release
  notes, and publishing the package.
- [Docker](https://www.docker.com/) docker-compose and Dockerfiles for creating Docker images.
- [NGINX](https://www.nginx.com/) for reverse proxy for the web apps.
- [PNPM](https://pnpm.io/) fast, disk space efficient package manager and working better with
  Turbo/Turborepos.
