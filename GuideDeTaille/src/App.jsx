import { useState } from "react";
import Modal from "./components/Modal";
import SizeForm from "./components/SizeForm";
import StartForm from "./components/StartForm";
import GuideDeTailles from "./pages/GuidedeTailles";

export default function App() {
  const [open, setOpen] = useState(false);
  // <onClick={() => setOpen(true)}>SizeForm</onClick>


  return (
    <div className="p-10">
      <img className="h-96 flex justify-center pb-10" src="src/assets/IMG.PNG" alt="IMG" />

      <button
        onClick={() => setOpen(true)}
        className="bg-[#d71e3e] text-white px-4 py-2 rounded-xl"
      >
        Ouvrir guide des tailles
      </button>

      <Modal
        isOpen={open}
        onClose={() => setOpen(false)}
        title="Guide des tailles"
      >
        <StartForm />
        {/* <SizeForm /> */}
        
      </Modal>
      <GuideDeTailles />

    </div>
  );
}