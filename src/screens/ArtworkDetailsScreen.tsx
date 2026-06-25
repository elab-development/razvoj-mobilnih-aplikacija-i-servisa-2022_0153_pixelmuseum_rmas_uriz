import { SafeAreaView, StyleSheet, Text } from "react-native";

export default function ArtworkDetailsScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Artwork Details Screen</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "600",
  },
});
