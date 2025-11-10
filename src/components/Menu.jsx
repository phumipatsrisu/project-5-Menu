import React from "react";

const Menu = ({ menuItems }) => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {menuItems.map((item) => {
          const { id, title, img, desc, price } = item;
          return (
            <div
              key={id}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden"
            >
              <img
                src={img}
                className="w-full h-56 object-cover hover:scale-103"
              />
              <div className="p-5 flex flex-col justify-between h-full">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <h1 className="text-xl font-semibold text-gray-800">
                      {title}
                    </h1>
                    <span className="text-lg font-bold text-yellow-600">
                      {price}฿
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm">
                    {desc}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Menu;
