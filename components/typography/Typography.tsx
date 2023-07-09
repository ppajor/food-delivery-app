import { Text } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { ReactNode, useCallback } from 'react';

SplashScreen.preventAutoHideAsync();
export const TagText = (props) => {
  const [fontsLoaded] = useFonts({
    montserrat: require('../../assets/fonts/Montserrat-VariableFont_wght.ttf'),
    montserrat_regular: require('../../assets/fonts/Montserrat-Regular.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Text
      style={{
        ...props.style,
        fontFamily: 'montserrat_regular',
      }}
      className={`${props.customClassName}`}
      onLayout={onLayoutRootView}
    >
      {props.children}
    </Text>
  );
};

export const BodyText = (props) => {
  const [fontsLoaded] = useFonts({
    poppins: require('../../assets/fonts/Poppins-Regular.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Text
      style={{
        ...props.style,
        fontFamily: 'poppins',
      }}
      className={`${props.customClassName}`}
      onLayout={onLayoutRootView}
    >
      {props.children}
    </Text>
  );
};
