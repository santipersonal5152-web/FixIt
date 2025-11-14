import React, { useState } from "react";
import { View, ScrollView, Text } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import HeaderFijo from "../assets/componentes/HeaderFijo";
import BarraNavegacion from "../assets/componentes/BarraNavegacion";
import BarraServidores from "../assets/componentes/BarraServidores";
import BotonEmergencia from "../assets/componentes/BotonEmergencia";
import Boton from "../assets/componentes/Boton";
import Filtro from "../assets/componentes/Filtro";
import Filtro2 from "../assets/componentes/Filtro2";

export default function usuario() {
  const [servidorSeleccionado, setServidorSeleccionado] = useState("Plomeros");
  const [especialidadSeleccionada, setEspecialidadSeleccionada] = useState("");
  const [tipoServicioSeleccionado, setTipoServicioSeleccionado] = useState("");
  
  const router = useRouter();

  // Definir las opciones para cada tipo de servidor
  const opcionesPorServidor = {
    "Plomeros": [
      "Reparación de Tuberías",
      "Reparación de Fuga de gas", 
      "Reparación de lavavajillas",
      "Mantenimiento de duchas y baños",
    ],
    "Técnicos": [
      "Reparación de neveras",
      "Reparación de lavadoras",
      "Reparación de horno",
      "Mantenimiento preventivo",
    ]
  };

  // Mapeo de especialidades a pantallas de destino
  const destinoPorEspecialidad = {
    "Reparación de Tuberías": "Tuberias",
    "Reparación de Fuga de gas": "fugagas",
    "Reparación de lavavajillas": "lavavajillas",
    "Mantenimiento de duchas y baños": "duchasbanos",
    "Reparación de neveras": "neveras",
    "Reparación de lavadoras": "lavadoras",
    "Reparación de horno": "horno",
    "Mantenimiento preventivo": "mantenimiento",
  };

  // Manejar cambio de selección en BarraServidores
  const manejarCambioServidor = (opcion) => {
    setServidorSeleccionado(opcion);
    setEspecialidadSeleccionada(""); // Resetear especialidad al cambiar servidor
  };

  // Manejar selección de especialidad en Filtro2
  const manejarSeleccionEspecialidad = (opcion, index) => {
    setEspecialidadSeleccionada(opcion);
    console.log(`Servidor: ${servidorSeleccionado}, Especialidad seleccionada: ${opcion}`);
  };

  // Manejar selección del primer filtro (tipo de servicio)
  const manejarSeleccionTipoServicio = (opcion, index) => {
    setTipoServicioSeleccionado(opcion);
    console.log(`Tipo de servicio seleccionado: ${opcion}`);
  };

  // Función para determinar la pantalla destino
  const obtenerDestino = () => {
    if (especialidadSeleccionada && destinoPorEspecialidad[especialidadSeleccionada]) {
      return destinoPorEspecialidad[especialidadSeleccionada];
    }
    return "solucionrapi";
  };

  // Función para manejar la búsqueda de servicio
  const manejarBuscarServicio = () => {
    const destino = obtenerDestino();
    console.log(`Navegando a: ${destino}`);
    
    router.push({
      pathname: destino,
      params: {
        servidor: servidorSeleccionado,
        especialidad: especialidadSeleccionada,
        tipoServicio: tipoServicioSeleccionado
      }
    });
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#8CB3DB" }}>
      <HeaderFijo 
        tituloSuperior="Hola pepito! "
        tituloInferior=""
        colorFondo="#FFFFFF"
        colorTexto="#F7830A"
      />
      
      <BarraServidores
        onSeleccionCambio={manejarCambioServidor}
      />
      
      <View style={{ height: 1 }} />
      
      <ScrollView 
        style={{ flex: 1 }}
        contentContainerStyle={{ 
          paddingVertical: 20,
          alignItems: "center",
        }}
        showsVerticalScrollIndicator={true}
      >
        <BotonEmergencia navegacion="/emergencia" />
        <View style={{ height: 15 }} />
        
        <Text style={{ fontSize: 28, marginBottom: 20, color: "#FFF", fontWeight: "bold" }}>
          PIDE TU SERVICIO
        </Text>
        
        <Text style={{ fontSize: 18, marginBottom: 20, color: "#FFF", paddingHorizontal: 40, textAlign: "center" }}>
          Cuéntanos un poco más sobre lo que necesitas, responde estas dos preguntas para ayudarte a encontrar el servicio perfecto para ti.
        </Text>

        <Filtro onPresionarOpcion={manejarSeleccionTipoServicio} />
        <View style={{ height: 20 }} />
        
        <Filtro2 
          titulo="Selecciona tu especialidad"
          numero="2"
          opciones={opcionesPorServidor[servidorSeleccionado]}
          onPresionarOpcion={manejarSeleccionEspecialidad}
        />
        
        <View style={{ height: 20 }} />
        
        <Boton 
          texto="Buscar servicio"
          onPress={manejarBuscarServicio}
          deshabilitado={!especialidadSeleccionada || !tipoServicioSeleccionado}
        />
        
        <View style={{ height: 70 }} />
      </ScrollView>
      <BarraNavegacion />
    </View>
  );
}