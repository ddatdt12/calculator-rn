import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Button,
  TouchableOpacity,
} from "react-native";
import SearchBar from "./SearchBar";
import PropTypes from "prop-types";
import { IconButton } from "react-native-paper";
import { useEffect, useState } from "react";
import HighlightText from "./HighlightText";
import CButton from "./CButton";

HistoryTable.prototype = {
  listData: PropTypes.array,
  onClickItem: PropTypes.func,
  id: PropTypes.number,
  onRemoveItem: PropTypes.func,
  onRemoveList: PropTypes.func,
};

HistoryTable.defaultProps = {
  listData: [],
  onClickItem: null,
  id: null,
  onRemoveItem: null,
  onRemoveList: null,
};

function HistoryTable({
  listData,
  onClickItem,
  id,
  onRemoveItem,
  onRemoveList,
}) {
  const [expressions, setExpressions] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    let newList = listData.filter((item) =>
      (item.data + item.result)
        .toLowerCase()
        .includes(searchTerm.replace(" ", "").toLowerCase())
    );

    setExpressions(newList);
  }, [searchTerm, listData]);

  return (
    <View style={styles.tableBorderStyle}>
      {listData.length != 0 ? (
        <>
          <SearchBar
            value={searchTerm}
            onChangeText={(value) => setSearchTerm(value)}
          />
          <FlatList
            data={expressions}
            renderItem={({ item, index }) => (
              <TouchableOpacity onPress={() => onClickItem(index)}>
                <View
                  style={id == index ? styles.container2 : styles.container1}
                >
                  <View>
                    <IconButton
                      icon="close"
                      size={20}
                      style={styles.button}
                      color="red"
                      backgroundColor="red"
                      onPress={() => onRemoveItem(index)}
                    />
                  </View>
                  <View style={styles.item}>
                    <HighlightText
                      text={item.data}
                      highlight={searchTerm}
                      style={styles.dataStyle}
                    />
                    <HighlightText
                      text={item.result + ""}
                      highlight={searchTerm}
                      style={styles.resultStyle}
                    />
                  </View>
                </View>
              </TouchableOpacity>
            )}
          />
          <CButton
            onPress={() => onRemoveList()}
            style={{ backgroundColor: "red", padding: 20 }}
            title="Clear all!!!"
          />
        </>
      ) : (
        <Text style={styles.dataStyle}>No data found</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  dataStyle: {
    fontSize: 24,
    textAlign: "center",
  },
  resultStyle: {
    fontSize: 20,
  },
  container1: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    marginRight: 10,
    marginBottom: 10,
  },
  container2: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    marginRight: 10,
    marginBottom: 10,
    backgroundColor: "#f0ffff",
  },
  button: {
    marginTop: 15,
  },
  item: {
    alignItems: "flex-end",
  },
  tableBorderStyle: {
    height: 500,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 20,
    padding: 10,
  },
});

export default HistoryTable;
