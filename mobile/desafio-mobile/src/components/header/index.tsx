import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View, Image } from 'react-native';

export const Header = ()=> {
  return (
    <View style={styles.container}>
        <View style={styles.contatos}>
          <Image style={styles.image} source={require("../../../public/images/icones/github_icon.png")}/>
          <Image style={styles.image} source={require("../../../public/images/icones/instagram_icon.png")}/>
          <Image style={styles.image} source={require("../../../public/images/icones/linkedin_icon.png")}/>
        </View>
        <View >
            <Text style={styles.text}>Gestor</Text>
            <View>
              <span style={styles.span}></span>
              <span style={styles.span}></span>
              <span style={styles.span}></span>
            </View>
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
    backgroundColor: '#f9f8fc',
    display: 'flex',
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold',
    color: "#007bff",
  },
  image: {
    height: 30,
    width: 30,
    margin: 5
  },
  span: {
    backgroundColor: "grey",
  }
});