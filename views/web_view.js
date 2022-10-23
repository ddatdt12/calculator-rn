import { View, StyleSheet, Text } from 'react-native';
import Calculator from '../components/calculator';
import HistoryTable from '../components/history_table';
import React, { useState } from 'react';


const WebView = () => {
    const [listData, setListData] = useState([
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
      ]);

    function addHistory(item) {
        const newList = [...listData];
        newList.shift();
        newList.push(item);
        setListData(newList);
    }

    return (
        <View style={styles.mainPageStyle}>
            <View style={{ flexDirection: "row", flex: 1, justifyContent: 'center', }}>
                <View style={styles.tableStyle}>
                    <HistoryTable style={styles.tableBorderStyle} listData={listData} />
                </View>
                <View style={styles.calculatorStyle}>
                    <Calculator listData={listData} onClickItem={addHistory}/>
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