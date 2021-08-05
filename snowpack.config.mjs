/** @type {import("snowpack").SnowpackUserConfig } */
export default {
  mount: {
    public: '/',
    src: '/dist',
  },
  plugins: ['@snowpack/plugin-react-refresh', '@snowpack/plugin-postcss'],
  routes: [],
  optimize: {},
  packageOptions: {},
  devOptions: {
    tailwindConfig: './tailwind.config.js',
  },
  buildOptions: {
    metaUrlPath: 'snowpack',
  },
}
