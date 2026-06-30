import { useEffect, useRef } from "react";
import { Animated, Image, SafeAreaView, StyleSheet, View } from "react-native";

type SplashScreenProps = {
  navigation: {
    replace: (screen: string) => void;
  };
};

export default function SplashScreen({ navigation }: SplashScreenProps) {
  const opacity = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    const timer = setTimeout(() => {
      Animated.timing(opacity, {
        toValue: 0,
        duration: 700,
        useNativeDriver: true,
      }).start(() => {
        navigation.replace("Welcome");
      });
    }, 1800);

    return () => clearTimeout(timer);
  }, [navigation, opacity]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Animated.Image
          source={require("../../assets/images/images/home_transparent_strict.png")}
          style={[styles.heroImage, { opacity }]}
        />
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
    marginBottom: 105,
  },
  heroImage: {
    width: 270,
    height: 270,
    resizeMode: "contain",
    marginBottom: 6,
  },
});