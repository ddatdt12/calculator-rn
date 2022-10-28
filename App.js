import { useState } from "react";
import { StyleSheet, useWindowDimensions, View } from "react-native";
import Calculator from "./components/Calculator";
import HistoryTable from "./components/HistoryTable";
export default function App() {
  const window = useWindowDimensions();
  const [selectedExpression, setSelectedExpression] = useState(null);
  const [listData, setListData] = useState([]);
  const [idn,setIndex] = useState([]);

  function handleOnSubmit(item) {
    const newList = [...listData];
    newList.unshift(item);
    setListData(newList);
    setIndex(idn + 1);
  }

  function handleOnRemoveItem(index) {
    const newList = [...listData];
    newList.splice(index,1);
    setListData(newList);
    setIndex();
    setSelectedExpression(null);
  }

  function handleOnRemoveList() {
    setIndex();
    console.log(12);
    setSelectedExpression(null);
    console.log(12);
    setListData([]);
  }

  return window.width > 480 ? (
    <View style={styles.mainPageStyle}>
      <View style={{ flexDirection: "row", flex: 1, justifyContent: "center" }}>
        <View style={styles.tableStyle}>
          <HistoryTable
            style={styles.tableBorderStyle}
            listData={listData}
            id={idn}
            onRemoveList={handleOnRemoveList}
            onRemoveItem={(index) => handleOnRemoveItem(index)}
            onClickItem={(index) => {
              setIndex(index);
              setSelectedExpression(listData[index]);
            }}
          />
        </View>
        <View style={styles.calculatorStyle}>
          <Calculator value={selectedExpression} onSubmit={handleOnSubmit}/>
        </View>
      </View>
    </View>
  ) : (
    <View style={mobileStyles.mainPageStyle}>
      <Calculator
        style={mobileStyles.calculatorStyle}
        value={selectedExpression}
        onSubmit={handleOnSubmit}
      />
      <HistoryTable
        style={mobileStyles.tableStyle}
        listData={listData}
        id={idn}
        onClickItem={(item) => {
          setSelectedExpression(item);
        }}
      />
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

const mobileStyles = StyleSheet.create({
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
