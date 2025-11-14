import { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";


const Formulario = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Usuario</Text>

      <View style={styles.formGroup}>
        <Text style={styles.label}>Tu Nombre</Text>
        <TextInput style={styles.input} placeholder="" />
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.label}>Teléfono</Text>
        <TextInput style={styles.input} keyboardType="phone-pad" />
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.label}>Correo Electrónico</Text>
        <TextInput style={styles.input} keyboardType="email-address" />
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.label}>Contraseña</Text>
        <TextInput style={styles.input} secureTextEntry />
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.label}>Cédula</Text>
        <TextInput style={styles.input} keyboardType="numeric" />
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.label}>Dirección de Residencia</Text>
        <TextInput style={styles.input} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "90%",
    backgroundColor: "#8CB3DB",
    borderRadius: 15,
    padding: 20,
    alignSelf: "center",
  },
  titulo: {
    fontSize: 28,
    fontWeight: "900",
    color: "#43689B",
    marginBottom: 10,
  },
  formGroup: {
    marginBottom: 10,
  },
  label: {
    fontSize: 16,
    fontWeight: "700",
    color: "#000",
    marginBottom: 5,
  },
  input: {
    backgroundColor: "#fff",
    borderRadius: 15,
    paddingVertical: 10,
    paddingHorizontal: 15,
    fontSize: 16,
  },
});

export default Formulario;