import React from "react";
import { Text } from "react-native";

const SIGNS = ["+", "-", "*", "/", "%"];

const handleRawExpressionStr = (rawExpressionStr) => {
  let charArr = rawExpressionStr.split("");

  let result = charArr.map((char) =>
    SIGNS.includes(char) ? `\\${char}` : char
  );

  return result.join("");
};

const HighlightText = ({ text = "", highlight = "", ...props }) => {
  if (!highlight.trim()) {
    return <Text {...props}>{text}</Text>;
  }
  const parts = text.split(
    new RegExp(`(${handleRawExpressionStr(highlight)})`, "gi")
  );

  return (
    <Text>
      {parts.map((part, i) => (
        <Text
          key={i}
          style={{
            ...props?.style,
            fontWeight:
              part.toLowerCase() === highlight.toLowerCase() ? "900" : "normal",
          }}
        >
          {part}
        </Text>
      ))}
    </Text>
  );
};

export default HighlightText;
