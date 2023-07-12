import { Tabs } from 'expo-router/tabs';
import { BodyText, TagText } from '../../components/typography/Typography';
import { Text, View } from 'react-native';
import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';
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
            return (
              <View className='flex items-end flex-row px-4 mt-[26px]'>
                <MaterialCommunityIcons
                  name='map-marker-radius'
                  color='orange'
                  style={{ marginBottom: 4 }}
                  size={24}
                />
                <View className='ml-2'>
                  <TagText customClassName='text-base text-gray mb-1'>
                    Twoja lokalizacja
                  </TagText>
                  <BodyText customClassName='text-lg text-black'>
                    Władysława Łokietka 6
                  </BodyText>
                </View>
              </View>
            );
          },
        }}
      />
    </Tabs>
  );
}
