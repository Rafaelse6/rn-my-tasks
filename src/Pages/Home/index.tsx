import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Platform,
  TouchableOpacity,
} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";

export const Home = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.title}>Welcome,Dev!</Text>
        <TextInput style={styles.input} />
        <TouchableOpacity activeOpacity={0.7} style={styles.button}>
          <Text style={styles.buttonText}>Adicionar</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#121214",
  },
  container: {
    flex: 1,
    backgroundColor: "#121214",
    paddingHorizontal: 30,
    paddingVertical: 50,
  },
  title: {
    color: "#f1f1f1",
    fontSize: 24,
    fontWeight: "bold",
  },
  input: {
    backgroundColor: "#29292e",
    color: "#f1f1f1",
    fontSize: 18,
    padding: Platform.OS === "ios" ? 15 : 12,
    marginTop: 30,
    borderRadius: 7,
  },
  button: {
    backgroundColor: "#eba417",
    padding: 15,
    borderRadius: 7,
    alignItems: "center",
    marginTop: 20,
  },
  buttonText: {
    color: "#121214",
    fontSize: 18,
    fontWeight: "bold",
  },
});