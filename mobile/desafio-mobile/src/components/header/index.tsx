import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { ScrollView, StyleSheet, Text, View, Image, Modal, TouchableOpacity } from 'react-native';

export const Header = ()=> {
  const [visible, setVisible] = useState(false);
  const options = [
      "Home",
      "Profissional",
      "Tipo de Profissional"
  ]
  return (
    <View style={styles.container}>
        <View style={styles.contatos}>
          <Image style={styles.image} source={require("../../../public/images/icones/github_icon.png")}/>
          <Image style={styles.image} source={require("../../../public/images/icones/instagram_icon.png")}/>
          <Image style={styles.image} source={require("../../../public/images/icones/linkedin_icon.png")}/>
        </View>
        <View style={styles.menu}>
            <Text style={styles.text}>Gestor</Text>
            <TouchableOpacity onPress={()=> setVisible(true)}>
              <Image style={styles.image} source={require("../../../public/images/icones/linkedin_icon.png")}/>
            </TouchableOpacity>
            <Modal transparent visible={visible} >
              <View>
                {options.map((op, i)=>{
                  return(
                    <TouchableOpacity key={i}>
                      <Text>{op}</Text>
                    </TouchableOpacity>
                  )
                })}
              </View>
            </Modal>
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
  menu: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: "space-around"
  }, 
  modal: {
    flex: 1,
    backgroundColor: "red",
    width: 50,
    height: 50
  }
});