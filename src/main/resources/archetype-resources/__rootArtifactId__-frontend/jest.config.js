module.exports = {
    preset: '@vue/cli-plugin-unit-jest',
    globals: {
        "vue-jest": {
            moduleFileExtensions: ["js", "json", "vue"],
            transform: {
                ".*\\.(vue)$": "vue-jest"
            }
        }
    }
}