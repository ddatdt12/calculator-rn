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
import { IconButton} from "react-native-paper";

HistoryTable.prototype = {
  listData: PropTypes.array,
  onClickItem: PropTypes.func,
};

HistoryTable.defaultProps = {
  listData: [],
  onClickItem: null,
};

function HistoryTable(props) {
  const { listData, onClickItem, id, onRemoveItem, onRemoveList } = props;
  return listData.length != 0 ? (
    <View style={props.style}>
      <SearchBar />
      <FlatList
        data={listData}
        renderItem={({ item, index }) => (
          <TouchableOpacity onPress={() => onClickItem(index)}>
            <View style={id == index ? styles.container2 : styles.container1} >
              <View>
                {id == index ? <IconButton icon="delete" iconColor={"blue"} size={20} style={styles.button}
                onPress={() => onRemoveItem(index)}/> : <Text></Text>}
              </View>
              <View style={styles.item}>
                <Text style={styles.dataStyle}>{item.data}</Text>
                <Text style={styles.resultStyle}>{item.result}</Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
      <Button onPress={()=>onRemoveList()} title="Clear all!!!"/>
    </View>
  ) : (
    <View style={props.style}>
      <Text style={styles.dataStyle}>No data found</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  dataStyle: {
    fontSize: 30,
  },
  resultStyle: {
    fontSize: 20,
  },
  container1: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginRight: 10,
    marginBottom: 10,
  },
  container2: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginRight: 10,
    marginBottom: 10,
    backgroundColor: "#f0ffff"
  },
  button:{
    marginTop: 15,
  },
  item: {
    alignItems: "flex-end"
  },
});

export default HistoryTable;
