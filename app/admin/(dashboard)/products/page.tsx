"use client";

import { useEffect, useState } from "react";

interface Product {
  _id: string;
  name: string;
  price: number;
  description: string;
  image: string;
  category: string;
}

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [editing, setEditing] = useState<Product | null>(null);
  const [form, setForm] = useState({ name: "", price: "", description: "", image: "", category: "" });
  const [saving, setSaving] = useState(false);

  const fetchProducts = () => {
    fetch("/api/products")
      .then((res) => res.json())
      .then((d) => {
        setProducts(d);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const resetForm = () => {
    setForm({ name: "", price: "", description: "", image: "", category: "" });
    setEditing(null);
    setShowModal(false);
  };

  const openEdit = (product: Product) => {
    setEditing(product);
    setForm({
      name: product.name,
      price: product.price.toString(),
      description: product.description,
      image: product.image,
      category: product.category,
    });
    setShowModal(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);

    const payload = { ...form, price: Number(form.price) };

    const url = editing ? `/api/products/${editing._id}` : "/api/products";
    const method = editing ? "PUT" : "POST";

    const res = await fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (res.ok) {
      fetchProducts();
      resetForm();
    } else {
      alert("Failed to save product");
    }
    setSaving(false);
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this product?")) return;

    const res = await fetch(`/api/products/${id}`, { method: "DELETE" });
    if (res.ok) {
      fetchProducts();
    } else {
      alert("Failed to delete product");
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="w-10 h-10 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-black text-gray-900">Products</h1>
        <button
          onClick={() => { resetForm(); setShowModal(true); }}
          className="bg-primary text-white px-6 py-3 rounded-xl font-bold hover:bg-orange-700 transition-colors"
        >
          + Add Product
        </button>
      </div>

      {/* Products Grid */}
      {products.length === 0 ? (
        <div className="bg-white rounded-2xl p-12 text-center shadow-sm border border-gray-100">
          <p className="text-5xl mb-4">🍽️</p>
          <p className="text-gray-500 font-medium">No products yet. Add your first product!</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product._id} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden group">
              <div className="h-40 bg-gray-100 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-gray-900 text-sm">{product.name}</h3>
                  <span className="font-bold text-primary text-sm">₦{product.price.toLocaleString()}</span>
                </div>
                <p className="text-xs text-gray-400 mb-1">{product.category}</p>
                <p className="text-xs text-gray-500 line-clamp-2 mb-4">{product.description}</p>
                <div className="flex gap-2">
                  <button
                    onClick={() => openEdit(product)}
                    className="flex-1 bg-gray-100 text-gray-700 py-2 rounded-lg text-xs font-semibold hover:bg-gray-200 transition-colors"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(product._id)}
                    className="flex-1 bg-red-50 text-red-500 py-2 rounded-lg text-xs font-semibold hover:bg-red-100 transition-colors"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Add/Edit Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 backdrop-blur-sm">
          <div className="bg-white w-full max-w-lg rounded-3xl shadow-2xl max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-100 flex justify-between items-center">
              <h2 className="text-xl font-bold text-gray-900">
                {editing ? "Edit Product" : "Add Product"}
              </h2>
              <button onClick={resetForm} className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-gray-200">
                ✕
              </button>
            </div>

            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">Name</label>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full bg-gray-50 border-0 rounded-xl p-3 focus:ring-2 focus:ring-primary outline-none"
                  placeholder="e.g. Jollof Rice"
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1">Price (₦)</label>
                  <input
                    type="number"
                    value={form.price}
                    onChange={(e) => setForm({ ...form, price: e.target.value })}
                    className="w-full bg-gray-50 border-0 rounded-xl p-3 focus:ring-2 focus:ring-primary outline-none"
                    placeholder="2500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1">Category</label>
                  <input
                    type="text"
                    value={form.category}
                    onChange={(e) => setForm({ ...form, category: e.target.value })}
                    className="w-full bg-gray-50 border-0 rounded-xl p-3 focus:ring-2 focus:ring-primary outline-none"
                    placeholder="e.g. Rice Dishes"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">Description</label>
                <textarea
                  rows={3}
                  value={form.description}
                  onChange={(e) => setForm({ ...form, description: e.target.value })}
                  className="w-full bg-gray-50 border-0 rounded-xl p-3 focus:ring-2 focus:ring-primary outline-none resize-none"
                  placeholder="Short description of the product"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">Image URL</label>
                <input
                  type="url"
                  value={form.image}
                  onChange={(e) => setForm({ ...form, image: e.target.value })}
                  className="w-full bg-gray-50 border-0 rounded-xl p-3 focus:ring-2 focus:ring-primary outline-none"
                  placeholder="https://images.unsplash.com/..."
                  required
                />
                {form.image && (
                  <div className="mt-3 rounded-xl overflow-hidden h-32 bg-gray-100">
                    <img src={form.image} alt="Preview" className="w-full h-full object-cover" />
                  </div>
                )}
              </div>

              <button
                type="submit"
                disabled={saving}
                className="w-full bg-primary text-white py-4 rounded-xl font-bold hover:bg-orange-700 transition-colors disabled:opacity-50 mt-2"
              >
                {saving ? "Saving..." : editing ? "Update Product" : "Add Product"}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
