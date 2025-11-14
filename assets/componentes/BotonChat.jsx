import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import { useRouter } from "expo-router";

export default function BotonChat({ 
  onPress, 
  destino, 
  parametros = {},
  iconSource = require("../imagen/IconoChat.png"),
  backgroundColor = "#5EB367",
  iconSize = 50,
  buttonSize = 35,
  estiloPersonalizado 
}) {
  const router = useRouter();

  const handlePress = () => {
    // Primero ejecuta la función onPress si existe
    if (onPress) {
      onPress();
    }
    
    // Luego navega si hay un destino especificado
    if (destino) {
      if (Object.keys(parametros).length > 0) {
        // Si hay parámetros, usar push con parámetros
        router.push({
          pathname: destino,
          params: parametros
        });
      } else {
        // Si no hay parámetros, navegación simple
        router.push(destino);
      }
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity 
        style={[
          styles.boton, 
          { 
            backgroundColor: backgroundColor,
            borderRadius: buttonSize,
            paddingVertical: buttonSize * 0.14, // 5/35 ratio
            paddingHorizontal: buttonSize * 1.14, // 40/35 ratio
          },
          estiloPersonalizado
        ]} 
        onPress={handlePress}
      >
        <Image
          source={iconSource}
          style={[
            styles.icono,
            { 
              width: iconSize, 
              height: iconSize 
            }
          ]}
          resizeMode="contain"
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  boton: {
    elevation: 5, 
    shadowColor: "#000",
    shadowOffset: { width: 2, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  icono: {
    // Tamaño base que será sobrescrito por las props
    width: 50,
    height: 50,
  },
});