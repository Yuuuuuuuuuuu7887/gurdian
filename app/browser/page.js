"use client";
import { useState, useRef } from "react";
import { FaArrowLeft, FaArrowRight, FaRedo, FaHome, FaSearch } from "react-icons/fa";

export default function BrowserPage() {
  const [url, setUrl] = useState("https://www.google.com");
  const iframeRef = useRef(null);

  const handleGo = (e) => {
    e.preventDefault();
    let finalUrl = url;
    if (!finalUrl.startsWith("http")) {
      finalUrl = "https://" + finalUrl;
    }
    setUrl(finalUrl);
  };

  const handleHome = () => {
    setUrl("https://www.google.com");
  };

  const reloadPage = () => {
    iframeRef.current.src = url;
  };

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      {/* Top Bar */}
      <form
        onSubmit={handleGo}
        className="flex items-center bg-white p-2 shadow-md space-x-2"
      >
        <input
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="Search or enter URL"
          className="flex-1 p-2 border rounded-lg outline-none"
        />
        <button className="p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
          <FaSearch />
        </button>
      </form>

      {/* Browser Controls */}
      <div className="flex items-center bg-gray-200 px-4 py-2 space-x-4">
        <button
          onClick={() => iframeRef.current.contentWindow.history.back()}
          className="text-gray-700 hover:text-black"
        >
          <FaArrowLeft size={18} />
        </button>
        <button
          onClick={() => iframeRef.current.contentWindow.history.forward()}
          className="text-gray-700 hover:text-black"
        >
          <FaArrowRight size={18} />
        </button>
        <button onClick={reloadPage} className="text-gray-700 hover:text-black">
          <FaRedo size={18} />
        </button>
        <button onClick={handleHome} className="text-gray-700 hover:text-black">
          <FaHome size={18} />
        </button>
      </div>

      {/* Webview / iframe */}
      <div className="flex-1 bg-white">
        <iframe
          ref={iframeRef}
          src={url}
          className="w-full h-full border-none"
          title="In-App Browser"
        />
      </div>
    </div>
  );
}
