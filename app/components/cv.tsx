"use client";

import { Download } from "lucide-react";

const CVDownload: React.FC = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/cv.pdf"; 
    link.download = "Ranit_Pramanik_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="fixed bottom-5 left-5 z-50 pl-12">
      <button
        onClick={handleDownload}
        className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-5 py-3 rounded-lg shadow-lg transition-all duration-300"
      >
        <Download className="w-5 h-5" />
        Download CV
      </button>
    </div>
  );
};

export default CVDownload;
