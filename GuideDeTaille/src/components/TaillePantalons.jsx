import { useState } from "react";

export default function TaillePantalons() {


  const data = [
    {
      label: " ",
      num: "3",
      tights: '52,7cm (20,75")',
      waist: '71cm (28")',
      hips: '94cm (37")',
    },
 
    {
      label: "S",
      num: "5",
      tights: '54,5cm (21,5")',
      waist: '73,5cm (29")',
      hips: '96,5cm (38")',
    },
    {
      label: "",
      num: "7",
      tights: '56,5cm (22.25")',
      waist: '76cm (30")',
      hips: '99cm (39")',
    },
    {
      label: "M",
      num: "9",
      tights: '58,5cm (23")',
      waist: '79cm (31")',
      hips: '101,5cm (40")',
    },
    {
     
      label: "",
      num: "11",
      tights: '61cm (24")',
      waist: '82,5cm (32,5")',
      hips: '105cm (41,5")',
    },
    {
      label: "L",
      num: "13",
      tights: '63,5cm (25")',
      waist: '86cm (34")',
      hips: '109cm (43")',
    },
    {
      label: "",
      num: "15",
      tights: '66cm (26")',
      waist: '90cm (35,5")',
      hips: '113cm (44,5")',
    },
    {
      label: "XL",
      num: "17",
      tights: '68,5cm (27")',
      waist: '94cm (37")',
      hips: '117cm (46")',
    },
   
  ];

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6 text-center">
        Pantalons
      </h1>

      <div className="overflow-x-auto shadow-md rounded-lg">
        <table className="w-full text-sm text-left border-collapse bg-white">
          <thead className="bg-gray-100 uppercase text-gray-700">
            <tr>
              <th className="px-4 py-3 border border-gray-300 text-center">
                Grandeur
              </th>
              <th className="px-4 py-3 border border-gray-300 text-center">
                Taille numérique
              </th>
              <th className="px-4 py-3 border border-gray-300 text-center">
                Cuisses
              </th>
              <th className="px-4 py-3 border border-gray-300 text-center">
                Taille
              </th>
              <th className="px-4 py-3 border border-gray-300 text-center">
                Hanches
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
                  {row.num}
                </td>
                <td className="px-4 py-3 border border-gray-300 text-center">
                  {row.tights}
                </td>
                <td className="px-4 py-3 border border-gray-300 text-center">
                  {row.waist}
                </td>
                <td className="px-4 py-3 border border-gray-300 text-center">
                  {row.hips}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
<img className="pt-20" src="src/assets/pants.jpg" alt="pantalons" />
      <p className="mt-4 text-sm text-gray-500 italic">
        * Les mesures indiquées correspondent aux dimensions du corps.
      </p>
    </div>
  );
}
