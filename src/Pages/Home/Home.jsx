import React from "react";
import './Home.scss'

const Home = () => {
  return (
    <div>
      <section className="home">
      <div className="home__image-container">
        <img src="/src/assets/img/home-img.jpg" alt="Home" className="home__image" />
        <div className="home__text-container">
          <h1 className="home__title">Apple Store</h1>
        </div>
      </div>
    </section>
    </div>
  );
};

export default Home;
