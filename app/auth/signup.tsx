import { useRouter } from "expo-router";
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

export default function SignInScreen() {
  const router = useRouter();

  return (
    <KeyboardAvoidingView
      style={styles.keyboardContainer}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === "ios" ? 60 : 0}
    >
      <ScrollView
        contentContainerStyle={styles.scroll}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        {/* Logo + Title */}
        <View style={styles.centerContent}>
          <Image
            source={require("../../assets/images/sorsu.png")}
            style={styles.logo}
          />

          <Text style={styles.title}>
            Sign In to <Text style={styles.bold}>AskSorSU</Text>
          </Text>
        </View>

        {/* INPUT FIELDS */}
        <View style={styles.fieldsContainer}>
          <TextInput
            style={styles.userInputs}
            placeholder="Enter user ID"
            placeholderTextColor="#999"
          />

          <TextInput
            style={styles.userInputs}
            placeholder="Enter password"
            placeholderTextColor="#999"
            secureTextEntry
          />
        </View>

        {/* BUTTONS */}
        <View style={styles.buttons}>
          <Pressable onPress={() => console.log("Forgot Password Clicked")}>
            <Text style={styles.forgot}>Forgot Password</Text>
          </Pressable>

          <Pressable
            style={styles.signinBtn}
            onPress={() => console.log("Sign In Clicked")}
          >
            <Text style={styles.signinText}>Sign In</Text>
          </Pressable>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  keyboardContainer: {
    flex: 1,
    backgroundColor: "#800000",
  },

  scroll: {
    flexGrow: 1,
    justifyContent: "center",
    padding: 20,
  },

  centerContent: {
    alignItems: "center",
    marginBottom: 40,
  },

  logo: {
    height: 150,
    width: 150,
    resizeMode: "contain",
    marginBottom: 20,
  },

  title: {
    fontSize: 30,
    color: "white",
    fontWeight: "300",
    textAlign: "center",
  },

  bold: {
    fontWeight: "bold",
  },

  fieldsContainer: {
    width: "100%",
    gap: 20,
  },

  userInputs: {
    borderColor: "#bdb7b7ff",
    borderRadius: 10,
    borderWidth: 1,
    color: "white",
    padding: 12,
    fontWeight: "bold",
    width: "100%",
    textAlignVertical: "center", // good for Android
  },

  buttons: {
    marginTop: 20,
    gap: 10,
  },

  forgot: {
    color: "white",
    textDecorationLine: "underline",
    textAlign: "right",
  },

  signinBtn: {
    backgroundColor: "white",
    padding: 14,
    borderRadius: 10,
    alignItems: "center",
  },

  signinText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#800000",
  },
});
