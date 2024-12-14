import { useState } from "react";
import { IoCopyOutline } from "react-icons/io5";
import { ClipboardProps } from "../elements/types/Clipboard.type";

export const Clipboard: React.FC<ClipboardProps> = ({ textToCopy }) => {
  const [buttonText, setButtonText] = useState<string>("Copy");

  const copyToClipboard = () => {
    navigator.clipboard.writeText(textToCopy).then(() => {
      setButtonText("Copied!");
      setTimeout(() => setButtonText("Copy"), 2000);
    });
  };

  return (
    <button
      onClick={copyToClipboard}
      className="right-0 justify-center items-center border-none cursor-pointer text-white text-sm flex gap-2"
    >
      <IoCopyOutline className="w-5 h-5" />
      {buttonText}
    </button>
  );
};
