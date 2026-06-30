import {
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

type HomeScreenProps = {
  navigation: {
    navigate: (screen: string) => void;
  };
};

const featuredArtworks = [
  { id: 1, title: "Neon Bloom", image: require("../../assets/images/images/slika1.png") },
  { id: 2, title: "Digital Harbor", image: require("../../assets/images/images/slika2.png") },
  { id: 3, title: "Skyline Pulse", image: require("../../assets/images/images/slika3.png") },
];

export default function HomeScreen({ navigation }: HomeScreenProps) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.headerCard}>
          <Image
            source={require("../../assets/images/images/graphics.png")}
            style={styles.logo}
          />

          <View style={styles.headerText}>
            <Text style={styles.title}>Welcome to PixelMuseum</Text>
            <Text style={styles.subtitle}>
              Explore digital artworks and exhibitions from your phone.
            </Text>
          </View>
        </View>

        <View style={styles.actionsRow}>
          <Pressable style={styles.actionCard} onPress={() => navigation.navigate("Gallery")}> 
            <Text style={styles.actionTitle}>Open Gallery</Text>
          </Pressable>

          <Pressable style={styles.actionCard} onPress={() => navigation.navigate("Profile")}>
            <Text style={styles.actionTitle}>My Profile</Text>
          </Pressable>

          <Pressable style={styles.actionCard} onPress={() => navigation.navigate("Favorites")}>
            <Text style={styles.actionTitle}>Favorites</Text>
          </Pressable>
        </View>

        <View style={styles.featuredSection}>
          <Text style={styles.sectionTitle}>Featured Artworks</Text>

          <View style={styles.artworkList}>
            {featuredArtworks.map((artwork) => (
              <View key={artwork.id} style={styles.artworkCard}>
                <Image source={artwork.image} style={styles.artworkImage} />
                <Text style={styles.artworkTitle}>{artwork.title}</Text>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#C09FDE",
  },
  content: {
    padding: 20,
    paddingBottom: 30,
  },
  headerCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 22,
    padding: 20,
    marginBottom: 16,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.12,
    shadowRadius: 12,
    elevation: 4,
  },
  logo: {
    width: 90,
    height: 90,
    resizeMode: "contain",
    marginBottom: 12,
  },
  headerText: {
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "800",
    color: "#2E0057",
    textAlign: "center",
    marginBottom: 6,
  },
  subtitle: {
    fontSize: 14,
    color: "#5D4A7A",
    textAlign: "center",
    lineHeight: 20,
  },
  actionsRow: {
    gap: 10,
    marginBottom: 16,
  },
  actionCard: {
    backgroundColor: "#5F29CE",
    borderRadius: 16,
    paddingVertical: 14,
    paddingHorizontal: 16,
    marginBottom: 10,
  },
  actionTitle: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "center",
  },
  featuredSection: {
    backgroundColor: "#FFFFFF",
    borderRadius: 22,
    padding: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 3,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "800",
    color: "#2E0057",
    marginBottom: 12,
  },
  artworkList: {
    gap: 12,
  },
  artworkCard: {
    backgroundColor: "#F6EEFF",
    borderRadius: 16,
    padding: 10,
  },
  artworkImage: {
    width: "100%",
    height: 120,
    borderRadius: 12,
    marginBottom: 8,
    resizeMode: "cover",
  },
  artworkTitle: {
    color: "#2E0057",
    fontSize: 14,
    fontWeight: "700",
  },
});
