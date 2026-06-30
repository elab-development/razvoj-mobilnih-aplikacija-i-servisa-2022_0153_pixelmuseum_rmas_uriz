import {
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";

type WelcomeScreenProps = {
  navigation: {
    navigate: (screen: string) => void;
  };
};

export default function WelcomeScreen({ navigation }: WelcomeScreenProps) {
  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={require("../../assets/images/gallery_bottom.png")}
        style={styles.galleryBottom}
      />

      <View style={styles.content}>
        <Image
          source={require("../../assets/images/images/home_transparent_strict.png")}
          style={styles.heroImage}
        />

        <Text style={styles.title}>Pixel Museum</Text>

        <Pressable
          style={styles.primaryButton}
          onPress={() => navigation.navigate("Login")}
        >
          <Text style={styles.primaryButtonText}>Log In</Text>
          <Text style={styles.arrow}>→</Text>
        </Pressable>

        <Pressable
          style={styles.secondaryButton}
          onPress={() => navigation.navigate("Register")}
        >
          <Text style={styles.secondaryButtonText}>Create Account</Text>
          <Text style={styles.secondaryArrow}>→</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#C09FDE",
    justifyContent: "center",
    paddingHorizontal: 24,
  },
  content: {
    alignItems: "center",
    zIndex: 2,
    marginBottom: 80,
  },
  heroImage: {
    width: 285,
    height: 285,
    resizeMode: "contain",
    marginBottom: 10,
  },
  title: {
    fontSize: 48,
    fontWeight: "900",
    color: "#FFFFFF",
    textAlign: "center",
    textShadowColor: "#4A148C",
    textShadowOffset: { width: 2, height: 4 },
    textShadowRadius: 8,
    marginBottom: 42,
    letterSpacing: 0.5,
  },
  primaryButton: {
    width: "82%",
    height: 54,
    borderRadius: 18,
    backgroundColor: "#5F29CE",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 16,
    flexDirection: "row",
    position: "relative",
  },
  primaryButtonText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "800",
  },
  arrow: {
    position: "absolute",
    right: 24,
    color: "#FFFFFF",
    fontSize: 30,
    fontWeight: "700",
  },
  secondaryButton: {
    width: "82%",
    height: 54,
    borderRadius: 18,
    borderWidth: 2,
    borderColor: "#5F29CE",
    backgroundColor: "rgba(255,255,255,0.25)",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    position: "relative",
  },
  secondaryButtonText: {
    color: "#4A148C",
    fontSize: 18,
    fontWeight: "800",
  },
  secondaryArrow: {
    position: "absolute",
    right: 24,
    color: "#4A148C",
    fontSize: 30,
    fontWeight: "700",
  },
  galleryBottom: {
    position: "absolute",
    bottom: -10,
    left: -20,
    width: "112%",
    height: 260,
    resizeMode: "cover",
    opacity: 0.42,
  },
});