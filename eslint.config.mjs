import escompat from "eslint-plugin-escompat";

export default [
    escompat.configs['flat/recommended'],
    {
        settings: {
            lintAllEsApis: true
        },
        languageOptions: {
            parserOptions: {
                ecmaVersion: 2021,
                sourceType: 'module'
            }
        },
    }
];
