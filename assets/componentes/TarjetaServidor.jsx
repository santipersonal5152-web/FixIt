import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useRouter } from "expo-router";
import { useState } from "react";

export default function TarjetaServidor({
  // Props de datos
  nombre = "Nombre del servidor",
  imagen = require("../imagen/tecnico.png"),
  estrellasLlenas = 4,
  rol = "Técnico",
  disponible = false,
  horario = "10 am - 3 pm",
  esFavoritoInicial = false,
  
  // Props de navegación
  onPress = null,
  navegacion = null,
  parametros = {},
  
  // Callback para cuando cambia el estado de favorito
  onFavoritoCambiado = null,
}) {
  const router = useRouter();
  const [esFavorito, setEsFavorito] = useState(esFavoritoInicial);

  const manejarPresion = () => {
    if (onPress) {
      onPress();
    } else if (navegacion) {
      router.push({
        pathname: navegacion,
        params: parametros
      });
    }
  };

  const manejarFavorito = () => {
    const nuevoEstado = !esFavorito;
    setEsFavorito(nuevoEstado);
    
    // Llamar al callback si existe
    if (onFavoritoCambiado) {
      onFavoritoCambiado(nuevoEstado, nombre);
    }
  };

  // Renderizar estrellas según la cantidad de estrellas llenas
  const renderEstrellas = () => {
    const estrellas = [];
    for (let i = 0; i < 5; i++) {
      if (i < estrellasLlenas) {
        estrellas.push(
          <Image key={i} source={require("../imagen/estrella.png")} style={styles.estrella} />
        );
      } else {
        estrellas.push(
          <Image key={i} source={require("../imagen/estrella_vacia.png")} style={styles.estrella} />
        );
      }
    }
    return estrellas;
  };

  return (
    <View style={styles.card}>
      {/* Parte superior: imagen, info y corazón */}
      <View style={styles.topRow}>
        <Image
          source={typeof imagen === "string" ? { uri: imagen } : imagen}
          style={styles.avatar}
        />

        <View style={styles.infoContainer}>
          <Text style={styles.nombre}>{nombre}</Text>

          {/* Estrellas */}
          <View style={styles.estrellasContainer}>
            {renderEstrellas()}
          </View>

          {/* Rol y disponibilidad */}
          <Text style={styles.rol}>{rol}</Text>
          <Text style={disponible ? styles.disponible : styles.noDisponible}>
            {disponible ? "Disponible" : "No disponible"}
          </Text>
          <Text style={styles.horario}>{horario}</Text>
        </View>

        {/* Icono de corazón interactivo */}
        <TouchableOpacity onPress={manejarFavorito}>
          <Image
            source={
              esFavorito 
                ? require("../imagen/Corazon.png") 
                : require("../imagen/Corazon-vacio.png")
            } 
            style={styles.corazon}
          />
        </TouchableOpacity>
      </View>

      {/* Botón inferior */}
      <TouchableOpacity style={styles.boton} onPress={manejarPresion}>
        <Text style={styles.botonTexto}>Ver perfil</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#E8F2FF",
    borderRadius: 20,
    width: 340,
    paddingVertical: 20,
    paddingHorizontal: 20,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: { width: 2, height: 3 },
    shadowRadius: 4,
    elevation: 4,
    marginVertical: 10,
  },
  topRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  avatar: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  infoContainer: {
    flex: 1,
    marginLeft: 15,
  },
  nombre: {
    fontWeight: "bold",
    fontSize: 18,
    color: "#111",
  },
  estrellasContainer: {
    flexDirection: "row",
    marginVertical: 4,
  },
  estrella: {
    width: 20,
    height: 20,
    marginRight: 2,
  },
  rol: {
    color: "#111",
    fontSize: 16,
  },
  noDisponible: {
    color: "#F54343",
    fontWeight: "600",
    fontSize: 15,
  },
  disponible: {
    color: "#4CAF50",
    fontWeight: "600",
    fontSize: 15,
  },
  horario: {
    color: "#777",
    fontSize: 15,
  },
  corazon: {
    width: 28,
    height: 28,
    marginLeft: 10,
  },
  boton: {
    backgroundColor: "#F54343",
    borderRadius: 20,
    alignItems: "center",
    paddingVertical: 10,
    marginTop: 15,
    alignSelf: "center",
    width: 140,
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 4,
  },
  botonTexto: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});