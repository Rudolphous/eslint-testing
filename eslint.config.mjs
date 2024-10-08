import compat from "eslint-plugin-compat";
import escompat from "eslint-plugin-escompat";

import { FlatCompat } from "@eslint/eslintrc";
import url from "url";

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

const flatCompat = new FlatCompat({
    baseDirectory: __dirname,
});

export default [
    ...flatCompat.config(compat.configs.recommended),
    ...flatCompat.config(escompat.configs.recommended),
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
