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
        tituloSuperior="Mi perfil"
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

        <View style={{ height: 60 }} />

      {/* 🔹 Campo solo lectura sin botón */}
      <CampoTexto
        label="Nombre"
        valorInicial="edwin mora"
        mostrarBotonEditar={true}
      />
      <CampoTexto
        label="Teléfono"
        valorInicial="314267389"
        mostrarBotonEditar={true}
      />
      <CampoTexto
        label="Dirección"
        valorInicial="cra 154 # 13-78"
        mostrarBotonEditar={true}
      />
      

      <CampoTexto
        label="Correo"
        valorInicial="ediwinmora737@gmail.com"
        mostrarBotonEditar={true}
      />
      
      <CampoTexto
        label="Horarios"
        valorInicial="Lunes a viernes: 8pm - 12m"
        mostrarBotonEditar={true}
      />

      <CampoTextoGrande
        label="Descripción y experiencia"
        valorInicial="Plomero con experiencia en instalación y reparación de sistemas hidráulicos. Responsable, puntual y enfocado en brindar soluciones seguras y de calidad."
        mostrarBotonEditar={true}
        formato="bloque"
        />

        <Boton 
            texto="beneficios"
            destino="beneficiosescojeplomeroadi"
        />
      
       
      
        <View style={{ height: 70 }} />

      </ScrollView>
      <BarraNavegacion
        rutaReloj="/historialservidorpro"
        rutaCasa="/serviciosclientepro"
        rutaPerfil="/perfilservidorpro"
      />
    </View>
  );
}