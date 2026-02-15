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

// Reusable SocialButton Component
function SocialButton({
  icon,
  text,
  style,
  iconSize = 22,
  onPress,
}: {
  icon: any;
  text: string;
  style?: any;
  iconSize?: number;
  onPress: () => void;
}) {
  return (
    <Pressable style={[styles.socialBtn, style]} onPress={onPress}>
      <View style={styles.iconWrapper}>
        <Image
          source={icon}
          style={{ width: iconSize, height: iconSize, resizeMode: "contain" }}
        />
      </View>
      <Text style={styles.socialText}>{text}</Text>
    </Pressable>
  );
}

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

        {/* Input Fields */}
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

        {/* Buttons */}
        <View style={styles.buttons}>
          <Pressable onPress={() => console.log("Forgot Password Clicked")}>
            <Text style={styles.forgot}>Forgot Password</Text>
          </Pressable>

          <Pressable
            style={styles.signinBtn}
            onPress={() => console.log("Sign In Clicked")}
          >
            <Text style={styles.signinText}>Continue</Text>
          </Pressable>
        </View>

        {/* Divider */}
        <View style={styles.divider}>
          <View style={styles.line}></View>
          <Text style={styles.or}>or</Text>
          <View style={styles.line}></View>
        </View>

        {/* Social Auth Buttons */}
        <View style={styles.auth}>
          <SocialButton
            icon={require("../../assets/images/google.png")}
            text="Continue with Google"
            style={{ backgroundColor: "white" }}
            onPress={() => console.log("Google Sign In")}
          />

          <SocialButton
            icon={require("../../assets/images/facebook.png")}
            text="Continue with Facebook"
            style={{ backgroundColor: "white" }}
            iconSize={24}
            onPress={() => console.log("Facebook Sign In")}
          />
        </View>

        <View style={styles.signup}>
          <Text style={styles.signuptxt}>First time here? </Text>
          <Pressable onPress={() => console.log("signUp clicked")}>
            <Text style={styles.upbtn}>Create New</Text>
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
    fontWeight: "300",
    width: "100%",
    textAlignVertical: "center",
  },

  buttons: {
    marginTop: 20,
    gap: 10,
  },

  forgot: {
    color: "white",
    fontWeight: "bold",
    textAlign: "right",
  },

  signinBtn: {
    backgroundColor: "white",
    padding: 14,
    borderRadius: 10,
    alignItems: "center",
  },

  signinText: {
    fontSize: 14,
    fontWeight: "600",
    color: "#000",
  },

  divider: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 15,
  },

  line: {
    flex: 1,
    height: 1,
    backgroundColor: "#acacac",
    marginHorizontal: 15,
  },

  or: {
    color: "#acacac",
    fontSize: 14,
    fontWeight: "bold",
  },

  auth: {
    marginVertical: 10,
    gap: 15,
  },

  socialBtn: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 15,
  },

  iconWrapper: {
    width: 40, // fixed width for perfect alignment
    alignItems: "flex-start",
    justifyContent: "center",
  },

  socialText: {
    flex: 1,
    textAlign: "center",
    fontWeight: "600",
    color: "#000",
  },

  signup: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
  },

  signuptxt: {
    color: "#acacac",
    fontSize: 14,
  },

  upbtn: {
    color: "white",
    fontSize: 14,
    fontWeight: "bold",
  },
});
