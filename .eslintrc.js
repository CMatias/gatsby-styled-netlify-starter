module.exports = {
  parser: "babel-eslint",
  parserOptions: {
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
      modules: true,
    }
  },
  extends: ["plugin:prettier/recommended", "plugin:react/recommended"],
  plugins: ["react", "jsx-a11y", "import", "prettier"],
  env: {
    es6: true,
    browser: true,
    node: true,
    jest: true
  },
  rules: {
    "no-unused-vars": "error",
    "comma-dangle": ["error", "never"],
    "no-console": ["error", { allow: ["warn", "error"] }],
    "no-debugger": "error",
    "prettier/prettier": [
      "error", {
        "semi": true,
        "singleQuote": true,
        "trailingComma": 'none'
    }]
  },
  settings: {
    react: {
      version: "detect",
    },
    linkComponents: [
      {name: "Link", linkAttribute: "to"}
    ]
  }
};