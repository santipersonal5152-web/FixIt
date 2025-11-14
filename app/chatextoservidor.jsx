import React, { useState } from "react";
import { View, ScrollView, Text } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import HeaderFijo from "../assets/componentes/HeaderFijo";
import BarraNavegacion from "../assets/componentes/BarraNavegacion";
import ChatTecnico from "../assets/componentes/ChatTecnico";

export default function VistaTecnico() {
  const params = useLocalSearchParams();
  const router = useRouter();
  
  const nombreCliente = params?.nombreCliente || "Ana García";
  const problema = params?.problema || "Problema con tubería";

  return (
    <View style={{ flex: 1, backgroundColor: "#8CB3DB" }}>
      <HeaderFijo 
        tituloSuperior={`Cliente: ${nombreCliente}`}
        tituloInferior={`Problema: ${problema} - Escribe como técnico`}
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
        <View style={{ height: 1 }} />

        <ChatTecnico />
        <View style={{ height: 0 }} />
        
      </ScrollView>
      <BarraNavegacion
              rutaReloj="/historialservidortecni"
              rutaCasa="/serviciosclientetec"
              rutaPerfil="/perfilservidortecni"
            />
    </View>
  );
}