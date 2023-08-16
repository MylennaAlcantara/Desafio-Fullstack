import { View, StyleSheet,Text, ScrollView } from "react-native"
import { Table, TableWrapper, Row, Rows, Col } from 'react-native-table-component';
import { dadoTipo } from "../../screens/listaProfissional";
import {FlatList} from "react-native";

interface Props {
    dados: dadoTipo[];
}

export const Tabela = ({ dados }: {dados: dadoTipo}) => {
    return (
        <View style={styles.container}>
            <ScrollView horizontal={true}>
                <View style={styles.row}>
                    <Text style={styles.textRowHeader}>ID</Text>
                    <Text style={styles.textRowHeader}>Nome</Text>
                    <Text style={styles.textRowHeader}>Profissão</Text>
                    <Text style={styles.textRowHeader}>Telefone</Text>
                    <Text style={styles.textRowHeader}>Email</Text>
                </View>
                {dados.map((item, index) => (
                    <View key={index} style={styles.row}>
                        <Text style={styles.textRow}>{String(item.id)}</Text>
                        <Text style={styles.textRow}>{item.nome}</Text>
                        <Text style={styles.textRow}>{String(item.tipoDeProfissional)}</Text>
                        <Text style={styles.textRow}>{item.telefone}</Text>
                        <Text style={styles.textRow}>{item.email}</Text>
                    </View>
                ))}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 550,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomColor: 'grey',
        borderBottomWidth: 1,
        paddingVertical: 10,
    },
    textRowHeader: {
        flex: 1,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    textRow: {
        flex: 1,
        textAlign: 'center',
    },
});

export default Tabela;

/*export const Tabela = ({ dados }: { dados: dadoTipo }) => {
    const CONTENT = {
        tableHead: ['ID', 'Nome', 'Profissão', 'Telefone', 'Email'],
        tableData: [dados.map((cell)=> [cell.id, cell.nome, cell.tipoDeProfissional, cell.telefone, cell.email],)]
    };
    return(
        <View style={styles.container}>
            <ScrollView horizontal={true} style={{ flexDirection: "row", maxWidth: "100%", maxHeight: "90%" }}>
            <Table style={{ width: "100%"}}>
                <Row
                data={CONTENT.tableHead}
                flexArr={[1, 1, 1, 1, 1]}
                style={styles.head}
                textStyle={styles.text}
                />
                {CONTENT.tableData.map((rowData, index) => {
                    return(
                        <Rows
                            key={index+1}
                            data={rowData}
                            flexArr={[1, 1, 1, 1, 1]}
                            style={styles.row}
                            textStyle={styles.textRow}
                        />
                    )
                })}
            </Table>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: 550,
        justifyContent: "center",
        alignItems: "center",
    },
    head: { 
        height: 40, 
        backgroundColor: '#007bff',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    title: { 
        flex: 1, 
    },
    row: { 
        height: 28,
        borderBottomColor: "grey",
        borderBottomWidth: 1,
        justifyContent: "center",
        alignItems: "center", 
    },
    text: { 
        textAlign: 'center',
        color: "#f9f8fc"
    },
    textRow: {
        textAlign: 'center',
    }
})*/