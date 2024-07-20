import React, { useEffect, useRef, useState } from "react";
import "./ShopStore.scss";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const ShopStore = () => {
  const [categories, setCategories] = useState([]);
  const scrollContainerRef = useRef(null);

  const fetchData = async () => {
    const urls = [
      "http://localhost:3000/iphone",
      "http://localhost:3000/AirPods",
      "http://localhost:3000/Accessories",
      "http://localhost:3000/MacBook",
      "http://localhost:3000/iPad",
    ];

    const fetchPromises = urls.map((url) =>
      fetch(url).then((response) => response.json())
    );

    const results = await Promise.all(fetchPromises);
    const categoriesData = results.map((data, index) => ({
      name: urls[index].split("/").pop(),
      items: data,
    }));

    setCategories(categoriesData);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="shop-store">
      {categories.map((category) => (
        <div key={category.name} className="shop-store__category">
          <h2 className="shop-store__category-name">{category.name}</h2>
          <div className="shop-store__wrapper">
            <button>{/*add left side slide button */}</button>
            <div className="shop-store__items" ref={scrollContainerRef}>
              {category.items.map((item) => (
                <div key={item.id} className="shop-store__item">
                  <h3 className="shop-store__item-name">{item.name}</h3>
                  <img
                    src={item.image}
                    alt={item.name}
                    className="shop-store__item-image"
                  />
                  <div className="shop-store__item-details">
                    <p className="shop-store__item-description">
                      {item.description}
                    </p>
                    <p className="shop-store__item-price">${item.price}</p>
                  </div>
                </div>
              ))}
            </div>
            <button>{/*add right side slide */}</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ShopStore;
