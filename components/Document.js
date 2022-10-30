import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, View, Text, TextInput } from "react-native";

const rawStrSymbols = [
  "+ | Addition Operator eg. 2+3 results 5",
  "- | Subtraction Operator eg. 2-3 results -1",
  "/ | Division operator eg 3/2 results 1.5",
  "* | Multiplication Operator eg. 2*3 results 6",
  "Mod | Modulus Operator eg. 3 Mod 2 results 1",
  "( | Opening Parenthesis",
  ") | Closing Parenthesis",
  "& | Bitwise AND eg. 3&1 results 1",
  "Sigma | Summation eg. Sigma(1,100,n) results 5050",
  "Pi | Product eg. Pi(1,10,n) results 3628800",
  "n | Variable for Summation or Product",
  "pi | Math constant pi returns 3.14",
  "e | Math constant e returns 2.71",
  "C | Combination operator eg. 4C2 returns 6",
  "P | Permutation operator eg. 4P2 returns 12",
  "! | factorial operator eg. 4! returns 24",
  "log | logarithmic function with base 10 eg. log 1000 returns 3",
  "ln | natural log function with base e eg. ln 2 returns .3010",
  "pow | power function with two operator pow(2,3) returns 8",
  "^ | power operator eg. 2^3 returns 8",
  "root | underroot function root 4 returns 2",
  "sin | Sine function",
  "cos | Cosine function",
  "tan | Tangent function",
  "asin | Inverse Sine function",
  "acos | Inverse Cosine function",
  "atan | Inverse Tangent function",
  "sinh | Hyperbolic Sine function",
  "cosh | Hyperbolic Cosine function",
  "tanh | Hyperbolic Tangent function",
  "asinh | Inverse Hyperbolic Sine function",
  "acosh | Inverse Hyperbolic Cosine function",
  "atanh | Inverse Hyperbolic Tangent function",
];
const DATA = rawStrSymbols.map((str) => {
  const [symbol, explanation] = str.split(" | ");
  return { symbol, explanation };
});

const Item = ({ symbol, explanation }) => (
  <View style={styles.item}>
    <Text style={styles.symbol}>{symbol}</Text>
    <Text style={styles.explanation}>{explanation}</Text>
  </View>
);

const Document = () => {
  const [show, setShow] = useState(false);
  const [symbols, setSymbols] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    let newList = DATA.filter((item) =>
      (item.symbol + item.explanation)
        .toLowerCase()
        .includes(searchTerm.replace(" ", "").toLowerCase())
    );

    setSymbols(newList);
  }, [searchTerm]);

  const renderItem = ({ item }) => <Item {...item} />;
  return (
    <View>
      <Text
        style={{
          fontSize: 32,
          ...(show && { textDecorationLine: "underline" }),
        }}
        onPress={() => setShow(!show)}
      >
        Document
      </Text>
      {show && (
        <>
          <TextInput
            placeholder="Search symbol here"
            style={styles.searchInput}
            value={searchTerm}
            onChangeText={(text) => setSearchTerm(text)}
          />
          <FlatList
            data={symbols}
            renderItem={renderItem}
            keyExtractor={(item) => item.symbol}
            style={{ maxHeight: 260 }}
          />
        </>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    // backgroundColor: "#f9c2ff",
    paddingHorizontal: 20,
    marginVertical: 8,
    flexDirection: "row",
  },
  symbol: {
    fontSize: 20,
    marginRight: 30,
  },
  explanation: {
    fontSize: 20,
  },
  searchInput: {
    borderWidth: 1,
    borderRadius: 6,
    marginVertical: 5,
    padding: 4,
    fontSize: 20,
    marginVertical: 4,
  },
});

export default Document;
