import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDb } from "../../Redux/dbSlice";
import './Shop.scss';

const Shop = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.db);

  useEffect(() => {
    dispatch(fetchDb());
  }, [dispatch]);

  if (data.status === 'loading') {
    return <div className="shop__loading">Loading...</div>;
  }
  
  if (data.status === 'failed') {
    return <div className="shop__error">Error fetching data: {data.error}</div>;
  }

  return (
    <div className="shop">
      <div className="shop__items">
        {data.data && data.data.map(item => (
          <div key={item.id} className="shop__item">
            <img src={item.image} alt={item.name} className="shop__item-image" />
            <div className="shop__item-details">
              <h3 className="shop__item-name">{item.name}</h3>
              <p className="shop__item-description">{item.description}</p>
              <p className="shop__item-price">${item.price.toFixed(2)}</p>
              <p className="shop__item-rating">Rating: {item.stars}</p>
              <p className="shop__item-category">Category: {item.category}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;
