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

    // "import/no-restricted-paths": [
    //   "error",
    //   {
    //     zones: [
    //       // separate ui and logic
    //       {
    //         from: "./features",
    //         target: "./shared",
    //         message: "В shared нельзя импортировать модули из features",
    //       },
    //       {
    //         from: "./components",
    //         target: "./shared",
    //         message: "В shared нельзя импортировать модули из components",
    //       },
    //       {
    //         from: "./components",
    //         target: "./features",
    //         message: "В features нельзя импортировать модули из components",
    //       },
    //       {
    //         from: "./pages",
    //         target: "./components",
    //         message: "В components нельзя импортировать модули из pages",
    //       },
    //       // {
    //       //   from: "./app",
    //       //   target: "./pages",
    //       //   message: "В pages нельзя импортировать модули из app",
    //       // },
    //     ],
    //   },
    // ],
    "prettier/prettier": ["error", { endOfLine: "auto" }],
  },
};
