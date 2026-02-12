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
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 20} // adjust for header if any
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

          <TextInput
            style={styles.input}
            placeholder="User ID"
            keyboardType="numeric"
            placeholderTextColor="#555"
          />

          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry={true}
            placeholderTextColor="#555"
          />

          <Pressable
            onPress={() => console.log("Forgot Password pressed")}
            style={{ alignSelf: "flex-end", marginBottom: 20 }}
          >
            <Text style={{ color: "#800000", textDecorationLine: "underline" }}>
              Forgot Password?
            </Text>
          </Pressable>

          <Pressable
            style={styles.button}
            onPress={() => console.log("Sign Up pressed")}
          >
            <Text style={styles.buttonText}>Sign Up</Text>
          </Pressable>
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
    width: 150,
    height: 150,
    marginBottom: 20,
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
  },
  header: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#800000",
  },
  input: {
    borderWidth: 1,
    borderColor: "#800000",
    borderRadius: 10,
    padding: 12,
    width: "100%",
    marginTop: 20,
    marginBottom: 15,
    color: "black",
  },
  button: {
    backgroundColor: "#800000",
    padding: 15,
    borderRadius: 10,
    width: "100%",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
});
