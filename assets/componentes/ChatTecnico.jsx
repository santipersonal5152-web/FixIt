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
  { id: 1, texto: "¡Hola! Soy Ana, tengo un problema con una tubería en mi baño.", tipo: "cliente" },
];

const ChatTecnico = () => {
  const [mensajes, setMensajes] = useState(mensajesIniciales);
  const [nuevoMensaje, setNuevoMensaje] = useState("");
  const [esperandoRespuesta, setEsperandoRespuesta] = useState(false);
  const scrollViewRef = useRef();

  // Simular mensaje inicial del cliente
  useEffect(() => {
    setTimeout(() => {
      const mensajeInicial = {
        id: 1,
        texto: "¡Hola! Soy Ana, tengo un problema con una tubería en mi baño.",
        tipo: "cliente"
      };
      setMensajes([mensajeInicial]);
    }, 500);
  }, []);

  const enviarMensaje = async () => {
    if (nuevoMensaje.trim() === "" || esperandoRespuesta) return;

    // Agregar mensaje del técnico (tú)
    const mensajeTecnico = {
      id: Date.now(),
      texto: nuevoMensaje,
      tipo: "tecnico"
    };

    setMensajes(prev => [...prev, mensajeTecnico]);
    setNuevoMensaje("");
    setEsperandoRespuesta(true);

    try {
      // Simular respuesta del cliente
      const respuestaCliente = await obtenerRespuestaDelCliente(nuevoMensaje);
      
      const mensajeCliente = {
        id: Date.now() + 1,
        texto: respuestaCliente,
        tipo: "cliente"
      };
      
      setMensajes(prev => [...prev, mensajeCliente]);
    } catch (error) {
      console.error("Error al obtener respuesta del cliente:", error);
      
      const mensajeError = {
        id: Date.now() + 1,
        texto: "El cliente no está respondiendo en este momento. Intenta más tarde.",
        tipo: "cliente"
      };
      
      setMensajes(prev => [...prev, mensajeError]);
    } finally {
      setEsperandoRespuesta(false);
    }
  };

  // Función que simula la respuesta del cliente
  const obtenerRespuestaDelCliente = async (mensajeTecnico) => {
    // Simular delay de respuesta del cliente
    await new Promise(resolve => setTimeout(resolve, 1500 + Math.random() * 2000));
    
    const mensaje = mensajeTecnico.toLowerCase();
    
    // Lógica de respuestas del cliente basada en lo que pregunta el técnico
    if (mensaje.includes("hola") || mensaje.includes("buenos días") || mensaje.includes("buenas")) {
      return "Hola, gracias por contactarme. Como le decía, tengo un problema con una tubería.";
    } else if (mensaje.includes("problema") || mensaje.includes("qué pasa") || mensaje.includes("que pasa")) {
      return "Hay agua saliendo de una tubería debajo del lavamanos. El piso del baño se está mojando.";
    } else if (mensaje.includes("llave") || mensaje.includes("agua") || mensaje.includes("cerrar")) {
      return "Sí, ya cerré la llave de paso general, pero sigue goteando un poco.";
    } else if (mensaje.includes("cuándo") || mensaje.includes("cuando") || mensaje.includes("hora")) {
      return "Prefiero en la mañana, ¿puede venir mañana entre 9 y 12?";
    } else if (mensaje.includes("dirección") || mensaje.includes("direccion") || mensaje.includes("dónde") || mensaje.includes("donde")) {
      return "Vivo en Calle Principal #123, colonia Centro. Es una casa blanca con portón negro.";
    } else if (mensaje.includes("precio") || mensaje.includes("costo") || mensaje.includes("cuánto") || mensaje.includes("cuanto")) {
      return "¿Cuánto me costaría la reparación? Es que tengo un presupuesto limitado.";
    } else if (mensaje.includes("emergencia") || mensaje.includes("urgente")) {
      return "Sí, es urgente porque el agua está llegando al pasillo. ¿Puede venir hoy?";
    } else if (mensaje.includes("material") || mensaje.includes("repuesto")) {
      return "No tengo repuestos, necesito que usted traiga todo lo necesario.";
    } else if (mensaje.includes("baño") || mensaje.includes("baño") || mensaje.includes("lavamanos")) {
      return "Es el baño principal, el de visitas. El lavamanos es de porcelana blanca.";
    } else if (mensaje.includes("gracias") || mensaje.includes("thank you")) {
      return "Gracias a usted por la ayuda. Espero su visita entonces.";
    } else if (mensaje.includes("teléfono") || mensaje.includes("telefono") || mensaje.includes("contacto")) {
      return "Mi número es 555-123-4567. Puede llamarme antes de venir.";
    } else if (mensaje.includes("confirmar") || mensaje.includes("confirmación")) {
      return "Sí, confirmo que estaré en casa. Le espero mañana a las 10 am.";
    } else {
      const respuestasGenericas = [
        "Entiendo, ¿podría explicarme eso de otra manera?",
        "No estoy segura de entender completamente. ¿Podría ser más específico?",
        "Vale, tomé nota. ¿Qué más necesita saber?",
        "De acuerdo, ¿hay algo más que deba hacer mientras llega?",
        "Perfecto, gracias por la información. ¿Algo más?",
        "Entendido. ¿Cuál es el siguiente paso?"
      ];
      return respuestasGenericas[Math.floor(Math.random() * respuestasGenericas.length)];
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
              msg.tipo === "tecnico" ? styles.tecnico : styles.cliente,
            ]}
          >
            {msg.tipo === "cliente" && (
              <Image
                source={require("../imagen/cliente.png")}
                style={styles.avatar}
              />
            )}

            <View
              style={[
                styles.burbuja,
                msg.tipo === "tecnico"
                  ? styles.burbujaTecnico
                  : styles.burbujaCliente,
              ]}
            >
              <Text
                style={[
                  styles.texto,
                  msg.tipo === "tecnico"
                    ? styles.textoTecnico
                    : styles.textoCliente,
                ]}
              >
                {msg.texto}
              </Text>
            </View>

            {msg.tipo === "tecnico" && (
              <Image
                source={require("../imagen/tecnico.png")}
                style={styles.avatar}
              />
            )}
          </View>
        ))}
        
        {esperandoRespuesta && (
          <View style={[styles.mensajeContainer, styles.cliente]}>
            <Image
              source={require("../imagen/cliente.png")}
              style={styles.avatar}
            />
            <View style={[styles.burbuja, styles.burbujaCliente]}>
              <Text style={[styles.texto, styles.textoCliente]}>
                El cliente está escribiendo...
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
          placeholder="Escribe tu mensaje como técnico..."
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
  cliente: {
    justifyContent: "flex-start",
  },
  tecnico: {
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
  burbujaCliente: {
    backgroundColor: "#E8F0FE",
    borderTopLeftRadius: 0,
  },
  burbujaTecnico: {
    backgroundColor: "#4A86C5",
    borderTopRightRadius: 0,
  },
  texto: {
    fontSize: 15,
    lineHeight: 20,
  },
  textoCliente: {
    color: "#2F3542",
  },
  textoTecnico: {
    color: "#FFFFFF",
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

export default ChatTecnico;