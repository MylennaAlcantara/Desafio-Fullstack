import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

export const Header = ()=> {
  return (
    <View style={styles.container}>
        <View style={styles.contatos}>
            <Text style={styles.text}>ico</Text>
        </View>
        <View >
            <Text style={styles.text}>Gestor</Text>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "50%",
    position: "absolute",
    top: 30,
  },
  contatos: {
    width: "100%",
    height: "10%",
    backgroundColor: '#CCC',
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold',
    color: "blue",
  }
});