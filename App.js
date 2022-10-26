import { useState } from "react";
import { StyleSheet, useWindowDimensions, View, Modal } from "react-native";
import Calculator from "./components/calculator";
import HistoryTable from "./components/HistoryTable";
export default function App() {
  const window = useWindowDimensions();
  const [selectedExpression, setSelectedExpression] = useState(null);
  const [listData, setListData] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  function handleOnSubmit(item) {
    const newList = [...listData];
    newList.unshift(item);
    setListData(newList);
  }

  return (
    <View style={styles.mainPageStyle}>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View>
        </View>
      </Modal>
      {window.width > 480 ?
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
        :
        <View style={mobileStyles.mainPageStyle}>
          <Calculator
            style={mobileStyles.calculatorStyle}
            value={selectedExpression}
            onSubmit={handleOnSubmit}
          />
          <HistoryTable
            style={mobileStyles.tableStyle}
            listData={listData}
            onClickItem={(item) => {
              setSelectedExpression(item);
            }}
          />
        </View>}
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
