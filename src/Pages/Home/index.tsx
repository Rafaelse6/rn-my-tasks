import {Text, View, StyleSheet} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";

export const Home = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.title}>Welcome,Dev!</Text>
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
});
