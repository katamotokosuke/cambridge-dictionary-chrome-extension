module.exports = {
    env: {
        browser: true,
        es2021: true,
        webextensions: true,
    },
    extends: ["eslint:recommended", "plugin:prettier/recommended"],
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
    },
    rules: {
        "prettier/prettier": "error",
        "no-unused-vars": "error",
        "no-undef": "error",
        "no-console": "error",
        eqeqeq: "error",
        curly: "error",
    },
};
