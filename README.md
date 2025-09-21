<img width="1024" height="1024" alt="bookstore" src="https://github.com/user-attachments/assets/e3976408-7d30-47c3-a80e-c8499a5bf497" />



# Amana Bookstore – Pre-Work Assignment Solution

Welcome to the official solution repository for the **Pre-Work Assignment** of the Amana Full-Stack Development Bootcamp (Unit 00: Orientation). 

This repository documents the rigorous process undertaken to fulfill the assignment requirements and showcases the technical and collaborative skills developed during the orientation phase.

---

## 📚 Introduction

This assignment serves as the gateway to the Amana Bootcamp, providing participants with an introduction to the core tools, workflows, and collaborative practices essential for success throughout the program. By successfully completing these tasks, students demonstrate readiness to engage with full-stack development using modern technologies and team-based methodologies.

---

## 🎯 Assignment Objectives

- **Environment Preparation:** Install and configure Node.js, Visual Studio Code, Git, and AI tools (ChatGPT, Gemini) to establish a robust development environment.
- **Version Control Proficiency:** Register for a GitHub account and practice fundamental Git operations including forking, cloning, pulling, and pushing repositories.
- **Codebase Exploration:** Fork, clone, and locally execute the Amana Bookstore application built with Next.js.
- **Technical Analysis:** Conduct a comprehensive review of the codebase, answering targeted questions to deepen understanding of architecture, functionality, and best practices.
- **Collaboration & Documentation:** Work collaboratively and document your findings in a shared Google Doc, fostering professional communication and peer learning.

---

## 📝 Task Breakdown

1. **Developer Tools Installation**
   - Set up Node.js, VS Code, Git, ChatGPT, and Gemini.
   - Create a dedicated workspace folder (e.g., `Amana_Bootcamp`).

2. **GitHub Account Setup**
   - Register and configure your GitHub account.
   - Verify that repository operations (fork, clone, pull, push) are functioning correctly.

3. **Project Setup**
   - Fork and clone the [Amana Bookstore Repository](https://github.com/Amana-Full-Stack-Development-Bootcamp/Amana-Bookstore).
   - Build and run the project locally:
     ```bash
     npm run build
     npm run dev
     ```
   - Confirm successful deployment via the local URL.

4. **Codebase Analysis**
   - Respond to 16 structured questions regarding the codebase (see below).
   - Provide supporting evidence through code snippets and screenshots.

---

## 🧑‍💻 Learning Outcomes

- **Technical Acumen:** Gained proficiency in tool installation, environment configuration, and repository management.
- **Codebase Insight:** Developed familiarity with Next.js project structure, dynamic routing, component architecture, and state management.
- **Analytical Thinking:** Practiced dissecting application logic and identifying design patterns and implementation strategies.
- **Effective Collaboration:** Cultivated communication and teamwork skills through peer-driven analysis and documentation.

---

## 🔍 Codebase Review – Key Insights

### 1. Main Welcome
- **File:** `src/app/page.tsx`
- **Role:** Entry point for the home page, including the hero section and welcome message.

### 2. Data Storage
- **File:** `src/app/data/books.ts`
- **Role:** Contains the array of book objects, each with attributes such as `id`, `title`, `author`, `price`, etc.

### 3. Navigation Bar
- **File:** `src/app/components/Navbar.tsx`
- **Role:** Controls the site's top navigation bar and menu links.

### 4. Components Overview
- **BookCard.tsx:** Visualizes individual books with details and action buttons.
- **BookGrid.tsx:** Displays books in a grid with search, filter, sort, and pagination.
- **BookListItem.tsx:** Shows book details in list format.
- **CartItem.tsx:** Manages cart item display and controls.
- **Pagination.tsx:** Handles page navigation and item counts.
- **Navbar.tsx:** Site-wide navigation, referenced in `layout.tsx`.

### 5. Book Display Logic
- **All Books:** Managed by `BookGrid.tsx` and `BookListItem.tsx`.
- **Featured Books:** Rendered by `BookGrid.tsx` and `BookCard.tsx`.

### 6. Book Properties Display
- **Featured Book Properties:** Displayed within `BookCard.tsx` using book object attributes.

### 7. URL Routing
- **File:** `src/app/book/[id]/page.tsx`
- **Mechanism:** Next.js dynamic routing using `[id]` folders for individual book URLs.

### 8. Cart Management
- **File:** `src/app/cart/page.tsx`
- **Role:** Cart state and logic managed via React state and localStorage synchronization.

### 9. Adding Books
- **Method:** Insert a new book object into `src/app/data/books.ts` following the predefined structure.

### 10. Filtering Logic
- **Featured:** Filtered by the `featured: true` property.
- **Category:** Filtered by genre via the `filteredAndSortedBooks` function.

### 11. Sorting Logic
- **Location:** In `filteredAndSortedBooks`.
- **Mechanism:** Sorts by user-selected criteria (title, author, rating, etc.).

### 12. Pagination
- **File:** `src/app/components/Pagination.tsx`
- **Role:** Calculates items per page, generates page buttons, and supports dynamic selection.

### 13. Styling
- **Method:** Utilizes Tailwind CSS utility classes.
- **Customization:** Alter colors via `bg-blue-*` classes and adjust text height with `leading-*` classes.

### 14. Typesetting
- **File:** `types/index.ts`
- **Role:** Defines TypeScript interfaces for strict type checking and clarity.

### 15. Dependencies
- **File:** `package.json`
- **Role:** Manages project dependencies, scripts, and metadata.

### 16. Public Folder
- **Role:** Stores static assets for direct browser access; separated from the application code in the `app` folder.

---

## 📦 Repository Link

[Amana Bookstore Repository](https://github.com/Amana-Full-Stack-Development-Bootcamp/Amana-Bookstore)

---

## 🛠️ Changes and Enhancements

As part of the assignment, the following modifications were implemented to enhance functionality and user experience:

1. **Color Theme Update**
   - Unified the primary theme color to orange, ensuring consistency across all buttons, navbar elements, and highlights.

2. **Hero Section Enhancement**
   - Introduced a wallpaper background with a blur and black overlay effect for improved visual appeal.

3. **Book Card Layout Update**
   - Redesigned the book card component with larger images, refined spacing, and enhanced button styling.
   - Added the ability to toggle between list and grid views for optimal browsing.

4. **Items per Page Selection**
   - Incorporated a dropdown in the book section, enabling users to control the number of displayed books per page (e.g., 6, 12, 24).

5. **Amana Book Icon in Navbar**
   - Included a book icon in the navbar header to reinforce branding and improve navigation clarity.

---

## 📄 Answer Document & Screenshots

- **Answers to Assignment Questions:**  
  [Google Doc – Answers to Codebase Questions](https://docs.google.com/document/d/1I7DzqzP9kD0H9ZQ0RkjQbDpKTZMm2gA_LVVRS-ED7L0/edit?usp=drive_link)

- **Screenshots & Enhancement Evidence:**  
  [Google Doc – Screenshots & Enhancement Details](https://docs.google.com/document/d/132GR6fJcxdPwUnAkq24OwPLOtiuipbwpxp_MQ1UH6jM/edit?usp=drive_link)

---
