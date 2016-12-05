# eslint-config-sand

This package provides SandJS's .eslintrc as an extensible shared config.

## Usage

### eslint-config-sand

Our default export contains all of our ESLint rules, including ECMAScript 6+. It requires `eslint` and `eslint-plugin-import`.

1. Ensure packages are installed with correct version numbers by running:
  ```sh
  (
    export PKG=@sandjs/eslint-config-sand;
    npm info "$PKG@latest" peerDependencies --json | command sed 's/[\{\},]//g ; s/: /@/g' | xargs npm install --save-dev "$PKG@latest"
  )
  ```

  Which produces and runs a command like:x

  ```sh
    npm install --save-dev @sandjs/eslint-config-sand eslint@^#.#.# eslint-plugin-import@^#.#.#
  ```

2. Add `"extends": "@sandjs/sand"` to your .eslintrc