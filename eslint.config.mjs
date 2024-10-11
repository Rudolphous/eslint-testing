import compat from "eslint-plugin-compat";
import escompat from "eslint-plugin-escompat";

export default [
    compat.configs['flat/recommended'],
    escompat.configs['flat/recommended'],
    {
        files: ['*.js'],
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
