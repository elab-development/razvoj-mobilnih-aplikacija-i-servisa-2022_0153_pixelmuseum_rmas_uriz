import {
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";

const COLORS = {
  background: "#FFFFFF",
  header: "#5F29CE",
  surface: "#F7F1FF",
  card: "#FFFFFF",
  primary: "#5F29CE",
  primarySoft: "#8C72FF",
  textTitle: "#23004F",
  textBody: "#5B4A72",
  border: "#D8C8FF",
};

const SPACING = {
  small: 12,
  medium: 20,
  large: 24,
  xlarge: 32,
};

const heroImage = require("../../assets/images/images/home_transparent_strict.png");

function WelcomeButton({
  label,
  variant,
  onPress,
}: {
  label: string;
  variant: "primary" | "secondary";
  onPress: () => void;
}) {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.button,
        variant === "primary" ? styles.primaryButton : styles.secondaryButton,
        pressed && styles.buttonPressed,
      ]}
      onPress={onPress}
    >
      <Text
        style={[
          styles.buttonLabel,
          variant === "secondary" && styles.secondaryButtonLabel,
        ]}
      >
        {label}
      </Text>
    </Pressable>
  );
}

export default function WelcomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>PixelMuseum</Text>
      </View>
      <View style={styles.content}>
        <View style={styles.heroText}>
          <Text style={styles.title}>Pixel Museum</Text>
          <Text style={styles.subtitle}>
            Experience gallery sighting from the comfort of your home!
          </Text>
        </View>
        <View style={styles.imageCard}>
          <Image
            source={heroImage}
            style={styles.heroImage}
            resizeMode="contain"
          />
        </View>
        <View style={styles.actions}>
          <WelcomeButton
            label="View Gallery"
            variant="primary"
            onPress={() => {}}
          />
          <View style={styles.secondaryActions}>
            <WelcomeButton
              label="Login"
              variant="secondary"
              onPress={() => {}}
            />
            <WelcomeButton
              label="Register"
              variant="secondary"
              onPress={() => {}}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  header: {
    backgroundColor: COLORS.header,
    paddingHorizontal: SPACING.large,
    paddingVertical: SPACING.medium,
    justifyContent: "center",
  },
  headerTitle: {
    color: COLORS.background,
    fontSize: 18,
    fontWeight: "700",
  },
  content: {
    flex: 1,
    paddingHorizontal: SPACING.large,
    paddingTop: SPACING.large,
    justifyContent: "space-between",
  },
  heroText: {
    alignItems: "center",
    gap: SPACING.small,
  },
  title: {
    fontSize: 34,
    fontWeight: "800",
    color: COLORS.textTitle,
    textAlign: "center",
    marginBottom: SPACING.small,
  },
  subtitle: {
    fontSize: 16,
    color: COLORS.textBody,
    textAlign: "center",
    lineHeight: 24,
    marginHorizontal: SPACING.small,
  },
  imageCard: {
    width: "100%",
    borderRadius: 32,
    backgroundColor: COLORS.surface,
    padding: SPACING.medium,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 16 },
    shadowOpacity: 0.08,
    shadowRadius: 24,
    elevation: 6,
    marginBottom: SPACING.large,
    alignItems: "center",
  },
  heroImage: {
    width: "100%",
    height: 340,
  },
  actions: {
    width: "100%",
    marginBottom: SPACING.large,
  },
  secondaryActions: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: SPACING.small,
  },
  button: {
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
    minHeight: 52,
    paddingHorizontal: SPACING.large,
  },
  primaryButton: {
    backgroundColor: COLORS.primary,
    marginBottom: SPACING.medium,
  },
  secondaryButton: {
    backgroundColor: COLORS.background,
    borderWidth: 1,
    borderColor: COLORS.border,
    flex: 1,
  },
  buttonPressed: {
    opacity: 0.9,
  },
  buttonLabel: {
    color: COLORS.background,
    fontSize: 16,
    fontWeight: "700",
  },
  secondaryButtonLabel: {
    color: COLORS.primary,
  },
});
