module.exports = {
  printWidth: 100,
  semi: false,
  arrowParens: "avoid",
  tabWidth: 2,
  useTabs: false,
  trailingComma: "es5",
  singleQuote: false,
  bracketSameLine: true,
  
  plugins: [require.resolve("prettier-plugin-astro")],
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
      },
    },
  ],
}
