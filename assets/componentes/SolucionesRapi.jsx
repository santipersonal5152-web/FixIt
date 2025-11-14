import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function SolucionesRapi({
  titulo = "Reparación de hornos y microondas",
  consejos = [
    "Desconecta el electrodoméstico de inmediato.",
    "No intentes abrir el equipo si está caliente o huele a quemado.",
    "Si hay humo o chispas, corta la energía desde el breaker principal.",
    "Verifica si el enchufe o el tomacorriente funciona conectando otro aparato.",
    "Revisa que la puerta cierre correctamente; si no encaja, el horno o microondas no encenderá.",
    "Limpia el panel y las rejillas de ventilación con un paño seco (sin líquidos)."
  ],
  colorBullet = "#4A80F0",
  colorTitulo = "#333333",
  colorTexto = "#333333",
  maxWidthTexto = 250 // Límite en píxeles para el texto
}) {
  return (
    <View style={styles.contenedor}>
      <Text style={[styles.titulo, { color: colorTitulo }]}>{titulo}</Text>
      
      <View style={styles.lista}>
        {consejos.map((consejo, index) => (
          <View key={index} style={styles.item}>
            <Text style={[styles.bullet, { color: colorBullet }]}>•</Text>
            <View style={[styles.textoContainer, { maxWidth: maxWidthTexto }]}>
              <Text style={[styles.texto, { color: colorTexto }]}>{consejo}</Text>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    borderRadius: 10,
    paddingVertical: 20,
    paddingHorizontal: 25,
    marginVertical: 10,
    backgroundColor: "#E6F2FF",
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  titulo: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 15,
    textAlign: "center",
  },
  lista: {
    width: "100%",
  },
  item: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 1,
  },
  bullet: {
    fontSize: 16,
    marginRight: 8,
    marginTop: 2,
  },
  textoContainer: {
    flex: 1,
  },
  texto: {
    fontSize: 14,
    lineHeight: 20,
    flexWrap: 'wrap', // Permite que el texto salte de línea
    flexShrink: 1, // Permite que se reduzca para caber
  },
});