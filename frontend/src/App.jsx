import valueData from './data/value_by_region.json';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <h1 className="text-4xl font-bold text-gray-900">
            Melbourne Housing Market Analysis
          </h1>
          <p className="mt-2 text-lg text-gray-600">
            Data-driven insights for home buyers (2016-2018)
          </p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Regional Value Analysis
          </h2>
          <p className="text-gray-600">
            Charts and visualizations will be added here.
          </p>
        </div>
      </main>
    </div>
  );
}

export default App;
