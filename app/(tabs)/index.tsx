import { FontAwesome } from "@expo/vector-icons";
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

export default function HomeScreen() {
  return (
    <KeyboardAvoidingView
      style={{ flex: 1, backgroundColor: "#800000" }}
      behavior={Platform.OS === "ios" ? "padding" : "padding"}
    >
      <ScrollView
        contentContainerStyle={styles.container}
        keyboardShouldPersistTaps="handled"
      >
        {/* LOGO */}
        <Image
          source={require("../../assets/images/sorsu.png")}
          style={styles.logo}
        />

        {/* TITLE */}
        <Text style={styles.title}>Welcome Back!</Text>

        {/* FIELD CONTAINER */}
        <View style={styles.fieldContainer}>
          <Text style={styles.header}>Sign Up to Continue</Text>

          {/* USER ID */}
          <TextInput
            style={styles.input}
            placeholder="User ID"
            keyboardType="numeric"
            placeholderTextColor="#555"
          />

          {/* PASSWORD */}
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry
            placeholderTextColor="#555"
          />

          {/* FORGOT PASSWORD */}
          <Pressable
            onPress={() => console.log("Forgot Password pressed")}
            style={{ alignSelf: "flex-end", marginBottom: 20 }}
          >
            <Text
              style={{
                color: "#800000",
                textDecorationLine: "underline",
                fontWeight: "500",
              }}
            >
              Forgot Password?
            </Text>
          </Pressable>

          {/* SIGN UP BUTTON */}
          <Pressable
            style={styles.button}
            onPress={() => console.log("Sign Up pressed")}
          >
            <Text style={styles.buttonText}>Continue</Text>
          </Pressable>

          {/* OR Divider */}
          <Text style={styles.divider}>Sign in with</Text>

          {/* SIGN UP WITH Socials */}
          <View style={styles.socials}>
            <Pressable onPress={() => console.log("Google Pressed")}>
              <FontAwesome name="google" size={30} color="#4285F4" />
            </Pressable>

            <View style={{ width: 20 }} />

            <Pressable onPress={() => console.log("Facebook Pressed")}>
              <FontAwesome name="facebook" size={30} color="#4285F4" />
            </Pressable>
          </View>

          <View style={styles.create}>
            <Text style={{}}>Don't have account?</Text>
            <Pressable onPress={() => console.log("Create Account Clicked")}>
              <Text
                style={{ fontSize: 16, fontWeight: "bold", color: "#800000" }}
              >
                Sign Up
              </Text>
            </Pressable>
          </View>
        </View>

        {/* FOOTER */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>
            © 2026 Your Company. All rights reserved.
          </Text>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
    resizeMode: "contain",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 20,
    color: "white",
  },
  fieldContainer: {
    width: "100%",
    maxWidth: 400,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 25,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    elevation: 5,
    marginBottom: 20,
  },
  header: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#800000",
    marginBottom: 15,
  },
  input: {
    borderWidth: 1,
    borderColor: "#800000",
    borderRadius: 20,
    paddingVertical: 12,
    paddingHorizontal: 20,
    width: "100%",
    marginVertical: 8,
    color: "black",
  },
  button: {
    backgroundColor: "#800000",
    padding: 15,
    borderRadius: 20,
    width: "100%",
    alignItems: "center",
    marginBottom: 15,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },
  divider: {
    color: "#555",
    paddingVertical: 10,
    fontSize: 14,
  },
  footer: {
    marginTop: 10,
    paddingVertical: 5,
  },
  footerText: {
    color: "#eee",
    fontSize: 12,
  },

  socials: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 15,
    columnGap: 5,
    marginBottom: 25,
  },

  create: {
    flexDirection: "row",
    columnGap: 5,
  },
});
