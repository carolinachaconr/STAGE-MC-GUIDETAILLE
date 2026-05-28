import { useState } from "react";

export default function Pantalons() {
  const [thigh, setThigh] = useState("");
  const [height, setHeight] = useState("");
  const [waist, setWaist] = useState("");
  const [hips, setHips] = useState("");
  const [size, setSize] = useState("");
  const [note, setNote] = useState("");
  const [error, setError] = useState("");
  const [alerte, setAlerte] = useState("");
  const [sizeNumber, setSizeNumber] = useState("");
  const [length, setLength] = useState("");

  const calculateSize = () => {
    setAlerte("");
    setError("");
    setSize("");
    setNote("");
    setLength("");

    if (waist === "" || hips === "" || height === "" || thigh==="") {
      setAlerte("Veuillez remplir tous les champs");
      return;
    }

    const w = Number(waist);
    const h = Number(hips);
    const ht = Number(height);
    const t = Number(thigh);
    let result = "";
    

    //  petite ou standard
    if (ht < 165) {
      setLength("Petite");
    } else if (ht >= 165) {
      setLength("Standard");
    }
    // *

    if (w <= 28 && h <= 37 && t<=20.75) {
      result = "S";
      setSizeNumber(3);
    }
    // S
    else if (w <= 29 && h <= 38 && t<=21.5) {
      result = "S";
      setSizeNumber("5");
    }
    // M
    else if (w <= 30 && h <= 39 && t<=22.25) {
      result = "S";
      setSizeNumber("7");
    }
    // L
    else if (w <= 31 && h <= 40 && t<=23) {
      result = "M";
      setSizeNumber("9");
    } else if (w <= 32.5 && h <= 41.5 && t<=24) {
      result = "M";
      setSizeNumber("11");
    } else if (w <= 34 && h <= 43 && t<=25) {
      result = "L";
      setSizeNumber("13");
    } else if (w <= 35.5 && h <= 44.5 && t<=26) {
      result = "L";
      setSizeNumber("15");
    }
    // XL
    else if (w <= 37 && h <= 46 && t<=27) {
      result = "XL";
      setSizeNumber(17);
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
      <form id="pantalons" className="space-y-5">
        <div>
          <label className="block text-sm font-medium mb-1">
            Combien mesurez-vous ?
          </label>
          <input
            type="number"
            value={height}
            onChange={(e) => {
              const cleanedValue = e.target.value.replace(/[.,]/g, "");
              setHeight(cleanedValue);
            }}
            className="w-full border rounded-lg px-3 py-2"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Taille</label>
          <input
            type="number"
            value={waist}
            onChange={(e) => setWaist(e.target.value)}
            className="w-full border rounded-lg px-3 py-2"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Hanches</label>
          <input
            type="number"
            value={hips}
            onChange={(e) => setHips(e.target.value)}
            className="w-full border rounded-lg px-3 py-2"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">
            Quelle est votre mensuration de cuisse?
          </label>
          <input
            type="number"
            value={thigh}
            onChange={(e) => {
              
              setThigh(e.target.value);
            }}
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
            <p className="text-3xl font-bold">Longueur({length})</p>

            <p className="text-sm text-blue-500">
              Taille numérique approximative: {sizeNumber}
            </p>

            {note && <p className="text-sm text-gray-600 mt-2">{note}</p>}
          </div>
        )}

        <p className="text-red-500">
          {error}
          {alerte}
        </p>
      </form>
    </div>
  );
}
