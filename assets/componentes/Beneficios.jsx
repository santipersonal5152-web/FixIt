import { useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const BeneficioCard = ({
  // Props con valores por defecto
  titulo = "Cubrir horarios nocturnos",
  descuento = "20%",
  textoAdicional = "adicional\npor servicio",
  textoBoton = "Obtener",
  iconoCheck = require("../imagen/check.png"),
  obtenidoInicial = false,
  onEstadoCambiado,
  // Estilos personalizables
  estiloContenedor,
  estiloCard,
  estiloTitulo,
  estiloDescuentoBox,
  estiloTextoDescuento,
  estiloTextoAdicional,
  estiloBoton,
  estiloTextoBoton,
  // Colores personalizables
  colorBotonObtenido = "#61C174",
  colorBotonNoObtenido = "#F44336",
  colorFondoCard = "#E8F0FE",
  colorFondoDescuento = "#FF9800",
  colorTexto = "#000",
  colorTextoDescuento = "#fff",
}) => {
  const [obtenido, setObtenido] = useState(obtenidoInicial);

  const handlePress = () => {
    const nuevoEstado = !obtenido;
    setObtenido(nuevoEstado);
    
    // Callback para notificar el cambio de estado
    if (onEstadoCambiado) {
      onEstadoCambiado(nuevoEstado);
    }
  };

  return (
    <View style={[styles.container, estiloContenedor]}>
      <View style={[styles.card, { backgroundColor: colorFondoCard }, estiloCard]}>
        {/* Contenido principal */}
        <View style={styles.textContainer}>
          <Text style={[styles.title, { color: colorTexto }, estiloTitulo]}>
            {titulo}
          </Text>
          <View style={[
            styles.discountBox, 
            { backgroundColor: colorFondoDescuento }, 
            estiloDescuentoBox
          ]}>
            <Text style={[
              styles.discountText, 
              { color: colorTextoDescuento }, 
              estiloTextoDescuento
            ]}>
              {descuento}
            </Text>
            <Text style={[
              styles.discountSub, 
              { color: colorTextoDescuento }, 
              estiloTextoAdicional
            ]}>
              {textoAdicional}
            </Text>
          </View>
        </View>

        {/* Botón dinámico */}
        <TouchableOpacity
          style={[
            styles.button,
            obtenido 
              ? { backgroundColor: colorBotonObtenido } 
              : { backgroundColor: colorBotonNoObtenido },
            estiloBoton
          ]}
          onPress={handlePress}
        >
          {obtenido ? (
            <Image
              source={iconoCheck}
              style={styles.iconoCheck}
            />
          ) : (
            <Text style={[styles.buttonText, estiloTextoBoton]}>
              {textoBoton}
            </Text>
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginTop: 30,
  },
  card: {
    width: 300,
    backgroundColor: "#E8F0FE",
    borderRadius: 15,
    shadowColor: "#000",
    shadowOpacity: 0.25,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 4 },
    elevation: 5,
  },
  textContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    color: "#000",
    flex: 1,
    flexWrap: "wrap",
  },
  discountBox: {
    backgroundColor: "#FF9800",
    borderRadius: 15,
    paddingVertical: 10,
    paddingHorizontal: 12,
    alignItems: "center",
    justifyContent: "center",
    width: 120,
  },
  discountText: {
    fontSize: 20,
    color: "#fff",
    fontWeight: "bold",
  },
  discountSub: {
    fontSize: 15,
    color: "#fff",
    textAlign: "center",
  },
  button: {
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    paddingVertical: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  iconoCheck: {
    width: 20,
    height: 20,
    tintColor: "#fff",
  },
});

export default BeneficioCard;