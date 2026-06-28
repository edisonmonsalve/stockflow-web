const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8080/api/products';

// GET all products
export const getAllProducts = async () => {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error('Failed to fetch products');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};

// POST cretae product  
export const createProduct = async (productData) => {
  try {
    const response = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(productData),
    });
    if (!response.ok) {
        throw new Error('Failed to create product');
    }
    return await response.json();
  } catch (error) {
    console.error('Error creating product:', error);
    throw error;
  }  
}

// GET product by code
export const getProductByCode = async (code) => {
  try {
    const response = await fetch(`${API_URL}/code/${code}`);
    if (!response.ok) {
      throw new Error('Failed to fetch product by code');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching product by code:', error);
    throw error;
  }
};

// PUT update stock
export const updateProductStock = async (code, quantity) => {
  try {
    const response = await fetch(`${API_URL}/${code}?quantity=${quantity}`, {
      method: 'PUT',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({ quantity }),
    });
    if (!response.ok) {
      throw new Error('Failed to update product stock');
    }
    return await response.json();
  } catch (error) {
    console.error('Error updating product stock:', error);
    throw error;
  }
};

// DELETE product
export const deleteProduct = async (code) => {
  try {
    const response = await fetch(`${API_URL}/${code}`, {
        method: 'DELETE',
    });
    if (!response.ok) {
        throw new Error('Failed to delete product');
    }
    return await response.text();
  } catch (error) {
    console.error('Error deleting product:', error);
    throw error;
  }
};

// GET low stock alerts
export const getLowStockAlerts = async () => {
    try {
        const response = await fetch(`${API_URL}/alerts/low-stock`);
        if (!response.ok) {
            throw new Error('Failed to fetch low stock alerts');
        }   
    return await response.json();
    } catch (error) {
        console.error('Error fetching low stock alerts:', error);
        throw error;
    }
}