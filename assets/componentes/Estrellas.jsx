import React from "react";
import { View, Image, StyleSheet } from "react-native";

export default function Estrellas({
  cantidad = 0, // número de estrellas llenas
  total = 5, // total de estrellas
  tamaño = 24, // tamaño de las estrellas
  espacio = 2, // espacio entre ellas
}) {
  const estrellas = [];

  for (let i = 0; i < total; i++) {
    const imagenFuente =
      i < cantidad
        ? require("../imagen/estrella.png")
        : require("../imagen/estrella_vacia.png");

    estrellas.push(
      <Image
        key={i}
        source={imagenFuente}
        style={{ width: tamaño, height: tamaño, marginRight: espacio }}
      />
    );
  }

  return <View style={styles.contenedor}>{estrellas}</View>;
}

const styles = StyleSheet.create({
  contenedor: {
    flexDirection: "row",
    alignItems: "center",
  },
});
