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

export default function Tuberias() {
  const [nombre, setNombre] = useState("Peresejo");
  const params = useLocalSearchParams();
  const router = useRouter();
  
  const tipoFormulario = params?.tipoFormulario || "registro";
  const mensaje = params?.mensaje || "Bienvenido";

  return (
    <View style={{ flex: 1, backgroundColor: "#8CB3DB" }}>
      <HeaderFijo 
        tituloSuperior="Soluciones rápidas"
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
        
        <Text style={{ fontSize: 18, marginBottom: 20, color: "#3166A3",paddingHorizontal: 40,textAlign: "center",fontWeight: "bold",}}>
          Puedes seguir estos pasos mientras esperas que confirmemos un servicio
        </Text>

        <SolucionesRapi
          titulo="Reparación de Tuberías"
          consejos={[
            "Cierra la llave de paso general del agua de tu casa inmediatamente para evitar más inundaciones.",
            "Coloca un balde o recipiente bajo la fuga para contener el agua y evitar daños mayores.",
            "Si la fuga es en una junta, intenta sellarla temporalmente con cinta de teflón o epoxy.",
            "NUNCA uses herramientas eléctricas cerca de charcos de agua.",
            "Seca la zona alrededor de la fuga para prevenir resbalones y cortocircuitos.",
          ]}
          maxWidthTexto={290}
        />

        <Boton 
             texto="siguiente"
              destino="esperaplomero"
        />
        <View style={{ height: 70 }} />
        
      </ScrollView>
      <BarraNavegacion />
    </View>
  );
}