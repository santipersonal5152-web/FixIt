import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useState } from "react";

export default function Filtro2({
  // Props principales
  titulo = "¿Qué servicio necesitas?",
  numero = "2",
  
  // Datos de los botones
  opciones = [
    "Reparación de Tuberías",
    "Reparación de Fuga de gas", 
    "Reparación de lavavajillas",
    "Mantenimiento de duchas y baños"
  ],
  
  // Estilos configurables
  colorFondo = "#4E7CB8",
  colorTexto = "white",
  colorBotonFondo = "white",
  colorBotonTexto = "#245A9A",
  
  // Funciones de callback
  onPresionarOpcion = (opcion, index) => console.log(`Opción seleccionada: ${opcion}`),
  
  // Layout
  ancho = "70%",
  borderRadius = 20,
}) {
  const [opcionSeleccionada, setOpcionSeleccionada] = useState(null);

  const manejarPresion = (opcion, index) => {
    setOpcionSeleccionada(index);
    onPresionarOpcion(opcion, index);
  };

  return (
    <View style={[
      styles.container, 
      { 
        backgroundColor: colorFondo, 
        borderRadius: borderRadius,
        width: ancho 
      }
    ]}>
      {/* Título */}
      <Text style={[styles.titulo, { color: colorTexto }]}>
        <Text style={[styles.numero, { color: colorTexto }]}>{numero} </Text>
        {titulo}
      </Text>

      {/* Botones dinámicos */}
      {opciones.map((opcion, index) => (
        <TouchableOpacity 
          key={index}
          style={[
            styles.boton, 
            { 
              backgroundColor: opcionSeleccionada === index ? "#F7830A" : colorBotonFondo,
              borderRadius: borderRadius - 5 // Un poco menos que el contenedor
            }
          ]}
          onPress={() => manejarPresion(opcion, index)}
          activeOpacity={0.7}
        >
          <Text style={[
            styles.textoBoton, 
            { 
              color: opcionSeleccionada === index ? "#fff" : colorBotonTexto 
            }
          ]}>
            {opcion}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 30,
    paddingHorizontal: 25,
    alignItems: "center",
    marginVertical: 10,
  },
  titulo: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 25,
    textAlign: "center",
  },
  numero: {
    fontSize: 40,
    fontWeight: "bold",
  },
  boton: {
    width: "100%",
    paddingVertical: 12,
    marginBottom: 15,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 4,
    elevation: 4,
  },
  textoBoton: {
    fontSize: 16,
    fontWeight: "bold",
  },
});