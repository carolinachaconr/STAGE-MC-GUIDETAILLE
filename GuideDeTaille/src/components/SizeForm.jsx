
import { useState } from "react";

export default function SizeForm() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [age, setAge] = useState("");
  const [size, setSize] = useState("");

  const calculateSize = () => {
    if (!height || !weight || !age) {
      alert("Veuillez remplir tous les champs");
      return;
    }
   if (height>=170 && weight<= 70){
      setSize("M");
   }
    else if (height>=170 && weight>70){
      setSize("L");
    }
    else{
      setSize("S");
    }
  }

  return (
    <form className="space-y-5">

      <div>
        <label className="block text-sm font-medium mb-1">
          Votre grandeur (cm)
        </label>
        <input
          type="number"
          value={height}
          onChange={(e)=> setHeight(Number(e.target.value))}
          placeholder="Ex: 170"
          className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#d71e3e]"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">
          Votre poids (kg)
        </label>
        <input
          type="number"
          value={weight}
          onChange={(e) => setWeight(Number(e.target.value))}
          placeholder="Ex: 65"
          className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#d71e3e]"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">
          Âge
        </label>
        <input
          type="number"
          value={age}
          onChange={(e) => setAge(Number(e.target.value))}
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
            {size}
          </p>

        </div>
      )}

    </form>
  );
}