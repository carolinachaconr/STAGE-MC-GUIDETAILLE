
import { useState } from "react";

export default function SizeForm() {
  const [waist, setWaist] = useState("");
  const [hips, setHips] = useState("");
  const [bust, setBust] = useState("");
  const [size, setSize] = useState("");
  const[sizeNumb,setSizeNumb] = useState("");
  const[error,setError] = useState("");
    const[alerte,setAlerte] = useState("");

const calculateSize = () => {
  setAlerte("");
  setError("");

  if (!hips || !bust || !waist) {
    setAlerte("Veuillez remplir tous les champs");
    return;
  }

  // XS
  if (
    (bust >= 34 && bust <= 35 &&
      waist >= 27 && waist <= 28) &&

    (bust >= 34 && bust <= 35 &&
      hips >= 36 && hips <= 37) 

    (waist >= 27 && waist <= 28 &&
      hips >= 36 && hips <= 37)
  ) {
    setSize("XS");
    setSizeNumb("3");
  }

  // S
  else if (
    (bust >= 36 && bust <= 37 &&
      waist >= 29 && waist <= 30) ||

    (bust >= 36 && bust <= 37 &&
      hips >= 38 && hips <= 39) ||

    (waist >= 29 && waist <= 30 &&
      hips >= 38 && hips <= 39)
  ) {
    setSize("S");
    setSizeNumb("5-7");
  }

  // M
  else if (
    (bust >= 38 && bust <= 40 &&
      waist >= 31 && waist <= 33) ||

    (bust >= 38 && bust <= 40 &&
      hips >= 40 && hips <= 42) ||

    (waist >= 31 && waist <= 33 &&
      hips >= 40 && hips <= 42)
  ) {
    setSize("M");
    setSizeNumb("9-11");
  }

  // L
  else if (
    (bust >= 41 && bust <= 43 &&
      waist >= 34 && waist <= 36) ||

    (bust >= 41 && bust <= 43 &&
      hips >= 43 && hips <= 45) ||

    (waist >= 34 && waist <= 36 &&
      hips >= 43 && hips <= 45)
  ) {
    setSize("L");
    setSizeNumb("13-15");
  }

  // XL
  else if (
    (bust >= 44 && bust <= 45 &&
waist >= 37 && waist <= 38 &&
hips >= 46 && hips <= 47)
  ) {
    setSize("XL");
    setSizeNumb("17");
  }

  // XXL
  else if (
    (bust >= 44 && bust <= 47 &&
      waist >= 37 && waist <= 40) ||

    (bust >= 44 && bust <= 47 &&
      hips >= 46 && hips <= 49) ||

    (waist >= 37 && waist <= 40 &&
      hips >= 46 && hips <= 49)
  ) {
    setSize("XXL");
    setSizeNumb("");
  }

  else {
    setError("Aucune taille trouvée");
  }
};

  return (
    <form className="space-y-5">

      <div>
        <label className="block text-sm font-medium mb-1">
         Mensuration de votre taille (en pouces)
        </label>
        <input
          type="number"
          value={waist}
          onChange={(e)=> setWaist(Number(e.target.value))}
          placeholder="Ex: 29"
          className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#d71e3e]"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">
          Mensuration de votre buste (en cm)
        </label>
        <input
          type="number"
          value={bust}
          onChange={(e) => setBust(Number(e.target.value))}
          placeholder="Ex: 65"
          className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#d71e3e]"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">
          Mensuration de vos hanches
        </label>
        <input
          type="number"
          value={hips}
          onChange={(e) => setHips(Number(e.target.value))}
          placeholder="Ex: 25"
          className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#d71e3e]"
        />
      </div>

     

      <button
        type="button"
        onClick={calculateSize}
        className="w-full bg-[#d71e3e] text-white py-2 rounded-lg hover:bg-[#b01a30]"
      >
        Calculer ma taille
      </button>
        {size && (

        <div className="bg-gray-100 p-4 rounded-lg text-center">

          <p className="text-sm text-gray-500">
            Taille recommandée
          </p>

          <p className="text-2xl font-bold">
            {size}</p> <br /> <p className="text-sm text-gray-500">Taille numérique</p><p className="font-bold text-2xl">{sizeNumb}</p>
          

        </div>
      )}
      <p>{error}{alerte}</p>
      
      

    </form>
  );
}
// import { useState } from "react";

// export default function SizeForm() {
//   const [waist, setWaist] = useState("");
//   const [hips, setHips] = useState("");
//   const [size, setSize] = useState("");
//   const [note, setNote] = useState("");
//   const [error, setError] = useState("");
//   const [alerte, setAlerte] = useState("");

//   const calculateSize = () => {
//     setAlerte("");
//     setError("");
//     setSize("");
//     setNote("");

//     if (!waist || !hips) {
//       setAlerte("Veuillez remplir tous les champs");
//       return;
//     }

//     const w = Number(waist);
//     const h = Number(hips);

//     let result = "";

//     // XS
//     if (w <= 28 && h <= 37) {
//       result = "XS";
//     }
//     // S
//     else if (w <= 30 && h <= 39) {
//       result = "S";
//     }
//     // M
//     else if (w <= 33 && h <= 42) {
//       result = "M";
//     }
//     // L
//     else if (w <= 36 && h <= 45) {
//       result = "L";
//     }
//     // XL
//     else if (w <= 38 && h <= 47) {
//       result = "XL";
//     }
//     // XXL
//     else if (w <= 40 && h <= 49) {
//       result = "XXL";
//     } else {
//       setError("Aucune taille trouvée");
//       return;
//     }

//     setSize(result);

//     // 🔥 Recommandation intelligente (style marque)
//     if (w % 1 > 0 || h % 1 > 0) {
//       setNote("Taille ajustée recommandée selon vos mensurations.");
//     } else {
//       setNote("Taille recommandée selon le guide standard.");
//     }
//   };

//   return (
//     <form className="space-y-5">

//       <div>
//         <label className="block text-sm font-medium mb-1">
//           Taille (waist)
//         </label>
//         <input
//           type="number"
//           value={waist}
//           onChange={(e) => setWaist(e.target.value)}
//           className="w-full border rounded-lg px-3 py-2"
//         />
//       </div>

//       <div>
//         <label className="block text-sm font-medium mb-1">
//           Hanches
//         </label>
//         <input
//           type="number"
//           value={hips}
//           onChange={(e) => setHips(e.target.value)}
//           className="w-full border rounded-lg px-3 py-2"
//         />
//       </div>

//       <button
//         type="button"
//         onClick={calculateSize}
//         className="w-full bg-[#d71e3e] text-white py-2 rounded-lg"
//       >
//         Calculer ma taille
//       </button>

//       {size && (
//         <div className="bg-gray-100 p-4 rounded-lg text-center">
//           <p className="text-sm text-gray-500">Taille recommandée</p>
//           <p className="text-3xl font-bold">{size}</p>

//           {note && (
//             <p className="text-sm text-gray-600 mt-2">{note}</p>
//           )}
//         </div>
//       )}

//       <p className="text-red-500">{error}{alerte}</p>

//     </form>
//   );
// }