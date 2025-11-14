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

export default function prueba() {
  const [nombre, setNombre] = useState("Peresejo");
  const params = useLocalSearchParams();
  const router = useRouter();
  
  const tipoFormulario = params?.tipoFormulario || "registro";
  const mensaje = params?.mensaje || "Bienvenido";

  return (
    <View style={{ flex: 1, backgroundColor: "#8CB3DB" }}>
      <HeaderFijo 
        tituloSuperior="Pantalla de Registro"
        tituloInferior="Completa tu registro"
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
        
        <Text style={{ fontSize: 18, marginBottom: 20, color: "#FFF" }}>
          {mensaje}
        </Text>

        <BotonUsuario 
          texto="USUARIO"
          colorFondo="#487AB2"
          colorTexto="#FFF"
          imagen={require("../assets/imagen/man_4140059.png")}
        />
        <BotonUsuario 
          texto="SERVIDOR"
          colorFondo="#E6F2FF"
          colorTexto="#30384B"
          imagen={require("../assets/imagen/SERVIDOR.png")}
        />
        <CampoTexto
          label="Nombre"
          valorInicial={nombre}
          onChangeText={setNombre}
        />

        <CampoTexto
            label="Nombre"
            valorInicial="Santiago"
            mostrarBotonEditar={true}
            onChangeText={(texto) => console.log("Nuevo nombre:", texto)}
        />

        {/* Campo normal (en fila con lápiz) */}
      <CampoTexto
        label="Nombre"
        valorInicial="Santiago"
        mostrarBotonEditar={true}
        formato="fila"
        onChangeText={(texto) => console.log("Nombre:", texto)}
      />

      {/* Campo tipo bloque (texto debajo del título, como la imagen) */}
      <CampoTexto
        label="Descripción y experiencia"
        valorInicial="Plomero con experiencia en instalación y reparación de sistemas hidráulicos. Responsable, puntual y enfocado en brindar soluciones seguras y de calidad."
        mostrarBotonEditar={true}
        formato="bloque"
      />

      {/* Solo lectura (sin botón y bloque) */}
      <CampoTexto
        label="Ubicación"
        valorInicial="Bogotá, Colombia"
        mostrarBotonEditar={false}
        formato="bloque"
      />

        <MetodosPago 
          onPress={() => console.log("Métodos de pago presionado")}
        />
        <SolucionesRapi
          titulo="Reparación de hornos y microondas "
          consejos={[
            "Desconecta el electrodoméstico de inmediato.",
            "No intentes abrir el equipo si está caliente o huele a quemado.",
            "Si hay humo o chispas, corta la energía desde el breaker principal.",
            "Verifica si el enchufe o el tomacorriente funciona conectando otro aparato.",
            "Revisa que la puerta cierre correctamente; si no encaja, el horno o microondas no encenderá.",
            "Limpia el panel y las rejillas de ventilación con un paño seco (sin líquidos).",
          ]}
          maxWidthTexto={220}
        />

        <InicioSesion />
        <View style={{ height: 15 }} />
        <BarraServidores />
        <View style={{ height: 15 }} />
        <BotonEmergencia />
        <View style={{ height: 15 }} />
        <Formulario />
        <View style={{ height: 15 }} />
        <BotonChat />
        <View style={{ height: 15 }} />
        
        {/* Botón para volver */}
        <Boton 
          texto="Volver al Login" 
          onPress={() => console.log("Volviendo...")}
          destino="/"
          colorFondo="#487AB2"
        />
        
        <View style={{ height: 15 }} />
        <Beneficios />
        <View style={{ height: 15 }} />
        <Chat />
        <View style={{ height: 15 }} />
        <TarjetaEmergencia />
        <View style={{ height: 15 }} />
        <Filtro />
        <View style={{ height: 20 }} />
        <Filtro2 />
        <View style={{ height: 20 }} />
        <TarjetaServidor />
        <View style={{ height: 20 }} />
        <TarjetaCliente />
        <View style={{ height: 20 }} />
        <ChatVoz />
        
      </ScrollView>
      <BarraNavegacion />
    </View>
  );
}