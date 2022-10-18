import { View, Text, FlatList, StyleSheet, TouchableOpacity } from "react-native";
import SearchBar from "./search_bar";

function HistoryTable(props) {

    const listData = [
        { key: "1", data: "2+2", result: "= 4" },
        { key: "2", data: "2+3", result: "= 5" },
        { key: "3", data: "2+4", result: "= 6" },
        { key: "4", data: "2+5", result: "= 7" },
        { key: "5", data: "2+6", result: "= 8" },
        { key: "6", data: "2+7", result: "= 9" },
        { key: "7", data: "2+8", result: "= 10" },
        { key: "8", data: "2+9", result: "= 11" },
        { key: "9", data: "2+10", result: "= 12" },
        { key: "10", data: "2+21", result: "= 23" },
        { key: "11", data: "2+32", result: "= 36" },
    ];

    return (

        listData.length != 0 ?
            <View style={props.style}>
                <SearchBar />
                <FlatList data={listData}
                    renderItem={({ item }) =>
                        <TouchableOpacity>
                            <View style={styles.historyItemStyle}>
                                <Text style={styles.dataStyle}>
                                    {item.data}
                                </Text>
                                <Text style={styles.resultStyle}>
                                    {item.result}
                                </Text>
                            </View>
                        </TouchableOpacity>
                    } />
            </View>
            : <View style={props.style}>
                <Text style={styles.dataStyle}>
                    No data found
                </Text>
            </View>

    );
}

const styles = StyleSheet.create({
    historyItemStyle: {
        alignItems: "flex-end",
        marginRight: 30,
        marginBottom: 10,
    },
    dataStyle: {
        fontSize: 30,
    },
    resultStyle: {
        fontSize: 20,
    },
})


export default HistoryTable;