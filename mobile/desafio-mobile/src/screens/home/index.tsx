import { StyleSheet, Text, View } from 'react-native';
import { Header } from '../../components/header';


export const Home = () => {
    return (
      <View style={styles.container}>
        <Header/>
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
  });