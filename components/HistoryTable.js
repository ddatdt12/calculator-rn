import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import SearchBar from "./SearchBar";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";

HistoryTable.prototype = {
  listData: PropTypes.array,
  onClickItem: PropTypes.func,
};

HistoryTable.defaultProps = {
  listData: [],
  onClickItem: null,
};

function HistoryTable({ listData, onClickItem }) {
  const [expressions, setExpressions] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    let newList = listData.filter((item) =>
      item.data
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
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => onClickItem(item)}>
                <View style={styles.historyItemStyle}>
                  <Text style={styles.dataStyle}>{item.data}</Text>
                  <Text style={styles.resultStyle}>{item.result}</Text>
                </View>
              </TouchableOpacity>
            )}
          />
        </>
      ) : (
        <Text style={styles.dataStyle}>No data found</Text>
      )}
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
    fontSize: 24,
    textAlign: "center",
  },
  resultStyle: {
    fontSize: 20,
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
