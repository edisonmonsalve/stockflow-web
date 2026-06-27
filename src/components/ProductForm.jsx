import { useState } from 'react';

export default function ProductForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    name: '',
    code: '',
    quantity: '',
    price: '',
    minimumStock: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      ...formData,
      quantity: parseInt(formData.quantity),
      price: parseFloat(formData.price),
      minimumStock: parseInt(formData.minimumStock),
    });
    setFormData({
      name: '',
      code: '',
      quantity: '',
      price: '',
      minimumStock: '',
    });
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-8 mb-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Add New Product</h2>
      
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          type="text"
          name="name"
          placeholder="Product name"
          value={formData.name}
          onChange={handleChange}
          required
          className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-green-600"
        />
        
        <input
          type="text"
          name="code"
          placeholder="Product code (unique)"
          value={formData.code}
          onChange={handleChange}
          required
          className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-green-600"
        />
        
        <input
          type="number"
          name="quantity"
          placeholder="Quantity"
          value={formData.quantity}
          onChange={handleChange}
          required
          className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-green-600"
        />
        
        <input
          type="number"
          name="price"
          placeholder="Price"
          step="0.01"
          value={formData.price}
          onChange={handleChange}
          required
          className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-green-600"
        />
        
        <input
          type="number"
          name="minimumStock"
          placeholder="Minimum stock"
          value={formData.minimumStock}
          onChange={handleChange}
          required
          className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-green-600"
        />
        
        <button
          type="submit"
          className="bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition font-bold md:col-span-2"
        >
          ➕ Add Product
        </button>
      </form>
    </div>
  );
}