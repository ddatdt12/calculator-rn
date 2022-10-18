
import { useWindowDimensions } from 'react-native';
import MobileView from './views/mobile_view';
import WebView from './views/web_view';

export default function App() {
  const window = useWindowDimensions();

  return (
    window.width > 480 ? <WebView /> : <MobileView />
  );
}






// import { useRef, useState } from "react";
// import { Button, StyleSheet, Text, TextInput, View } from "react-native";

// export default function App() {
//   const textInputRef = useRef(null);
//   const [text, setText] = useState("");

//   const handleButtonPress = () => {
//     try {
//       if (!textInputRef?.current?.value) {
//         setText("Please enter an expression!");
//         return;
//       }
//       let result = eval(textInputRef.current.value);
//       setText("Result: " + result);
//       textInputRef.current.style = { ...styles.textInput };
//     } catch (error) {
//       setText("Invalid input");
//       textInputRef.current.style.borderColor = "red";
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={{ fontSize: 50 }}>Calculator!</Text>
//       <TextInput ref={textInputRef} style={styles.textInput} />
//       <Button title="Calculate" onPress={handleButtonPress} />
//       {text && <Text style={{ fontSize: 30, marginTop: 20 }}>{text}</Text>}
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//     fontSize: 40,
//   },
//   error: {
//     color: "red",
//     marginBottom: 10,
//     fontSize: 20,
//   },
//   textInput: {
//     borderColor: "blue",
//     borderWidth: 1,
//     marginVertical: 10,
//     padding: 10,
//     fontSize: 30,
//     marginBottom: 20,
//   },
// });
