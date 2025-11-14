import React, { useState } from "react";
import { View, ScrollView, Text } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import HeaderFijo from "../assets/componentes/HeaderFijo";
import BotonUsuario from "../assets/componentes/BotonUsuario";
// ... otros imports

export default function registro() {
  const [nombre, setNombre] = useState("Peresejo");
  const params = useLocalSearchParams();
  const router = useRouter();
  
  const tipoFormulario = params?.tipoFormulario || "registro";
  const mensaje = params?.mensaje || "Bienvenido";

  return (
    <View style={{ flex: 1, backgroundColor: "#8CB3DB" }}>
      <HeaderFijo 
        tituloSuperior="¡Bienvenido a Fix It!"
        tituloInferior="
        "
        colorFondo="#FFFFFF"
        colorTexto="#F7830A"
      />

      <ScrollView 
        style={{ flex: 1 }}
        contentContainerStyle={{ 
          paddingVertical: 20,
          alignItems: "center",
        }}
        showsVerticalScrollIndicator={true}
      >
        
        <Text style={{ fontSize: 26, marginBottom: 50, color: "#FFF" }}>
          Crea tu perfil
        </Text>

        {/* Botón USUARIO con navegación */}
        <BotonUsuario 
          texto="USUARIO"
          colorFondo="#487AB2"
          colorTexto="#FFF"
          imagen={require("../assets/imagen/man_4140059.png")}
          navegacion="/usuario" // Ruta de destino
          parametros={{ tipo: "usuario", accion: "registro" }} // Parámetros opcionales
        />

        {/* Botón SERVIDOR con navegación */}
        <BotonUsuario 
          texto="SERVIDOR"
          colorFondo="#E6F2FF"
          colorTexto="#30384B"
          imagen={require("../assets/imagen/SERVIDOR.png")}
          navegacion="/creatuperfil" // Ruta de destino
          parametros={{ tipo: "servidor", accion: "registro" }} // Parámetros opcionales
        />

      </ScrollView>
    </View>
  );
}