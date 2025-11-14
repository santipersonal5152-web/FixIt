import { 
  Image, 
  ScrollView, 
  StyleSheet, 
  Text, 
  View, 
  TextInput, 
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform 
} from "react-native";
import { useState, useRef, useEffect } from "react";

const mensajesIniciales = [
  { id: 1, texto: "¡Hola! ¿En qué puedo ayudarte hoy?", tipo: "soporte" },
];

const Chat = () => {
  const [mensajes, setMensajes] = useState(mensajesIniciales);
  const [nuevoMensaje, setNuevoMensaje] = useState("");
  const [esperandoRespuesta, setEsperandoRespuesta] = useState(false);
  const scrollViewRef = useRef();

  // Simular mensaje inicial del servidor
  useEffect(() => {
    setTimeout(() => {
      const mensajeInicial = {
        id: 1,
        texto: "¡Hola! Soy tu asistente técnico. ¿En qué puedo ayudarte hoy?",
        tipo: "soporte"
      };
      setMensajes([mensajeInicial]);
    }, 500);
  }, []);

  const enviarMensaje = async () => {
    if (nuevoMensaje.trim() === "" || esperandoRespuesta) return;

    // Agregar mensaje del usuario
    const mensajeUsuario = {
      id: Date.now(),
      texto: nuevoMensaje,
      tipo: "usuario"
    };

    setMensajes(prev => [...prev, mensajeUsuario]);
    setNuevoMensaje("");
    setEsperandoRespuesta(true);

    try {
      // Simular llamada al servidor
      const respuestaServidor = await obtenerRespuestaDelServidor(nuevoMensaje);
      
      const mensajeSoporte = {
        id: Date.now() + 1,
        texto: respuestaServidor,
        tipo: "soporte"
      };
      
      setMensajes(prev => [...prev, mensajeSoporte]);
    } catch (error) {
      console.error("Error al obtener respuesta del servidor:", error);
      
      const mensajeError = {
        id: Date.now() + 1,
        texto: "Lo siento, hubo un problema al comunicarme con el servidor. Por favor, intenta nuevamente.",
        tipo: "soporte"
      };
      
      setMensajes(prev => [...prev, mensajeError]);
    } finally {
      setEsperandoRespuesta(false);
    }
  };

  // Función que simula la respuesta del servidor
  const obtenerRespuestaDelServidor = async (mensajeUsuario) => {
    // Simular delay de red
    await new Promise(resolve => setTimeout(resolve, 1000 + Math.random() * 2000));
    
    const mensaje = mensajeUsuario.toLowerCase();
    
    // Lógica del servidor para generar respuestas
    if (mensaje.includes("hola") || mensaje.includes("buenos días") || mensaje.includes("buenas")) {
      return "¡Hola! Soy tu técnico de soporte. ¿En qué puedo ayudarte?";
    } else if (mensaje.includes("fuga") || mensaje.includes("agua") || mensaje.includes("tubería")) {
      return "Entiendo el problema con la fuga. ¿Podrías decirme si ya cerraste la llave de paso principal? Esto ayudará a prevenir más daños.";
    } else if (mensaje.includes("llave") || mensaje.includes("cerré") || mensaje.includes("cerre")) {
      return "Perfecto. ¿La fuga se detuvo después de cerrar la llave? Esto me ayudará a determinar la gravedad del problema.";
    } else if (mensaje.includes("gracias") || mensaje.includes("thank you")) {
      return "¡De nada! Estoy aquí para ayudarte. ¿Hay algo más en lo que pueda asistirte?";
    } else if (mensaje.includes("precio") || mensaje.includes("costo") || mensaje.includes("cuánto") || mensaje.includes("cuanto")) {
      return "El costo depende del tipo de servicio requerido. Para una visita técnica básica inicia en $200. ¿Podrías describir más detalles del problema?";
    } else if (mensaje.includes("urgente") || mensaje.includes("emergencia") || mensaje.includes("inundación")) {
      return "Para emergencias, te recomiendo: 1) Cerrar la llave de paso principal, 2) Desconectar la electricidad en el área afectada, 3) Contactarnos al 555-1234 para envío inmediato de técnico.";
    } else if (mensaje.includes("disponibilidad") || mensaje.includes("horario") || mensaje.includes("cuándo")) {
      return "Contamos con servicio 24/7 para emergencias. Para servicios programados, el horario es de lunes a viernes de 8:00 AM a 6:00 PM.";
    } else if (mensaje.includes("garantía") || mensaje.includes("garantia")) {
      return "Todos nuestros trabajos tienen garantía de 90 días. ¿Te refieres a algún servicio específico?";
    } else if (mensaje.includes("material") || mensaje.includes("repuesto")) {
      return "Trabajamos con materiales de primera calidad. ¿Necesitas repuesto para alguna reparación específica?";
    } else {
      return "Gracias por la información. He registrado tu consulta y un técnico especializado se pondrá en contacto contigo en los próximos minutos para brindarte una solución personalizada.";
    }
  };

  return (
    <KeyboardAvoidingView 
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView 
        ref={scrollViewRef}
        contentContainerStyle={styles.scrollContent}
        onContentSizeChange={() => scrollViewRef.current?.scrollToEnd({ animated: true })}
      >
        {mensajes.map((msg) => (
          <View
            key={msg.id}
            style={[
              styles.mensajeContainer,
              msg.tipo === "usuario" ? styles.usuario : styles.soporte,
            ]}
          >
            {msg.tipo === "soporte" && (
              <Image
                source={require("../imagen/tecnico.png")}
                style={styles.avatar}
              />
            )}

            <View
              style={[
                styles.burbuja,
                msg.tipo === "usuario"
                  ? styles.burbujaUsuario
                  : styles.burbujaSoporte,
              ]}
            >
              <Text
                style={[
                  styles.texto,
                  msg.tipo === "usuario"
                    ? styles.textoUsuario
                    : styles.textoSoporte,
                ]}
              >
                {msg.texto}
              </Text>
            </View>

            {msg.tipo === "usuario" && (
              <Image
                source={require("../imagen/cliente.png")}
                style={styles.avatar}
              />
            )}
          </View>
        ))}
        
        {esperandoRespuesta && (
          <View style={[styles.mensajeContainer, styles.soporte]}>
            <Image
              source={require("../imagen/tecnico.png")}
              style={styles.avatar}
            />
            <View style={[styles.burbuja, styles.burbujaSoporte]}>
              <Text style={[styles.texto, styles.textoSoporte]}>
                Escribiendo...
              </Text>
            </View>
          </View>
        )}
      </ScrollView>

      {/* Área de escritura y envío */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          value={nuevoMensaje}
          onChangeText={setNuevoMensaje}
          placeholder="Escribe tu mensaje..."
          placeholderTextColor="#999"
          multiline
          editable={!esperandoRespuesta}
        />
        <TouchableOpacity 
          style={[
            styles.botonEnviar,
            (nuevoMensaje.trim() === "" || esperandoRespuesta) && styles.botonDeshabilitado
          ]} 
          onPress={enviarMensaje}
          disabled={nuevoMensaje.trim() === "" || esperandoRespuesta}
        >
          <Text style={styles.textoBoton}>
            {esperandoRespuesta ? "..." : "Enviar"}
          </Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#8CB3DB",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 40,
  },
  scrollContent: {
    width: "100%",
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  mensajeContainer: {
    flexDirection: "row",
    alignItems: "flex-end",
    marginVertical: 10,
  },
  soporte: {
    justifyContent: "flex-start",
  },
  usuario: {
    justifyContent: "flex-end",
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginHorizontal: 8,
  },
  burbuja: {
    maxWidth: "80%",
    padding: 10,
    borderRadius: 10,
  },
  burbujaSoporte: {
    backgroundColor: "#4A86C5",
    borderTopLeftRadius: 0,
  },
  burbujaUsuario: {
    backgroundColor: "#E8F0FE",
    borderTopRightRadius: 0,
  },
  texto: {
    fontSize: 15,
    lineHeight: 20,
  },
  textoSoporte: {
    color: "#FFFFFF",
  },
  textoUsuario: {
    color: "#2F3542",
  },
  inputContainer: {
    flexDirection: "row",
    padding: 10,
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderTopColor: "#ddd",
    alignItems: "center",
    borderRadius: 20,
  },
  textInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 20,
    paddingHorizontal: 120,
    paddingVertical: 10,
    marginRight: 10,
    maxHeight: 100,
    backgroundColor: "#f9f9f9",
  },
  botonEnviar: {
    backgroundColor: "#4A86C5",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
  },
  botonDeshabilitado: {
    backgroundColor: "#ccc",
  },
  textoBoton: {
    color: "#fff",
    fontWeight: "bold",
  },
});

export default Chat;