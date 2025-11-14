import React, { useEffect } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

export default function Inicio() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      // Redirigir a la siguiente pantalla después de 3 segundos
      router.push("/paso"); // O la pantalla que quieras que siga
    }, 3000); // 3000 ms = 3 segundos

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      {/* Logo */}
      <Image 
        source={require("../assets/imagen/logo-vi.png")} 
        style={styles.logo}
        resizeMode="contain"
      />
      
      {/* Título debajo de la imagen */}
      <Text style={styles.titulo}>FIX IT</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#8CB3DB", // Mismo color de fondo que usas en tu app
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  logo: {
    width: 200, // Ajusta según el tamaño de tu logo
    height: 200, // Ajusta según el tamaño de tu logo
    marginBottom: 20,
  },
  titulo: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#FFFFFF",
    textAlign: "center",
    textShadowColor: "rgba(0, 0, 0, 0.3)",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
  },
});