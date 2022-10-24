import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import SearchBar from "./SearchBar";
import PropTypes from "prop-types";

HistoryTable.prototype = {
  listData: PropTypes.array,
  onClickItem: PropTypes.func,
};

HistoryTable.defaultProps = {
  listData: [],
  onClickItem: null,
};

function HistoryTable(props) {
  const { listData, onClickItem } = props;
  return listData.length != 0 ? (
    <View style={props.style}>
      <SearchBar />
      <FlatList
        data={listData}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => onClickItem(item)}>
            <View style={styles.historyItemStyle}>
              <Text style={styles.dataStyle}>{item.data}</Text>
              <Text style={styles.resultStyle}>{item.result}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  ) : (
    <View style={props.style}>
      <Text style={styles.dataStyle}>No data found</Text>
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
});

export default HistoryTable;
