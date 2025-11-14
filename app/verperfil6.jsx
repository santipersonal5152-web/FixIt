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
import Estrellas from "../assets/componentes/Estrellas";
import CampoTextoGrande from "../assets/componentes/CampoTextoGrande";
import ServicioAdicional from "../assets/componentes/ServicioAdicional"

export default function prueba() {
  const [nombre, setNombre] = useState("Peresejo");
  const [correo,setCorreo] = useState("");
    const params = useLocalSearchParams();
  const router = useRouter();
  
  const tipoFormulario = params?.tipoFormulario || "registro";
  const mensaje = params?.mensaje || "Bienvenido";

  function traerDatos(){

    axios.get("http://192.65.34.77:5000")
  }
  

  return (
    <View style={{ flex: 1, backgroundColor: "#8CB3DB" }}>
      <HeaderFijo 
        tituloSuperior="Luis Rendon"
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
        
        <Image 
            source={require("../assets/imagen/SERVIDOR.png")}
            style={{ 
            width: 300, 
            height: 160, 
            marginBottm: 20,
            resizeMode: 'contain'
             }}
        />

        <Estrellas cantidad={4} total={5} tamaño={40} />

        <Text style={{ fontSize: 24, marginBottom: 20, color: "#000000ff", fontWeight: "bold" }}>
            Disponible ahora
        </Text>

      {/* 🔹 Campo solo lectura sin botón */}
      <CampoTexto
        label="Nombre"
        valorInicial="Luis Rendon"
        mostrarBotonEditar={false}
      />
      <CampoTexto
        label="Correo Electrónico"
        valorInicial="luisrendon57@gmail.com"
        mostrarBotonEditar={false}
      />
      
      <CampoTextoGrande
              label="Descripción y experiencia"
              valorInicial="Plomero especializado en la diagnosis y solución rápida de emergencias como fugas, averías y bloqueos en tuberías. Comprometido con atender con puntualidad y eficiencia, minimizando daños y restaurando la normalidad con soluciones seguras y efectivas."
              mostrarBotonEditar={false}
              formato="bloque"
      />

      <CampoTexto
        label="Valor por hora de trabajo:"
        valorInicial="$25,000 - $45,000"
        mostrarBotonEditar={false}
      />
      
      <CampoTexto
        label="Horario de trabajo:"
        valorInicial="Lunes a viernes: 7 am - 4 pm"
        mostrarBotonEditar={false}
      />
      
        <View style={{ height: 30 }} />

      <ServicioAdicional 
        porcentaje="15%"
        textoAdicional="cargo por servicio"
        colorFondoPorcentaje="#FF9800"
      />
      <MetodosPago/>

      <Boton 
        texto="SOLICITAR"
        destino="solicitud6"
        colorFondo = "#67BD6C"
      />

        <View style={{ height: 70 }} />

      </ScrollView>
      <BarraNavegacion />
    </View>
  );
}