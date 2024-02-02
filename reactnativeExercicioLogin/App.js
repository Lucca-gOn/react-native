import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Image, TouchableOpacity } from 'react-native';
import { Video } from 'expo-av';
import Checkbox from 'expo-checkbox';

export default function App() {

  const [checado, setChecado] = useState(false);

  return (
    <View style={styles.container}>
      {/* Componente Video para o background */}
      <Video
        source={require('./assets/video.mp4')}
        rate={1.0}
        volume={0.0}
        isMuted={true}
        resizeMode="cover"
        shouldPlay
        isLooping
        style={styles.videoBackground}
      />

      <View style={styles.loginContainer}>
        {/* Tag de Imagem para a Logo */}
        <Image
          source={require("./assets/logo_teste.png")}
          style={styles.logo}
        />

        <Text style={styles.boasvindas}>Seja bem vindo(a)!</Text>

        {/* Campo de Email */}
        <View style={styles.inputView}>
          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.input}
            placeholder='Digite seu email'
          />
        </View>

        {/* Campo de Senha */}
        <View style={styles.inputView}>
          <Text style={styles.label}>Senha</Text>
          <TextInput
            style={styles.input}
            placeholder='Digite sua senha'
            secureTextEntry={true} //segurança de senha
          />
        </View>

        {/* Check box */}
        <View style={styles.checkboxContainer}>
          <View style={styles.checkBox}>
            <Checkbox
              value={checado}
              onValueChange={setChecado}
              color={checado ? '#4630EB' : undefined}
            />
            <Text style={styles.textContainerForgotPassword}>Lembrar senha</Text>
          </View>
          <TouchableOpacity>
            <Text style={styles.textContainerForgotPassword}>Esqueceu a senha?</Text>
          </TouchableOpacity>
        </View>

        {/* Botão de Login */}
        <TouchableOpacity style={styles.buttonView}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  videoBackground: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    width: '100%',
  },

  loginContainer: {
    padding: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "white",
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    alignItems: 'center',
    justifyContent: 'center',
    width: '95%',
    alignSelf: 'center',
    marginTop: '50%',
  },

  logo: {
    width: 160,
    height: 100,
    marginBottom: 20,
    resizeMode: "contain"
  },

  boasvindas: {
    fontSize: 23,
    fontWeight: "bold",
    color: "#002a65",
    marginBottom: 50,
    textTransform: "uppercase",
  },

  inputView: {
    width: "100%",
    marginBottom: 20,
  },

  label: {
    color: "gray",
    marginBottom: 5,
    marginLeft: 5,
  },

  input: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 40,
  },

  buttonView: {
    width: "80%",
    height: 35,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    borderBlockColor: "white",
    borderRadius: 40,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
  },

  buttonText: {
    fontSize: 17,
    textTransform: "uppercase",
    fontWeight: "bold",
    color: "gray",
  },

  checkboxContainer: {
    width: "100%",
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
    justifyContent: "space-between",
  },
  checkBox: {
    marginRight: 8,
    flexDirection: 'row',
    gap: 5,
    alignItems: "center"
  },

  textContainerForgotPassword:{
    color: "gray"
  }

});