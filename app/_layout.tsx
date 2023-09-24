import { Stack } from 'expo-router';
import { CartProvider } from '../lib/contexts/CartContext';
export default function AppLayout() {
  return (
    <CartProvider>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name='(tabs)' />
        <Stack.Screen name='start' options={{ headerShown: false }} />
      </Stack>
    </CartProvider>
  );
}
