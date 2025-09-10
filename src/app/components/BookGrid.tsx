// src/app/components/BookGrid.tsx
"use client";

import React, { useMemo, useState } from "react";
import { Book } from "../types";
import BookCard from "./BookCard";
import BookListItem from "./BookListItem";
import Pagination from "./Pagination";

interface BookGridProps {
  books: Book[];
  onAddToCart?: (bookId: string) => void;
}

const BookGrid: React.FC<BookGridProps> = ({ books, onAddToCart }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("All");
  const [sortBy, setSortBy] = useState("title");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(8);
  const [featuredCarouselIndex, setFeaturedCarouselIndex] = useState(0);
  const [viewMode, setViewMode] = useState<"grid" | "list">("list"); // 🔹 new

  // Memoize featured books
  const featuredBooks = useMemo(
    () => books.filter((book) => book.featured),
    [books]
  );

  // Carousel
  const booksPerPage = 4;
  const totalFeaturedPages = Math.ceil(featuredBooks.length / booksPerPage);
  const currentFeaturedBooks = useMemo(() => {
    const startIndex = featuredCarouselIndex * booksPerPage;
    const endIndex = startIndex + booksPerPage;
    return featuredBooks.slice(startIndex, endIndex);
  }, [featuredBooks, featuredCarouselIndex]);

  const goToPreviousFeatured = () => {
    setFeaturedCarouselIndex((prev) =>
      prev === 0 ? totalFeaturedPages - 1 : prev - 1
    );
  };
  const goToNextFeatured = () => {
    setFeaturedCarouselIndex((prev) =>
      prev === totalFeaturedPages - 1 ? 0 : prev + 1
    );
  };
  const goToFeaturedPage = (pageIndex: number) => {
    setFeaturedCarouselIndex(pageIndex);
  };

  // Genres
  const genres = useMemo(() => {
    const allGenres = books.flatMap((book) => book.genre);
    return ["All", ...new Set(allGenres)];
  }, [books]);

  // Filtering + Sorting
  const filteredAndSortedBooks = useMemo(() => {
    const filtered = books.filter((book) => {
      const matchesSearch =
        book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        book.author.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesGenre =
        selectedGenre === "All" || book.genre.includes(selectedGenre);
      return matchesSearch && matchesGenre;
    });

    const sorted = [...filtered].sort((a, b) => {
      let comparison = 0;
      switch (sortBy) {
        case "title":
          comparison = a.title.localeCompare(b.title);
          break;
        case "author":
          comparison = a.author.localeCompare(b.author);
          break;
        case "datePublished":
          comparison =
            new Date(a.datePublished).getTime() -
            new Date(b.datePublished).getTime();
          break;
        case "rating":
          comparison = a.rating - b.rating;
          break;
        case "reviewCount":
          comparison = a.reviewCount - b.reviewCount;
          break;
        case "price":
          comparison = a.price - b.price;
          break;
        default:
          comparison = 0;
      }
      return sortOrder === "asc" ? comparison : -comparison;
    });

    return sorted;
  }, [books, searchQuery, selectedGenre, sortBy, sortOrder]);

  // Pagination
  const paginatedBooks = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return filteredAndSortedBooks.slice(startIndex, endIndex);
  }, [filteredAndSortedBooks, currentPage, itemsPerPage]);

  const totalPages = Math.ceil(filteredAndSortedBooks.length / itemsPerPage);

  React.useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, selectedGenre, sortBy, sortOrder, itemsPerPage]);

  const handlePageChange = (page: number) => setCurrentPage(page);
  const handleItemsPerPageChange = (newItemsPerPage: number) => {
    setItemsPerPage(newItemsPerPage);
    setCurrentPage(1);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Featured Books */}
      <section className="mb-12">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-3xl font-bold text-gray-800">Featured Books</h2>
          {totalFeaturedPages > 1 && (
            <div className="flex items-center gap-4">
              {/* Indicators */}
              <div className="flex gap-2">
                {Array.from({ length: totalFeaturedPages }, (_, index) => (
                  <button
                    key={index}
                    onClick={() => goToFeaturedPage(index)}
                    className={`w-2 h-2 rounded-full ${
                      index === featuredCarouselIndex
                        ? "bg-orange-600"
                        : "bg-gray-300 hover:bg-gray-400"
                    }`}
                  />
                ))}
              </div>
              {/* Nav buttons */}
              <div className="flex gap-2">
                <button
                  onClick={goToPreviousFeatured}
                  className="p-2 border rounded-full"
                >
                  ◀
                </button>
                <button
                  onClick={goToNextFeatured}
                  className="p-2 border rounded-full"
                >
                  ▶
                </button>
              </div>
            </div>
          )}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {currentFeaturedBooks.map((book) => (
            <BookCard key={book.id} book={book} onAddToCart={onAddToCart} />
          ))}
        </div>
      </section>

      {/* Search + Filters */}
      <section className="mb-8 space-y-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="w-full md:w-1/2 flex gap-2">
            <input
              type="text"
              placeholder="Search by title or author..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-2 border rounded-md"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="px-3 py-2 text-sm border rounded-md bg-gray-100 hover:bg-gray-200"
              >
                Clear
              </button>
            )}
          </div>
          <div className="w-full md:w-1/4">
            <select
              value={selectedGenre}
              onChange={(e) => setSelectedGenre(e.target.value)}
              className="w-full px-4 py-2 border rounded-md"
            >
              {genres.map((genre) => (
                <option key={genre} value={genre}>
                  {genre}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Sorting + View controls */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <span className="text-sm text-gray-600">
            Showing {filteredAndSortedBooks.length} books
          </span>
          <div className="flex items-center gap-4">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-3 py-2 border rounded-md text-sm"
            >
              <option value="title">Title</option>
              <option value="author">Author</option>
              <option value="datePublished">Release Date</option>
              <option value="rating">Rating</option>
              <option value="reviewCount">Review Count</option>
              <option value="price">Price</option>
            </select>

            <button
              onClick={() => setSortOrder(sortOrder === "asc" ? "desc" : "asc")}
              className="px-3 py-2 border rounded-md text-sm"
            >
              {sortOrder === "asc" ? "Asc ↑" : "Desc ↓"}
            </button>

            {/* 🔹 Grid/List Toggle */}
            <button
              onClick={() => setViewMode(viewMode === "grid" ? "list" : "grid")}
              className="px-3 py-2 border rounded-md text-sm"
            >
              {viewMode === "grid" ? "List View" : "Grid View"}
            </button>

            {/* 🔹 Items per page */}
            <select
              value={itemsPerPage}
              onChange={(e) => handleItemsPerPageChange(Number(e.target.value))}
              className="px-3 py-2 border rounded-md text-sm"
            >
              <option value={4}>4</option>
              <option value={8}>8</option>
              <option value={12}>12</option>
              <option value={16}>16</option>
            </select>
          </div>
        </div>
      </section>

      {/* All Books */}
      <section>
        <h2 className="text-3xl font-bold mb-6">All Books</h2>
        {filteredAndSortedBooks.length > 0 ? (
          <>
            {viewMode === "grid" ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {paginatedBooks.map((book) => (
                  <BookCard
                    key={book.id}
                    book={book}
                    onAddToCart={onAddToCart}
                  />
                ))}
              </div>
            ) : (
              <div className="space-y-3">
                {paginatedBooks.map((book) => (
                  <BookListItem
                    key={book.id}
                    book={book}
                    onAddToCart={onAddToCart}
                  />
                ))}
              </div>
            )}

            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
              itemsPerPage={itemsPerPage}
              totalItems={filteredAndSortedBooks.length}
            />
          </>
        ) : (
          <div className="text-center text-gray-500 py-10">
            <p className="text-lg">No books found 📭</p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedGenre("All");
              }}
              className="mt-4 px-4 py-2 border rounded-md bg-orange-500 text-white hover:bg-orange-600"
            >
              Reset Filters
            </button>
          </div>
        )}
      </section>
    </div>
  );
};

export default BookGrid;
