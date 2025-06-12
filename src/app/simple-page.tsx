export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center">
      <div className="text-center text-white">
        <h1> className="text-6xl font-bold mb-8">
          Mémo-Assur Wallet
        </h1>
        <p className="text-2xl mb-12">
          La première app universelle pour vos mémos d'assurance
        </p>
        <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-lg">
          Commencer gratuitement
        </button>
      </div>
    </div>
  );
}
