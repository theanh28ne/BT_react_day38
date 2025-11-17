import { useEffect, useState } from "react";
import useCart from "../../hooks/useCart";
import ProductCard from "../../components/ProductCart";
import Cart from "../../components/Cart";

const productsTemp = [
  {
    id: 1,
    name: "Laptop",
    price: 999.99,
    description: "High-performance laptop",
  },
  {
    id: 2,
    name: "Headphones",
    price: 199.99,
    description: "Wireless headphones",
  },
  {
    id: 3,
    name: "USB-C Cable",
    price: 19.99,
    description: "Fast charging cable",
  },
  {
    id: 4,
    name: "Webcam 4K",
    price: 149.99,
    description: "Crystal clear video",
  },
  {
    id: 5,
    name: "Keyboard",
    price: 129.99,
    description: "Mechanical keyboard",
  },
  { id: 6, name: "Mouse", price: 79.99, description: "Gaming mouse" },
];

export default function ShoppingPage() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { totalQuantity } = useCart();
  const [products, setProducts] = useState(productsTemp);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://api01.f8team.dev/api/products");
        const data = await response.json();

        // Lọc ra chỉ những trường bạn muốn
        const filteredData = data.data.items.map((item) => ({
          id: item.id,
          name: item.title,
          price: item.price,
          description: item.category,
        }));

        setProducts(filteredData);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-300 sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold">Tech Store</h1>

          <div className="relative">
            <button
              onClick={() => setIsCartOpen(!isCartOpen)}
              className="relative p-2 text-xl hover:text-blue-600"
            >
              🛒
              {totalQuantity > 0 && (
                <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {totalQuantity}
                </span>
              )}
            </button>

            {isCartOpen && (
              <>
                <div
                  className="fixed inset-0 z-40"
                  onClick={() => setIsCartOpen(false)}
                />
                <Cart />
              </>
            )}
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold mb-2">Sản phẩm</h2>
        <p className="text-gray-600 mb-6">Danh sách các sản phẩm công nghệ</p>
        <ProductCard products={products} />
      </main>
    </div>
  );
}
