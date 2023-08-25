import { View, StyleSheet,Text, ScrollView } from "react-native"
import { Table, TableWrapper, Row, Rows, Col } from 'react-native-table-component';
import { dadoTipoProfissional } from "../../screens/listaTipoProfissional";
import {FlatList} from "react-native";


export const TabelaTipoProfissional = ({ dados }: {dados: dadoTipoProfissional}) => {
    return (
        <ScrollView style={{width: 300, marginLeft: "auto", marginRight: "auto"}}>
            <View style={styles.container}>
                    <View style={styles.row}>
                        <Text style={styles.textRowHeaderCodigo}>ID</Text>
                        <Text style={styles.textRowHeader}>Profissão</Text>
                    </View>
                    {dados.map((item, index) => (
                        <View key={index} style={styles.row}>
                            <Text style={styles.textRowCodigo}>{String(item.id)}</Text>
                            <Text style={styles.textRow}>{item.descricao}</Text>
                        </View>
                    ))}
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        width: 300,
        height: 550,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomColor: 'grey',
        borderBottomWidth: 1,
        paddingVertical: 5,
        borderTopLeftRadius: 20, 
        borderTopRightRadius: 5, 
    },
    textRowHeader: {
        flex: 1,
        textAlign: 'center',
        fontWeight: 'bold',
        backgroundColor: "#007bff"
    },
    textRowHeaderCodigo: {
        width: 70,
        textAlign: 'center',
        fontWeight: 'bold',
        backgroundColor: "#007bff"
    },
    textRow: {
        flex: 1,
        textAlign: 'center',
    },
    textRowCodigo: {
        width: 70,
        textAlign: 'center',
    },
});