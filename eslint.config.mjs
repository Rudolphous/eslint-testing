import compat from "eslint-plugin-compat";
import escompat from "eslint-plugin-escompat";

export default [
    compat.configs['flat/recommended'],
    {
        ...escompat.configs['flat/recommended'],
        languageOptions: {
            ecmaVersion: 14
        },
    }
];
