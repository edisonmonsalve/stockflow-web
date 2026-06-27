import { useState, useEffect } from 'react';
import Header from '../components/Header';
import ProductForm from '../components/ProductForm';
import ProductList from '../components/ProductList';
import { getAllProducts, createProduct, deleteProduct, getLowStockAlerts } from '../services/api';

export default function Dashboard() {
  const [products, setProducts] = useState([]);
  const [lowStockAlerts, setLowStockAlerts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Cargar productos al montar
  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const data = await getAllProducts();
      setProducts(data);
      
      const alerts = await getLowStockAlerts();
      setLowStockAlerts(alerts);
    } catch (err) {
      setError('Failed to load products. Make sure the backend is running on http://localhost:8080');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleAddProduct = async (productData) => {
    try {
      await createProduct(productData);
      fetchProducts();
      alert('✅ Product added successfully!');
    } catch (err) {
      alert('❌ Error adding product: ' + err.message);
    }
  };

  const handleDeleteProduct = async (code) => {
    if (window.confirm('Are you sure?')) {
      try {
        await deleteProduct(code);
        fetchProducts();
        alert('✅ Product deleted!');
      } catch (err) {
        alert('❌ Error deleting product');
      }
    }
  };

  const handleUpdateProduct = (product) => {
    const newQty = prompt('Enter new quantity:', product.quantity);
    if (newQty !== null) {
      // Aquí implementaremos la actualización después
      alert('Update feature coming soon!');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      
      <main className="max-w-6xl mx-auto p-6">
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
            {error}
          </div>
        )}

        {lowStockAlerts.length > 0 && (
          <div className="bg-yellow-100 border border-yellow-400 text-yellow-800 px-4 py-3 rounded mb-6">
            <strong>⚠️ {lowStockAlerts.length} product(s) with low stock!</strong>
          </div>
        )}

        <ProductForm onSubmit={handleAddProduct} />

        {loading ? (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">Loading products...</p>
          </div>
        ) : (
          <ProductList 
            products={products} 
            onDelete={handleDeleteProduct}
            onUpdate={handleUpdateProduct}
          />
        )}
      </main>
    </div>
  );
}