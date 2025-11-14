import { StyleSheet, Text, TextInput, View } from "react-native";

const Descripcion = ({
  titulo = "Usuario",
  label = "Tu Nombre",
  placeholder = "",
  value,
  onChangeText,
  containerStyle,
  inputStyle,
}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <View style={styles.formGroup}>
        <Text style={styles.label}>{label}</Text>

        <TextInput
          style={[styles.input, inputStyle]}
          placeholder={placeholder}
          value={value}
          onChangeText={onChangeText}
          multiline={true}               // 🔹 Permite saltar a otra línea
          textAlignVertical="top"        // 🔹 Empieza a escribir desde arriba
        />
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
  formGroup: {
    marginBottom: 10,
  },
  label: {
    fontSize: 20,
    fontWeight: "500",
    color: "#000",
    marginBottom: 5,
    alignSelf: "center",
  },
  input: {
    backgroundColor: "#fff",
    borderRadius: 15,
    paddingVertical: 10,
    paddingHorizontal: 15,
    fontSize: 16,
    minHeight: 250,            // 🔹 Espacio vertical inicial
    textAlignVertical: "top",  // 🔹 Alinea el texto arriba
  },
});

export default Descripcion;
