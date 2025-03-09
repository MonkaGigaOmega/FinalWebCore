import globals from "globals";
import noCommentsPlugin from "eslint-plugin-no-comments"; // Импортируем плагин

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ["**/*.js"],
    languageOptions: { sourceType: "commonjs" },
    plugins: {
      "no-comments": noCommentsPlugin, // Подключаем плагин
    },
    rules: {
      "no-comments/no-comments": "error", // Включаем правило для удаления комментариев
    },
  },
  { languageOptions: { globals: globals.browser } },
];