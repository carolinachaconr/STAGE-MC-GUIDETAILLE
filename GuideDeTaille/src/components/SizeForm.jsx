export default function SizeForm() {
  return (
    <form className="space-y-5">

      <div>
        <label className="block text-sm font-medium mb-1">
          Votre grandeur (cm)
        </label>
        <input
          type="number"
          placeholder="Ex: 170"
          className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">
          Votre poids (kg)
        </label>
        <input
          type="number"
          placeholder="Ex: 65"
          className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">
          Âge
        </label>
        <input
          type="number"
          placeholder="Ex: 25"
          className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

     

      <button
        type="button"
        className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
      >
        Calculer ma taille
      </button>

    </form>
  );
}