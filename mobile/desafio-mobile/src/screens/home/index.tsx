import { SafeAreaView, StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { Header, Props } from '../../components/header';
import { Footer } from '../../components/footer';
import React from 'react';


export const Home = ({navigation}: Props) => {
  return (
    <ScrollView style={styles.container}>
    <Header navigation={navigation}/> 
      <Image
        source={require("../../../public/images/trabalhadores2.jpg")}
        style={styles.imagePrincipal}
      />
      <View style={styles.topico}>
        <Image
          source={require("../../../public/images/trabalhadores.jpg")}
          style={styles.imagens}
        />
        <Text style={styles.text}>
          Profissionais:{'\n'}É possível cadastrar e editar profissionais linkando a suas profissões.
        </Text>
      </View>
      <View style={styles.topico}>
        <Text style={styles.text}>
          Profissões:{'\n'}É possível cadastrar e editar as profissões que serão utilizadas ao cadastrar um novo funcionário.
        </Text>
        <Image
          source={require("../../../public/images/profissoes.jpg")}
          style={styles.imagens}
        />
      </View>
      <Footer />
    </ScrollView>
  );
  }
  
  const styles = StyleSheet.create({
    container: {
      backgroundColor: '#fff',
    },
    imagePrincipal: {
      width: "100%",
      height: 300,
      marginTop: 0
    },
    topico: {
      width: "95%",
      flexDirection: "row",
      alignItems: "center",
      height: 200,
      margin: 5, 
    },
    imagens: {
      width: "50%",
      height: "100%",
    },
    text: {
      width: "50%", 
      marginLeft: 10,
    },
  });
  