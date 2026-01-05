import React from "react";

export default function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 w-full h-16 z-20 bg-transparent">
      <div className="container mx-auto px-6 py-4">
        <p className="text-center text-sm text-gray-700 sm:text-base">
          Made with <span className="text-red-500 cursor-pointer ">❤️</span> by{" "}
          <a href="/" className="text-sky-400">
            Dp
          </a>
        </p>
      </div>
    </footer>
  );
}
