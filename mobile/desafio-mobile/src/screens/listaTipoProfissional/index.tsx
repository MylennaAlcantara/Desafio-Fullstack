import { ScrollView, StyleSheet } from "react-native"
import { Header, Props } from "../../components/header"
import { Footer } from "../../components/footer"
import { TabelaTipoProfissional } from "../../components/tableTipoProfissional"
import { useEffect, useState } from "react"

export type dadoTipoProfissional = [{
    id: Number,                
    descricao: String,
}];

export const TipoProfissional = ({navigation}: Props) =>{
    const [dados, setDados] = useState<dadoTipoProfissional | []>([]);

    useEffect(()=>{
        async function fetchData() {
            const response = await fetch("http://192.168.3.7:8080/tipoProfissional");
            const data = await response.json();
            setDados(data);
        }    
        fetchData();
    },[]);

    return(
        <ScrollView style={Style.container}>
            <Header navigation={navigation}/>
            <TabelaTipoProfissional dados={dados as dadoTipoProfissional}/>
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