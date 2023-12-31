import { View, StyleSheet,Text, ScrollView } from "react-native"
import { Table, TableWrapper, Row, Rows, Col } from 'react-native-table-component';
import { dadoTipo } from "../../screens/listaProfissional";
import {FlatList} from "react-native";


export const TabelaProfissional = ({ dados }: {dados: dadoTipo}) => {
    return (
        <ScrollView horizontal={true} style={{width: "95%", marginLeft: "auto", marginRight: "auto"}}>
            <View style={styles.container}>
                    <View style={styles.row}>
                        <Text style={styles.textRowHeaderCodigo}>ID</Text>
                        <Text style={styles.textRowHeader}>Nome</Text>
                        <Text style={styles.textRowHeaderCodigo}>Profissão</Text>
                        <Text style={styles.textRowHeader}>Telefone</Text>
                        <Text style={styles.textRowHeader}>Email</Text>
                    </View>
                    {dados.map((item, index) => (
                        <View key={index} style={styles.row}>
                            <Text style={styles.textRowCodigo}>{String(item.id)}</Text>
                            <Text style={styles.textRow}>{item.nome}</Text>
                            <Text style={styles.textRowCodigo}>{String(item.tipoDeProfissional)}</Text>
                            <Text style={styles.textRow}>{item.telefone}</Text>
                            <Text style={styles.textRow}>{item.email}</Text>
                        </View>
                    ))}
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        width: 700,
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

export default TabelaProfissional;