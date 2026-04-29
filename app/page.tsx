"use client";

import { useState, useEffect } from "react";
import { BUSINESS_NAME, BUSINESS_TAGLINE, BUSINESS_PHONE } from "@/lib/data";

interface Product {
  _id: string;
  name: string;
  price: number;
  description: string;
  image: string;
  category: string;
}

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [customerName, setCustomerName] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");
  const [note, setNote] = useState("");
  const [loadingProducts, setLoadingProducts] = useState(true);

  useEffect(() => {
    fetch("/api/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoadingProducts(false);
      })
      .catch(() => setLoadingProducts(false));
  }, []);

  const total = selectedProduct ? selectedProduct.price * quantity : 0;

  const handleWhatsAppOrder = async () => {
    if (!selectedProduct || !customerName.trim() || !customerPhone.trim()) {
      return alert("Please enter your name and phone number!");
    }

    // Save order to database
    try {
      await fetch("/api/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          customerName: customerName.trim(),
          phone: customerPhone.trim(),
          items: [
            {
              productId: selectedProduct._id,
              name: selectedProduct.name,
              price: selectedProduct.price,
              quantity,
            },
          ],
          total,
          note,
        }),
      });
    } catch (err) {
      console.error("Failed to save order:", err);
    }

    // Open WhatsApp
    const text = `Hello ${BUSINESS_NAME}!\n\nI would like to order:\n*${quantity}x ${selectedProduct.name}*\nTotal: ₦${total.toLocaleString()}\n\nMy name is: *${customerName.trim()}*\nPhone: ${customerPhone.trim()}\n${note ? `Note: ${note}` : ""}\n\nPlease confirm my order!`;
    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/${BUSINESS_PHONE}?text=${encodedText}`, "_blank");
    closeModal();
  };

  const closeModal = () => {
    setSelectedProduct(null);
    setQuantity(1);
    setNote("");
  };

  const categories = Array.from(new Set(products.map((p) => p.category)));

  return (
    <main className="flex-1 w-full bg-white text-gray-800">
      {/* Navigation */}
      <nav className="fixed w-full bg-white/90 backdrop-blur-md z-40 border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-black text-primary">BUJEE</span>
              <span className="text-2xl font-black text-gray-900 hidden sm:block">TREATS</span>
            </div>
            <div className="hidden md:flex space-x-8 text-sm font-semibold text-gray-600">
              <a href="#menu" className="hover:text-primary transition-colors">Menu</a>
              <a href="#how-it-works" className="hover:text-primary transition-colors">How it Works</a>
              <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
              <a href="/admin" className="hover:text-primary transition-colors opacity-60">Staff</a>
            </div>
            <div>
              <a href="#menu" className="bg-primary text-white px-6 py-2.5 rounded-full font-bold shadow-lg shadow-primary/30 hover:bg-orange-600 transition-all hover:scale-105 active:scale-95 text-sm">
                Order Now
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col space-y-6 text-center md:text-left">
            <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 leading-tight">
              <span className="text-primary block">BUJEE</span>
              TREATS
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 font-medium">{BUSINESS_TAGLINE}</p>
            <p className="text-gray-500 max-w-md mx-auto md:mx-0">
              Food vendor business for tasty, healthy, and convenient fast orders experience via WhatsApp.
            </p>
            <div className="pt-4 flex justify-center md:justify-start">
              <a href="#menu" className="bg-primary text-white px-8 py-4 rounded-full font-bold shadow-xl shadow-primary/30 hover:bg-orange-600 transition-all flex items-center gap-3 text-lg hover:-translate-y-1">
                Order Now →
              </a>
            </div>
          </div>
          <div className="relative rounded-3xl overflow-hidden shadow-2xl h-[400px] md:h-[500px]">
            <img
              src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=1200"
              alt="Delicious healthy bowl"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-gray-900 mb-4">Our Menu</h2>
            <div className="h-1 w-20 bg-primary mx-auto rounded-full"></div>
          </div>

          {loadingProducts ? (
            <div className="flex items-center justify-center py-20">
              <div className="w-10 h-10 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
            </div>
          ) : products.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-5xl mb-4">🍽️</p>
              <p className="text-gray-500 font-medium">Menu coming soon!</p>
            </div>
          ) : (
            <div className="space-y-16">
              {categories.map((category) => (
                <div key={category}>
                  <h3 className="text-2xl font-bold text-gray-800 mb-8 border-l-4 border-primary pl-4">{category}</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {products
                      .filter((p) => p.category === category)
                      .map((product) => (
                        <div
                          key={product._id}
                          className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-gray-100 flex flex-col h-full group"
                        >
                          <div className="h-48 relative overflow-hidden bg-gray-100">
                            <img
                              src={product.image}
                              alt={product.name}
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                            <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-bold shadow-sm">
                              ₦{product.price.toLocaleString()}
                            </div>
                          </div>
                          <div className="p-6 flex flex-col flex-1">
                            <h4 className="font-bold text-xl text-gray-900 mb-2">{product.name}</h4>
                            <p className="text-sm text-gray-500 flex-1">{product.description}</p>
                            <button
                              onClick={() => setSelectedProduct(product)}
                              className="mt-6 w-full bg-orange-50 text-primary py-3 rounded-xl font-bold hover:bg-primary hover:text-white transition-colors flex justify-center items-center gap-2"
                            >
                              🛒 Order on WhatsApp
                            </button>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* How It Works & Trust */}
      <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <div className="mb-10 text-center lg:text-left">
              <h2 className="text-3xl font-black text-gray-900 mb-4">How It Works</h2>
              <div className="h-1 w-20 bg-primary mx-auto lg:mx-0 rounded-full"></div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-6">
              {[
                { step: 1, title: "Choose your meal", desc: "Browse our menu and pick your favorites." },
                { step: 2, title: "Click order", desc: "Click the order button on any meal card." },
                { step: 3, title: "Confirm on WhatsApp", desc: "Confirm your order directly on WhatsApp." },
              ].map((item, idx) => (
                <div key={idx} className="bg-white p-6 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-50 flex items-start gap-4">
                  <div className="w-12 h-12 bg-orange-100 text-primary rounded-2xl flex items-center justify-center font-black text-xl shrink-0">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-gray-900 mb-1">{item.title}</h3>
                    <p className="text-gray-500 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="mb-10 text-center lg:text-left">
              <h2 className="text-3xl font-black text-gray-900 mb-4">Trust</h2>
              <div className="h-1 w-20 bg-primary mx-auto lg:mx-0 rounded-full"></div>
            </div>
            <div className="space-y-6">
              {[
                { icon: "✅", title: "Fresh Meals Daily", desc: "Fresh meals made every day." },
                { icon: "🚚", title: "Fast Delivery", desc: "Experience super fast delivery." },
                { icon: "🛡️", title: "Quality Ingredients", desc: "High quality ingredients always." },
              ].map((item, idx) => (
                <div key={idx} className="bg-white p-6 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-50 flex items-center gap-5">
                  <div className="w-14 h-14 bg-orange-50 rounded-2xl flex items-center justify-center shrink-0 text-2xl">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-gray-900 mb-1">{item.title}</h3>
                    <p className="text-gray-500 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-primary text-white pt-16 pb-8 rounded-t-[3rem] mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
            <div>
              <h3 className="font-black text-2xl mb-4">Company</h3>
              <ul className="space-y-3 text-orange-100">
                <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#menu" className="hover:text-white transition-colors">Food Collection</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-black text-2xl mb-4">About</h3>
              <ul className="space-y-3 text-orange-100">
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Stories</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-black text-2xl mb-4">WhatsApp CTA</h3>
              <a
                href={`https://wa.me/${BUSINESS_PHONE}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-white text-primary px-6 py-3 rounded-full font-bold hover:bg-gray-50 transition-colors shadow-lg"
              >
                💬 Chat on WhatsApp
              </a>
            </div>
            <div>
              <h3 className="font-black text-2xl mb-4">Contact</h3>
              <div className="space-y-4 text-orange-100">
                <p className="flex items-center gap-2">
                  <span className="bg-white/20 p-2 rounded-full">🛒</span>
                  BUJEE Treats
                </p>
                <p className="flex items-center gap-2">
                  <span className="bg-white/20 p-2 rounded-full">📞</span>
                  +{BUSINESS_PHONE}
                </p>
              </div>
            </div>
          </div>
          <div className="text-center pt-8 border-t border-white/20 text-orange-200 text-sm flex flex-col md:flex-row justify-between items-center gap-4">
            <p>© {new Date().getFullYear()} BUJEE Treats. All rights reserved.</p>
            <a href="/admin" className="hover:text-white underline">Staff Login</a>
          </div>
        </div>
      </footer>

      {/* Order Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 backdrop-blur-sm">
          <div className="bg-white w-full sm:max-w-md rounded-t-[2rem] sm:rounded-3xl max-h-[90vh] overflow-y-auto shadow-2xl flex flex-col">
            <div className="p-6 border-b border-gray-100 flex justify-between items-center sticky top-0 bg-white/95 backdrop-blur z-10 sm:rounded-t-3xl">
              <h3 className="font-bold text-xl text-gray-900">Order Details</h3>
              <button onClick={closeModal} className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors">
                ✕
              </button>
            </div>

            <div className="p-6 space-y-6">
              <div className="flex gap-4">
                <div className="w-24 h-24 rounded-2xl overflow-hidden bg-gray-100 shrink-0">
                  <img src={selectedProduct.image} alt={selectedProduct.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <p className="font-bold text-lg text-gray-900">{selectedProduct.name}</p>
                  <p className="text-gray-500 text-sm mt-1 line-clamp-2">{selectedProduct.description}</p>
                  <div className="font-black text-primary text-xl mt-2">₦{selectedProduct.price.toLocaleString()}</div>
                </div>
              </div>

              <div className="bg-gray-50 p-4 rounded-2xl flex items-center justify-between">
                <label className="font-bold text-gray-700">Quantity</label>
                <div className="flex items-center gap-4">
                  <button type="button" onClick={() => setQuantity(Math.max(1, quantity - 1))} className="w-10 h-10 rounded-full bg-white shadow flex items-center justify-center text-gray-600 text-xl font-medium">−</button>
                  <span className="w-6 text-center font-bold text-lg">{quantity}</span>
                  <button type="button" onClick={() => setQuantity(quantity + 1)} className="w-10 h-10 rounded-full bg-white shadow flex items-center justify-center text-gray-600 text-xl font-medium">+</button>
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Your Name <span className="text-red-500">*</span></label>
                <input type="text" value={customerName} onChange={(e) => setCustomerName(e.target.value)} className="w-full bg-gray-50 border-0 rounded-2xl p-4 focus:ring-2 focus:ring-primary outline-none font-medium" placeholder="e.g. John Doe" />
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Phone Number <span className="text-red-500">*</span></label>
                <input type="tel" value={customerPhone} onChange={(e) => setCustomerPhone(e.target.value)} className="w-full bg-gray-50 border-0 rounded-2xl p-4 focus:ring-2 focus:ring-primary outline-none font-medium" placeholder="e.g. 08012345678" />
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Special Note (Optional)</label>
                <textarea rows={2} value={note} onChange={(e) => setNote(e.target.value)} className="w-full bg-gray-50 border-0 rounded-2xl p-4 focus:ring-2 focus:ring-primary outline-none resize-none font-medium" placeholder="e.g. No onions, extra spicy..." />
              </div>
            </div>

            <div className="p-6 border-t border-gray-100 bg-white sticky bottom-0 z-10 flex flex-col gap-4">
              <div className="flex justify-between items-center px-2">
                <span className="font-bold text-gray-500">Total Amount</span>
                <span className="font-black text-2xl text-gray-900">₦{total.toLocaleString()}</span>
              </div>
              <button
                onClick={handleWhatsAppOrder}
                className="w-full bg-[#25D366] text-white py-4 rounded-2xl font-bold hover:bg-[#20b858] transition-all flex justify-center items-center gap-2 shadow-lg shadow-green-200 text-lg hover:-translate-y-1"
              >
                💬 Confirm on WhatsApp
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
