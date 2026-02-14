import { useRouter } from "expo-router";
import {
  Image,
  KeyboardAvoidingView,
  Linking,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";

export default function HomeScreen() {
  const router = useRouter();

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      {/* Centered logo and title */}
      <View style={styles.centerContent}>
        <Image
          source={require("../../assets/images/sorsu.png")}
          style={styles.logo}
        />
        <Text style={styles.title}>Welcome Back!</Text>
      </View>

      {/* Buttons at bottom */}
      <View style={styles.bottomContent}>
        <Pressable
          onPress={() => router.push("/auth/SignIn")}
          style={styles.primaryButton}
        >
          <Text style={styles.buttonText}>Sign In to AskSorSU</Text>
        </Pressable>

        <Text style={styles.dividerText}>Don't have an account?</Text>

        <Pressable
          onPress={() => router.push("../auth/SignUp")}
          style={styles.primaryButton}
        >
          <Text style={styles.buttonText}>Sign Up to AskSorSU</Text>
        </Pressable>

        {/* Terms & Privacy */}
        <View style={styles.termsContainer}>
          <Text style={styles.termsText}>By signing in you accept our </Text>
          <Pressable onPress={() => console.log("Terms Clicked")}>
            <Text style={styles.termLink}>Terms of use</Text>
          </Pressable>
          <Text style={styles.termsText}> and </Text>
          <Pressable
            onPress={() =>
              Linking.openURL("https://sorsu.edu.ph/data-privacy-policy/")
            }
          >
            <Text style={styles.termLink}>Campus Privacy Policy</Text>
          </Pressable>
        </View>

        {/* Trouble signing in */}
        <Pressable onPress={() => console.log("Trouble signing in Clicked")}>
          <Text
            style={[styles.termLink, { marginTop: 15, textAlign: "center" }]}
          >
            Trouble signing in?
          </Text>
        </Pressable>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#800000",
    justifyContent: "space-between",
    padding: 20,
  },
  centerContent: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  bottomContent: {
    width: "100%",
    marginBottom: 40,
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
    resizeMode: "contain",
  },
  title: {
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
    color: "white",
  },
  primaryButton: {
    width: "100%",
    backgroundColor: "white",
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 10,
  },
  buttonText: {
    color: "black",
    fontWeight: "bold",
    fontSize: 16,
  },
  dividerText: {
    color: "#acacac",
    fontSize: 14,
    textAlign: "center",
    paddingVertical: 10,
  },
  termsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    marginTop: 15,
  },
  termsText: {
    color: "#acacac",
    fontSize: 12,
  },
  termLink: {
    color: "white",
    fontSize: 12,
    fontWeight: "bold",
    textDecorationLine: "underline",
    marginHorizontal: 2,
  },
});
