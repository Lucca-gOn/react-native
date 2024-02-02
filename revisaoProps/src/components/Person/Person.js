import { Text, View, StyleSheet } from "react-native";

//componente person

//props : name, age 
//props : nome, idade
const Person = ({name, age}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Nome: {name}</Text>
            <Text>Idade: {age}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: "#e0e0e0",
      padding: 10,
      margin: 10,
      borderRadius:5
    },

    text: {
        color: "red"
    }
  });

export default Person;

