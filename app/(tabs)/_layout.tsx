import { Tabs } from 'expo-router/tabs';
import { BodyText, LargeText } from '../../components/typography/Typography';
import { Pressable, View } from 'react-native';
import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';
import { useState } from 'react';
import { LocalizationModal } from '../../components/localization-modal/LocalizationModal';
export default function AppLayout() {
  const [currentAddress, setCurrentAddress] = useState('Ustaw lokalizację');

  const handleChangeAddress = (address: string) => {
    setCurrentAddress(address);
  };
  return (
    <Tabs screenOptions={{ tabBarShowLabel: false }}>
      <Tabs.Screen
        name='home'
        options={{
          tabBarIcon: () => <FontAwesome name='home' size={24} color='gray' />,
          headerTitle: '',
          headerStatusBarHeight: 0,
          headerStyle: { height: 120 },
          headerLeft: () => {
            const [modalActive, setModalActive] = useState(false);
            return (
              <View className='flex items-end flex-row px-4 mt-[26px]'>
                <MaterialCommunityIcons
                  name='map-marker-radius'
                  color='orange'
                  style={{ marginBottom: 4 }}
                  size={24}
                />
                <Pressable onPress={() => setModalActive(true)}>
                  <View className='ml-2'>
                    <LargeText customClassName='text-base text-gray mb-1'>
                      Lokalizacja Twojej dostawy
                    </LargeText>
                    <BodyText customClassName='text-lg text-black'>
                      {currentAddress}
                    </BodyText>
                  </View>
                </Pressable>

                <LocalizationModal
                  currentAddress={currentAddress}
                  visibility={modalActive}
                  onAddressChange={handleChangeAddress}
                  closeCategoriesModal={() => setModalActive(false)}
                />
              </View>
            );
          },
        }}
      />
      <Tabs.Screen
        name='checkout'
        options={{
          tabBarIcon: () => (
            <FontAwesome name='shopping-cart' size={24} color='gray' />
          ),
          title: 'Koszyk',
        }}
      />
    </Tabs>
  );
}
