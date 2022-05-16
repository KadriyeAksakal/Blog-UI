/* eslint-env node */

/*
 * This file runs in a Node context (it's NOT transpiled by Babel), so use only
 * the ES6 features that are supported by your Node version. https://node.green/
 */

// Configuration for your app
// https://v2.quasar.dev/quasar-cli-webpack/quasar-config-js


const ESLintPlugin = require('eslint-webpack-plugin')


/*const { configure } = require('quasar/wrappers');*/

module.exports = function (ctx) {
  return {
    // https://v2.quasar.dev/quasar-cli-webpack/supporting-ts
    supportTS: false,

    // https://v2.quasar.dev/quasar-cli-webpack/prefetch-feature
    // preFetch: true,

    // app boot file (/src/boot)
    // --> boot files are part of "main.js"
    // https://v2.quasar.dev/quasar-cli-webpack/boot-files
    boot: [
      'axios',
    ],

    // https://v2.quasar.dev/quasar-cli-webpack/quasar-config-js#Property%3A-css
    css: [
      'app.sass'
    ],

    // https://github.com/quasarframework/quasar/tree/dev/extras
    extras: [
      // 'ionicons-v4',
      'mdi-v5',
      // 'fontawesome-v6',
      // 'eva-icons',
      // 'themify',
      // 'line-awesome',
      // 'roboto-font-latin-ext', // this or either 'roboto-font', NEVER both!

      'roboto-font', // optional, you are not bound to it
      'material-icons', // optional, you are not bound to it
    ],

    // Full list of options: https://v2.quasar.dev/quasar-cli-webpack/quasar-config-js#Property%3A-build
    build: {
      vueRouterMode: 'history', // available values: 'hash', 'history'

      // transpile: false,
      // publicPath: '/',

      // Add dependencies for transpiling with Babel (Array of string/regex)
      // (from node_modules, which are by default not transpiled).
      // Applies only if "transpile" is set to true.
      // transpileDependencies: [],

      // rtl: true, // https://quasar.dev/options/rtl-support
      // preloadChunks: true,
      // showProgress: false,
      // gzip: true,
      // analyze: true,

      // Options below are automatically set depending on the env, set them if you want to override
      // extractCSS: false,

      // https://v2.quasar.dev/quasar-cli-webpack/handling-webpack
      // "chain" is a webpack-chain object https://github.com/neutrinojs/webpack-chain

      extendWebpack (cfg, { isServer, isClient }) {
        /* Orjinal Optimization Cfg >>> quasar inspect -p optimization
            {
              splitChunks: {
                cacheGroups: {
                  vendors: {
                    name: 'vendor',
                    chunks: 'all',
                    priority: -10,
                    test: [Function] {
                      [length]: 1,
                      [name]: ''
                    }
                  },
                  common: {
                    name: 'chunk-common',
                    minChunks: 2,
                    priority: -20,
                    chunks: 'all',
                    reuseExistingChunk: true
                  }
                }
              },
              noEmitOnErrors: true,
              namedModules: true
            }
        */
        // kaynak : https://medium.com/hackernoon/the-100-correct-way-to-split-your-chunks-with-webpack-f8a9df5b7758
        /*
        cfg['output'] = {
          filename: '[name].[contenthash:8].js'
        }
        */
        if (!ctx.dev) {
          cfg.optimization = {
            runtimeChunk: 'single',
            // noEmitOnErrors: true,
            // namedModules: true,
            splitChunks: {
              chunks: 'all',
              maxInitialRequests: Infinity,
              minSize: 0,
              cacheGroups: {
                vendor: {
                  test: /[\\/]node_modules[\\/]/,
                  name (module) {
                    // get the name. E.g. node_modules/packageName/not/this/part.js
                    // or node_modules/packageName
                    const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1]

                    // npm package names are URL-safe, but some servers don't like @ symbols
                    // return `npm.${packageName.replace('@', '')}`
                    return packageName
                  }
                },
                // common: {
                //   name: 'chunk-common',
                //   minChunks: 2,
                //   priority: -20,
                //   chunks: 'all',
                //   reuseExistingChunk: true
                // }
              }
            }
          }
        }
      },
      chainWebpack (chain) {
        chain.plugin('eslint-webpack-plugin')
          .use(ESLintPlugin, [{ extensions: [ 'js', 'vue' ] }])
      }

    },

    // Full list of options: https://v2.quasar.dev/quasar-cli-webpack/quasar-config-js#Property%3A-devServer
    devServer: {
      https: false,
      port: 8080,
      open: true // opens browser window automatically
    },

    // https://v2.quasar.dev/quasar-cli-webpack/quasar-config-js#Property%3A-framework
    framework: {
      config: {},

      iconSet: 'material-icons', // Quasar icon set
      lang: 'tr', // Quasar language pack

      // For special cases outside of where the auto-import strategy can have an impact
      // (like functional components as one of the examples),
      // you can manually specify Quasar components/directives to be available everywhere:
      //
      // components: [],
      // directives: [],
      importStrategy: 'auto',
      // Quasar plugins
      plugins: [
        'Dialog',
        'Loading',
        'Notify',
        'LocalStorage'
      ]
    },

    // animations: 'all', // --- includes all animations
    // https://quasar.dev/options/animations
    animations: [],

    // https://v2.quasar.dev/quasar-cli-webpack/developing-ssr/configuring-ssr
    ssr: {
      pwa: false,
    },

    // https://v2.quasar.dev/quasar-cli-webpack/developing-pwa/configuring-pwa
    pwa: {
      workboxPluginMode: 'GenerateSW', // 'GenerateSW' or 'InjectManifest'
      workboxOptions: {}, // only for GenerateSW
      manifest: {
        name: `BlogApp`,
        short_name: `BlogApp`,
        description: `Blog UI Project`,
        display: 'standalone',
        orientation: 'portrait',
        background_color: '#ffffff',
        theme_color: '#027be3',
        icons: [
          {
            src: 'icons/icon-128x128.png',
            sizes: '128x128',
            type: 'image/png'
          },
          {
            src: 'icons/icon-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'icons/icon-256x256.png',
            sizes: '256x256',
            type: 'image/png'
          },
          {
            src: 'icons/icon-384x384.png',
            sizes: '384x384',
            type: 'image/png'
          },
          {
            src: 'icons/icon-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    },

    // Full list of options: https://v2.quasar.dev/quasar-cli-webpack/developing-cordova-apps/configuring-cordova
    cordova: {
      // noIosLegacyBuildFlag: true, // uncomment only if you know what you are doing
    },

    // Full list of options: https://v2.quasar.dev/quasar-cli-webpack/developing-capacitor-apps/configuring-capacitor
    capacitor: {
      hideSplashscreen: true
    },

    // Full list of options: https://v2.quasar.dev/quasar-cli-webpack/developing-electron-apps/configuring-electron
    electron: {
      bundler: 'packager', // 'packager' or 'builder'

      packager: {
        // https://github.com/electron-userland/electron-packager/blob/master/docs/api.md#options

        // OS X / Mac App Store
        // appBundleId: '',
        // appCategoryType: '',
        // osxSign: '',
        // protocol: 'myapp://path',

        // Windows only
        // win32metadata: { ... }
      },

      builder: {
        // https://www.electron.build/configuration/configuration

        appId: 'blog'
      },
      // More information: https://v1.quasar.dev/quasar-cli/developing-electron-apps/node-integration
      nodeIntegration: true,

      // "chain" is a webpack-chain object https://github.com/neutrinojs/webpack-chain

     /* chainWebpackMain (chain) {
        chain.plugin('eslint-webpack-plugin')
          .use(ESLintPlugin, [{ extensions: [ 'js' ] }])
      },



      chainWebpackPreload (chain) {
        chain.plugin('eslint-webpack-plugin')
          .use(ESLintPlugin, [{ extensions: [ 'js' ] }])
      },*/

      extendWebpack (/* cfg */) {
        // do something with Electron main process Webpack cfg
        // chainWebpack also available besides this extendWebpack
      }

    }
  }
};
