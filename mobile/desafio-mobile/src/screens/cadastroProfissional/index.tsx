import { StyleSheet, View, Text, TextInput, TouchableOpacity, ScrollView, ImageBackground } from "react-native";
import { Header, Props } from "../../components/header";
import { Footer } from "../../components/footer";
import { useState } from "react";

type TypeDados = {
    nome: string,
    email: string,
    telefone: string,
    profissao: string
}

export const CadastroProfissional = ({navigation}: Props) => {
    const [inputFocus, setInputFocus] = useState<String>("");
    const [dados, setDados] = useState<TypeDados>({
        nome: "",
        email: "",
        telefone: "",
        profissao: ""
    });

    async function salvarProfissional() {
        fetch("http://localhost:8080/profissional/cadastrar", {
            method: "POST",
            headers: {"content-type": "application/json"},
            body: JSON.stringify(dados)
        })
        .then((resp)=>{
            if(resp.status === 201 || resp.status === 200){
                alert("Salvo com sucesso!");
                navigation.navigate('Profissão', {name: 'Profissão'});
            }
        })
    }

    return (
        <ScrollView style={styles.container}>
            <Header navigation={navigation}/>
            <ImageBackground source={require("../../../public/images/trabalhadores.jpg")}  imageStyle={{opacity: 0.5}} resizeMode="cover" style={styles.content}>
                <Text style={{fontSize: 26, marginBottom: 10, fontWeight: "bold"}}>Cadastro de Profissional</Text>
                <View style={{display: "flex", flexDirection: "row"}}>
                    <View style={styles.divLabel}>
                        <Text style={styles.label} >Nome:</Text>
                        <Text style={styles.label} >Email:</Text>
                        <Text style={styles.label} >Telefone:</Text>
                        <Text style={styles.label} >Profissão:</Text>
                    </View>
                    <View style={styles.divInput}>
                        <TextInput value={dados.nome} onChangeText={(e)=> setDados({...dados, nome: e})} onFocus={()=> setInputFocus("nome")} onBlur={()=> setInputFocus("")} style={inputFocus === "nome" ? styles.inputFocus : styles.input} />
                        <TextInput value={dados.email} onChangeText={(e)=> setDados({...dados, email: e})} onFocus={()=> setInputFocus("email")} onBlur={()=> setInputFocus("")} style={inputFocus === "email" ? styles.inputFocus : styles.input} />
                        <TextInput value={dados.telefone} onChangeText={(e)=> setDados({...dados, telefone: e})} onFocus={()=> setInputFocus("telefone")} onBlur={()=> setInputFocus("")} style={inputFocus === "telefone" ? styles.inputFocus : styles.input} />
                        <TextInput value={dados.profissao} onChangeText={(e)=> setDados({...dados, profissao: e})} onFocus={()=> setInputFocus("profissao")} onBlur={()=> setInputFocus("")} style={inputFocus === "profissao" ? styles.inputFocus : styles.input} />
                    </View>
                </View>
                <TouchableOpacity style={styles.button} onPress={salvarProfissional}><Text>Salvar</Text></TouchableOpacity>
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
