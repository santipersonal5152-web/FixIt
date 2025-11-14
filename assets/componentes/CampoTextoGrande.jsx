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
  label = "Campo",
  valorInicial = "",
  onChangeText = () => {},
  colorFondo = "#E6F2FF",
  colorTexto = "#000",
  mostrarBotonEditar = true,
  formato = "bloque", // "bloque" es el diseño por defecto
}) {
  const [valor, setValor] = useState(valorInicial);
  const [editable, setEditable] = useState(false);

  const toggleEditable = () => setEditable(!editable);

  const handleChange = (text) => {
    setValor(text);
    onChangeText(text);
  };

  return (
    <View style={[styles.card, { backgroundColor: colorFondo }]}>
      {/* Encabezado con label y botón */}
      <View style={styles.encabezado}>
        <Text style={styles.label}>{label}</Text>
        {mostrarBotonEditar && (
          <TouchableOpacity onPress={toggleEditable}>
            <Image
              source={require("../imagen/lapiz.png")}
              style={styles.icono}
            />
          </TouchableOpacity>
        )}
      </View>

      {/* Campo de texto */}
      <TextInput
        style={[
          styles.input,
          {
            color: colorTexto,
            backgroundColor: editable ? "#FFFFFF" : "#F3F4F6",
          },
        ]}
        value={valor}
        onChangeText={handleChange}
        editable={editable}
        multiline={true}
        textAlignVertical="top"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 340,
    borderRadius: 10,
    paddingVertical: 30,
    paddingHorizontal: 12,
    marginVertical: 8,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2,
  },
  encabezado: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 6,
  },
  label: {
    fontWeight: "bold",
    fontSize: 15,
    color: "#222",
  },
  icono: {
    width: 18,
    height: 18,
    tintColor: "#333",
  },
  input: {
    borderRadius: 8,
    paddingHorizontal: 1,
    paddingVertical: 10,
    fontSize: 14,
    minHeight: 150,
    maxHeight: 120,
  },
});
