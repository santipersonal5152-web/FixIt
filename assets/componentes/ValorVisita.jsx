import React from "react";
import {
  View,
  Text,
  StyleSheet,
} from "react-native";

export default function ValorVisita({
  titulo = "Valor de la visita",
  valor = "Sxx,xxx",
  colorFondo = "#E6F2FF",
  colorTexto = "#000",
  colorTitulo = "#333",
  colorValor = "#000",
  fontSizeTitulo = 14,
  fontSizeValor = 16,
}) {
  return (
    <View style={[styles.contenedor, { backgroundColor: colorFondo }]}>
      <Text style={[styles.titulo, { color: colorTitulo, fontSize: fontSizeTitulo }]}>
        {titulo}
      </Text>
      <Text style={[styles.valor, { color: colorValor, fontSize: fontSizeValor }]}>
        {valor}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 10,
    marginVertical: 5,
    width: 340,
  },
  titulo: {
    fontWeight: "bold",
  },
  valor: {
    fontWeight: "bold",
  },
});