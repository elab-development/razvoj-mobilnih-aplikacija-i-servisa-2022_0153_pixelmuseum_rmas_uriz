import {
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";

export default function WelcomeScreen({ navigation }: any) {
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

        <Text style={styles.title}>
          Pixel{"\n"}Museum
        </Text>

        <Pressable
          style={styles.primaryButton}
          onPress={() => navigation.navigate("Login")}
        >
          <Text style={styles.primaryButtonText}>Log In</Text>
        </Pressable>

        <Pressable
          style={styles.secondaryButton}
          onPress={() => navigation.navigate("Register")}
        >
          <Text style={styles.secondaryButtonText}>Create Account</Text>
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
    marginBottom: 105,
  },
  heroImage: {
    width: 270,
    height: 270,
    resizeMode: "contain",
    marginBottom: 6,
  },
  title: {
    fontSize: 62,
    lineHeight: 64,
    fontWeight: "900",
    color: "#FFFFFF",
    textAlign: "center",
    textShadowColor: "#4A148C",
    textShadowOffset: { width: 2, height: 4 },
    textShadowRadius: 8,
    marginBottom: 30,
    letterSpacing: 0.3,
  },
  primaryButton: {
    width: "72%",
    height: 48,
    borderRadius: 16,
    backgroundColor: "#5F29CE",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 12,
  },
  primaryButtonText: {
    color: "#FFFFFF",
    fontSize: 17,
    fontWeight: "800",
  },
  secondaryButton: {
    width: "72%",
    height: 48,
    borderRadius: 16,
    borderWidth: 2,
    borderColor: "#5F29CE",
    backgroundColor: "rgba(255,255,255,0.25)",
    justifyContent: "center",
    alignItems: "center",
  },
  secondaryButtonText: {
    color: "#4A148C",
    fontSize: 16,
    fontWeight: "800",
  },
  galleryBottom: {
    position: "absolute",
    bottom: -18,
    left: -70,
    width: "145%",
    height: 360,
    resizeMode: "cover",
    opacity: 0.5,
  },
});