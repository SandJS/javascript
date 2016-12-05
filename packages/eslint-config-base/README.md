# eslint-config-sandjs-base

This package provides SandJS's base JS .eslintrc as an extensible shared config.

## Usage

We export two ESLint configurations for your usage.

### eslint-config-sandjs-base

Our default export contains all of our ESLint rules, including ECMAScript 6+. It requires `eslint` and `eslint-plugin-import`.

1. Ensure packages are installed with correct version numbers by running:
  ```sh
  (
    export PKG=@sandjs/eslint-config-base;
    npm info "$PKG@latest" peerDependencies --json | command sed 's/[\{\},]//g ; s/: /@/g' | xargs npm install --save-dev "$PKG@latest"
  )
  ```

  Which produces and runs a command like:

  ```sh
    npm install --save-dev @sandjs/eslint-config-base eslint@^#.#.# eslint-plugin-import@^#.#.#
  ```

2. Add `"extends": "@sandjs/base"` to your .eslintrc