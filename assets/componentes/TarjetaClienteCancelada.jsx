import { Image, StyleSheet, Text, View } from "react-native";

export default function TarjetaClienteCancelada({
  nombre = "Nombre de Usuario",
  descripcion = "Reparación de lavadora",
  direccion = "Calle xx # xx - xx",
  tiempo = "Hace 5 min",
  urgencia = "Urgencia: Hoy",
  avatarSource = require("../imagen/cliente.png"),
  textoCancelado = "Servicio cancelado" // Nuevo prop para el texto
}) {

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

      {/* Sección inferior: texto en rojo en lugar de botón */}
      <View style={styles.bottomRow}>
        <Text style={styles.textoCancelado}>{textoCancelado}</Text>
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
    width: "100%",
  },
  textoCancelado: {
    color: "#EB5858", // Rojo
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
});