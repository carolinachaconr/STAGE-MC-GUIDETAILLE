
import { useState } from "react";


export default function Hauts() {
  const [unit, setUnit] = useState("cm");
  const [waist, setWaist] = useState("");
  const [hips, setHips] = useState("");
  const [size, setSize] = useState("");
  const [note, setNote] = useState("");
  const [error, setError] = useState("");
  const [alerte, setAlerte] = useState("");
  const [sizeNumber, setSizeNumber] = useState("");

  const calculateSize = () => {
    setAlerte("");
    setError("");
    setSize("");
    setNote("");
    setSizeNumber("");
    

    if (waist==="" || hips==="") {
      setAlerte("Veuillez remplir tous les champs");
      return;
    }

let w = Number(waist);
let h = Number(hips);

if (unit === "cm") {
  w = w / 2.54;
  h = h / 2.54;
}

    let result = "";
  

    // XS
    if (w <= 28 && h <= 37) {
      result = "XS";
      setSizeNumber(3);
    }
    // S
    else if (w <= 30 && h <= 39) {
      result = "S";
      setSizeNumber("5-7");
    }
    // M
    else if (w <= 33 && h <= 42) {
      result = "M";
      setSizeNumber("9-11");
    }
    // L
    else if (w <= 36 && h <= 45) {
      result = "L";
      setSizeNumber("13-15");
    }
    // XL
    else if (w <= 38 && h <= 47) {
      result = "XL";
      setSizeNumber(17);
    }
    // XXL
    else if (w <= 40 && h <= 49) {
      result = "XXL";
      setSizeNumber("");
    } else {
      setError("Aucune taille trouvée");
      return;
    }

    setSize(result);
   
  
    if (w % 1 > 0 || h % 1 > 0) {
      setNote("Taille ajustée recommandée selon vos mensurations.");
    } else {
      setNote("Taille recommandée selon le guide standard.");
    }
  };

  return (
   <div>
   
     

<form id="hauts" className="space-y-5">
<div>
  <label className="block text-sm font-medium mb-1">
    Unité de mesure
  </label>

  <select
    value={unit}
    onChange={(e) => {
      setUnit(e.target.value);
      setWaist("");
      setHips("");
      setSize("");
      setError("");
      setAlerte("");
    }}
    className="w-full border rounded-lg px-3 py-2"
  >
    <option value="cm">Centimètres (cm)</option>
    <option value="in">Pouces (po)</option>
  </select>
</div>
      <div>
        <label className="block text-sm font-medium mb-1">
  Taille ({unit === "cm" ? "cm" : "po"})
</label>
        <input
          type="number"
            step="0.1"
          value={waist}
          onChange={(e) => setWaist(e.target.value)}
          className="w-full border rounded-lg px-3 py-2"
        />
      </div>

      <div>
       <label className="block text-sm font-medium mb-1">
  Hanches ({unit === "cm" ? "cm" : "po"})
</label>
        <input
          type="number"
            step="0.1"
          value={hips}
          onChange={(e) => setHips(e.target.value)}
          className="w-full border rounded-lg px-3 py-2"
        />
      </div>

      <button
        type="button"
        onClick={calculateSize}
        className="w-full bg-[#d71e3e] text-white py-2 rounded-lg solidButton"
      >
        Calculer ma taille
      </button>

      {size && (
        <div className="bg-gray-100 p-4 rounded-lg text-center">
          <p className="text-sm text-gray-500">Taille recommandée</p>
          <p className="text-3xl font-bold">{size}</p>
            <p className="text-sm text-blue-500">Taille numérique approximative: {sizeNumber}</p>

          {note && (
            <p className="text-sm text-gray-600 mt-2">{note}</p>
          )}
        </div>
      )}

      <p className="text-red-500">{error}{alerte}</p>

    </form>
     </div>
  );
}