import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AddArtworkScreen from "../screens/AddArtworkScreen";
import ArtworkDetailsScreen from "../screens/ArtworkDetailsScreen";
import EditArtworkScreen from "../screens/EditArtworkScreen";
import FavoritesScreen from "../screens/FavoritesScreen";
import GalleryScreen from "../screens/GalleryScreen";
import HomeScreen from "../screens/HomeScreen";
import LoginScreen from "../screens/LoginScreen";
import MapScreen from "../screens/MapScreen";
import ProfileScreen from "../screens/ProfileScreen";
import RegisterScreen from "../screens/RegisterScreen";
import SettingsScreen from "../screens/SettingsScreen";
import WelcomeScreen from "../screens/WelcomeScreen";

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator initialRouteName="Welcome">
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Gallery" component={GalleryScreen} />
      <Stack.Screen name="ArtworkDetails" component={ArtworkDetailsScreen} />
      <Stack.Screen name="AddArtwork" component={AddArtworkScreen} />
      <Stack.Screen name="EditArtwork" component={EditArtworkScreen} />
      <Stack.Screen name="Favorites" component={FavoritesScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="Map" component={MapScreen} />
      <Stack.Screen name="Settings" component={SettingsScreen} />
    </Stack.Navigator>
  );
}
