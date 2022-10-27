import { TextInput, StyleSheet } from "react-native";

const SearchBar = (props) => {
  return (
    <TextInput
      placeholder="Search here"
      style={styles.searchStyle}
      {...props}
    />
  );
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
