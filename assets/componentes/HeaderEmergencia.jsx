import { Image, StyleSheet, Text, View } from "react-native";

export default function HeaderEmergencia() {
  return (
    <View style={styles.container}>
      <Image
        source={require("../imagen/alarma.png")}
        style={styles.icono}
        resizeMode="contain"
      />
      <Text style={styles.texto}>SECCIÓN DE EMERGENCIA</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#D32F2F", // Rojo de alerta
    paddingVertical: 25,
    paddingHorizontal: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    zIndex: 10,
    elevation: 10,
    // Quitamos position: absolute para que no se superponga
    // y se comporte como un elemento normal del flujo
  },
  icono: {
    width: 180,
    height: 120,
    marginRight: 0,
    // Quitamos position: relative y top para que esté centrado
  },
  texto: {
    color: "#FFFFFF",
    fontSize: 30,
    fontWeight: "bold",
    flex: 1, // Para que ocupe el espacio disponible
    textAlign: "center", // Para centrar el texto
  },
});