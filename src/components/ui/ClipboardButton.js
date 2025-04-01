import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClipboard } from "@fortawesome/free-solid-svg-icons";
import { toast } from "react-toastify";

/**
 * ClipboardButton - A button component for copying text to clipboard
 *
 * @param {Object} props Component props
 * @param {string} props.textToCopy The text to copy to clipboard
 * @param {string} props.className Additional CSS classes
 */
const ClipboardButton = ({ textToCopy, className = "" }) => {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(textToCopy).then(
      () => {
        toast.success("Copy that!");
      },
      () => {
        toast.error("Warning ⚠️");
      }
    );
  };

  return (
    <button
      onClick={copyToClipboard}
      className={`p-2 rounded flex-shrink-0 hover:bg-white/10 transition-colors duration-300 ${className}`}
      title="Copy to clipboard"
    >
      <FontAwesomeIcon
        icon={faClipboard}
        size="sm"
        className="text-pink-200/70"
      />
    </button>
  );
};

export default ClipboardButton;
