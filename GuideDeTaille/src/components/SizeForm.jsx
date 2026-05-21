
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
 

  if (
    bust >= 34 && bust <= 35 &&
    waist >= 27 && waist <= 28 &&
    hips >= 36 && hips <= 37
  ) {
    setSize("XS");
    setSizeNumb("3");
  }

  else if (
    bust >= 36 && bust <= 37 &&
    waist >= 29 && waist <= 30 &&
    hips >= 38 && hips <= 39
  ) {
    setSize("S");
    setSizeNumb("5-7");
  }

  else if (
    bust >= 38 && bust <= 40 &&
    waist >= 31 && waist <= 33 &&
    hips >= 40 && hips <= 42
  ) {
    setSize("M");
    setSizeNumb("9-11");
  }

  else if (
    bust >= 41 && bust <= 43 &&
    waist >= 34 && waist <= 36 &&
    hips >= 43 && hips <= 45
  ) {
    setSize("L");
    setSizeNumb("13-15");
  }

  else if (
    bust === 44 &&
    waist === 37 &&
    hips <= 46
  ) {
    setSize("XL");
    setSizeNumb("17");
  }

  else if (                                      
    bust >= 44 && bust <= 47 &&
    waist >= 37 && waist <= 40 &&
    hips >= 46 && hips <= 49
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