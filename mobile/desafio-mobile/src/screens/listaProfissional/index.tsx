import { ScrollView, StyleSheet } from "react-native"
import { Header, Props } from "../../components/header"
import { Footer } from "../../components/footer"
import { Tabela } from "../../components/table"
import { useEffect, useState } from "react"

export type dadoTipo = [{
    id: Number,                
    nome: String,
    telefone: String,  
    email: String,    
    tipoDeProfissional: Number,
    situacao: Boolean,
    updatedAt: String,
    createdAt: String, 
}];

export const Profissional = ({navigation}: Props) =>{
    const [dados, setDados] = useState<dadoTipo | []>([]);

    useEffect(()=>{
        async function fetchData() {
            const response = await fetch("http://localhost:8080/profissional");
            const data: dadoTipo = await response.json();
            setDados(data);
        }    
        fetchData();
    },[]);

    return(
        <ScrollView style={Style.container}>
            <Header navigation={navigation}/>
            <Tabela dados={dados as dadoTipo}/>
            <Footer/>
        </ScrollView>
    )
}

const Style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white"
    }
})