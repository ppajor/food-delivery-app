import { StyleProp, Text } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { ReactNode, useCallback } from 'react';

SplashScreen.preventAutoHideAsync();

interface TextProps {
  customClassName?: string;
  style?: TextProps; //TODO: zmienic
  children: ReactNode;
}

export const TagText = (props: TextProps) => {
  const [fontsLoaded] = useFonts({
    montserrat: require('../../assets/fonts/Montserrat-VariableFont_wght.ttf'),
    montserrat_medium: require('../../assets/fonts/Montserrat-Medium.ttf'),
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
        fontFamily: 'montserrat_medium',
      }}
      className={`${props.customClassName} text-lg`}
      onLayout={onLayoutRootView}
    >
      {props.children}
    </Text>
  );
};

export const SmallTagText = (props: TextProps) => {
  const [fontsLoaded] = useFonts({
    montserrat: require('../../assets/fonts/Montserrat-VariableFont_wght.ttf'),
    montserrat_medium: require('../../assets/fonts/Montserrat-Medium.ttf'),
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
        fontFamily: 'montserrat_medium',
      }}
      className={`${props.customClassName} text-xs`}
      onLayout={onLayoutRootView}
    >
      {props.children}
    </Text>
  );
};

export const SmallText = (props: TextProps) => {
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
      className={`${props.customClassName} text-sm`}
      onLayout={onLayoutRootView}
    >
      {props.children}
    </Text>
  );
};

export const BodyText = (props: TextProps) => {
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

export const LargeText = (props: TextProps) => {
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
      className={`${props.customClassName} text-lg`}
      onLayout={onLayoutRootView}
    >
      {props.children}
    </Text>
  );
};

export const BigHeading = (props: TextProps) => {
  const [fontsLoaded] = useFonts({
    montserrat: require('../../assets/fonts/Montserrat-VariableFont_wght.ttf'),
    montserrat_semibold: require('../../assets/fonts/Montserrat-SemiBold.ttf'),
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
        fontFamily: 'montserrat_semibold',
      }}
      className={`${props.customClassName} text-2xl`}
      onLayout={onLayoutRootView}
    >
      {props.children}
    </Text>
  );
};

export const MediumHeading = (props: TextProps) => {
  const [fontsLoaded] = useFonts({
    montserrat: require('../../assets/fonts/Montserrat-VariableFont_wght.ttf'),
    montserrat_semibold: require('../../assets/fonts/Montserrat-SemiBold.ttf'),
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
        fontFamily: 'montserrat_semibold',
      }}
      className={`${props.customClassName} text-lg`}
      onLayout={onLayoutRootView}
    >
      {props.children}
    </Text>
  );
};

export const LogoFont = (props: TextProps) => {
  const [fontsLoaded] = useFonts({
    architectsDaughter: require('../../assets/fonts/ArchitectsDaughter-Regular.ttf'),
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
        fontFamily: 'architectsDaughter',
      }}
      className={`${props.customClassName} `}
      onLayout={onLayoutRootView}
    >
      {props.children}
    </Text>
  );
};
