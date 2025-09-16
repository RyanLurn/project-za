import js from "@eslint/js";
import tanStackQuery from "@tanstack/eslint-plugin-query";
import tanStackRouter from "@tanstack/eslint-plugin-router";
import prettier from "eslint-config-prettier";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import { defineConfig, globalIgnores } from "eslint/config";
import globals from "globals";
import tseslint from "typescript-eslint";

export default defineConfig([
  globalIgnores(["dist/"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs["recommended-latest"],
      reactRefresh.configs.vite
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser
    }
  },
  ...tanStackRouter.configs["flat/recommended"],
  ...tanStackQuery.configs["flat/recommended"],
  {
    name: "prettier",
    ...prettier
  }
]);
