import { useState } from "react";
import {
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

type ArtworkItem = {
  id: string;
  title: string;
  category: string;
  artist: string;
  image: number;
};

type ArtworkDetailsScreenProps = {
  navigation: {
    goBack: () => void;
  };
  route: {
    params?: {
      artwork?: ArtworkItem;
    };
  };
};

export default function ArtworkDetailsScreen({
  navigation,
  route,
}: ArtworkDetailsScreenProps) {
  const artwork = route.params?.artwork;
  const [saved, setSaved] = useState(false);

  if (!artwork) {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>No artwork selected.</Text>
      </SafeAreaView>
    );
  }

  const descriptionMap: Record<string, string> = {
    "Aurora Bloom":
      "A luminous composition that blends soft color transitions with a dreamlike atmosphere.",
    "Midnight Echo":
      "This piece captures a quiet tension between shadow and light, inviting a reflective pause.",
    "Velvet Horizon":
      "An expressive landscape shaped by warm tones and graceful movement across the frame.",
    "Sketched Light":
      "A delicate study of gesture and balance, rooted in intimate observation and calm rhythm.",
    "Threaded Memories":
      "Layered marks and flowing forms give this drawing a nostalgic and personal energy.",
    "Neon Orbit":
      "A vibrant digital creation that explores motion, energy, and futuristic contrast.",
  };

  const description =
    descriptionMap[artwork.title] ??
    "This artwork invites viewers to explore mood, texture, and imagination in a modern visual language.";

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.card}>
          <View style={styles.imageFrame}>
            <Image
              source={artwork.image}
              style={styles.image}
              resizeMode="cover"
            />
          </View>

          <View style={styles.body}>
            <Text style={styles.title}>{artwork.title}</Text>
            <Text style={styles.category}>{artwork.category}</Text>
            <Text style={styles.artist}>by {artwork.artist}</Text>
            <Text style={styles.description}>{description}</Text>
          </View>

          <View style={styles.actions}>
            <Pressable
              style={styles.primaryButton}
              onPress={() => setSaved(true)}
            >
              <Text style={styles.primaryButtonText}>
                {saved ? "Saved ✓" : "Save to Favorites"}
              </Text>
            </Pressable>

            <Pressable
              style={styles.secondaryButton}
              onPress={() => navigation.goBack()}
            >
              <Text style={styles.secondaryButtonText}>
                Back to Gallery
              </Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },

  content: {
    flexGrow: 1,
    justifyContent: "center",
    paddingHorizontal: 20,
    paddingVertical: 24,
  },

  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 24,
    padding: 16,
    alignItems: "center",
    shadowColor: "#2E0057",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.16,
    shadowRadius: 10,
    elevation: 5,
  },

  imageFrame: {
    borderWidth: 2,
    borderColor: "#5F29CE",
    borderRadius: 22,
    padding: 4,
    marginBottom: 18,
  },

  image: {
    width: 260,
    height: 260,
    borderRadius: 18,
    backgroundColor: "#EFE4FA",
  },

  body: {
    width: "100%",
    alignItems: "center",
    marginBottom: 20,
  },

  title: {
    fontSize: 24,
    fontWeight: "800",
    color: "#2E0057",
    textAlign: "center",
    marginBottom: 6,
  },

  category: {
    fontSize: 14,
    color: "#7E5FB9",
    marginBottom: 4,
  },

  artist: {
    fontSize: 15,
    color: "#5C3D87",
    marginBottom: 10,
  },

  description: {
    fontSize: 14,
    lineHeight: 20,
    color: "#4F2E75",
    textAlign: "center",
    paddingHorizontal: 4,
  },

  actions: {
    width: "100%",
    gap: 10,
  },

  primaryButton: {
    width: "100%",
    backgroundColor: "#5F29CE",
    borderRadius: 14,
    paddingVertical: 13,
    alignItems: "center",
  },

  primaryButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "700",
  },

  secondaryButton: {
    width: "100%",
    borderWidth: 1.5,
    borderColor: "#5F29CE",
    borderRadius: 14,
    paddingVertical: 13,
    alignItems: "center",
  },

  secondaryButtonText: {
    color: "#5F29CE",
    fontSize: 16,
    fontWeight: "700",
  },
});