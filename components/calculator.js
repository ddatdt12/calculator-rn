import React, { useState } from 'react';
import { Text, TextInput, View, Button, StyleSheet } from 'react-native';



function Calculator(props) {

    const [text, setText] = useState('');
    const [result, setResutl] = useState('');
    return (
        <View style={props.style}>
            <TextInput
                style={styles.inputStyle}
                placeholder="Input here"
                onChangeText={newText => setText(newText)}
                defaultValue={text} />
            <Button title='Calculate Now' onPress={submitClick} />
            <Text style={styles.resultStyle}>
                {result}
            </Text>
        </View>
    );

    function submitClick() {
        if (!text) return;

        try {
            setResutl('= ' + eval(text))
        } catch (error) {
            setResutl("Invalid input")
        }
    }
}

const styles = StyleSheet.create({
    inputStyle: {
        height: 50,
        width: "100%",
        borderWidth: 1,
        borderRadius: 8,
        marginBottom: 20,
        paddingLeft: 10
    },
    resultStyle: {
        fontSize: 42,
    }
})

export default Calculator;