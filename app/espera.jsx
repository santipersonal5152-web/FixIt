import React, { useState, useEffect, useRef } from "react";
import { View, Text, StyleSheet, Animated, Easing } from "react-native";
import { useRouter } from "expo-router";
import HeaderFijo from "../assets/componentes/HeaderFijo";
import BarraNavegacion from "../assets/componentes/BarraNavegacion";

export default function Espera() {
  const router = useRouter();
  const [tiempoRestante, setTiempoRestante] = useState(5);
  const spinValue = useRef(new Animated.Value(0)).current;
  const pulseValue = useRef(new Animated.Value(1)).current;
  const fadeValue = useRef(new Animated.Value(0)).current;

  // Animación del spinner
  useEffect(() => {
    Animated.loop(
      Animated.timing(spinValue, {
        toValue: 1,
        duration: 2000,
        easing: Easing.linear,
        useNativeDriver: true,
      })
    ).start();

    // Animación de pulso
    Animated.loop(
      Animated.sequence([
        Animated.timing(pulseValue, {
          toValue: 1.2,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(pulseValue, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        }),
      ])
    ).start();

    // Animación de fade in
    Animated.timing(fadeValue, {
      toValue: 1,
      duration: 800,
      useNativeDriver: true,
    }).start();
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setTiempoRestante((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          router.push("/expertos");
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <View style={{ flex: 1, backgroundColor: "#8CB3DB" }}>
      <HeaderFijo 
        tituloSuperior="Buscando expertos"
        tituloInferior="Por favor espera..."
        colorFondo="#FFFFFF"
        colorTexto="#F7830A"
      />
      
      <Animated.View style={[styles.container, { opacity: fadeValue }]}>
        {/* Spinner animado */}
        <View style={styles.spinnerContainer}>
          <Animated.View 
            style={[
              styles.spinner,
              { 
                transform: [{ rotate: spin }],
                borderTopColor: "#F7830A",
              }
            ]}
          />
          <Animated.View 
            style={[
              styles.pulse,
              { 
                transform: [{ scale: pulseValue }],
                borderColor: "#F7830A",
              }
            ]}
          />
        </View>

        <Text style={styles.titulo}>
          Encontrando los mejores especialistas
        </Text>
        
        <Text style={styles.subtitulo}>
          Analizando disponibilidad y calificaciones
        </Text>

        {/* Puntos de carga animados */}
        <View style={styles.dotsContainer}>
          <Animated.Text style={[styles.dot, { opacity: pulseValue }]}>●</Animated.Text>
          <Animated.Text style={[styles.dot, { opacity: pulseValue, animationDelay: '200ms' }]}>●</Animated.Text>
          <Animated.Text style={[styles.dot, { opacity: pulseValue, animationDelay: '400ms' }]}>●</Animated.Text>
        </View>

        <View style={styles.contadorContainer}>
          <Text style={styles.contadorTexto}>
            Redirigiendo en:
          </Text>
          <Text style={styles.contadorNumero}>
            {tiempoRestante}s
          </Text>
        </View>

        <View style={styles.progressContainer}>
          <View style={styles.progressBackground}>
            <Animated.View 
              style={[
                styles.progressBar,
                { 
                  width: `${(5 - tiempoRestante) * 20}%`,
                }
              ]} 
            />
          </View>
          <Text style={styles.progressText}>
            {Math.round((5 - tiempoRestante) * 20)}% completado
          </Text>
        </View>
      </Animated.View>

      <View style={{ height: 70 }} />

      
      <BarraNavegacion />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  spinnerContainer: {
    position: "relative",
    width: 100,
    height: 100,
    marginBottom: 30,
  },
  spinner: {
    width: 100,
    height: 100,
    borderWidth: 5,
    borderColor: "rgba(255, 255, 255, 0.3)",
    borderRadius: 50,
    position: "absolute",
    top: 0,
    left: 0,
  },
  pulse: {
    width: 100,
    height: 100,
    borderWidth: 2,
    borderRadius: 50,
    position: "absolute",
    top: 0,
    left: 0,
    opacity: 0.5,
  },
  titulo: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#FFFFFF",
    textAlign: "center",
    marginBottom: 10,
  },
  subtitulo: {
    fontSize: 16,
    color: "rgba(255, 255, 255, 0.8)",
    textAlign: "center",
    marginBottom: 20,
  },
  dotsContainer: {
    flexDirection: "row",
    marginBottom: 30,
  },
  dot: {
    fontSize: 24,
    color: "#FFFFFF",
    marginHorizontal: 5,
  },
  contadorContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  contadorTexto: {
    fontSize: 16,
    color: "#FFFFFF",
    marginBottom: 5,
  },
  contadorNumero: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#F7830A",
  },
  progressContainer: {
    width: '80%',
    alignItems: 'center',
  },
  progressBackground: {
    width: '100%',
    height: 8,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    borderRadius: 4,
    marginBottom: 10,
    overflow: 'hidden',
  },
  progressBar: {
    height: '100%',
    backgroundColor: '#F7830A',
    borderRadius: 4,
  },
  progressText: {
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.8)',
  },
});