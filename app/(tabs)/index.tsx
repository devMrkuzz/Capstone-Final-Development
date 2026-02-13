import {
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";

export default function HomeScreen() {
  return (
    <KeyboardAvoidingView
      style={{ flex: 1, backgroundColor: "#800000" }}
      behavior={Platform.OS === "ios" ? "padding" : "padding"}
    >
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: "center",
          alignItems: "center",
          padding: 20,
        }}
        keyboardShouldPersistTaps="handled"
      >
        {/* LOGO */}
        <Image
          source={require("../../assets/images/sorsu.png")}
          style={{
            width: 100,
            height: 100,
            marginBottom: 20,
            resizeMode: "contain",
          }}
        />
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
