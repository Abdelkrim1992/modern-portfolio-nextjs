"use client";

import { useState } from "react";
import { ClipboardData } from "@/data";

export default function CopyToClipboard({text}: {text: string}) {
    // Initial text
  const [textToCopy, setTextToCopy] = useState(ClipboardData.value); 
   // State to manage copied effect
  const [isCopied, setIsCopied] = useState(false);
  const [isCopiedText, setIsCopiedText] = useState(ClipboardData.copiedText);
  // State to manage notification visibility
  const [showNotification, setShowNotification] = useState(false); 

  const handleCopy = async () => {
    try {
    // Copy text to clipboard
      await navigator.clipboard.writeText(textToCopy); 
      setIsCopied(true); // Show "Copied!" effect
      if(isCopied){
        setShowNotification(true); // Show notification
       // Remove "Copied!" text after 2 seconds
        setTimeout(() => setIsCopied(false), 1000);
      // Hide notification after 3 seconds
        setTimeout(() => setShowNotification(false), 3000); 
      }
    } catch (err) {
      console.error("Failed to copy text:", err);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "10px",
        marginTop: "20px",
        flexDirection: "column",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        
        <button onClick={handleCopy} className="end-2.5 top-1/2 -translate-y-1/2 text-gray-900 dark:text-gray-400 hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-600 dark:hover:bg-gray-700 rounded-lg py-2 px-2.5 inline-flex items-center justify-center bg-white border-gray-200 border h-8">
            <span id="default-message">
                <span className="inline-flex items-center">
                    <svg className="w-3 h-3 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                        <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2Zm-3 14H5a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-4H5a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Zm0-5H5a1 1 0 0 1 0-2h2V2h4v2h2a1 1 0 1 1 0 2Z"/>
                    </svg>
                    <span className="text-xs font-semibold">{text}</span>
                </span>
            </span>
            <span id="success-message" className="hidden">
                <span className="inline-flex items-center">
                    <svg className="w-3 h-3 text-blue-700 dark:text-blue-500 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                    </svg>
                    <span className="text-xs font-semibold text-blue-700 dark:text-blue-500">{isCopiedText}</span>
                </span>
            </span>
        </button>
      </div>

      {/* Notification */}
      {showNotification && (
        <div
          style={{
            position: "fixed",
            bottom: "20px",
            left: "50%",
            transform: "translateX(-50%)",
            backgroundColor: "#333",
            color: "#fff",
            padding: "10px 20px",
            borderRadius: "4px",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            zIndex: 1000,
            transition: "opacity 0.3s ease-in-out",
          }}
        >
          Copied to the clipboard!
        </div>
      )}
    </div>
  );
}