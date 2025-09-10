"use client";

import Image from "next/image";
import BookGrid from "./components/BookGrid";
import { books } from "./data/books";

export default function HomePage() {
  // Simple cart handler for demo purposes
  const handleAddToCart = (bookId: string) => {
    console.log(`Added book ${bookId} to cart`);
    // Here you would typically dispatch to a cart state or call an API
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Welcome Section */}
      <section className="relative w-full h-[400px] mb-12 rounded-lg overflow-hidden shadow-md">
        {/* Background Image */}
        <Image
          src="/images/books-hero.jpg"
          alt="Books Hero"
          fill
          className="object-cover w-full h-full filter blur-sm scale-105"
          priority
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Text Content */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
          <h1 className="text-4xl font-extrabold text-white mb-2">
            Welcome to the Amana Bookstore!
          </h1>
          <p className="text-lg text-gray-200 max-w-xl">
            Your one-stop shop for the best books. Discover new worlds and
            adventures.
          </p>
        </div>
      </section>

      {/* Book Grid */}
      <BookGrid books={books} onAddToCart={handleAddToCart} />
    </div>
  );
}
