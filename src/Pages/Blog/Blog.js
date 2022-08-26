import React from "react";
import './Blog.css'
export const Blog = () => {
  return (
    <div>
 <section id="blog-header" class="blog-header">
           
           <h2>#Read More</h2>
      
           <p>Read all case studies about our Products</p>
          
       </section>
       <section id="blog">
           <div class="blog-box">
               <div class="blog-img">
                   <img alt="" src="assets/img/blog/b1.jpg"/>
               </div>
               <div class="blog-details">
                   <h4>The Cotton-jersy</h4>
                   <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised</p>
                   <a href="#">Continue Reading</a> 
               </div>
               <h1>13/01</h1>
           </div>
           <div class="blog-box">
               <div class="blog-img">
                   <img alt="" src="assets/img/blog/b2.jpg"/>
               </div>
               <div class="blog-details">
                   <h4>The Cotton-jersy</h4>
                   <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised</p>
                   <a href="#">Continue Reading</a> 
               </div>
               <h1>13/01</h1>
           </div><div class="blog-box">
               <div class="blog-img">
                   <img alt="" src="assets/img/blog/b3.jpg"/>
               </div>
               <div class="blog-details">
                   <h4>The Cotton-jersy</h4>
                   <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised</p>
                   <a href="#">Continue Reading</a> 
               </div>
               <h1>13/01</h1>
           </div><div class="blog-box">
               <div class="blog-img">
                   <img alt="" src="assets/img/blog/b4.jpg"/>
               </div>
               <div class="blog-details">
                   <h4>The Cotton-jersy</h4>
                   <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised</p>
                   <a href="#">Continue Reading</a> 
               </div>
               <h1>13/01</h1>
           </div>
       </section>
       <section id="pagination" class="section-p1">
           <a href="#">1</a>
           <a href="#">2</a>
           <a href="#"><i class="fa fa-long-arrow-alt-right"></i></a>


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
