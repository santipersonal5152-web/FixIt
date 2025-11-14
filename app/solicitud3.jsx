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
import ValorVisita from "../assets/componentes/ValorVisita";

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
        
        <Text style={{ fontSize: 28, marginBottom: 20, color: "#FFF",paddingHorizontal: 50, textAlign: "center", fontWeight: "bold", }}>
          ¡TU SERVIDOR YA ESTÁ EN CAMINO!
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

        <TarjetaServidor 
            nombre="Julio Leon"
            estrellasLlenas={4}
            rol="Tecnico"
            disponible={true}
            horario="7 pm - 5 am"
            navegacion="/verperfilacep2"
            parametros={{ servidorId: "123", nombre: "Julio Leon" }}
        />
        <View style={{ height: 15 }} />
        <BotonChat destino="/chatexto3" />
        <View style={{ height: 15 }} />

        <Text style={{ fontSize: 28, marginBottom: 20, color: "#FFF",paddingHorizontal: 50, textAlign: "center", fontWeight: "bold", }}>
            Tarifas
        </Text>

        <ValorVisita
            titulo="Valor de la visita:"
            valor="$50,000"
            colorFondo="#FFFFFF"
            colorTexto="#333333"
        />

        <ValorVisita
            titulo="Valor por hora de trabajo:"
            valor="$20,000"
            colorFondo="#FFFFFF"
            colorTexto="#333333"
        />

        <ValorVisita
            titulo="Excedente Materiales:"
            valor="$50,000"
            colorFondo="#FFFFFF"
            colorTexto="#333333"
        />

        <ValorVisita
            titulo="Excedente horario nocturno:"
            valor="20%"
            colorFondo="#FFFFFF"
            colorTexto="#333333"
        />
        <View style={{ height: 15 }} />

        <Text style={{ fontSize: 17, marginBottom: 50,marginRight: 75,marginLeft: 75, color: "#000000ff",paddingHorizontal: 30, textAlign: "center", backgroundColor:"#fff",borderRadius: 15,}}>
            El servidor trae las herramientas que considera necesarias, sin embargo, si resulta necesitar mas, cobra un porcentaje de los materiales.
        </Text>




<View style={{ height: 70 }} />

        
      </ScrollView>
      <BarraNavegacion />
    </View>
  );
}
