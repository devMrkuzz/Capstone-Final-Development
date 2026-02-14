// auth/layout.tsx
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignIn from "./signin";

const Stack = createNativeStackNavigator();

export default function AuthLayout() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="SignIn" component={SignIn} />
    </Stack.Navigator>
  );
}
