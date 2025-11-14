import { StyleSheet, Text, View } from "react-native";

const ServicioAdicional = ({
  // Props con valores por defecto
  porcentaje = "20%",
  textoAdicional = "adicional\npor servicio",
  // Estilos personalizables
  estiloContenedor,
  estiloPorcentajeBox,
  estiloTextoPorcentaje,
  estiloTextoAdicional,
  // Colores personalizables
  colorFondoPorcentaje = "#FF9800",
  colorTextoPorcentaje = "#fff",
}) => {
  return (
    <View style={[styles.container, estiloContenedor]}>
      <View style={[
        styles.porcentajeBox, 
        { backgroundColor: colorFondoPorcentaje }, 
        estiloPorcentajeBox
      ]}>
        <Text style={[
          styles.porcentajeText, 
          { color: colorTextoPorcentaje }, 
          estiloTextoPorcentaje
        ]}>
          {porcentaje}
        </Text>
        <Text style={[
          styles.textoAdicional, 
          { color: colorTextoPorcentaje }, 
          estiloTextoAdicional
        ]}>
          {textoAdicional}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  porcentajeBox: {
    backgroundColor: "#FF9800",
    borderRadius: 15,
    paddingVertical: 10,
    paddingHorizontal: 12,
    alignItems: "center",
    justifyContent: "center",
    minWidth: 100,
  },
  porcentajeText: {
    fontSize: 20,
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
  },
  textoAdicional: {
    fontSize: 18,
    color: "#fff",
    textAlign: "center",
    textTransform: "lowercase",
  },
});

export default ServicioAdicional;