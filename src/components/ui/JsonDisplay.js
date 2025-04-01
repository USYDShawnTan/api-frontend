import React from "react";

/**
 * JsonDisplay - A component that formats and displays JSON strings
 *
 * @param {Object} props Component props
 * @param {string} props.jsonString The JSON string to display
 * @param {string} props.className Additional CSS classes
 */
const JsonDisplay = ({ jsonString, className = "" }) => {
  // Check if the string is valid JSON
  const isJsonString = (str) => {
    try {
      return typeof JSON.parse(str) === "object";
    } catch (e) {
      return false;
    }
  };

  // If not a JSON string, return the original text
  if (!isJsonString(jsonString)) {
    return (
      <div
        className={`whitespace-pre-wrap break-words font-medium text-pink-200 leading-relaxed ${className}`}
      >
        {jsonString}
      </div>
    );
  }

  // Format the JSON with proper indentation
  const formatJson = (str) => {
    try {
      const parsed = JSON.parse(str);
      return JSON.stringify(parsed, null, 2);
    } catch (e) {
      return str;
    }
  };

  const formattedJson = formatJson(jsonString);

  return (
    <pre
      className={`font-medium text-pink-200 leading-relaxed overflow-hidden ${className}`}
      style={{
        fontFamily: '"LXGW WenKai", monospace',
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "pre-wrap",
        wordBreak: "break-all",
      }}
    >
      {formattedJson}
    </pre>
  );
};

export default JsonDisplay;
