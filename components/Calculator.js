import React, { useEffect, useRef, useState } from "react";
import { Text, TextInput, View, Button, StyleSheet } from "react-native";
import PropTypes from "prop-types";
import CButton from "./CButton";
import uuid from "react-native-uuid";
Calculator.prototype = {
  value: PropTypes.object,
  onSubmit: PropTypes.func,
};

Calculator.defaultProps = {
  value: null,
  onSubmit: null,
};

function Calculator({ value, onSubmit }) {
  const [expression, setExpression] = useState("");
  const [haveError, setHaveError] = useState(false);
  const [text, setText] = useState("");

  const handleButtonPress = () => {
    try {
      if (!expression.trim()) {
        setText("Please enter an expression!");
        setHaveError(true);

        return;
      }
      setHaveError(false);
      const expressionStr = expression.replace(/\s/g, "");

      let result = eval(expressionStr);
      setText("Result: " + result);
      onSubmit({
        key: uuid.v4(),
        data: expressionStr,
        result,
      });
    } catch (error) {
      setHaveError(true);
      setText("Invalid input");
    }
  };

  useEffect(() => {
    if (value != null) {
      setExpression(value.data);
      setText("Result: " + value.result);
    } else {
      console.log(123);
      setExpression("");
      setText(null);
    }
  }, [value]);

  return (
    <View>
      <TextInput
        value={expression}
        onChangeText={(text) => setExpression(text)}
        style={{
          ...styles.textInput,
          borderColor: haveError ? "red" : "black",
        }}
      />
      <CButton title="Calculate" onPress={handleButtonPress} />
      {text ? (
        <Text style={{ fontSize: 30, marginTop: 20 }}>{text}</Text>
      ) : (
        <></>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  inputStyle: {
    height: 50,
    width: "100%",
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 20,
    paddingLeft: 10,
  },
  resultStyle: {
    fontSize: 42,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 40,
  },
  error: {
    color: "red",
    marginBottom: 10,
    fontSize: 20,
  },
  textInput: {
    borderColor: "blue",
    borderWidth: 1,
    marginVertical: 10,
    padding: 10,
    fontSize: 30,
    marginBottom: 20,
    borderRadius: 6,
  },
});

export default Calculator;
