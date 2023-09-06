import { View, useWindowDimensions } from 'react-native';
import {
  BigHeading,
  LargeText,
  LogoFont,
  SmallText,
} from '../components/typography/Typography';
import Constants from 'expo-constants';
import LottieView from 'lottie-react-native';
import { useRef } from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { Link } from 'expo-router';
import { CartProvider } from '../lib/contexts/CartContext';

export default function Start() {
  const animation = useRef(null);
  const dimensions = useWindowDimensions();

  return (
    <ScrollView
      style={{ paddingTop: Constants.statusBarHeight }}
      className='p-12 bg-white h-full'
    >
      <View>
        <LogoFont customClassName='text-[48px] mt-9 text-center'>
          SwiftServe
        </LogoFont>
        <View className='flex flex-row mt-9 mb-6'>
          <SmallText customClassName='text-gray'>Używaj</SmallText>
          <LogoFont> SwiftServe </LogoFont>
          <SmallText customClassName='text-gray'>
            w kilku prostych krokach
          </SmallText>
        </View>
        <ScrollView horizontal className='flex flex-row  h-[200px]'>
          <LottieView
            autoPlay
            ref={animation}
            style={{
              width: dimensions.width,
              height: 200,
              paddingLeft: 32,
            }}
            // Find more Lottie files at https://lottiefiles.com/featured
            source={require('../assets/animations/order-food.json')}
          />
          <LottieView
            autoPlay
            ref={animation}
            style={{
              width: dimensions.width,
              height: 200,
            }}
            // Find more Lottie files at https://lottiefiles.com/featured
            source={require('../assets/animations/mobile-payment.json')}
          />
          <LottieView
            autoPlay
            ref={animation}
            style={{
              width: dimensions.width,
              height: 200,
            }}
            // Find more Lottie files at https://lottiefiles.com/featured
            source={require('../assets/animations/driving-delivery.json')}
          />
          <LottieView
            autoPlay
            ref={animation}
            style={{
              width: dimensions.width,
              height: 200,
            }}
            // Find more Lottie files at https://lottiefiles.com/featured
            source={require('../assets/animations/animation-collect-delivery.json')}
          />
        </ScrollView>
        <View className='flex flex-row justify-around items-center my-6'>
          <View
            style={{ borderColor: '#FF8D28', borderWidth: 4 }}
            className='w-4 h-4 rounded-full bg-lightgray'
          ></View>
          <View className='w-4 h-4 rounded-full bg-lightgray'></View>
          <View className='w-4 h-4 rounded-full bg-lightgray'></View>
          <View className='w-4 h-4 rounded-full bg-lightgray'></View>
        </View>
        <SmallText customClassName='text-gray'>
          Kurier dowiezie Ci jedzenie tak szybko jak to możliwe
        </SmallText>
        <View className='mt-8 mx-auto'>
          <Link href='/login'>
            <BigHeading customClassName='text-orange '>Zaczynamy</BigHeading>
          </Link>
        </View>
      </View>
    </ScrollView>
  );
}
