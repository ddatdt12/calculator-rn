import {
  View,
  TextInput,
  StyleSheet,
  KeyboardAvoidingView,
} from "react-native";

const SearchBar = () => {
  return <TextInput placeholder="Search here" style={styles.searchStyle} />;
};

const styles = StyleSheet.create({
  searchStyle: {
    borderColor: "blue",
    borderWidth: 1,
    borderRadius: 6,
    marginVertical: 5,
    padding: 6,
    fontSize: 30,
    marginBottom: 20,
  },
});

export default SearchBar;
