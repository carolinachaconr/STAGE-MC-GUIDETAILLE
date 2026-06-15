import { useState } from "react";

import GuideDeTailles from "./pages/GuidedeTailles";

export default function App() {
  const [open, setOpen] = useState(false);

  return (
    <div className="p-2">
      {/* <img className="h-96 flex justify-center pb-10" src="src/assets/IMG.PNG" alt="IMG" /> */}

     <button className="underline" onClick={() => setOpen(true)}>Guide des tailles</button>
     {open && <GuideDeTailles />}
      

    </div>
  );
}