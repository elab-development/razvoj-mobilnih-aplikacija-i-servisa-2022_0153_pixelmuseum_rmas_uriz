import {
  FlatList,
  Image,
  Pressable,
  SafeAreaView,
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

const artworks: ArtworkItem[] = [
  {
    id: "painting1",
    title: "Aurora Bloom",
    category: "Painting",
    artist: "Mina Velez",
    image: require("../../assets/images/images/painting1.jpeg"),
  },
  {
    id: "painting2",
    title: "Midnight Echo",
    category: "Painting",
    artist: "Luca Rena",
    image: require("../../assets/images/images/painting2.jpeg"),
  },
  {
    id: "painting3",
    title: "Velvet Horizon",
    category: "Painting",
    artist: "Sara Kline",
    image: require("../../assets/images/images/painting3.jpeg"),
  },
  {
    id: "drawing1",
    title: "Sketched Light",
    category: "Drawing",
    artist: "Noah Vale",
    image: require("../../assets/images/images/drawing1.jpeg"),
  },
  {
    id: "drawing2",
    title: "Threaded Memories",
    category: "Drawing",
    artist: "Ari Sol",
    image: require("../../assets/images/images/drawing2.jpeg"),
  },
  {
    id: "digitalart1",
    title: "Neon Orbit",
    category: "Digital Art",
    artist: "Jules Park",
    image: require("../../assets/images/images/digitalart1.jpeg"),
  },
];

export default function GalleryScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.brand}>Pixel Museum</Text>
        <Text style={styles.title}>Gallery</Text>
      </View>

      <FlatList
        data={artworks}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={styles.columnWrapper}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image
              source={item.image}
              style={styles.image}
              resizeMode="cover"
            />

            <View style={styles.cardBody}>
              <Text style={styles.cardTitle}>{item.title}</Text>
              <Text style={styles.cardCategory}>{item.category}</Text>
              <Text style={styles.cardArtist}>{item.artist}</Text>

              <Pressable style={styles.favoriteButton}>
                <Text style={styles.favoriteIcon}>♡</Text>
                <Text style={styles.favoriteText}>Save</Text>
              </Pressable>
            </View>
          </View>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#C09FDE",
    paddingTop: 12,
  },

  header: {
    alignItems: "center",
    marginBottom: 18,
    paddingHorizontal: 20,
  },

  brand: {
    fontSize: 34,
    fontWeight: "900",
    color: "#FFFFFF",
    textShadowColor: "#4A148C",
    textShadowOffset: { width: 2, height: 3 },
    textShadowRadius: 8,
    marginBottom: 2,
  },

  title: {
    fontSize: 26,
    fontWeight: "800",
    color: "#2E0057",
  },

  listContent: {
    paddingHorizontal: 14,
    paddingBottom: 30,
  },

  columnWrapper: {
    justifyContent: "space-between",
    marginBottom: 16,
  },

  card: {
    width: "47%",
    backgroundColor: "#FFFFFF",
    borderRadius: 18,
    overflow: "hidden",

    shadowColor: "#2E0057",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 4,
  },

  image: {
    width: "100%",
    height: 145,
  },

  cardBody: {
    padding: 12,
  },

  cardTitle: {
    fontSize: 17,
    fontWeight: "800",
    color: "#2E0057",
  },

  cardCategory: {
    marginTop: 3,
    fontSize: 13,
    color: "#7E5FB9",
  },

  cardArtist: {
    marginTop: 2,
    fontSize: 13,
    color: "#5C3D87",
  },

  favoriteButton: {
    marginTop: 12,
    alignSelf: "flex-start",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F1E8FF",
    borderRadius: 30,
    paddingHorizontal: 10,
    paddingVertical: 6,
  },

  favoriteIcon: {
    color: "#5F29CE",
    fontSize: 15,
    marginRight: 5,
  },

  favoriteText: {
    color: "#5F29CE",
    fontWeight: "700",
    fontSize: 12,
  },
});