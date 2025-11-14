import { Pressable, StyleSheet, Text, View } from "react-native";
import { useRouter } from "expo-router";

export default function Boton({ 
  texto = "crear cuenta", 
  onPress, 
  destino, 
  parametros = {},
  colorFondo = "#ff8903ff",
  colorTexto = "#fff",
  estiloPersonalizado,
  deshabilitado = false
}) {
  const router = useRouter();

  const handlePress = () => {
    if (deshabilitado) return;
    
    // Primero ejecuta la función onPress si existe
    if (onPress) {
      onPress();
    }
    
    // Luego navega si hay un destino especificado
    if (destino) {
      if (Object.keys(parametros).length > 0) {
        router.push({
          pathname: destino,
          params: parametros
        });
      } else {
        router.push(destino);
      }
    }
  };

  return (
    <View style={styles.container}>
      <Pressable 
        style={[
          styles.boton, 
          { 
            backgroundColor: deshabilitado ? "#CCCCCC" : colorFondo,
            opacity: deshabilitado ? 0.6 : 1
          },
          estiloPersonalizado
        ]} 
        onPress={handlePress}
        disabled={deshabilitado}
      >
        <Text style={[styles.texto, { color: colorTexto }]}>
          {texto}
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  boton: {
    borderRadius: 40,
    paddingVertical: 15,
    paddingHorizontal: 40,
    shadowColor: "#000",
    shadowOffset: { width: 2, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  texto: {
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
  },
});