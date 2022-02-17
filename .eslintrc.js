module.exports = {
    parser: "@typescript-eslint/parser", // Specifies the ESLint parser
    extends: [
      "plugin:react/recommended",
      "plugin:@typescript-eslint/recommended", // Uses the recommended rules from the @typescript-eslint/eslint-plugin
      //"plugin:prettier/recommended", // Enables eslint-plugin-prettier and displays prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
      "eslint:recommended",
      "plugin:@typescript-eslint/recommended",
    ],
    plugins: ["react-hooks", "@typescript-eslint"],
    parserOptions: {
      ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
      sourceType: "module", // Allows for the use of imports
      ecmaFeatures: {
        jsx: true,
      },
    },
    rules: {
      camelcase: [2, { properties: "always" }],
      "react/prop-types": 0,
      "react/display-name": 0,
      "@typescript-eslint/explicit-function-return-type": 0,
      "no-console": 1,
      "react-hooks/rules-of-hooks": 1,
      "react-hooks/exhaustive-deps": 1,
      "react/jsx-uses-react": "off",
      "react/react-in-jsx-scope": "off",
    },
    settings: {
      react: {
        version: "detect", // Tells eslint-plugin-react to automatically detect the version of React to use
      },
    },
  };