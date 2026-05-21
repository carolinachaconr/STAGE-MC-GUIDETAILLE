import { useState } from "react";

import GuideDeTailles from "./pages/GuidedeTailles";

export default function App() {
  const [open, setOpen] = useState(false);
  // <onClick={() => setOpen(true)}>SizeForm</onClick>


  return (
    <div className="p-2">
      {/* <img className="h-96 flex justify-center pb-10" src="src/assets/IMG.PNG" alt="IMG" /> */}

     
      <GuideDeTailles />

    </div>
  );
}