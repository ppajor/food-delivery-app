import { Tabs } from 'expo-router/tabs';
import {
  BodyText,
  LargeText,
  TagText,
} from '../../components/typography/Typography';
import { Pressable, Text, View } from 'react-native';
import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';
import { useState } from 'react';
import { LocalizationModal } from '../../components/localization-modal/LocalizationModal';
export default function AppLayout() {
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
                <View className='ml-2'>
                  <LargeText customClassName='text-base text-gray mb-1'>
                    Twoja lokalizacja
                  </LargeText>
                  <Pressable onPress={() => setModalActive(true)}>
                    <BodyText customClassName='text-lg text-black'>
                      Władysława Łokietka 6
                    </BodyText>
                  </Pressable>
                </View>
                <LocalizationModal
                  visibility={modalActive}
                  closeCategoriesModal={() => setModalActive(false)}
                />
              </View>
            );
          },
        }}
      />
    </Tabs>
  );
}
