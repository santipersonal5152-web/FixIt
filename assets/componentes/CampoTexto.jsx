import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";

export default function CampoTexto({
  label = "",
  valorInicial = "",
  onChangeText = () => {},
  colorFondo = "#E6F2FF",
  colorTexto = "#000",
  mostrarBotonEditar = true, // 👈 NUEVA PROP
}) {
  const [valor, setValor] = useState(valorInicial);
  const [editable, setEditable] = useState(false);

  const toggleEditable = () => setEditable(!editable);

  const handleChange = (text) => {
    setValor(text);
    onChangeText(text);
  };

  return (
    <View style={[styles.contenedor, { backgroundColor: colorFondo }]}>
      <Text style={styles.label}>{label}</Text>

      <TextInput
        style={[
          styles.input,
          {
            color: colorTexto,
            backgroundColor: editable ? "#FFF" : "#F0F0F0",
          },
        ]}
        value={valor}
        onChangeText={handleChange}
        editable={editable}
        multiline={true}
        textAlignVertical="top"
      />

      {/* Mostrar botón de edición solo si mostrarBotonEditar es true */}
      {mostrarBotonEditar && (
        <TouchableOpacity onPress={toggleEditable} style={styles.boton}>
          <Image
            source={require("../imagen/lapiz.png")}
            style={styles.icono}
          />
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 10,
    marginVertical: 5,
    width: 340,
  },
  label: {
    fontWeight: "bold",
    fontSize: 14,
    color: "#333",
    width: 80,
    marginTop: 4,
  },
  input: {
    flex: 1,
    borderRadius: 6,
    paddingHorizontal: 10,
    paddingVertical: 6,
    fontSize: 14,
    marginHorizontal: 10,
    minHeight: 36,
    maxHeight: 100,
  },
  boton: {
    padding: 6,
  },
  icono: {
    width: 20,
    height: 20,
    tintColor: "#333",
  },
});
