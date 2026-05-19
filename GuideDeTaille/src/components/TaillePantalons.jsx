import { useState } from "react";

export default function TaillePantalons() {
  // <div>
  //   <h1 className="text-2xl font-bold mb-4">Guide des tailles pour les pantalons</h1>
  //   <p>Voici un guide des tailles pour les pantalons :</p>
  //   <ul className="list-disc list-inside mb-4">
  //       <li><strong>XS :</strong> Tour de taille : 60-64 cm, Tour de hanches : 86-90 cm, Longueur : 100-104 cm</li>
  //       <li><strong>S :</strong> Tour de taille : 64-68 cm, Tour de hanches : 90-94 cm, Longueur : 104-108 cm</li>
  //       <li><strong>M :</strong> Tour de taille : 68-72 cm, Tour de hanches : 94-98 cm, Longueur : 108-112 cm</li>
  //       <li><strong>L :</strong> Tour de taille : 72-76 cm, Tour de hanches : 98-102 cm, Longueur : 112-116 cm</li>
  //       <li><strong>XL :</strong> Tour de taille : 76-80 cm, Tour de hanches : 102-106 cm, Longueur : 116-120 cm</li>
  //   </ul>
  //   <p>Assurez-vous de mesurer votre tour de taille et tour de hanches pour choisir la taille qui vous convient le mieux.</p>
  //   </div>

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
      // je suis ici
      label: "",
      num: "11",
      tights: '62,5cm (24,5")',
      waist: '82,5cm (32,5")',
      hips: '105cm (41,5")',
    },
    {
      label: "L",
      num: "13",
      tights: '104cm (41")',
      waist: '86cm (34")',
      hips: '109cm (43")',
    },
    {
      label: "",
      num: "15",
      tights: '108cm (42,5")',
      waist: '90cm (35,5")',
      hips: '113cm (44,5")',
    },
    {
      label: "XL",
      num: "17",
      tights: '112cm (44")',
      waist: '94cm (37")',
      hips: '117cm (46")',
    },
    {
      label: "XXL",
      num: "-",
      tights: '119cm (47")',
      waist: '101,5cm (40")',
      hips: '124,5cm (49")',
    },
  ];

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6 text-center">
        Guide des tailles - Pantalons
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

      <p className="mt-4 text-sm text-gray-500 italic">
        * Les mesures indiquées correspondent aux dimensions du corps.
      </p>
    </div>
  );
}
