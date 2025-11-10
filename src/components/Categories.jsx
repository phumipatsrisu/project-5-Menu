import React from "react";

const Categories = ({ filterItems, categories }) => {
  return (
    <div className="flex flex-wrap justify-center gap-4 my-8">
      {categories.map((category, index) => (
        <button
          key={index}
          onClick={() => filterItems(category)}
          className="bg-yellow-500 text-white px-5 py-2 rounded-full 
                     font-semibold capitalize transition duration-300 
                     hover:bg-yellow-600 hover:scale-105 
                     focus:ring-2 focus:ring-yellow-400"
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default Categories;
