import { Stack } from 'expo-router';
import { CartProvider } from '../lib/contexts/CartContext';
export default function AppLayout() {
  return (
    <CartProvider>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name='index' />
        <Stack.Screen name='(tabs)' />
        <Stack.Screen name='(order)' />
        <Stack.Screen name='restaurant/[slug]' />
        {/* <Stack.Screen name='(login)' // nie wychwytuje bo chyba ta grupa nie ma wlasnego layout file'a z navigatorem /> */}
        <Stack.Screen name='start' options={{ headerShown: false }} />
      </Stack>
    </CartProvider>
  );
}
