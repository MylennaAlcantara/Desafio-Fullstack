import { ScrollView, StyleSheet } from "react-native"
import { Header, Props } from "../../components/header"
import { Footer } from "../../components/footer"
import { Table } from "../../components/table"

export const Profissional = ({navigation}: Props) =>{
    return(
        <ScrollView style={Style.container}>
            <Header navigation={navigation}/>
            <Table/>
            <Footer/>
        </ScrollView>
    )
}

const Style = StyleSheet.create({
    container: {
        flex: 1,
    }
})