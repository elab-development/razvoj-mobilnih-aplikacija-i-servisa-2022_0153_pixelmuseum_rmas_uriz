import { useState } from "react";
import {
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

type LoginScreenProps = {
  navigation: {
    navigate: (screen: string, params?: { username?: string }) => void;
  };
};

export default function LoginScreen({ navigation }: LoginScreenProps) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = () => {
    if (!username.trim() || !password.trim()) {
      setError("Please enter username and password.");
      return;
    }

    setError("");
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      navigation.navigate("Profile", { username: username.trim() });
    }, 1000);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.card}>
        <Image source={require("../../assets/images/images/graphics.png")} style={styles.logo} />

        <Text style={styles.title}>Login</Text>

        <Text style={styles.label}>Username</Text>
        <TextInput style={styles.input} placeholder="Enter username" placeholderTextColor="#8D8D8D" value={username} onChangeText={setUsername} selectionColor="#5F29CE" />

        <Text style={styles.label}>Password</Text>
        <TextInput style={styles.input} placeholder="Enter password" placeholderTextColor="#8D8D8D" value={password} onChangeText={setPassword} secureTextEntry={!showPassword} selectionColor="#5F29CE" />

        <Pressable onPress={() => setShowPassword(!showPassword)}>
          <Text style={styles.showPasswordText}>{showPassword ? "Hide password" : "Show password"}</Text>
        </Pressable>

        {error ? <Text style={styles.error}>{error}</Text> : null}

        <Pressable style={[styles.button, isLoading && styles.buttonDisabled]} onPress={handleLogin} disabled={isLoading}>
          <Text style={styles.buttonText}>{isLoading ? "Logging in..." : "Login"}</Text>
        </Pressable>

        <Pressable onPress={() => navigation.navigate("Register")}>
          <Text style={styles.registerText}>Don't have an account? Register</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#C09FDE", justifyContent: "center", padding: 24 },
  card: { backgroundColor: "#C09FDE", borderRadius: 20, padding: 24 },
  logo: { width: 110, height: 110, alignSelf: "center", resizeMode: "contain", marginBottom: 14 },
  title: { fontSize: 32, fontWeight: "800", color: "#2E0057", textAlign: "center", marginBottom: 24 },
  label: { fontSize: 15, fontWeight: "700", color: "#2E0057", marginBottom: 8 },
  input: { height: 50, backgroundColor: "#FFFFFF", borderRadius: 12, borderWidth: 1, borderColor: "#D8C7F5", paddingHorizontal: 15, marginBottom: 14 },
  showPasswordText: { alignSelf: "flex-end", color: "#35206B", fontWeight: "700", marginTop: -4, marginBottom: 18 },
  error: { color: "#B00020", fontWeight: "600", marginBottom: 12 },
  button: { height: 52, borderRadius: 12, backgroundColor: "#5F29CE", justifyContent: "center", alignItems: "center" },
  buttonDisabled: { opacity: 0.7 },
  buttonText: { color: "#FFFFFF", fontSize: 16, fontWeight: "700" },
  registerText: { textAlign: "center", marginTop: 20, color: "#35206B", fontWeight: "700" },
});