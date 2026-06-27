export default function ProductCard({ product, onDelete, onUpdate }) {
  const isLowStock = product.quantity < product.minimumStock;

  return (
    <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-green-600 hover:shadow-lg transition">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-xl font-bold text-gray-800">{product.name}</h3>
          <p className="text-sm text-gray-500">Code: {product.code}</p>
        </div>
        {isLowStock && (
          <span className="bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold">
            ⚠️ LOW STOCK
          </span>
        )}
      </div>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <p className="text-sm text-gray-600">Quantity</p>
          <p className={`text-2xl font-bold ${isLowStock ? 'text-red-600' : 'text-green-600'}`}>
            {product.quantity}
          </p>
        </div>
        <div>
          <p className="text-sm text-gray-600">Min Stock</p>
          <p className="text-2xl font-bold text-blue-600">{product.minimumStock}</p>
        </div>
        <div>
          <p className="text-sm text-gray-600">Price</p>
          <p className="text-2xl font-bold text-gray-800">${product.price.toFixed(2)}</p>
        </div>
        <div>
          <p className="text-sm text-gray-600">Total Value</p>
          <p className="text-2xl font-bold text-purple-600">
            ${(product.quantity * product.price).toFixed(2)}
          </p>
        </div>
      </div>

      <div className="flex gap-2">
        <button
          onClick={() => onDelete(product.code)}
          className="flex-1 bg-red-500 text-white py-2 rounded hover:bg-red-600 transition font-semibold"
        >
          Delete
        </button>
        <button
          onClick={() => onUpdate(product)}
          className="flex-1 bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition font-semibold"
        >
          Update Stock
        </button>
      </div>
    </div>
  );
}