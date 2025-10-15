import React from "react";
import Header from "./components/Header";
import StatCard from "./components/StatCard";
import DataTable from "./components/DataTabel";
import ProcessChart from "./components/ProcessChart";
import ErrorList from "./components/ErorList";

// Import Ikon
import { FaCheck, FaSearch, FaTimes, FaBan } from "react-icons/fa";

function App() {
  const stats = [
    {
      icon: <FaCheck />,
      count: 111,
      title: "Disetujui",
      bgColor: "bg-blue-500",
    },
    {
      icon: <FaSearch />,
      count: 9654,
      title: "Ditinjau",
      bgColor: "bg-yellow-500",
    },
    {
      icon: <FaTimes />,
      count: 88,
      title: "Ditolak",
      bgColor: "bg-red-500",
    },
    {
      icon: <FaBan />,
      count: 0,
      title: "Belum",
      bgColor: "bg-gray-800",
    },
  ];

  return (
    <div className="bg-gray-100 min-h-screen font-sans">
      <Header />
      <main className="p-8">
        {/* Bagian Statistik */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat) => (
            <StatCard
              key={stat.title}
              icon={stat.icon}
              count={stat.count}
              title={stat.title}
              bgColor={stat.bgColor}
            />
          ))}
        </div>

        {/* Bagian Konten Utama (Tabel & Chart) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Kolom Kiri - Tabel */}
          <div className="lg:col-span-2">
            <DataTable />
          </div>

          {/* Kolom Kanan - Chart */}
          <div className="flex flex-col space-y-8">
            <ProcessChart />
            <ErrorList />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
