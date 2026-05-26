import { useState } from "react";
import Hauts from "./Hauts";
import Pantalons from "./Pantalons";
import Chaussures from "./Chaussures";

export default function SizeForm() {

  const [section, setSection] = useState("hauts");

  return (
    <div>

      <nav className="flex flex-col md:flex-row gap-4 mb-6">

 {section === "hauts" ? (
              <button className="text-red-500">
                Hauts
              </button>
            ) : (
              <button onClick={() => setSection("hauts")}>
              Hauts
              </button>
            )}



        {/* <button onClick={() => setSection("hauts")}>
          Hauts
        </button> */}

       {section === "pantalons" ? (
              <button className="text-red-500">
                Pantalons
              </button>
            ) : (
              <button onClick={() => setSection("pantalons")}>
              Pantalons
              </button>
            )}

        {section === "chaussures" ? (
              <button className="text-red-500">
                Chaussures
              </button>
            ) : (
              <button onClick={() => setSection("chaussures")}>
                Chaussures
              </button>
            )}

      </nav>

      {section === "hauts" && <Hauts />}
      {section === "pantalons" && <Pantalons />}
      {section === "chaussures" && <Chaussures />}

    </div>
  );
}