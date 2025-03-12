import globals from "globals";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ["**/*.js"], // Проверяем все JS-файлы
    languageOptions: {
      sourceType: "commonjs", // Указываем тип модуля
      globals: globals.browser, // Добавляем глобальные переменные для браузера
    },
    rules: {
      // Базовые правила ESLint
      "no-unused-vars": "warn", // Предупреждение, если есть неиспользуемые переменные
      "no-console": "warn", // Предупреждение, если используется console.log
      semi: ["error", "always"], // Требуем точку с запятой
      quotes: ["error", "single"], // Используем одинарные кавычки
    },
  },
];
