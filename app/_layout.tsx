import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import "react-native-reanimated";

import { useColorScheme } from "@/hooks/use-color-scheme";

export const unstable_settings = {
  anchor: "(tabs)",
};

export default function RootLayout() {
  const colorScheme = useColorScheme();

  const theme =
    colorScheme === "dark" ?
      {
        ...DarkTheme,
        colors: {
          ...DarkTheme.colors,
          background: "#800000",
        },
      }
    : {
        ...DefaultTheme,
        colors: {
          ...DefaultTheme.colors,
          background: "#800000",
        },
      };

  return (
    <ThemeProvider value={theme}>
      <Stack screenOptions={{ contentStyle: { backgroundColor: "#800000" } }}>
        <Stack.Screen
          name="(tabs)"
          options={{ headerShown: false, animation: "slide_from_right" }}
        />

        <Stack.Screen
          name="auth"
          options={{
            headerShown: false,
            animation: "slide_from_right",
          }}
        />
      </Stack>

      <StatusBar style="light" backgroundColor="#800000" />
    </ThemeProvider>
  );
}
