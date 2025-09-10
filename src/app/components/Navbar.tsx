// src/app/components/Navbar.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { CartItem } from "../types";

const Navbar: React.FC = () => {
  const [cartItemCount, setCartItemCount] = useState(0);
  const pathname = usePathname();

  // Update cart count from localStorage
  useEffect(() => {
    const updateCartCount = () => {
      const storedCart = localStorage.getItem("cart");
      if (storedCart) {
        try {
          const cart: CartItem[] = JSON.parse(storedCart);
          const count = cart.reduce((total, item) => total + item.quantity, 0);
          setCartItemCount(count);
        } catch {
          setCartItemCount(0);
        }
      } else {
        setCartItemCount(0);
      }
    };

    updateCartCount();
    window.addEventListener("cartUpdated", updateCartCount);
    return () => window.removeEventListener("cartUpdated", updateCartCount);
  }, []);

  return (
    <nav className="shadow-md fixed w-full top-0 z-10 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold cursor-pointer">
          Amana Bookstore
        </Link>

        <div className="flex items-center space-x-6">
          {/* Links */}
          <Link
            href="/"
            className={`cursor-pointer ${
              pathname === "/" ? "font-semibold underline" : ""
            }`}
          >
            Home
          </Link>
          <Link
            href="/cart"
            className={`flex items-center cursor-pointer ${
              pathname === "/cart" ? "font-semibold underline" : ""
            }`}
          >
            My Cart
            {cartItemCount > 0 && (
              <span className="ml-2 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center bg-gray-800">
                {cartItemCount}
              </span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
