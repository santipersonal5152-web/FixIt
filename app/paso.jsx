import React, { useState } from "react";
import { View, ScrollView, Text } from "react-native";
import { useRouter } from "expo-router";
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

export default function App() {
  const [nombre, setNombre] = useState("Peresejo");
  const [formularioActivo, setFormularioActivo] = useState("registro");
  const router = useRouter();

  const manejarCambioFormulario = (opcion) => {
    console.log("Seleccionado:", opcion);
    if (opcion === "Inicia Sesion") {
      setFormularioActivo("inicioSesion");
    } else {
      setFormularioActivo("registro");
    }
  };

  const obtenerTextoBoton = () => {
    return formularioActivo === "registro" ? "Crear cuenta" : "Iniciar sesión";
  };

  const obtenerDestinoBoton = () => {
    return formularioActivo === "registro" ? "/registro" : "/inicio";
  };

  const manejarAccionBoton = () => {
    console.log(formularioActivo === "registro" ? "Registrando..." : "Iniciando sesión...");
    // Aquí va tu lógica de autenticación/registro
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#8CB3DB" }}>
      <ScrollView 
        style={{ flex: 1 }}
        contentContainerStyle={{ 
          paddingVertical: 20,
          alignItems: "center",
        }}
        showsVerticalScrollIndicator={true}
      >
        <BarraServidores 
          opciones={["Registrate", "Inicia Sesion"]}
          opcionInicial="Registrate"
          onSeleccionCambio={manejarCambioFormulario}
        />
        
        {formularioActivo === "registro" ? (
          <>
            <Formulario />
            <View style={{ height: 15 }} />
            
            {/* Boton solo aparece en Registrate */}
            <Boton 
              texto={obtenerTextoBoton()} 
              onPress={manejarAccionBoton}
              destino={obtenerDestinoBoton()}
              parametros={{ 
                tipoFormulario: formularioActivo,
                mensaje: formularioActivo === "registro" ? "Bienvenido al registro" : "Bienvenido al inicio"
              }}
            />
          </>
        ) : (
          <>
            {/* Componentes BotonUsuario para Inicia Sesion */}
            
            <View style={{justifyContent: "center", gap: 15, marginVertical: 20 }}>
              <Text style={{ fontSize: 28, marginBottom: 20, color: "#ffffffff",paddingHorizontal: 40,textAlign: "center",fontWeight: "bold",}}>
                que tipo de cuenta tienes:
              </Text>
              <BotonUsuario 
                texto="USUARIO"
                colorFondo="#487AB2"
                colorTexto="#FFF"
                imagen={require("../assets/imagen/man_4140059.png")}
                navegacion="/inicio"
                parametros={{ tipo: "usuario", accion: "registro" }}
              />
              
              <BotonUsuario 
                texto="SERVIDOR"
                colorFondo="#E6F2FF"
                colorTexto="#30384B"
                imagen={require("../assets/imagen/SERVIDOR.png")}
                navegacion="/inicioservidor"
                parametros={{ tipo: "servidor", accion: "registro" }}
              />
            </View>
            <View style={{ height: 15 }} />
            
            {/* No hay Boton aquí - desaparece en Inicia Sesion */}
          </>
        )}
        
      </ScrollView>
    </View>
  );
}