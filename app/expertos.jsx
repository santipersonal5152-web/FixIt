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

export default function expertos() {
  const [nombre, setNombre] = useState("Peresejo");
  const params = useLocalSearchParams();
  const router = useRouter();
  
  const tipoFormulario = params?.tipoFormulario || "registro";
  const mensaje = params?.mensaje || "Bienvenido";

  return (
    <View style={{ flex: 1, backgroundColor: "#8CB3DB" }}>
      <HeaderFijo 
        tituloSuperior="Expertos disponibles"
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
        
        <TarjetaServidor 
            nombre="Ana García"
            estrellasLlenas={5}
            rol="Tecnico"
            disponible={true}
            horario="8 am - 5 pm"
            navegacion="/verperfil1"
            parametros={{ servidorId: "123", nombre: "Ana García" }}
        />

        <TarjetaServidor 
            nombre="Luis Rendon "
            estrellasLlenas={5}
            rol="Tecnico"
            disponible={true}
            horario="2 pm - 11 pm"
            navegacion="/verperfil2"
            parametros={{ servidorId: "123", nombre: "Ana García" }}
        />
        <TarjetaServidor 
            nombre="Julio Leon"
            estrellasLlenas={4}
            rol="Tecnico"
            disponible={true}
            horario="7 pm - 5 am"
            navegacion="/verperfil3"
            parametros={{ servidorId: "123", nombre: "Ana García" }}
        />
        <TarjetaServidor 
            nombre="Lucia Torres"
            estrellasLlenas={4}
            rol="Tecnico"
            disponible={true}
            horario="4 pm - 1 am"
            navegacion="/verperfil4"
            parametros={{ servidorId: "123", nombre: "Ana García" }}
        />
        <View style={{ height: 70 }} />
      </ScrollView>
      <BarraNavegacion />
    </View>
  );
}