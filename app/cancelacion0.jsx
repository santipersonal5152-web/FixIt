import React, { useState } from "react";
import { View, ScrollView, Text } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import HeaderFijo from "../assets/componentes/HeaderFijo";
import TarjetaEmergencia from "../assets/componentes/TarjetaEmergencia";
import TarjetaCliente from "../assets/componentes/TarjetaCliente";
import Beneficios from "../assets/componentes/Beneficios";
import BarraNavegacion from "../assets/componentes/BarraNavegacion";
import TarjetaClienteCancelada from "../assets/componentes/TarjetaClienteCancelada";

export default function ServidorPlomero() {
  const [nombre, setNombre] = useState("Peresejo");
  
  // Estado para tarjetas de emergencia

  // Estado para tarjetas normales
  const [tarjetas, setTarjetas] = useState([
    {
      id: 1,
      nombre: "María González",
      descripcion: "Instalación de aire acondicionado",
      direccion: "Av. Principal #123",
      tiempo: "Hace 10 min",
      urgencia: "Urgencia: Mañana",
      destino: "/detallesserviciotecnico",
      parametros: { servicioId: 1, tipo: "instalacion" }
    },
    {
      id: 2,
      nombre: "Carlos Rodríguez",
      descripcion: "Reparación de grifo",
      direccion: "Carrera 45 #67-89",
      tiempo: "Hace 15 min",
      urgencia: "Urgencia: Esta tarde",
      destino: "/detallesserviciotecnico2",
      parametros: { servicioId: 2, tipo: "reparacion" }
    },
    {
      id: 3,
      nombre: "Laura Martínez",
      descripcion: "Mantenimiento preventivo",
      direccion: "Diagonal 23 #34-56",
      tiempo: "Hace 20 min",
      urgencia: "Urgencia: Esta semana",
      destino: "/detallesserviciotecnico3", 
      parametros: { servicioId: 3, tipo: "mantenimiento" }
    }
  ]);

  const params = useLocalSearchParams();
  const router = useRouter();
  
  const mensaje = params?.mensaje || "Bienvenido";

  // Función para eliminar una tarjeta de emergencia
  const eliminarTarjetaEmergencia = (id) => {
    setTarjetasEmergencia(tarjetasActuales => 
      tarjetasActuales.filter(tarjeta => tarjeta.id !== id)
    );
  };

  // Función para eliminar una tarjeta normal
  const eliminarTarjeta = (id) => {
    setTarjetas(tarjetasActuales => 
      tarjetasActuales.filter(tarjeta => tarjeta.id !== id)
    );
  };

  // Función para manejar cuando se acepta una tarjeta
  const manejarAceptar = (id) => {
    console.log('Tarjeta aceptada:', id);
    // Aquí puedes agregar lógica adicional cuando se acepta
  };

  // Función para manejar cuando se rechaza una tarjeta
  const manejarRechazar = (id) => {
    console.log('Tarjeta rechazada:', id);
    // La eliminación se maneja automáticamente con onRemove
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#8CB3DB" }}>
      <HeaderFijo 
        tituloSuperior="Cancelaste el servicio "
        tituloInferior=""
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

        <TarjetaClienteCancelada/>

        <View style={{ height: 30 }} />

        <Text style={{ 
          fontSize: 21, 
          marginBottom: 20, 
          color: "#000000", 
          paddingHorizontal: 70, 
          textAlign: "center", 
          fontWeight: "bold" 
        }}>
          Otros servicios
        </Text>

        {/* Renderizar tarjetas normales dinámicamente */}
        {tarjetas.map((tarjeta) => (
          <View key={tarjeta.id} style={{ marginBottom: 30 }}>
            <TarjetaCliente
              nombre={tarjeta.nombre}
              descripcion={tarjeta.descripcion}
              direccion={tarjeta.direccion}
              tiempo={tarjeta.tiempo}
              urgencia={tarjeta.urgencia}
              onAceptar={manejarAceptar}
              onRechazar={manejarRechazar}
              onRemove={eliminarTarjeta}
              id={tarjeta.id}
              destino={tarjeta.destino}
              parametros={tarjeta.parametros}
            />
          </View>
        ))}

        <View style={{ height: 30 }} />


        <View style={{ height: 70 }} />

      </ScrollView>
      <BarraNavegacion
        rutaReloj="/historialservidor"
        rutaCasa="/serviciosclientetec"
        rutaPerfil="/perfilservidor"
      />

    </View>
  );
}