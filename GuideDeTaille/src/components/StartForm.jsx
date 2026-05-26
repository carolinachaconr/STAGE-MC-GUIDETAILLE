
import { useState } from "react";

import SizeForm from "./SizeForm";

export default function StartForm() {
     const [startQuiz, setStartQuiz] = useState(false);


  return (
   

      <div>
        {!startQuiz ? (
          <>
            <h1 className="text-2xl font-bold mb-4 text-center">Guide des tailles</h1>
            <p className="pb-30 text-center">Avez-vous besoin d'aide pour choisir votre taille ?</p>
            <button 
            onClick={() => setStartQuiz(true)}
            className="w-full bg-[#d71e3e] text-white py-2 rounded-lg hover:bg-[#b01a30]">
              Oui, je veux trouver ma taille
            </button>
          </>
        ) : (
          <SizeForm />
        )}
      
      
      </div>

    

    

    
    
  );
}