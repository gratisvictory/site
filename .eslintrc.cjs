const { eslint } = require('@gratisvictory/eslint')

/** @type {import('eslint').Config} */
module.exports = {
    ...eslint.next,
    rules: {
        ...eslint.next.rules,
        'import/no-unresolved': 'off',
        'jsx-a11y/click-events-have-key-events': 'off',
        'jsx-a11y/no-static-element-interactions': 'off',
        'no-plusplus': 'off'
    }
}