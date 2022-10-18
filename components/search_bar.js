import { View, TextInput, StyleSheet, KeyboardAvoidingView } from "react-native";

const SearchBar = () => {
    return (
        <TextInput placeholder="Search here"
            style={styles.searchStyle} />
    );
}

const styles = StyleSheet.create({
    searchStyle: {
        borderWidth: 1,
        borderRightColor: "gray",
        borderRadius: 20,
        height: 40,
        paddingLeft: 10,
        marginBottom: 10,
    }
})

export default SearchBar;