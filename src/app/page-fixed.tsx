export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center p-8">
      <div className="text-center text-white max-w-4xl">
        <h1 className="text-6xl font-bold mb-8">
          Mémo-Assur Wallet
        </h1>
        <p className="text-2xl mb-12 text-blue-100">
          La première app universelle pour vos mémos d'assurance
        </p>
        <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-lg transition-colors duration-300">
          Commencer gratuitement
        </button>
        <div className="mt-12 p-6 bg-white/10 rounded-xl backdrop-blur-sm">
          <h3 className="text-xl font-bold mb-4">Étapes simples :</h3>
          <ol className="text-left space-y-2">
            <li>1. Scannez votre mémo d'assurance</li>
            <li>2. L’IA extrait les données</li>
            <li>3. Votre wallet pass est prêt !</li>
          </ol>
        </div>
      </div>
    </div>
  );
}
