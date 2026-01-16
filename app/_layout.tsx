import '../global.css';

import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        presentation: 'transparentModal',
      }}>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen
        name="modal"
        options={{
          presentation: 'modal',
        }}
      />
    </Stack>
  );
}
