module.exports = {
    root: true, // Specifies that this configuration file is the root configuration. This means ESLint should stop looking for further configurations in parent directories.
    env: { // Specifies the environments in which your code will run. In this case
        browser: true, // it indicates that the code will run in a browser and Node.js environment.
        node: true,
    },
    parser: 'vue-eslint-parser', // Specifies the parser to use for parsing Vue.js files.
    parserOptions: { // Configuration options for the parser. In this case, it specifies the parser to use for TypeScript files
        parser: '@typescript-eslint/parser'
    },
    plugins: ['vitest'], // Specifies additional ESLint plugins to use. In this case, it includes the 'vitest' plugin.
    rules: { // Defines the custom rules and rule overrides for your project. Here are some notable ones:
        semi: 'off', // Disables the rule that enforces the use of semicolons at the end of statements.
        'comma-dangle': 'off', // Disables the rule that enforces trailing commas in object and array literals.
        indent: ['error', 4], // Specifies the indentation style for the code, enforcing a 4-space indentation.
        'no-console': 'off', // Disables the rule that disallows the use of console.log and other console methods.
        'space-before-function-paren': ['error', {
            named: 'never', // Enforces or disallows a space before the opening parenthesis of a function declaration.
        }],
        'accessor-pairs': 'off', // Disables the rule that enforces getter and setter pairs for object properties.
        'vue/no-v-html': 'off', // Disables the rule that disallows the use of the v-html directive in Vue.js templates. The v-html directive allows injecting HTML directly into the template, which can be a security risk if not handled carefully.
        'vue/html-closing-bracket-spacing': 'off', // Disables the rule that enforces or disallows spacing around HTML closing brackets (e.g., <div>).
        'vue/script-setup-uses-vars': 'off', // Disables the rule that warns about unused variables in the <script setup> block of a Vue.js component. The <script setup> block is a new feature introduced in Vue 3.
        'vue/singleline-html-element-content-newline': 'off', // Disables the rule that enforces a newline after opening and before closing tags for single-line HTML elements. This rule is disabled, so it allows single-line elements like <span>content</span>.
        'vue/no-multiple-template-root': 'off', // Disables the rule that disallows having multiple root elements in a Vue.js template. With this rule disabled, you can have multiple root elements in your templates.

        // turn on there rules in future
        'vue/no-setup-props-destructure': 'off', // Disables the rule that disallows object destructuring in the setup function of a Vue 3 component.
        'vue/require-prop-types': 'off', // Disables the rule that requires defining prop types in Vue.js components.
        'vue/no-use-v-if-with-v-for': 'off', // Disables the rule that disallows using both v-if and v-for on the same element in a Vue.js template.
        'vue/multi-word-component-names': 'off', // Disables the rule that enforces using kebab-case for multi-word component names in Vue.js.
    }
}
