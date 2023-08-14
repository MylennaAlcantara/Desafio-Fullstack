import { View, StyleSheet,Text } from "react-native"
import { Table, TableWrapper, Row, Rows, Col } from 'react-native-table-component';
import { dadoTipo } from "../../screens/listaProfissional";

const CONTENT = {
    tableHead: ['Column 1', 'Column 2', 'Column 3'],
    tableData: [
      ['1', '2', '3'],
      ['a', 'b', 'c'],
      ['1', '2', '3'],
      ['a', 'b', 'c'],
    ],
};

export const Tabela = ({ dados }: { dados: dadoTipo }) => {
    return(
        <View style={styles.container}>
            {dados.map((i)=> <Text>{i.nome}</Text>)}
            <Table style={{ width: "90%", margin: "auto" }}>
                <Row
                data={CONTENT.tableHead}
                flexArr={[1, 1, 1]}
                style={styles.head}
                textStyle={styles.text}
                />
                <TableWrapper style={styles.wrapper}>
                    <Rows
                        data={CONTENT.tableData}
                        flexArr={[1, 2, 1]}
                        style={styles.row}
                        textStyle={styles.textRow}
                    />
                </TableWrapper>
            </Table>
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
    wrapper: { 
        flexDirection: 'row' 
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
})