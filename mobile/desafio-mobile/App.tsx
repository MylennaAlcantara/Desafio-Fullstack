import { StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { Home } from './src/screens/home';
import { Profissional } from './src/screens/listaProfissional';
import { TipoProfissional } from './src/screens/listaTipoProfissional';
import { CadastroProfissional } from './src/screens/cadastroProfissional';
import { CadastroTipoProfissional } from './src/screens/cadastroTipoProfissional';

export type RootStackParamList = {
  Home: {name: string},
  Profissional: { name: string },
  Profissão: {name: string},
  CadastroProfissional: {name: string},
  CadastroProfissão: {name: string}
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Profissional" component={Profissional} />
        <Stack.Screen name="Profissão" component={TipoProfissional} />
        <Stack.Screen name="CadastroProfissional" component={CadastroProfissional}/>
        <Stack.Screen name="CadastroProfissão" component={CadastroTipoProfissional}/>
      </Stack.Navigator>
    </NavigationContainer>
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
