import {
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";

type ProfileScreenProps = {
  navigation: {
    navigate: (screen: string) => void;
  };
  route: {
    params?: {
      username?: string;
    };
  };
};

export default function ProfileScreen({ navigation, route }: ProfileScreenProps) {
  const username = route.params?.username || "PixelMuseum user";

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.card}>
        <Image source={require("../../assets/images/images/graphics.png")} style={styles.logo} />

        <Text style={styles.title}>{username}</Text>
        <Text style={styles.subtitle}>Welcome to your PixelMuseum space</Text>

        <Pressable style={styles.button} onPress={() => navigation.navigate("Gallery")}>
          <Text style={styles.buttonText}>View Gallery</Text>
        </Pressable>

        <Pressable style={styles.button} onPress={() => navigation.navigate("Favorites")}>
          <Text style={styles.buttonText}>Favorites</Text>
        </Pressable>

        <Pressable style={styles.button} onPress={() => navigation.navigate("Gallery")}>
          <Text style={styles.buttonText}>Add Artwork</Text>
        </Pressable>

        <Pressable style={[styles.button, styles.logoutButton]} onPress={() => navigation.navigate("Welcome")}>
          <Text style={styles.buttonText}>Logout</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#C09FDE", justifyContent: "center", padding: 24 },
  card: { backgroundColor: "#FFFFFF", borderRadius: 22, padding: 24, alignItems: "center" },
  logo: { width: 92, height: 92, resizeMode: "contain", marginBottom: 12 },
  title: { fontSize: 26, fontWeight: "800", color: "#2E0057", marginBottom: 6, textAlign: "center" },
  subtitle: { fontSize: 14, color: "#5D4A7A", textAlign: "center", marginBottom: 20 },
  button: { width: "100%", backgroundColor: "#5F29CE", borderRadius: 14, paddingVertical: 13, alignItems: "center", marginBottom: 10 },
  logoutButton: { backgroundColor: "#35206B" },
  buttonText: { color: "#FFFFFF", fontSize: 16, fontWeight: "700" },
});