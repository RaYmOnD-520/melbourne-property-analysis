import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import valueData from './data/value_by_region.json';

function App() {
  // Sort data by price descending
  const priceByRegion = [...valueData].sort((a, b) => b.Avg_Price - a.Avg_Price);

  // Sort by price per room ascending (best value first)
  const pricePerRoomByRegion = [...valueData].sort((a, b) => a.Avg_Price_per_Room - b.Avg_Price_per_Room);

  // Top 3 best value regions
  const bestValueRegions = new Set(['Western Victoria', 'Northern Victoria', 'Eastern Victoria']);

  // Calculate stats
  const highestPriceRegion = priceByRegion[0];
  const lowestPriceRegion = priceByRegion[priceByRegion.length - 1];
  const priceTrend = -4.3; // From analysis: 2016 to 2018

  // Format price for display
  const formatPrice = (value) => `$${Math.round(value / 1000)}k`;

  // Custom bar component to highlight best values
  const CustomBar = (props) => {
    const { fill, x, y, width, height, payload } = props;
    const isBestValue = bestValueRegions.has(payload.Regionname);
    return (
      <g>
        <rect
          x={x}
          y={y}
          width={width}
          height={height}
          fill={isBestValue ? '#f97316' : fill}
          rx={8}
        />
        {isBestValue && (
          <text
            x={x + width / 2}
            y={y - 8}
            fill="#059669"
            fontSize={12}
            fontWeight="bold"
            textAnchor="middle"
          >
            ★ Best Value
          </text>
        )}
      </g>
    );
  };

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
        {/* Summary Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Highest Price Region */}
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-medium text-gray-500">Highest Avg Price</h3>
              <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>
            <p className="text-3xl font-bold text-gray-900">
              ${Math.round(highestPriceRegion.Avg_Price / 1000)}k
            </p>
            <p className="text-sm text-gray-600 mt-1">{highestPriceRegion.Regionname}</p>
          </div>

          {/* Lowest Price Region */}
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-medium text-gray-500">Lowest Avg Price</h3>
              <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" />
              </svg>
            </div>
            <p className="text-3xl font-bold text-gray-900">
              ${Math.round(lowestPriceRegion.Avg_Price / 1000)}k
            </p>
            <p className="text-sm text-gray-600 mt-1">{lowestPriceRegion.Regionname}</p>
          </div>

          {/* Price Trend */}
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-medium text-gray-500">Price Trend (2016-2018)</h3>
              <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <p className="text-3xl font-bold text-orange-600">
              {priceTrend}%
            </p>
            <p className="text-sm text-gray-600 mt-1">Market cooling trend</p>
          </div>
        </div>

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

        {/* Price per Room Chart */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            Price per Room by Region
          </h2>
          <p className="text-sm text-gray-500 mb-6">
            Lower is better - more space for your money
          </p>
          <ResponsiveContainer width="100%" height={450}>
            <BarChart data={pricePerRoomByRegion} margin={{ top: 40, right: 30, left: 20, bottom: 80 }}>
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
              <Bar
                dataKey="Avg_Price_per_Room"
                fill="#fb923c"
                shape={<CustomBar />}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </main>
    </div>
  );
}

export default App;
