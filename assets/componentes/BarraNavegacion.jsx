import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import { useRouter, usePathname } from "expo-router";

export default function BarraNavegacion({
  rutaReloj = "/historial",   // ruta del botón de reloj / brújula
  rutaCasa = "/usuario",      // ruta del botón de casa
  rutaPerfil = "/miperfil",     // ruta del botón de perfil
}) {
  const router = useRouter();
  const pathname = usePathname(); // <- Detecta la ruta actual

  // función para cambiar pantalla
  const cambiarPantalla = (ruta) => {
    router.push(ruta);
  };

  return (
    <View style={styles.container}>
      {/* Botón Reloj */}
      <TouchableOpacity
        onPress={() => cambiarPantalla(rutaReloj)}
        style={styles.boton}
      >
        <Image
          source={
            pathname === rutaReloj
              ? require("../imagen/RelojActivo.png")
              : require("../imagen/RelojInactivo.png")
          }
          style={styles.icono}
        />
      </TouchableOpacity>

      {/* Botón Casa */}
      <TouchableOpacity
        onPress={() => cambiarPantalla(rutaCasa)}
        style={styles.boton}
      >
        <Image
          source={
            pathname === rutaCasa
              ? require("../imagen/CasaActiva.png")
              : require("../imagen/CasaInactiva.png")
          }
          style={styles.icono}
        />
      </TouchableOpacity>

      {/* Botón Perfil */}
      <TouchableOpacity
        onPress={() => cambiarPantalla(rutaPerfil)}
        style={styles.boton}
      >
        <Image
          source={
            pathname === rutaPerfil
              ? require("../imagen/PerfilActivo.png")
              : require("../imagen/PerfilInactivo.png")
          }
          style={styles.icono}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    paddingVertical: 12,
    borderTopLeftRadius: 22,
    borderTopRightRadius: 22,
    borderWidth: 1,
    borderColor: "#ccc",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 4,
    width: "100%",
    position: "absolute",
    bottom: 0,
  },
  boton: {
    alignItems: "center",
    flex: 1,
  },
  icono: {
    width: 34,
    height: 34,
    resizeMode: "contain",
  },
});
