import { View, StyleSheet, SafeAreaView } from "react-native";
import Calculator from "../components/calculator";
import HistoryTable from "../components/history_table";


const MobileView = () => {
    return (
        <View style={styles.mainPageStyle}>
            <Calculator style={styles.calculatorStyle} />
            <HistoryTable style={styles.tableStyle} />
        </View>
    );
}

const styles = StyleSheet.create({
    mainPageStyle: {
        padding: 10,
        marginTop: 40,
        flex: 1,
    },
    tableStyle: {
        padding: 10,
        borderTopColor: "gray",
        borderTopWidth: 1,
        flex: 0.7,
    },
    calculatorStyle: {
        flex: 0.3,
    }
});

export default MobileView;