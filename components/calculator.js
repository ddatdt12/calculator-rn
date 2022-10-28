import React, { useEffect, useRef, useState } from "react";
import { Text, TextInput, View, Button, StyleSheet } from "react-native";
import PropTypes from "prop-types";

Calculator.prototype = {
  value: PropTypes.object,
  onSubmit: PropTypes.func,
};

Calculator.defaultProps = {
  value: null,
  onSubmit: null,
};

function Calculator({ value, onSubmit }) {
  const textInputRef = useRef(null);
  const [text, setText] = useState("");

  const handleButtonPress = () => {
    try {
      if (!textInputRef?.current?.value) {
        setText("Please enter an expression!");
        return;
      }
      let result = eval(textInputRef.current.value);
      setText("Result: " + result);
      textInputRef.current.style = { ...styles.textInput };
      onSubmit({
        key: Math.random() * 10000,
        data: textInputRef.current.value,
        result
      });
    } catch (error) {
      setText("Invalid input");
      textInputRef.current.style.borderColor = "red";
    }
  };

  useEffect(() => {
    console.log(value);
    if (value) {
      textInputRef.current.value = value.data;
      setText("Result: " + value.result);
    } else {
      textInputRef.current.value = null;
      setText(null);
    }
  }, [value]);

  return (
    <View>
      <TextInput ref={textInputRef} style={styles.textInput} />
      <Button title="Calculate" onPress={handleButtonPress} />
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
