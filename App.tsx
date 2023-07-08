import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';

export default function App() {
  return (
    <View className='flex items-center justify-center h-full w-full'>
      <Text className='text-red-700 flex'>Initial app! </Text>
      <StatusBar style='auto' />
    </View>
  );
}
