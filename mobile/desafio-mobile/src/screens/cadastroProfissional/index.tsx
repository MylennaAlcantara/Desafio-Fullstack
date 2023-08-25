import {StyleSheet, View, Text, TextInput, TouchableOpacity} from "react-native";

export const CadastroProfissional = () =>{
    return(
        <View style={styles.container}>
           <View>
            <Text>Nome:</Text>
            <TextInput></TextInput>
           </View>
           <View>
            <Text>Email:</Text>
            <TextInput></TextInput>
           </View>
           <View>
            <Text>Telefone:</Text>
            <TextInput></TextInput>
           </View>
           <View style={styles.div}>
            <Text>Profissão:</Text>
            <TextInput style={styles.input}></TextInput>
           </View>
           <TouchableOpacity><Text>Salvar</Text></TouchableOpacity>
        </View>
    )
    }
    const styles = StyleSheet.create({
        container: {
            flex: 1
        },
        div: {
            width: "95%",
            display: "flex",
            flexDirection: "row"
        },
        input: {
            width: "90%"
        }
    })
