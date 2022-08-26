import React, { useState } from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import DATA from "../../Data";
import FeaturedProduct from "../../FeaturedProduct";
import Ads from "../../components/Modals/Ads";
import Chat from "../../components/ChatBot/Chatbot";
import ProductCard from "./ProductCard";

const Home = () => {
  const [stars, setStars] = useState(4);
  var example = {
    size: 30,
    value: stars,
    onChange: (newValue) => {
      setStars(newValue);
    },
  };
  return (
    <div>
       <Ads/>
       <Chat/>
      <section id="hero">
        <h4>Trade-in-Offer</h4>
        <h2>Super value deals</h2>
        <h1>On all products</h1>
        <p style={{ color: "black" }}>
          save more with coupouns & upto 70% off!
        </p>
        <Link to="/products">
          {" "}
          <button>Shop Now</button>
        </Link>
      </section>
      <section id="features" class="section-p1">
        <div class="feature-box">
          <img alt="" src="assets/img/features/f1.png" />
          <h6>Free Shipping</h6>
        </div>
        <div class="feature-box">
          <img alt="" src="assets/img/features/f2.png" />
          <h6>Online Order</h6>
        </div>
        <div class="feature-box">
          <img alt="" src="assets/img/features/f3.png" />
          <h6>Save Money</h6>
        </div>
        <div class="feature-box">
          <img alt="" src="assets/img/features/f4.png" />
          <h6>Promotions</h6>
        </div>
        <div class="feature-box">
          <img alt="" src="assets/img/features/f5.png" />
          <h6>Happy Sell</h6>
        </div>
        <div class="feature-box">
          <img alt="" src="assets/img/features/f6.png" />
          <h6>24/7 Support</h6>
        </div>
      </section>
      <section id="product1" class="section-p1">
        <h2>Featured Products</h2>
        <p>Summer Collection New Modern Design</p>
        <div class="product-container">
          {FeaturedProduct.map((data, i) => {
            return (
              <>
                <div class="pro" key={i}>
                  <Link to={`/products/${data.id}`}>
                    {" "}
                    <img alt="" src={data.img} />
                  </Link>
                  <div class="description">
                    <span>{data.category}</span>
                    <h5>{data.name}</h5>
                    <div class="star">
                      <ReactStars {...example} />
                    </div>
                    <h4>Rs.{data.price}</h4>
                  </div>
                  <a href="#">
                    <i class="fa fa-shopping-cart cart"></i>
                  </a>
                </div>
              </>
            );
          })}
        </div>
      </section>
      <section className='flash'>
        <div className='container'>
          <div className='heading f_flex'>
            <i className='fa fa-bolt'></i>
            <h1>Flash Delas</h1>
          </div>
          <ProductCard/>
        </div>
      </section>
      <section id="banner" class="section-m1">
        <h4>Repair Service</h4>
        <h2>
          Upto <span>70%</span> off All type of T-Shirt & Accessories
        </h2>
        <button class="normal">Explore More</button>
      </section>
      <section id="product1" class="section-p1">
        <h2>New Arrivals</h2>
        <p>Summer Collection New Modern Design</p>
        <div class="product-container">
          <div class="pro">
            <img alt="" src="/assets/img/products/n1.jpg" />
            <div class="description">
              <span>Adidas</span>
              <h5>Cartoon Astronout T shirt</h5>
              <div class="star">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
              </div>
              <h4>$ 78</h4>
            </div>
            <a href="#">
              <i class="fa fa-shopping-cart cart"></i>
            </a>
          </div>
          <div class="pro">
            <img alt="" src="/assets/img/products/n2.jpg" />
            <div class="description">
              <span>Adidas</span>
              <h5>Cartoon Astronout T shirt</h5>
              <div class="star">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
              </div>
              <h4>$ 78</h4>
            </div>
            <a href="#">
              <i class="fa fa-shopping-cart cart"></i>
            </a>
          </div>
          <div class="pro">
            <img alt="" src="/assets/img/products/n3.jpg" />
            <div class="description">
              <span>Adidas</span>
              <h5>Cartoon Astronout T shirt</h5>
              <div class="star">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
              </div>
              <h4>$ 78</h4>
            </div>
            <a href="#">
              <i class="fa fa-shopping-cart cart"></i>
            </a>
          </div>
          <div class="pro">
            <img alt="" src="/assets/img/products/n4.jpg" />
            <div class="description">
              <span>Adidas</span>
              <h5>Cartoon Astronout T shirt</h5>
              <div class="star">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
              </div>
              <h4>$ 78</h4>
            </div>
            <a href="#">
              <i class="fa fa-shopping-cart cart"></i>
            </a>
          </div>
          <div class="pro">
            <img alt="" src="/assets/img/products/n5.jpg" />
            <div class="description">
              <span>Adidas</span>
              <h5>Cartoon Astronout T shirt</h5>
              <div class="star">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
              </div>
              <h4>$ 78</h4>
            </div>
            <a href="#">
              <i class="fa fa-shopping-cart cart"></i>
            </a>
          </div>
          <div class="pro">
            <img alt="" src="/assets/img/products/n6.jpg" />
            <div class="description">
              <span>Adidas</span>
              <h5>Cartoon Astronout T shirt</h5>
              <div class="star">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
              </div>
              <h4>$ 78</h4>
            </div>
            <a href="#">
              <i class="fa fa-shopping-cart cart"></i>
            </a>
          </div>{" "}
          <div class="pro">
            <img alt="" src="/assets/img/products/n7.jpg" />
            <div class="description">
              <span>Adidas</span>
              <h5>Cartoon Astronout T shirt</h5>
              <div class="star">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
              </div>
              <h4>$ 78</h4>
            </div>
            <a href="#">
              <i class="fa fa-shopping-cart cart"></i>
            </a>
          </div>
          <div class="pro">
            <img alt="" src="/assets/img/products/n8.jpg" />
            <div class="description">
              <span>Adidas</span>
              <h5>Cartoon Astronout T shirt</h5>
              <div class="star">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
              </div>
              <h4>$ 78</h4>
            </div>
            <a href="#">
              <i class="fa fa-shopping-cart cart"></i>
            </a>
          </div>
        </div>
      </section>
      <section id="sm-banner" class="section-p1">
        <div class="banner-box ">
          <h4>Crazy Deals</h4>
          <h2>Buy one Get One Free</h2>
          <span>The best classic is on sale at Cara</span>
          <Link to="/shop">
            {" "}
            <button class="white">Learn More</button>
          </Link>
        </div>
        <div class="banner-box banner-box2">
          <h4>Spring/Summer</h4>
          <h2>Upcomming Sale</h2>
          <span>The best classic is on sale at Cara</span>
          <Link to="/shop">
            {" "}
            <button class="white">Collection</button>
          </Link>
        </div>
      </section>
      <section id="banner3" class="">
        <div class="banner-box">
          <h2>Sesonal Sale</h2>
          <h3>Winter Collection -50% OFF</h3>
        </div>
        <div class="banner-box banner-box3">
          <h2>T-Shirt</h2>
          <h3>Trendy Prints</h3>
        </div>{" "}
        <div class="banner-box banner-box4">
          <h2>Footware</h2>
          <h3>Spring/Summer Sale</h3>
        </div>
      </section>
      <section id="news-letter" class="section-p1 section-m1">
        <div class="newstext">
          <h4>Singn up For NewsLetters</h4>
          <p>
            Get E-mail Update About Our latest shop <span>Offers</span>
          </p>
        </div>
        <div class="form">
          <input placeholder="Email" type="text" />
          <button class="normal">Sign Up</button>
        </div>
      </section>
    </div>
  );
};

export default Home;
