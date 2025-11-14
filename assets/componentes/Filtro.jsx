import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useState } from "react";

export default function Filtro({ onPresionarOpcion = (opcion, index) => {} }) {
  const [opcionSeleccionada, setOpcionSeleccionada] = useState(null);

  const manejarSeleccion = (index) => {
    setOpcionSeleccionada(index);
    // Llamar al callback con el texto de la opción seleccionada
    onPresionarOpcion(opciones[index].texto, index);
  };

  const opciones = [
    { texto: "Ahora mismo", icono: require("../imagen/RelojFIXIT.png") },
    { texto: "Hoy mismo", icono: require("../imagen/CampanaFIXIT.png") },
    { texto: "En los próximos 3 días", icono: require("../imagen/CalendarioFIXIT.png") }
  ];

  return (
    <View style={styles.container}>
      {/* Título */}
      <Text style={styles.numero}>1</Text>
      <Text style={styles.pregunta}>¿Qué tan pronto necesitas{"\n"}el servicio?</Text>

      {/* Opciones dinámicas */}
      {opciones.map((opcion, index) => (
        <TouchableOpacity 
          key={index}
          style={[
            styles.card,
            opcionSeleccionada === index && styles.cardSeleccionada
          ]}
          onPress={() => manejarSeleccion(index)}
        >
          <Image source={opcion.icono} style={styles.icon} />
          <Text style={[
            styles.texto,
            opcionSeleccionada === index && styles.textoSeleccionado
          ]}>
            {opcion.texto}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#487AB2",
    borderRadius: 25,
    paddingTop: 25,
    paddingBottom: 25,
    paddingHorizontal: 20,
    width: "70%",
    alignSelf: "center",
    marginVertical: 9,
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 3,
    elevation: 3,
  },
  numero: {
    fontSize: 40,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "flex-start",
  },
  pregunta: {
    fontSize: 20,
    color: "#fff",
    fontWeight: "600",
    alignSelf: "flex-start",
    marginBottom: 20,
    textAlign: "left",
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 15,
    paddingVertical: 12,
    paddingHorizontal: 15,
    width: "100%",
    marginBottom: 12,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 2,
    elevation: 2,
  },
  cardSeleccionada: {
    backgroundColor: "#F7830A",
  },
  icon: {
    width: 50,
    height: 50,
    marginRight: 15,
  },
  texto: {
    fontSize: 16,
    fontWeight: "700",
    color: "#2F4B73",
  },
  textoSeleccionado: {
    color: "#fff",
  },
});