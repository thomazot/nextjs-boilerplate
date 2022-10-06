module.exports = {
  stories: ['../src/components/**/*stories.tsx', '../src/templates/**/*stories.tsx', '../src/common/**/*stories.tsx'],
  addons: ['@storybook/addon-essentials', {
    name: '@storybook/addon-postcss',
    options: {
      cssLoaderOptions: {
        importLoaders: 1,
      },
      postcssLoaderOptions: {
        implementation: require('postcss'),
      },
    },
  }, 'storybook-addon-next-router'],
  babel: async (options) => ({
    ...options,
    plugins: [
      ...options.plugins,
      require.resolve('@babel/plugin-transform-react-jsx')
    ]
  }),
  webpackFinal: (config) => {
    config.resolve.modules.push(`${process.cwd()}/src`)
    return config
  }
}
