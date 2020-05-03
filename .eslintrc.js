module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": ["airbnb-base",'prettier'],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "@typescript-eslint",
        "prettier"
    ],
    "rules": {
        "class-methods-use-this":"off",
        "no-params-reassign":"off",
        "camelcase":"off",
        "no-unused-vars":["error",{"argsIgnorePattern":"next"}],
        "prettier/prettier":"error"

    }
};