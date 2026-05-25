export default function Modal({ isOpen, onClose, title, children }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">

      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/50"
        onClick={onClose}
      />

      {/* Box */}
      <div className="relative bg-white w-full max-w-md rounded-2xl shadow-xl p-6 z-10">

        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">{title}</h2>

          <button onClick={onClose} className="text-gray-500 text-xl">
            ✕
          </button>
        </div>

        {/* 👇 ICI le formulaire apparaît */}
        {children}

       

      </div>
    </div>
  );
}