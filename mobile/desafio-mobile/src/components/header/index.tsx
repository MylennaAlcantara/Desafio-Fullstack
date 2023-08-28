import { StatusBar } from 'expo-status-bar';
import { useRef, useState } from 'react';
import { ScrollView, StyleSheet, Text, View, Image, Modal, TouchableOpacity, SafeAreaViewBase, SafeAreaView, FlatList, Animated, Easing, TouchableWithoutFeedback } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../App';

export type ProfileScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Home',
  'Profissional'
>;

export type Props = {
  navigation: ProfileScreenNavigationProp;
};

export const Header = ({navigation}: Props)=> {
  const [visible, setVisible] = useState(false);
  const scale = useRef(new Animated.Value(0)).current;
  const [opProfissional, setOpProfissional] = useState(false);
  const [opTipo, setOpTipo] = useState(false);

  function resizeBox(to: number){
    to === 1 && setVisible(true);
    Animated.timing(scale, {
      toValue: to,
      useNativeDriver: true,
      duration: 200,
      easing: Easing.linear,
    }).start(()=> to === 0 && setVisible(false));
  }

  return (
    <View style={styles.container}>
        <View style={styles.contatos}>
          <Image style={styles.image} source={require("../../../public/images/icones/github_icon.png")}/>
          <Image style={styles.image} source={require("../../../public/images/icones/instagram_icon.png")}/>
          <Image style={styles.image} source={require("../../../public/images/icones/linkedin_icon.png")}/>
        </View>
        <View style={styles.menu}>
            <Text style={styles.text}>Gestor</Text>
            <TouchableOpacity onPress={()=>resizeBox(1)}>
              <Image style={styles.image} source={require("../../../public/images/icones/menu.png")}/>
            </TouchableOpacity>
            <Modal transparent visible={visible} >
              <SafeAreaView  style={{flex: 1}} onTouchEnd={()=>resizeBox(0)}>
                <Animated.View style={styles.popup} onTouchStart={()=>resizeBox(1)} onTouchEnd={(e) => {e.stopPropagation();}}>
                      <TouchableOpacity style={styles.opcao}>
                        <Text>Home</Text>
                      </TouchableOpacity>

                      <TouchableOpacity style={styles.opcao} onPress={()=>setOpProfissional(!opProfissional)}>
                        <Text>Profissionais</Text>
                      </TouchableOpacity>
                      {opProfissional ? (
                        <>
                          <TouchableOpacity style={styles.subOpcao} onPress={() => navigation.navigate('Profissional', {name: 'Profissional'})}>
                            <Text>Lista de Profissionais</Text>
                          </TouchableOpacity>
                          <TouchableOpacity style={styles.subOpcao} onPress={()=> navigation.navigate("CadastroProfissional", {name: "CadastroProfissional"})}>
                            <Text>Cadastro de Profissionais</Text>
                          </TouchableOpacity>
                        </>
                      ):null}
                      <TouchableOpacity style={styles.opcao} onPress={()=> setOpTipo(!opTipo)}>
                        <Text>Tipo de Profissões</Text>
                      </TouchableOpacity>
                      {opTipo ? (
                        <>
                          <TouchableOpacity style={styles.subOpcao} onPress={() => navigation.navigate('Profissão', {name: 'Profissão'})}>
                            <Text>Lista de Profissões</Text>
                          </TouchableOpacity>
                          <TouchableOpacity style={styles.subOpcao} onPress={() => navigation.navigate('CadastroProfissão', {name: 'CadastroProfissão'})}>
                            <Text>Cadastro de Profissões</Text>
                          </TouchableOpacity>
                        </>
                      ):null}
                </Animated.View>
              </SafeAreaView>
            </Modal>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 100,
  },
  contatos: {
    width: "100%",
    height: "40%",
    backgroundColor: '#f9f8fc',
    display: 'flex',
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
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
    justifyContent: "space-around",
    height: "60%",
    alignItems: "center"

  }, 
  popup: {
    backgroundColor: '#f9f8fc',
    width: 150,
    position: "absolute",
    right: 20,
    top: 150,
    display: 'flex',
    borderRadius: 10,
    alignItems: "center",
    zIndex: 3
  },
  opcao: {
    width: "90%",
    height: 35,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 3,
    borderBottomColor: "white",
    borderBottomWidth: 1
  },
  subOpcao: {
    width: "90%",
    height: 35,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 3,
    borderBottomColor: "#f9f8fc",
    borderBottomWidth: 1,
    backgroundColor: "white"
  },
});