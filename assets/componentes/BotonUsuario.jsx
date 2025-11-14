import React from "react";
import { TouchableOpacity, View, Text, Image, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

export default function BotonUsuario({
  texto = "USUARIO",
  colorFondo = "#4A80F0",
  colorTexto = "#FFFFFF",
  imagen = require("../imagen/man_4140059.png"),
  onPress = null, // Cambiado a null por defecto
  navegacion = null, // Nueva prop para la ruta de navegación
  parametros = {}, // Nueva prop para parámetros de navegación
}) {
  const router = useRouter();
  
  // Detecta si la imagen viene como string (URL) o como require()
  const source = typeof imagen === "string" ? { uri: imagen } : imagen;

  const manejarPresion = () => {
    if (onPress) {
      // Si hay una función onPress personalizada, ejecutarla
      onPress();
    } else if (navegacion) {
      // Si hay una ruta de navegación, navegar
      router.push({
        pathname: navegacion,
        params: parametros
      });
    }
    // Si no hay ni onPress ni navegación, no hace nada
  };

  return (
    <TouchableOpacity
      style={[styles.boton, { backgroundColor: colorFondo }]}
      activeOpacity={0.8}
      onPress={manejarPresion}
    >
      <View style={styles.contenedor}>
        <Image source={source} style={styles.imagen} />
        <Text style={[styles.texto, { color: colorTexto }]}>{texto}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  boton: {
    borderRadius: 10,
    paddingVertical: 20,
    paddingHorizontal: 50,
    marginVertical: 10,
    alignItems: "center",
    justifyContent: "center",
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 1, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  contenedor: {
    flexDirection: "row",
    alignItems: "center",
  },
  imagen: {
    width: 80,
    height: 80,
    borderRadius: 2,
    marginRight: 20,
  },
  texto: {
    fontSize: 25,
    fontWeight: "bold",
  },
});