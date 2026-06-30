import { StatusBar } from "expo-status-bar";
import RegisterScreen from "./src/screens/RegisterScreen";

export default function App() {
  return (
    <>
      <RegisterScreen />
      <StatusBar style="auto" />
    </>
  );
}
