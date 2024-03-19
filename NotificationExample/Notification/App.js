import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

//Importar os Recursos da biblioteca
import * as Notification from "expo-notifications";

//Solicitar as permissões de notidicação ao iniciar o app
Notification.requestPermissionsAsync();

//Definir como as notificações devem ser tratadas quando recebidas
Notification.setNotificationHandler({
  handleNotification: async() => ({
    //Mostra o alerta quando a notificação for recebida
    shouldShowAlert: true,

    //Ele reproduz ou não um som ao receber a notificação
    shouldPlaySound: false,

    //AConfigura número de notificações no ícone do app
    shouldSetBadge: false
  })
})

export default function App() {

  //função para lidar com chamada da notifcação
  const handleNotification = async () => {
    //Obtem o status das permissões
    const {status} = await Notification.getPermissionsAsync();

    //Verifica se o usuario concedeu permissão para notificação
    if (status !== "granted") {
      alert("Você não deixou  as notificações ativas");
      return;
    }

    //obter o token de envio de notificação 
    const token = await Notification.getExpoPushTokenAsync()
    console.log(token);

    //Agendar uma notificação para ser exibida após 5 segundo 
    await Notification.scheduleNotificationAsync({
      content:{
        title: "Hello World!",
        body:"Criando uma POC para implementar expo Notifcations"
      },
      trigger: {
        seconds: 5
      }
    })
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={handleNotification}>
        <Text style={styles.text}>Notificação</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button:{
    width: "80%",
    height: 80,
    backgroundColor: "purple",
    alignItems: 'center',
    borderRadius: 15,
    justifyContent: 'center'
  },
  text:{
    color: "#fff",
    fontSize: 24,
    fontWeight: "500"
  }

});
