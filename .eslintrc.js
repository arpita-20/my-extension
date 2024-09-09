module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["react-app", "eslint:recommended", "plugin:react/recommended"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    "no-unused-vars": "warn",
    "no-undef": "warn", // Optional: turn off error for undefined vars
  },
  globals: {
    chrome: "readonly", // <-- Add chrome as a global variable
  },
};
