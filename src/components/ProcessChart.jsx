import React from "react";

const LegendItem = ({ color, label }) => (
  <div className="flex items-center space-x-2">
    <div className={`w-4 h-4 rounded-sm ${color}`}></div>
    <span className="text-sm text-gray-600">{label}</span>
  </div>
);

const ProcessChart = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h3 className="font-bold text-gray-700 border-b pb-2 mb-4">
        PERSENTASE DATA PROSES
      </h3>
      <div className="flex justify-center items-center my-8">
        {/* Placeholder untuk Donut Chart */}
        <div className="relative w-48 h-48">
          <div className="absolute inset-0 border-[20px] border-gray-200 rounded-full"></div>
          <div
            className="absolute inset-0 rounded-full"
            style={{
              background:
                "conic-gradient(#3B82F6 0% 45%, #F59E0B 45% 75%, #EF4444 75% 90%, #374151 90% 100%)",
            }}
          ></div>
          <div className="absolute inset-5 bg-white rounded-full"></div>
        </div>
      </div>
      <div className="flex justify-around">
        <LegendItem color="bg-blue-500" label="Disetujui" />
        <LegendItem color="bg-yellow-500" label="Ditinjau" />
        <LegendItem color="bg-red-500" label="Ditolak" />
        <LegendItem color="bg-gray-800" label="Belum" />
      </div>
    </div>
  );
};

export default ProcessChart;
