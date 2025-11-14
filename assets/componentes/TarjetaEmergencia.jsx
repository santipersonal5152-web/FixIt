import { Image, StyleSheet, Text, View } from "react-native";
import TarjetaCliente from "./TarjetaCliente";

export default function TarjetaEmergencia({
  titulo = "Solicitudes de emergencia",
  iconoSource = require("../imagen/alarma.png"),
  children,
  tarjetaClienteProps,
  onRemove, // Nueva prop para eliminar esta tarjeta
  id // ID para identificar esta tarjeta de emergencia
}) {
  // Si se pasa onRemove, creamos una función que maneje el rechazo y la eliminación
  const handleRechazarConRemove = () => {
    // Primero ejecutar onRechazar si existe en tarjetaClienteProps
    if (tarjetaClienteProps?.onRechazar) {
      tarjetaClienteProps.onRechazar(tarjetaClienteProps.id);
    }
    
    // Luego eliminar esta tarjeta de emergencia
    if (onRemove) {
      onRemove(id);
    }
  };

  // Función para manejar aceptar (solo pasa la función original)
  const handleAceptar = () => {
    if (tarjetaClienteProps?.onAceptar) {
      tarjetaClienteProps.onAceptar(tarjetaClienteProps.id);
    }
  };

  return (
    <View style={styles.container}>
      {/* Encabezado rojo */}
      <View style={styles.header}>
        <Image
          source={iconoSource}
          style={styles.iconoAlarma}
        />
        <Text style={styles.titulo}>{titulo}</Text>
      </View>

      {/* Contenido personalizable */}
      <View style={styles.tarjetaContainer}>
        {children || (
          <TarjetaCliente 
            {...tarjetaClienteProps}
            onAceptar={handleAceptar}
            onRechazar={handleRechazarConRemove}
          />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#E34A4A",
    borderRadius: 20,
    width: 360,
    paddingVertical: 16,
    paddingHorizontal: 12,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.25,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    elevation: 5,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    width: "100%",
  },
  iconoAlarma: {
    width: 35,
    height: 35,
    marginRight: 8,
  },
  titulo: {
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: 18,
  },
  tarjetaContainer: {
    backgroundColor: "#FFFFFF10",
    borderRadius: 15,
    paddingVertical: 5,
    alignItems: "center",
  },
});