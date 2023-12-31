const { getDefaultConfig } = require('expo/metro-config');
const withNativewind = require('nativewind/metro');

module.exports = (() => {
  const config = withNativewind(getDefaultConfig(__dirname));

  const { transformer, resolver } = config;

  config.transformer = {
    ...transformer,
    babelTransformerPath: require.resolve('react-native-svg-transformer'),
  };
  config.resolver = {
    ...resolver,
    assetExts: resolver.assetExts.filter((ext) => ext !== 'svg'),
    sourceExts: [...resolver.sourceExts, 'svg'],
  };

  return config;
})();
