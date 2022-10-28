import React from "react";

const HighlightText = ({ text = "", highlight = "" }) => {
  if (!highlight.trim()) {
    return <span>{text}</span>;
  }

  const parts = text.split(
    new RegExp(`(${highlight.replace(/[&\/\\+]/g, "\\+")})`, "gi")
  );
  console.log("parts: ", parts);
  console.log("highlight: ", highlight.replace("+", "\\+"));
  return (
    <span>
      {parts.map((part, i) => (
        <span
          key={i}
          style={
            part.toLowerCase() === highlight.toLowerCase()
              ? { fontWeight: "bold" }
              : {}
          }
        >
          {part}
        </span>
      ))}
    </span>
  );
};

export default HighlightText;
