import React, { useState } from "react";
import menu from "../data";
import Categories from "./components/Categories";
import Menu from "./components/Menu";

const App = () => {
  const allCategories = [
    "ทั้งหมด",
    ...new Set(menu.map((menu) => menu.category)),
  ];

  const [menuItems, setMenuItems] = useState(menu);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    if (category == "ทั้งหมด") {
      setMenuItems(menu);
      return;
    }
    const newItems = menu.filter((menu) => menu.category === category);
    setMenuItems(newItems);
  };

  return (
    <div className="">
      <main className="text-center">
        <section className="">
          <h2>Our Menu</h2>
        </section>
        <Categories categories={categories} filterItems={filterItems} />
        <Menu menuItems={menuItems} />
      </main>
    </div>
  );
};

export default App;
