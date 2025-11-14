import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function HeaderFijo({
  tituloSuperior = "DETECTICIOS",
  tituloInferior = "Beneficios",
  colorFondo = "#FFFFFF",
  colorTexto = "#333333",
  elevation = 3
}) {
  return (
    <View style={[
      styles.header, 
      { 
        backgroundColor: colorFondo, 
        elevation: elevation,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30
      }
    ]}>
      <Text style={[styles.tituloSuperior, { color: colorTexto }]}>
        {tituloSuperior}
      </Text>
      <Text style={[styles.tituloInferior, { color: colorTexto }]}>
        {tituloInferior}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    width: "100%",
    paddingVertical: 40,
    paddingHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#E0E0E0",
    zIndex: 1000, // Para asegurar que quede por encima
    // Eliminamos borderRadius general y usamos específicos para abajo
  },
  tituloSuperior: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 5,
  },
  tituloInferior: {
    fontSize: 18,
    fontWeight: "600",
  },
});