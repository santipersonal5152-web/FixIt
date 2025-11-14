import React, { useState } from "react";
import { View, ScrollView, Text } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import HeaderFijo from "../assets/componentes/HeaderFijo";
import BotonUsuario from "../assets/componentes/BotonUsuario";
import CampoTexto from "../assets/componentes/CampoTexto";
import MetodosPago from "../assets/componentes/MetodosPago";
import SolucionesRapi from "../assets/componentes/SolucionesRapi";
import BarraNavegacion from "../assets/componentes/BarraNavegacion";
import BarraServidores from "../assets/componentes/BarraServidores";
import Beneficios from "../assets/componentes/Beneficios";
import Boton from "../assets/componentes/Boton";
import BotonChat from "../assets/componentes/BotonChat";
import BotonEmergencia from "../assets/componentes/BotonEmergencia";
import Chat from "../assets/componentes/Chat";
import ChatVoz from "../assets/componentes/ChatVoz";
import Filtro from "../assets/componentes/Filtro";
import Filtro2 from "../assets/componentes/Filtro2";
import Formulario from "../assets/componentes/Formulario";
import InicioSesion from "../assets/componentes/InicioSesion";
import TarjetaCliente from "../assets/componentes/TarjetaCliente";
import TarjetaEmergencia from "../assets/componentes/TarjetaEmergencia";
import TarjetaServidor from "../assets/componentes/TarjetaServidor";

export default function creatuperfil() {
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
        
        <Text style={{ fontSize: 25, marginBottom: 20, color: "#FFF",paddingHorizontal: 40,textAlign: "center",fontWeight: "bold",}}>
          Crea tu perfil, Servidor
        </Text>

        <BotonUsuario 
                  texto="PLOMERO"
                  colorFondo="#487AB2"
                  colorTexto="#FFF"
                  imagen={require("../assets/imagen/plomero.png")}
                  navegacion="/servidorplomero" // Ruta de destino
                  parametros={{ tipo: "usuario", accion: "registro" }} // Parámetros opcionales
                />
        
                {/* Botón SERVIDOR con navegación */}
                <BotonUsuario 
                  texto="TÉCNICO"
                  colorFondo="#487AB2"
                  colorTexto="#FFF"
                  imagen={require("../assets/imagen/electricista.png")}
                  navegacion="/servidortecnico" // Ruta de destino
                  parametros={{ tipo: "servidor", accion: "registro" }} // Parámetros opcionales
                />

      </ScrollView>
    </View>
  );
}