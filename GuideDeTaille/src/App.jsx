import { useState } from "react";
import Modal from "./components/Modal";
import SizeForm from "./components/SizeForm";

export default function App() {
  const [open, setOpen] = useState(false);

  return (
    <div className="p-10">

      <button
        onClick={() => setOpen(true)}
        className="bg-blue-500 text-white px-4 py-2 rounded-xl"
      >
        Ouvrir guide des tailles
      </button>

      <Modal
        isOpen={open}
        onClose={() => setOpen(false)}
        title="Guide des tailles"
      >
        <SizeForm />
      </Modal>

    </div>
  );
}