const { eslint } = require('@gratisvictory/eslint')

/** @type {import('eslint').Config} */
module.exports = {
    ...eslint.next,
    rules: {
        ...eslint.next.rules,
        'import/no-unresolved': 'off'
    }
}