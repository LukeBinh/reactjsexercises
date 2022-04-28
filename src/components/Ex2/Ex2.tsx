import React from "react";
import skypic from "../image/sky.jpg";
import "./ex2.css";

const Ex2 = () => {
  return (
    <div className="container">
      <header className="header">
        <div className="header-logo">
          <h1>Site Title</h1>
        </div>
        <div className="header-menu">
          <a href="./" className="header-menu_item">
            Categories
          </a>
          <span className="separate">|</span>
          <a href="./" className="header-menu_item">
            Contact us
          </a>
          <span className="separate">|</span>
          <a href="./" className="header-menu_item">
            Follow us
          </a>
          <span className="separate">|</span>
          <a href="./Ex2/index.html" className="header-menu_item">
            Layout 2
          </a>
        </div>
        <div className="header-menu_mobile">
          <i className="fa-solid fa-bars menu_mobile-btn"></i>
        </div>
        <div className="header-search">
          <input
            type="text"
            name="search"
            placeholder="Search"
            id="search"
            className="header-search_input"
          />
        </div>
      </header>

      <div className="content">
        <div className="sidebar">
          <div className="sidebar-category">
            <div className="category-title">
              <h2>Category</h2>
            </div>
            <ul className="category-list">
              <li className="category-item">Item 1...</li>
              <li className="category-item">Item 2...</li>
              <li className="category-item">Item 3...</li>
              <li className="category-item">Item 4...</li>
              <li className="category-item">Item 5...</li>
            </ul>
          </div>
          <div className="sidebar-product">
            <div className="product-title">
              <h2>Top Products</h2>
            </div>
            <ul className="product-list">
              <li className="product-item">Item 1...</li>
              <li className="product-item">Item 2...</li>
              <li className="product-item">Item 3...</li>
              <li className="product-item">Item 4...</li>
              <li className="product-item">Item 5...</li>
            </ul>
          </div>
        </div>

        <div className="product">
          <h1 className="product-title">Top Products</h1>
          <div className="product-display">
            <div className="product-box">
              <div className="product-img">
                <img src={skypic} alt="" />
              </div>
              <p className="product-price">
                Price: <span>10$</span>
              </p>
              <button className="product-btn">Buy Now</button>
            </div>

            <div className="product-box">
              <div className="product-img">
                <img src={skypic} alt="" />
              </div>
              <p className="product-price">
                Price: <span>10$</span>
              </p>
              <button className="product-btn">Buy Now</button>
            </div>

            <div className="product-box">
              <div className="product-img">
                <img src={skypic} alt="" />
              </div>
              <p className="product-price">
                Price: <span>10$</span>
              </p>
              <button className="product-btn">Buy Now</button>
            </div>

            <div className="product-box">
              <div className="product-img">
                <img src={skypic} alt="" />
              </div>
              <p className="product-price">
                Price: <span>10$</span>
              </p>
              <button className="product-btn">Buy Now</button>
            </div>
            <div className="product-box">
              <div className="product-img">
                <img src={skypic} alt="" />
              </div>
              <p className="product-price">
                Price: <span>10$</span>
              </p>
              <button className="product-btn">Buy Now</button>
            </div>
            <div className="product-box">
              <div className="product-img">
                <img src={skypic} alt="" />
              </div>
              <p className="product-price">
                Price: <span>10$</span>
              </p>
              <button className="product-btn">Buy Now</button>
            </div>
          </div>

          <div className="product-pagination">
            <div className="pagination-btn">
              <a href="./">prev</a>
              <a href="./">1</a>
              <a href="./" className="active">
                2
              </a>
              <a href="./">3</a>
              <a href="./">next</a>
            </div>
          </div>
        </div>

        <div className="sidebar hide-on-width">
          <div className="sidebar-adver"></div>
        </div>
      </div>

      <footer className="footer">
        <div className="footer-infor">
          <h3>Footer Information ...</h3>
        </div>
        <div className="footer-link">
          <a href="./">Link 1</a>
          <span className="separate">|</span>
          <a href="./" className="link-active">
            Link 2
          </a>
          <span className="separate">|</span>
          <a href="./">Link 3</a>
        </div>
      </footer>
    </div>
  );
};

export default Ex2;
