import React from "react";
import './About.css'
export const About = () => {
  return (
    <div>
      <section id="about-header" class="about-header">
           
           <h2>#Know Us</h2>
      
           <p>Read all case studies about our Products</p>
          
       </section>
       <section id="about-head" class="section-p1">
           <img alt="" src="assets/img/about/a6.jpg"/>
           <div>
               <h2>Who are We</h2>
               <p> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker inc</p>
           </div>
       </section>
       <section id="about-app" class="section-p1">
           <h1>Download Our APP</h1>
           <div class="vedio">
               <video autoPlay loop src="assets/img/about/1.mp4"></video>
           </div>
       </section>
       <section id="features" class="section-p1">
           <div class="feature-box">
               <img alt="" src="assets/img/features/f1.png"/>
               <h6>Free Shipping</h6>
           </div>
           <div class="feature-box">
               <img alt=""src="assets/img/features/f2.png"/>
               <h6>Online Order</h6>
           </div>
           <div class="feature-box">
               <img alt="" src="assets/img/features/f3.png"/>
               <h6>Save Money</h6>
           </div>
           <div class="feature-box">
               <img alt="" src="assets/img/features/f4.png"/>
               <h6>Promotions</h6>
           </div>
           <div class="feature-box">
               <img alt="" src="assets/img/features/f5.png"/>
               <h6>Happy Sell</h6>
           </div>
           <div class="feature-box">
               <img alt="" src="assets/img/features/f6.png"/>
               <h6>24/7 Support</h6>
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
  );
};
