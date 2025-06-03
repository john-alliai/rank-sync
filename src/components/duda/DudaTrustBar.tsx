import React from 'react';

const DudaTrustBar = () => {
  return (
    <div className="py-6 bg-[#181A20] border-b border-gray-800">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-center gap-6">
        <span className="text-gray-400 text-lg">
          Used by agencies that build hundreds of Duda sites every month
        </span>
        <div className="flex gap-6 mt-2 md:mt-0">
          <span className="bg-gray-700 rounded px-3 py-1 text-sm font-semibold">AgencyOne</span>
          <span className="bg-gray-700 rounded px-3 py-1 text-sm font-semibold">PixelForge</span>
          <span className="bg-gray-700 rounded px-3 py-1 text-sm font-semibold">WebWorks</span>
          <span className="bg-gray-700 rounded px-3 py-1 text-sm font-semibold">LaunchLab</span>
        </div>
      </div>
    </div>
  );
};

export default DudaTrustBar;
