import { View, StyleSheet, Text } from 'react-native';
import Calculator from '../components/calculator';
import HistoryTable from '../components/history_table';


const WebView = () => {
    return (
        <View style={styles.mainPageStyle}>
            <View style={{ flexDirection: "row", flex: 1, justifyContent: 'center', }}>
                <View style={styles.tableStyle}>
                    <HistoryTable style={styles.tableBorderStyle} />
                </View>
                <View style={styles.calculatorStyle}>
                    <Calculator />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    tableBorderStyle: {
        height: 500,
        borderColor: "gray",
        borderWidth: 1,
        borderRadius: 20,
        padding: 10,
    },
    mainPageStyle: {
        flexDirection: "row",
        flex: 1,
        justifyContent: "center",
        alignItems: 'center',
    },
    calculatorStyle: {
        width: "30%",
        marginLeft: 40,
    },
    tableStyle: {
        width: "30%",
    }
})


export default WebView;