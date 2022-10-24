import { View, StyleSheet, Text } from "react-native";
import Calculator from "../components/Calculator";
import HistoryTable from "../components/HistoryTable";
import React, { useState } from "react";

const WebView = () => {
  const [selectedExpression, setSelectedExpression] = useState(null);
  const [listData, setListData] = useState([]);

  function handleOnSubmit(item) {
    const newList = [...listData];
    newList.unshift(item);
    setListData(newList);
  }

  return (
    <View style={styles.mainPageStyle}>
      <View style={{ flexDirection: "row", flex: 1, justifyContent: "center" }}>
        <View style={styles.tableStyle}>
          <HistoryTable
            style={styles.tableBorderStyle}
            listData={listData}
            onClickItem={(item) => {
              setSelectedExpression(item);
            }}
          />
        </View>
        <View style={styles.calculatorStyle}>
          <Calculator value={selectedExpression} onSubmit={handleOnSubmit} />
        </View>
      </View>
    </View>
  );
};

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
    alignItems: "center",
  },
  calculatorStyle: {
    width: "30%",
    marginLeft: 40,
  },
  tableStyle: {
    width: "30%",
  },
});

export default WebView;
