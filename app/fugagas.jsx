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

export default function solucionesrapi() {
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
          titulo="Reparación de Fuga de Gas"
          consejos={[
            "¡NO enciendas ni apagues luces, cerillas o electrodomésticos! Una chispa puede causar una explosión.",
            "Abre inmediatamente todas las ventanas para ventilar el área y dispersar el gas.",
            "Cierra la llave de paso principal de la tubería de gas",
            "Si el olor es muy fuerte, desaloja la vivienda de inmediato y llama a los bomberos o al servicio de emergencia de gas desde el exterior.",
            "No uses el teléfono móvil dentro de la casa.",
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