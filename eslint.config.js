const js = require("@eslint/js");
const jest = require("eslint-plugin-jest");

module.exports = [
    {
        files: ["**/*.js"],
        languageOptions: {
            ecmaVersion: "latest",
            sourceType: "commonjs",
            globals: {
                require: "readonly",
                module: "readonly",
                console: "readonly"

            }
        }
    },

    {
        files: ["tests/**/*.js"],
        ...jest.configs["flat/recommended"]
    },

    js.configs.recommended
];