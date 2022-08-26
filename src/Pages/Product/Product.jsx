import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import "./Product.css";
import DATA from "../../Data";
import SweetPagination from "sweetpagination";
const Product = () => {
  const [currentPageData, setCurrentPageData] = useState(new Array(2).fill());
  const [stars, setStars] = useState(4);
  const [searchTerm, setsearchTerm] = useState("");
  const [data, setData] = useState(DATA);
  var example = {
    size: 30,
    value: stars,
    onChange: (newValue) => {
      setStars(newValue);
    },
  };
  const filterResult = (cartItem) => {
    const result = DATA.filter((currData) => {
      return currData.category === cartItem;
    });
    setData(result);
    console.log(data)
  };
  console.log(currentPageData)
  return (
    <div>
      <section id="page-header">
        <h2>#Stay Home</h2>
        <p>save more with coupouns & upto 70% off!</p>
      </section>
      <section id="product1" class="section-p1">
        <div className="search">
          <button className="normal" onClick={() => setData(DATA)}>
            ALL
          </button>
          <button className="normal" onClick={() => filterResult("Gents")}>
            Mens
          </button>
          <button className="normal" onClick={() => filterResult("Ladies")}>
            Ladies
          </button>
          <input
            onChange={(e) => {
              setsearchTerm(e.target.value);
            }}
            className="search-box"
            type="search"
            placeholder="...search"
          />
        </div>
        <div class="product-container">
          {currentPageData
            .filter((val) => {
              if (searchTerm === "") {
                return val;
              } else if (
                val.name.toLowerCase().includes(searchTerm.toLowerCase())
              ) {
                return val;
              }
            })
            .map((data, i) => {
              return (
                
                  <div class="pro" key={i}>
                    <Link to={`/products/${data.id}`}>
                      {" "}
                      <img alt="" height="250px" src={data.img} />
                    </Link>
                    <div class="description">
                      <span>{data.category}</span>
                      <h5>{data.name}</h5>
                      <div class="star">
                        <ReactStars {...example} />
                      </div>
                      <h4>RS.{data.price}</h4>
                    </div>
                    <Link to={`/products/${data.id}`}>
                      {" "}
                      <button className="cart">Cart</button>
                    </Link>
                  </div>
              
              );
            })}
        </div>
      </section>
      <section id="pagination" class="section-p1">
        <SweetPagination
          currentPageData={setCurrentPageData}
          dataPerPage={5}
          getData={data}
          navigation={true}
        />
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

export default Product;
