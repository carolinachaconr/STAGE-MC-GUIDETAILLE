import { useState } from "react";

export default function Chaussures() {

const [unit, setUnit] = useState("cm");
  const [length, setLength] = useState("");
  const [size, setSize] = useState(null);
  const [sizeNumber, setSizeNumber] = useState("");
  const [note, setNote] = useState("");
  const [error, setError] = useState("");
  const [alerte, setAlerte] = useState("");

  const calculateSize = () => {

    setAlerte("");
    setError("");
    setSize(null);
    setNote("");
    setSizeNumber("");

    if (length === "") {
      setAlerte("Veuillez remplir tous les champs");
      return;
    }

   let l = Number(length);

if (unit === "in") {
  l = l * 2.54;
}

    let result = null;

    if (l >= 22.4 && l <= 23.0) {
      result = { EUR: "36", US: "6", UK: "3" };
      setSizeNumber("6");
    }

    else if (l >= 23.1 && l <= 23.7) {
      result = { EUR: "37", US: "6.5", UK: "4" };
      setSizeNumber("6.5");
    }

    else if (l >= 23.8 && l <= 24.3) {
      result = { EUR: "38", US: "7", UK: "5" };
      setSizeNumber("7");
    }

    else if (l >= 24.4 && l <= 25.0) {
      result = { EUR: "39", US: "8", UK: "6" };
      setSizeNumber("8");
    }

    else if (l >= 25.1 && l <= 25.7) {
      result = { EUR: "40", US: "9", UK: "7" };
      setSizeNumber("9");
    }

    else if (l >= 25.8 && l <= 26.3) {
      result = { EUR: "41", US: "10", UK: "8" };
      setSizeNumber("10");
    }
 else if (l >= 26.4 && l <= 27.0) {
      result = { EUR: "42", US: "11", UK: "9" };
      setSizeNumber("11");
      
    }
     else if (l >= 27.1 && l <= 27.7) {
      result = { EUR: "43", US: "12", UK: "10" };
      setSizeNumber("12");
      
    }
      else if (l >= 27.8 && l <= 28.3) {
      result = { EUR: "44", US: "13", UK: "11" };
      setSizeNumber("13");
      
    }
    else {
      setError("Aucune taille trouvée");
      return;
    }

    setSize(result);

    if (l % 1 > 0) {
      setNote("Taille ajustée recommandée selon vos mensurations.");
    } else {
      setNote("Taille recommandée selon le guide standard.");
    }
  };
  

  return (
   <form
  className="space-y-5"
  onSubmit={(e) => {
    e.preventDefault();
    calculateSize();
  }}
>

      <div>
        <div>
  <label className="block text-sm font-medium mb-1">
    Unité de mesure
  </label>

 <select
  value={unit}
  onChange={(e) => {
    setUnit(e.target.value);
    setLength("");
    setSize(null);
    setError("");
    setAlerte("");
  }}
  className="w-full border rounded-lg px-3 py-2"
>
  <option value="cm">Centimètres (cm)</option>
  <option value="in">Pouces (po)</option>
</select>


</div>
<label className="block text-sm font-medium mb-1 mt-4">
  Longueur du pied ({unit === "cm" ? "cm" : "po"})
</label>
       <input
          type="number"
            step="0.1"
          value={length}
          onChange={(e) => setLength(e.target.value)}
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

          <p className="text-sm text-gray-500">
            Taille EUR recommandée
          </p>

          <p className="text-3xl font-bold">
            {size.EUR}
          </p>

          <p className="text-sm text-blue-500 mt-2">
            US: {size.US} | UK: {size.UK}
          </p>

       

          {note && (
            <p className="text-sm text-gray-600 mt-2">
              {note}
            </p>
          )}

        </div>
      )}

      <p className="text-red-500">
        {error || alerte}
      </p>

    </form>
  );
}