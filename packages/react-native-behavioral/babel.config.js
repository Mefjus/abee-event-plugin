module.exports = {
  presets: ['module:@react-native/babel-presett'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          '@mefjus/core': './utils',
        },
      },
    ],
  ],
};
