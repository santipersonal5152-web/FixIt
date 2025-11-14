import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useRouter } from "expo-router";

export default function TarjetaCliente({
  nombre = "Nombre de Usuario",
  descripcion = "Reparación de lavadora",
  direccion = "Calle xx # xx - xx",
  tiempo = "Hace 5 min",
  urgencia = "Urgencia: Hoy",
  avatarSource = require("../imagen/cliente.png"),
  onAceptar,
  onRechazar,
  id, // ID único para identificar la tarjeta
  destino, // Ruta a la que navegará el botón verde (igual que en Boton)
  parametros = {}, // Parámetros para la navegación (igual que en Boton)
  onRemove // Función para eliminar la tarjeta
}) {
  const router = useRouter();

  const handleAceptar = () => {
    // Primero ejecuta la función onAceptar si existe
    if (onAceptar) {
      onAceptar(id);
    }
    
    // Luego navega si hay un destino especificado (igual que en Boton)
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

  const handleRechazar = () => {
    if (onRechazar) {
      onRechazar(id);
    }
    if (onRemove) {
      onRemove(id);
    }
  };

  return (
    <View style={styles.card}>
      {/* Sección superior */}
      <View style={styles.topRow}>
        <Image
          source={avatarSource}
          style={styles.avatar}
        />
        <View style={styles.info}>
          <Text style={styles.nombre}>{nombre}</Text>
          <Text style={styles.descripcion}>{descripcion}</Text>
          <Text style={styles.direccion}>{direccion}</Text>
          <Text style={styles.tiempo}>{tiempo}</Text>
          <Text style={styles.urgencia}>{urgencia}</Text>
        </View>
      </View>

      {/* Sección inferior: botones */}
      <View style={styles.bottomRow}>
        <TouchableOpacity 
          style={styles.botonVerde}
          onPress={handleAceptar}
        >
          <Image
            source={require("../imagen/check.png")}
            style={styles.iconoBoton}
          />
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.botonRojo}
          onPress={handleRechazar}
        >
          <Image
            source={require("../imagen/x.png")}
            style={styles.iconoBoton}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#E8F2FF",
    borderRadius: 20,
    paddingVertical: 16,
    paddingHorizontal: 18,
    width: 340,
    elevation: 6,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    alignItems: "center",
  },
  topRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  avatar: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 12,
  },
  info: {
    flex: 1,
  },
  nombre: {
    fontWeight: "bold",
    fontSize: 17,
    color: "#000",
  },
  descripcion: {
    fontSize: 15,
    color: "#000",
  },
  direccion: {
    fontSize: 14,
    color: "#000",
    marginBottom: 3,
  },
  tiempo: {
    fontSize: 13,
    color: "#777",
  },
  urgencia: {
    fontSize: 13,
    color: "#777",
  },
  bottomRow: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 8,
  },
  botonVerde: {
    backgroundColor: "#61C174",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: 70,
    height: 30,
    borderRadius: 20,
    marginRight: 10,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.25,
    shadowRadius: 2,
  },
  botonRojo: {
    backgroundColor: "#EB5858",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: 70,
    height: 30,
    borderRadius: 20,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.25,
    shadowRadius: 2,
  },
  iconoBoton: {
    width: 16,
    height: 16,
    tintColor: "#fff",
  },
});