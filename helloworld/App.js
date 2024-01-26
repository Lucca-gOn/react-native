import { StatusBar } from 'expo-status-bar';
import { Button, Image, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  return (
    //CONTAINER
    <View style={styles.container}>
      <Text style={styles.text}>Hello, world!</Text>

      {/* INPUT */}
      <TextInput 
      style={styles.input} 
      placeholder='Exemplo de input'
      />
      
      {/* IMAGEM */}
      <Image
      source={{uri: "https://www.portaldodog.com.br/cachorros/wp-content/uploads/2022/04/fotos-comprovam-que-cachorros-sao-os-pets-mais-engracados-20032018161340130.jpeg"}}
      style={styles.image}
      />

      {/* BOTÃO */}
      <View style={styles.button}>
      <Button title="DOGUINHO"/>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 40,
  },

  text:{
    color: "white",
    fontSize: 20,
    textTransform: "uppercase",
    fontWeight: "700",
  },

  input:{
    backgroundColor: "white",
    width: "90%",
    height: 40,
    padding: 5,
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 10,
  },

  image: {
    width: "50%", 
    height: 200, 
    borderRadius: 10
  },

  button: {
    width: "60%",
    height: 40,
    backgroundColor: "white",
    borderRadius: 10,
  }
});
