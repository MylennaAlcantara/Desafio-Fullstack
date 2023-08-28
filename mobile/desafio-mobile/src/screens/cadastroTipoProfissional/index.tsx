import { StyleSheet, View, Text, TextInput, TouchableOpacity, ScrollView, ImageBackground } from "react-native";
import { Header, Props } from "../../components/header";
import { Footer } from "../../components/footer";
import { useState } from "react";

type TypeDados = {
    descricao: string,
    situacao: boolean,
    createdAt: Date
}

export const CadastroTipoProfissional = ({navigation}: Props) => {
    const timeElapsed = Date.now();
    const today = new Date(timeElapsed);
    const [inputFocus, setInputFocus] = useState<String>("");
    const [dados, setDados] = useState<TypeDados>({
        descricao: "",
        situacao: true,
        createdAt: today
    });

    async function salvarTipoProfissional() {
        fetch("http://10.0.1.107:8080/tipoProfissional/cadastrar", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(dados)
        })
        .then((resp)=>{
            if(resp.status === 201 || resp.status === 200){
                console.log("Salvo com sucesso!");
                navigation.navigate('Profissão', {name: 'Profissão'});
            }
        })
    }

    return (
        <ScrollView style={styles.container}>
            <Header navigation={navigation}/>
            <ImageBackground source={require("../../../public/images/profissoes.jpg")}  imageStyle={{opacity: 0.5}} resizeMode="cover" style={styles.content}>
                <Text style={{fontSize: 26, marginBottom: 10, fontWeight: "bold"}}>Cadastro de Profissional</Text>
                <View style={{display: "flex", flexDirection: "row"}}>
                    <View style={styles.divLabel}>
                        <Text style={styles.label} >Descrição:</Text>
                    </View>
                    <View style={styles.divInput}>
                        <TextInput value={dados.descricao} onChangeText={(e)=> setDados({...dados, descricao: e})} onFocus={()=> setInputFocus("nome")} onBlur={()=> setInputFocus("")} style={inputFocus === "nome" ? styles.inputFocus : styles.input} />
                    </View>
                </View>
                <TouchableOpacity style={styles.button} onPress={salvarTipoProfissional}><Text>Salvar</Text></TouchableOpacity>
            </ImageBackground>
            <Footer/>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
    },
    content: {
        backgroundColor: "#007bff",
        height: 500,
        justifyContent: "center",
        alignItems: "center",
    },
    divInput: {
        width: "70%",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-end",
    },
    divLabel: {
        width: "20%",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "flex-end",
        marginRight: 5,
    },
    label: {
        fontWeight: "bold",
        color: "black"
    },
    input: {
        width: "100%",
        backgroundColor: "white",
        marginBottom: 5
    },
    inputFocus: {
        width: "100%",
        borderBottomColor: "#007bff",
        borderBottomWidth: 2,
        backgroundColor: "white",
        marginBottom: 5
    },
    button: {
        width: 100,
        height: 30,
        backgroundColor: "#007bff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
        marginTop: 10
    }
})
