import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const BarraServidores = ({
  opciones = ["Plomeros", "Técnicos"],
  opcionInicial = "Plomeros",
  colorFondo = "#E8F0FE",
  colorActivo = "#4A86C5",
  colorTextoActivo = "#FFFFFF",
  colorTextoInactivo = "#2F3542",
  ancho = "90%",
  maxAncho = 350,
  onSeleccionCambio = (opcion) => {}
}) => {
  const [seleccion, setSeleccion] = useState(opcionInicial);

  const manejarSeleccion = (opcion) => {
    setSeleccion(opcion);
    onSeleccionCambio(opcion);
  };

  return (
    <View style={[
      styles.container, 
      { 
        backgroundColor: colorFondo,
        width: ancho,
        maxWidth: maxAncho
      }
    ]}>
      {opciones.map((opcion, index) => (
        <TouchableOpacity
          key={opcion}
          style={[
            styles.boton,
            seleccion === opcion ? styles.botonActivo : styles.botonInactivo,
            seleccion === opcion && { backgroundColor: colorActivo },
            { 
              borderTopLeftRadius: 20, 
              borderTopRightRadius: 20, 
              borderBottomLeftRadius: 20, 
              borderBottomRightRadius: 20 
            },
          ]}
          onPress={() => manejarSeleccion(opcion)}
        >
          <Text
            style={[
              styles.texto,
              seleccion === opcion ? styles.textoActivo : styles.textoInactivo,
              seleccion === opcion ? { color: colorTextoActivo } : { color: colorTextoInactivo }
            ]}
          >
            {opcion}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignSelf: "center",
    borderRadius: 20,
    padding: 3,
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowRadius: 3,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  boton: {
    flex: 1,
    paddingVertical: 8,
    alignItems: "center",
    borderRadius: 20,
  },
  botonActivo: {
    // El color se aplica dinámicamente
  },
  botonInactivo: {
    backgroundColor: "transparent",
  },
  texto: {
    fontSize: 16,
    fontWeight: "700",
  },
  textoActivo: {
    // El color se aplica dinámicamente
  },
  textoInactivo: {
    // El color se aplica dinámicamente
  },
});

export default BarraServidores;