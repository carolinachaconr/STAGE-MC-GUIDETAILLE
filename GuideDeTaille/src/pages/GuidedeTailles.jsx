import { useState } from "react";
import TailleHauts from "../components/TailleHauts";
import TaillePantalons from "../components/TaillePantalons";
import TailleChaussures from "../components/TailleChaussures";

export default function GuideDeTailles() {
  const [section, setSection] = useState("");

  return (
    <div className="p-10">
      <h1>Guide des tailles</h1>
      <nav className="bg-gray-200 p-4 rounded-lg mb-6">
        <ul className="flex flex-row gap-3">

          <li  >
            {section === "hauts" ? (
              <button className="text-red-500">
                Taille hauts
              </button>
            ) : (
              <button  onClick={() => setSection("hauts")}>
                Taille hauts
              </button>
            )}
          </li>

          <li>
           {section === "pantalons" ? (
              <button className="text-red-500">
                Taille pantalons
              </button>
            ) : (
              <button onClick={() => setSection("pantalons")}>
                Taille pantalons
              </button>
            )}
          </li>
           <li>
            {section === "chaussures" ? (
              <button className="text-red-500">
                Taille chaussures
              </button>
            ) : (
            <button onClick={() => setSection("chaussures")}>
              Taille chaussures
            </button>)}
          </li>

        </ul>
      </nav>

      {section === "hauts" && <TailleHauts />}

      {section  === "pantalons" && <TaillePantalons />}
      {section === "chaussures" && <TailleChaussures />}
    </div>
  );
}