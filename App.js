import { StyleSheet, useWindowDimensions, View, Modal } from "react-native";
import Calculator from "./components/Calculator";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import HistoryTable from "./components/HistoryTable";
import Document from "./components/Document";

export default function App() {
  const window = useWindowDimensions();
  const [selectedExpression, setSelectedExpression] = useState(null);
  const [listData, setListData] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [idn, setIndex] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const value = await AsyncStorage.getItem("EXPRESSION_LIST");
        if (value !== null) {
          console.log(value);
          const previousData = JSON.parse(value);
          if (Array.isArray(previousData)) {
            setListData(previousData);
          }
        }
      } catch (e) {
        console.log("getItem:", e);
      }
    })();
  }, []);

  useEffect(() => {
    (async () => {
      try {
        const jsonValue = JSON.stringify(listData);
        await AsyncStorage.setItem("EXPRESSION_LIST", jsonValue);
      } catch (e) {
        console.log("setItem:", e);
      }
    })();
  }, [listData]);

  function handleOnSubmit(item) {
    const newList = [...listData];
    newList.unshift(item);
    setListData(newList);
    setIndex(idn + 1);
  }

  function handleOnRemoveItem(index) {
    const newList = [...listData];
    newList.splice(index, 1);
    setListData(newList);
    setIndex();
    setSelectedExpression(null);
  }

  function handleOnRemoveList() {
    setIndex();
    setSelectedExpression(null);
    setListData([]);
  }

  return (
    <View style={styles.mainPageStyle}>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View></View>
      </Modal>
      {window.width > 480 ? (
        <View style={styles.mainPageStyle}>
          <View
            style={{ flexDirection: "row", flex: 1, justifyContent: "center" }}
          >
            <View style={styles.tableStyle}>
              <HistoryTable
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
              <Calculator
                style={mobileStyles.calculatorStyle}
                value={selectedExpression}
                onSubmit={handleOnSubmit}
              />
              <Document />
            </View>
          </View>
        </View>
      ) : (
        <>
          <Calculator
            style={mobileStyles.calculatorStyle}
            value={selectedExpression}
            onSubmit={handleOnSubmit}
          />
          <HistoryTable
            style={mobileStyles.tableStyle}
            listData={listData}
            id={idn}
            onRemoveList={handleOnRemoveList}
            onRemoveItem={(index) => handleOnRemoveItem(index)}
            onClickItem={(index) => {
              setIndex(index);
              setSelectedExpression(listData[index]);
            }}
          />
          <Document />
        </>
      )}
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
