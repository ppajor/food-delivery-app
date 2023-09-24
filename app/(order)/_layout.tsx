import { Stack } from 'expo-router';
export default function AppLayout() {
  return (
    <Stack>
      <Stack.Screen
        name='checkout'
        options={{
          title: 'Koszyk',
        }}
      />
      <Stack.Screen name='orderFinished' options={{ headerShown: false }} />
      <Stack.Screen name='paymentBlik' options={{ headerShown: false }} />
    </Stack>
  );
}
