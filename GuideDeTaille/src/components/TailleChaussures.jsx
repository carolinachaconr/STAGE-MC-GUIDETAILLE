import { useState } from "react";

export default function TailleChaussures() {
  const data = [
    {
      label: "6",
      length: "22,4-23,0",
      EUR: "36",
      US: "6",
      UK: "3",
    },

    {
      label: "6,5",
      length: "23,1-23,7",
      EUR: "37",
      US: "6,5",
      UK: "4",
    },
    {
      label: "7",
      length: "23,8-24,3",
      EUR: "38",
      US: "7",
      UK: "5",
    },
    {
      label: "8",
      length: "24,4-25,0",
      EUR: "39",
      US: "8",
      UK: "6",
    },
    {
      label: "9",
      length: "25,1-25,7",
      EUR: "40",
      US: "9",
      UK: "7",
    },
    {
      label: "10",
      length: "25,8-26,3",
      EUR: "41",
      US: "10",
      UK: "8",
    },
    {
      label: "11",
      length: "26,4-27",
      EUR: "42",
      US: "11",
      UK: "9",
    },
    {
      label: "12",
      length: "27,1-27,7",
      EUR: "43",
      US: "12",
      UK: "10",
    },
    {
      label: "13",
      length: "27,8-28,3",
      EUR: "44",
      US: "13",
      UK: "11",
    },
  ];

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6 text-center">
        Chaussures
      </h1>

      <div className="overflow-x-auto shadow-md rounded-lg">
        <table className="w-full text-sm text-left border-collapse bg-white">
          <thead className="bg-gray-100 uppercase text-gray-700">
            <tr>
              <th className="px-4 py-3 border border-gray-300 text-center">
                Grandeur
              </th>
              <th className="px-4 py-3 border border-gray-300 text-center">
                Longueur du pied
              </th>
              <th className="px-4 py-3 border border-gray-300 text-center">
               EUR
              </th>
              <th className="px-4 py-3 border border-gray-300 text-center">
               US
              </th>
              <th className="px-4 py-3 border border-gray-300 text-center">
                UK
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index} className="hover:bg-gray-50 transition-colors">
                <td className="px-4 py-3 border border-gray-300 text-center font-bold text-gray-900">
                  {row.label}
                </td>
                <td className="px-4 py-3 border border-gray-300 text-center">
                  {row.length}
                </td>
                <td className="px-4 py-3 border border-gray-300 text-center">
                  {row.EUR}
                </td>
                <td className="px-4 py-3 border border-gray-300 text-center">
                  {row.US}
                </td>
                <td className="px-4 py-3 border border-gray-300 text-center">
                  {row.UK}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="mt-4 text-sm text-gray-500 italic">
        * Les mesures indiquées correspondent aux dimensions du corps.
      </p>
    </div>
  );
}
