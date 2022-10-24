import { useState } from "react";
import { View, StyleSheet, SafeAreaView } from "react-native";
import Calculator from "../components/Calculator";
import HistoryTable from "../components/HistoryTable";

const MobileView = () => {
  const [selectedExpression, setSelectedExpression] = useState(null);
  const [listData, setListData] = useState([]);

  function handleOnSubmit(item) {
    const newList = [...listData];
    newList.unshift(item);
    setListData(newList);
  }

  return (
    <View style={styles.mainPageStyle}>
      <Calculator
        style={styles.calculatorStyle}
        value={selectedExpression}
        onSubmit={handleOnSubmit}
      />
      <HistoryTable
        style={styles.tableStyle}
        listData={listData}
        onClickItem={(item) => {
          setSelectedExpression(item);
        }}
      />
    </View>
  );
};

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
  },
});

export default MobileView;
