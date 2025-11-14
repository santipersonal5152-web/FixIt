import React, { useState } from "react";
import { View, ScrollView, Text, Image } from "react-native";
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
import TarjetaClienteAceptado from "../assets/componentes/TarjetaClienteAceptada"

export default function prueba() {
  const [nombre, setNombre] = useState("Peresejo");
  const params = useLocalSearchParams();
  const router = useRouter();
  
  const tipoFormulario = params?.tipoFormulario || "registro";
  const mensaje = params?.mensaje || "Bienvenido";

  return (
    <View style={{ flex: 1, backgroundColor: "#8CB3DB" }}>
      <HeaderFijo 
        tituloSuperior="Confirmación del servicio"
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
        
        <Text style={{ fontSize: 28, marginBottom: 20, color: "#FFF",paddingHorizontal: 50, textAlign: "center", fontWeight: "bold",}}>
          LA SOLICITUD DE PEPITO HA SIDO ACEPTADA
        </Text>

        <Image 
            source={require("../assets/imagen/mapa1.png")}
            style={{ 
            width: 1000, 
            height: 300, 
            marginBottm: 20,
            resizeMode: 'contain'
            }}
        />

        <Text style={{ fontSize: 18, marginBottom: 20, color: "#143D6D",paddingHorizontal: 50, textAlign: "center", fontWeight: "bold",}}>
          Pepito se encuentra en Cra xx # xx-xx
        </Text>

        <TarjetaClienteAceptado
            nombre="Juan Pérez"
            descripcion="Reparación de nevera"
            direccion="Calle 123 # 45-67"
            tiempo="Hace 10 min"
            onCancelar={(id) => console.log('Cancelar servicio:', id)}
            onRemove={(id) => console.log('Eliminar tarjeta:', id)}
            id="123"
            destino="/cancelacion2"
            parametros={{ servicioId: "123" }}
        />
        <View style={{ height: 20 }} />

        <BotonChat destino="/chatexto" />

        <View style={{ height: 40 }} />

        <Text style={{ fontSize: 18, marginBottom: 20, color: "#FFF",paddingHorizontal: 50, textAlign: "center", fontWeight: "bold",}}>
          El cliente desea pagar por medio de:
        </Text>

        <View style={{ height: 5 }} />

        <Text style={{ fontSize: 18, marginBottom: 20, color: "#3166A3",paddingHorizontal: 50, textAlign: "center", fontWeight: "bold",backgroundColor:"#E6F2FF",borderRadius: 20,}}>
          Transferencia
        </Text>

        <Image 
            source={require("../assets/imagen/nequi.png")}
            style={{ 
            width: 100, 
            height: 70, 
            marginBottm: 20,
            resizeMode: 'contain'
            }}
        />
        <Image 
            source={require("../assets/imagen/efectivo.png")}
            style={{ 
            width: 100, 
            height: 70, 
            marginBottm: 20,
            resizeMode: 'contain'
            }}
        />
        
        <View style={{ height: 70 }} />

      </ScrollView>
      <BarraNavegacion
              rutaReloj="/historialservidortecni"
              rutaCasa="/serviciosclientetec"
              rutaPerfil="/perfilservidortecni"
            />

    </View>
  );
}