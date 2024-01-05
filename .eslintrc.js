module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "next/core-web-vitals",
    "plugin:prettier/recommended",
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
    "plugin:react/recommended",
  ],
  overrides: [
    {
      env: {
        node: true,
      },
      files: [".eslintrc.{js,cjs}"],
      parserOptions: {
        sourceType: "script",
      },
    },
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["@typescript-eslint", "react"],
  rules: {
    "@next/next/no-img-element": "off",
    "react/react-in-jsx-scope": "off",
    "jsx-a11y/no-autofocus": "off",
    "no-restricted-imports": [
      "error",
      {
        patterns: [
          {
            group: ["../../"],
            message: "Relative imports are not allowed.",
          },
        ],
      },
    ],

    "import/no-restricted-paths": [
      "error",
      {
        zones: [
          // separate ui and logic
          { from: "./state", target: "./components" },
          { from: "./constants", target: "./components" },
          { from: "./features", target: "./components" },
          { from: "./data", target: "./components" },
        ],
      },
    ],
  },
};
