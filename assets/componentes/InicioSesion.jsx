import { Image, StyleSheet, TextInput, View } from "react-native";

export default function InicioSesion() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image
          source={require("../imagen/icono.png")} 
          style={styles.icon}
        />
        <TextInput
          style={styles.input}
          placeholder="Pepito123@gmail.com"
          placeholderTextColor="#000"
        />
        <TextInput
          style={styles.input}
          placeholder="•••••••••"
          placeholderTextColor="#000"
          secureTextEntry
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#8CB3DB", // fondo azul claro
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 40,
  },
  card: {
    backgroundColor: "#4B78A7", // azul más oscuro
    borderRadius: 15,
    alignItems: "center",
    paddingTop: 60, // más espacio para el icono
    paddingBottom: 30,
    paddingHorizontal: 20,
    width: 270, // 🔹 más pequeño que antes
    position: "relative",
  },
  icon: {
    width: 90,
    height: 90,
    borderRadius: 45,
    position: "absolute",
    top: -45, // 🔹 hace que el icono sobresalga hacia arriba
  },
  input: {
    backgroundColor: "#fff",
    borderRadius: 10,
    width: "85%",
    height: 45,
    paddingHorizontal: 15,
    marginVertical: 8,
    fontSize: 16,
  },
});