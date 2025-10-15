import React from "react";
import { IoIosArrowDown } from "react-icons/io";

const DataTable = () => {
  const tableHeaders = [
    "Nomor",
    "Jenis Laporan",
    "Dokumen",
    "Status",
    "Tanggal",
  ];
  const tableRows = Array(8).fill(""); // Membuat 8 baris kosong sebagai placeholder

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg w-full">
      {/* Tabs */}
      <div className="flex border-b mb-4">
        {["Belum", "Ditolak", "Ditinjau", "Disetujui", "Histori"].map(
          (tab, index) => (
            <button
              key={tab}
              className={`py-2 px-4 text-gray-500 hover:text-blue-500 focus:outline-none ${
                index === 4 ? "border-b-2 border-blue-500 text-blue-500" : ""
              }`}
            >
              {tab}
            </button>
          )
        )}
      </div>

      {/* Tabel */}
      <div className="overflow-x-auto">
        <table className="min-w-full text-left text-sm">
          <thead>
            <tr>
              {tableHeaders.map((header) => (
                <th key={header} className="p-3 font-medium text-gray-500">
                  <div className="flex items-center">
                    {header}
                    {header !== "Nomor" && <IoIosArrowDown className="ml-1" />}
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {tableRows.map((_, index) => (
              <tr key={index} className="border-t">
                <td className="p-3 text-gray-700">{index + 1}</td>
                <td className="p-3 text-gray-700"></td>
                <td className="p-3 text-gray-700"></td>
                <td className="p-3 text-gray-700"></td>
                <td className="p-3 text-gray-700"></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DataTable;
