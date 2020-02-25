module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      require.resolve('babel-plugin-module-resolver'),
      {
        root: ['./src/'],
        alias: {
          '@components': './src/components',
          '@constants': './src/constants',
          '@navigtion': './src/navigation',
          '@screens': './src/screens',
          '@actions': './src/store/actions',
          '@reducers': './src/store/reducers',
          '@sagas': './src/store/sagas',
        },
      },
    ],
  ],
};
