const js = require("@eslint/js");
const prettier = require("eslint-plugin-prettier/recommended");

module.exports = [
    js.configs.recommended,
    prettier,
    {
        languageOptions: {
            ecmaVersion: "latest",
            sourceType: "module",
            globals: {
                chrome: "readonly",
                document: "readonly",
                window: "readonly",
            },
        },
        rules: {
            "prettier/prettier": "error",
            "no-unused-vars": "error",
            "no-undef": "error",
            "no-console": "error",
            eqeqeq: "error",
            curly: "error",
        },
    },
    {
        files: ["**/*.config.js", "**/.*.js"],
        languageOptions: {
            sourceType: "commonjs",
            globals: {
                module: "writable",
                require: "readonly",
                process: "readonly",
                __dirname: "readonly",
                __filename: "readonly",
            },
        },
    },
];
