
import { useState } from "react";



export default function TailleHauts() {
  const data = [
    { label: "XS", num: "-", bust: "86cm (34\")", waist: "68,5cm (27\")", hips: "91,5cm (36\")" },
    { label: "", num: "3", bust: "89cm (35\")", waist: "71cm (28\")", hips: "94cm (37\")" },
    { label: "S", num: "5", bust: "91,5cm (36\")", waist: "73,5cm (29\")", hips: "96,5cm (38\")" },
    { label: "", num: "7", bust: "94cm (37\")", waist: "76cm (30\")", hips: "99cm (39\")" },
    { label: "M", num: "9", bust: "96,5cm (38\")", waist: "79cm (31\")", hips: "101,5cm (40\")" },
    { label: "", num: "11", bust: "99cm (39,5\")", waist: "82,5cm (32,5\")", hips: "105cm (41,5\")" },
    { label: "L", num: "13", bust: "104cm (41\")", waist: "86cm (34\")", hips: "109cm (43\")" },
    { label: "", num: "15", bust: "108cm (42,5\")", waist: "90cm (35,5\")", hips: "113cm (44,5\")" },
    { label: "XL", num: "17", bust: "112cm (44\")", waist: "94cm (37\")", hips: "117cm (46\")" },
    { label: "XXL", num: "-", bust: "119cm (47\")", waist: "101,5cm (40\")", hips: "124,5cm (49\")" },
  ];
   



   

      // <div>
      //   <h1 className="text-2xl font-bold mb-4">Guide des tailles pour les hauts</h1>
      //   <p>Voici un guide des tailles pour les hauts :</p>
      //   <ul className="list-disc list-inside mb-4"> 
      //       <li><strong>XS :</strong> Tour de poitrine : 78-82 cm, Tour de taille : 60-64 cm, Tour de hanches : 86-90 cm</li>
      //       <li><strong>S :</strong> Tour de poitrine : 82-86 cm, Tour de taille : 64-68 cm, Tour de hanches : 90-94 cm</li>
      //       <li><strong>M :</strong> Tour de poitrine : 86-90 cm, Tour de taille : 68-72 cm, Tour de hanches : 94-98 cm</li>
      //       <li><strong>L :</strong> Tour de poitrine : 90-94 cm, Tour de taille : 72-76 cm, Tour de hanches : 98-102 cm</li>
      //       <li><strong>XL :</strong> Tour de poitrine : 94-98 cm, Tour de taille : 76-80 cm, Tour de hanches : 102-106 cm</li>
      //   </ul>
      //   <p>Assurez-vous de mesurer votre tour de poitrine, tour de taille et tour de hanches pour choisir la taille qui vous convient le mieux.</p> 
      //   </div>



  

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6 text-center">Guide des tailles - Hauts</h1>
      
      <div className="overflow-x-auto shadow-md rounded-lg">
        <table className="w-full text-sm text-left border-collapse bg-white">
          <thead className="bg-gray-100 uppercase text-gray-700">
            <tr>
              <th className="px-4 py-3 border border-gray-300 text-center">Grandeur</th>
              <th className="px-4 py-3 border border-gray-300 text-center">Taille numérique</th>
              <th className="px-4 py-3 border border-gray-300 text-center">Buste</th>
              <th className="px-4 py-3 border border-gray-300 text-center">Taille</th>
              <th className="px-4 py-3 border border-gray-300 text-center">Hanches</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index} className="hover:bg-gray-50 transition-colors">
                <td className="px-4 py-3 border border-gray-300 text-center font-bold text-gray-900">{row.label}</td>
                <td className="px-4 py-3 border border-gray-300 text-center">{row.num}</td>
                <td className="px-4 py-3 border border-gray-300 text-center">{row.bust}</td>
                <td className="px-4 py-3 border border-gray-300 text-center">{row.waist}</td>
                <td className="px-4 py-3 border border-gray-300 text-center">{row.hips}</td>
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
      


    

    


