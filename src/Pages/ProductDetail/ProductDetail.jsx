import React from "react";
import { useParams } from "react-router";
import { useState } from "react";
import { useDispatch } from "react-redux";
import DATA from "../../Data";
import { addItem, delItem } from "../../redux/actions";
const ProductDetail = () => {
  const [cartBtn, setCartBtn] = useState("Add to Cart");
  const proid = useParams();
  const proDetail = DATA.filter((x) => x.id == proid.id);
  const product = proDetail[0];
  const dispatch = useDispatch();
  const handleCart = (product) => {
    if (cartBtn === "Add to Cart") {
      dispatch(addItem(product));
      setCartBtn("Remove from Cart");
    } else {
      dispatch(delItem(product));
      setCartBtn("Add to Cart");
    }
  };
  const [wordData,setWordData]=useState(product.images[0])
  const handleClick=(index)=>{
    console.log(index)
    const wordSlider=product.images[index];
    setWordData(wordSlider)
  }
  return (
    <>
       <div>
       <section id="pro-detail" class="section-p1">
        <div class="single-pro-image">
            <img alt="" src={wordData} width="100%" id="MainImg"  height="80%" />
            <div class="sm-img-group">
           {product.images.map((item,i)=>{
            return <div class="sm-img-group" key={i}>
                <div class="sm-img-col">
                    <img class="sm-img" src={item} onClick={()=>handleClick(i)} height="70" width="100"/>
                    </div>
                </div>
           })}
            </div>
        </div>
        <div class="single-pro-details">
            <h6>{product.category}</h6>
            <h4>{product.name}</h4>
            <h3>Rs.{product.price}</h3>
            <select>
                <option>select size</option>
                <option>Xl</option>
                <option>XXl</option>
                <option>L</option>
                <option>M</option>
            </select>
            <input type="number" defaultValue="1"/>
            <button class="normal" onClick={() => handleCart(product)}>{cartBtn}</button>
            <h4>Product Details</h4>
            <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised </span>
        </div>
       </section>
       <section id="product1" class="section-p1">
        <h2>Related Products</h2>
        <p>Summer Collection New Modern Design</p>
        <div class="product-container">
            <div class="pro">
                <img alt="" src="/assets/img/products/n1.jpg"/>
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
                <a href="#"><i class="fa fa-shopping-cart cart"></i></a>
            </div>
            <div class="pro">
                <img alt="" src="/assets/img/products/n2.jpg"/>
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
                <a href="#"><i class="fa fa-shopping-cart cart"></i></a>
            </div> 
            <div class="pro">
                <img alt="" src="/assets/img/products/n3.jpg"/>
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
                <a href="#"><i class="fa fa-shopping-cart cart"></i></a>
            </div> 
            <div class="pro">
                <img alt="" src="/assets/img/products/n3.jpg"/>
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
                <a href="#"><i class="fa fa-shopping-cart cart"></i></a>
            </div> 
             
        </div>
    </section>
       <section id="news-letter" class="section-p1 section-m1">
            <div class="newstext">
                <h4>Singn up For NewsLetters</h4>
                <p>Get E-mail Update About Our latest shop <span>Offers</span></p>
            </div>
            <div class="form">
                <input placeholder="Email" type="text"/>
                <button class="normal">Sign Up</button>
            </div>
       </section>
    </div>
    </>
  );
};

export default ProductDetail;
