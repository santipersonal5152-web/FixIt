import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function ChatVoz() {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Escuchando...</Text>

      {/* Imagen de las ondas */}
      <Image
        source={require("../imagen/ondas.png")}
        style={styles.ondas}
        resizeMode="contain"
      />

      {/* Contenedor de botones */}
      <View style={styles.botonesContainer}>
        {/* Botón volumen */}
        <TouchableOpacity style={styles.boton}>
          <Image
            source={require("../imagen/volumen.png")}
            style={styles.icono}
            resizeMode="contain"
          />
        </TouchableOpacity>

        {/* Botón micrófono */}
        <TouchableOpacity style={[styles.boton, styles.botonCentral]}>
          <Image
            source={require("../imagen/microfono.png")}
            style={styles.iconoGrande}
            resizeMode="contain"
          />
        </TouchableOpacity>

        {/* Botón silencio */}
        <TouchableOpacity style={styles.boton}>
          <Image
            source={require("../imagen/silencio.png")}
            style={styles.icono}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#5C89C7",
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 40,
    paddingHorizontal: 20,
    width: 340,
  },
  texto: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 20,
  },
  ondas: {
    width: 200,
    height: 80,
    marginBottom: 30,
  },
  botonesContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "70%",
    alignItems: "center",
  },
  boton: {
    backgroundColor: "#CDE1F3",
    width: 30,
    height: 30,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 3,
    elevation: 4,
  },
  botonCentral: {
    backgroundColor: "#fff",
    width: 60,
    height: 60,
    borderRadius: 40,
  },
  icono: {
    width: 25,
    height: 25,
  },
  iconoGrande: {
    width: 40,
    height: 40,
  },
});