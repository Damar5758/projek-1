import React from "react";

const ErrorItem = ({ name, percentage }) => (
  <div className="flex items-center justify-between py-3 border-b">
    <div>
      <p className="font-semibold text-gray-800">{name}</p>
      <p className="text-gray-500 text-sm">{percentage}%</p>
    </div>
    <div className="relative w-12 h-12">
      <svg className="w-full h-full" viewBox="0 0 36 36">
        <path
          d="M18 2.0845
             a 15.9155 15.9155 0 0 1 0 31.831
             a 15.9155 15.9155 0 0 1 0 -31.831"
          fill="none"
          stroke="#E5E7EB"
          strokeWidth="3"
        />
        <path
          d="M18 2.0845
             a 15.9155 15.9155 0 0 1 0 31.831
             a 15.9155 15.9155 0 0 1 0 -31.831"
          fill="none"
          stroke="#10B981"
          strokeWidth="3"
          strokeDasharray={`${percentage}, 100`}
          strokeLinecap="round"
        />
      </svg>
    </div>
  </div>
);

const ErrorList = () => {
  const errorData = [
    { name: "Cokrodiningratan", percentage: 1 },
    { name: "Kotabaru", percentage: 1 },
    { name: "Terban", percentage: 1 },
    { name: "Sinduadi", percentage: 1 },
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h3 className="font-bold text-gray-700 border-b pb-2 mb-4">
        PERSENTASE KESALAHAN DATA
      </h3>
      <div>
        {errorData.map((item) => (
          <ErrorItem
            key={item.name}
            name={item.name}
            percentage={item.percentage}
          />
        ))}
      </div>
    </div>
  );
};

export default ErrorList;
