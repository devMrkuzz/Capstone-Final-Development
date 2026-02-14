import { useRouter } from "expo-router";
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
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
        <Text style={styles.title}>
          Sign In to{" "}
          <Text style={{ fontWeight: "bold", color: "white" }}>AskSorSU</Text>
        </Text>
      </View>
      <View style={styles.field}>
        <TextInput
          style={styles.userInputs}
          placeholder="Enter user ID"
          placeholderTextColor="#999"
        />
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

  logo: {
    height: 150,
    width: 150,
    resizeMode: "contain",
    marginBottom: 20,
  },

  title: {
    fontSize: 30,
    fontWeight: 200,
    color: "white",
  },

  field: {
    borderWidth: 1,
    borderColor: "white",
    width: "100%",
    borderRadius: 10,
  },
});
