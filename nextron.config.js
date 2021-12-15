module.exports = {
  // specify an alternate main src directory, defaults to 'main'
  mainSrcDir: "main",
  // specify an alternate renderer src directory, defaults to 'renderer'
  rendererSrcDir: "renderer",
  // pluginOptions: {
  //   electronBuilder: {
  //     nodeIntegration: true,
  //   },
  // },
  // main process' webpack config
  
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.target = "electron-renderer";
      config.node = {
        __dirname: true,
      };
    }
    return config;
  },
};
