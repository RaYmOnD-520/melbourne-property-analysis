import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import valueData from './data/value_by_region.json';

function App() {
  // Sort data by price descending
  const priceByRegion = [...valueData].sort((a, b) => b.Avg_Price - a.Avg_Price);

  // Format price for display
  const formatPrice = (value) => `$${Math.round(value / 1000)}k`;

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

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
        {/* Price by Region Chart */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Average Property Price by Region
          </h2>
          <ResponsiveContainer width="100%" height={400}>
            <BarChart data={priceByRegion} margin={{ top: 20, right: 30, left: 20, bottom: 80 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis
                dataKey="Regionname"
                angle={-45}
                textAnchor="end"
                height={100}
                tick={{ fill: '#374151', fontSize: 12 }}
              />
              <YAxis
                tickFormatter={formatPrice}
                tick={{ fill: '#374151', fontSize: 12 }}
              />
              <Tooltip
                formatter={(value) => `$${value.toLocaleString()}`}
                contentStyle={{ backgroundColor: '#fff', border: '1px solid #e5e7eb', borderRadius: '0.5rem' }}
              />
              <Bar dataKey="Avg_Price" fill="#f59e0b" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </main>
    </div>
  );
}

export default App;
