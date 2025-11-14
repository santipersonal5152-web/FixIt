import React from "react";
import { TouchableOpacity, View, Text, Image, StyleSheet } from "react-native";

export default function MetodosPago({
  onPress = () => {},
}) {
  return (
    <TouchableOpacity
      style={styles.boton}
      activeOpacity={0.8}
      onPress={onPress}
    >
      <View style={styles.contenedor}>
        <Text style={styles.titulo}>Perensejo recibe los siguientes medios de pago:</Text>
        
        <View style={styles.metodosContainer}>
          {/* Primera fila */}
          <View style={styles.fila}>
            <View style={styles.metodo}>
              <Image source={require("../imagen/transfi.png")} style={styles.imagen} />
            </View>
            
            <View style={styles.metodo}>
              <Image source={require("../imagen/nequi.png")} style={styles.imagen} />
            </View>
          </View>
          
          {/* Segunda fila */}
          <View style={styles.fila}>
            <View style={styles.metodo}>
              <Image source={require("../imagen/pse.png")} style={styles.imagen} />
            </View>
            
            <View style={styles.metodo}>
              <Image source={require("../imagen/efectivo.png")} style={styles.imagen} />
            </View>
          </View>
          
          {/* Tercera fila - centrado */}
          <View style={styles.fila}>
            <View style={styles.metodo}>
              <Image source={require("../imagen/Master.png")} style={styles.imagen} />
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  boton: {
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 0,
    marginVertical: 10,
    backgroundColor: "#E6F2FF",
    alignItems: "center",
    justifyContent: "center",
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  contenedor: {
    width: "70%",
    alignItems: "center",
  },
  titulo: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333333",
    marginBottom: 15,
    textAlign: "center",
  },
  metodosContainer: {
    width: "100%",
  },
  fila: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 15,
  },
  metodo: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 0,
  },
  imagen: {
    width: 50,
    height: 50,
    marginBottom: 3,
  },
  texto: {
    fontSize: 12,
    fontWeight: "100",
    color: "#333333",
    textAlign: "center",
  },
});