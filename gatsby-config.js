module.exports = {
  plugins: [
    {
      plugins: [`gatsby-plugin-fontawesome-css`],
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
  ],
}