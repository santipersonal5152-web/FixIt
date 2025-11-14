import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useRouter } from "expo-router";

const BotonEmergencia = ({
  // Props de navegación
  onPress = null,
  navegacion = null,
  parametros = {},
  
  // Props de contenido
  texto = "BOTÓN DE\nEMERGENCIA",
  imagen = require("../imagen/alarma.png"),
  
  // Props de estilo
  colorFondo = "#E53935",
  colorTexto = "#fff",
  ancho = "90%",
  borderRadius = 20,
}) => {
  const router = useRouter();

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
      style={[
        styles.boton, 
        { 
          backgroundColor: colorFondo,
          borderRadius: borderRadius,
          width: ancho
        }
      ]} 
      activeOpacity={0.85}
      onPress={manejarPresion}
    >
      <View style={styles.contenido}>
        {/* Imagen */}
        <Image
          source={typeof imagen === "string" ? { uri: imagen } : imagen}
          style={styles.icono}
          resizeMode="contain"
        />

        {/* Texto */}
        <Text style={[styles.texto, { color: colorTexto }]}>
          {texto}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  boton: {
    paddingVertical: 15,
    paddingHorizontal: 20,
    maxWidth: 400,
    alignSelf: "center",
    shadowColor: "#000",
    shadowOpacity: 0.25,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
    elevation: 5,
  },
  contenido: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  icono: {
    width: 55,
    height: 55,
    marginRight: 15,
  },
  texto: {
    fontWeight: "900",
    fontSize: 20,
    textAlign: "center",
    letterSpacing: 0.5,
  },
});

export default BotonEmergencia;