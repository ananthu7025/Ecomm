import React from "react";
import './Contact.css'
export const Contact = () => {
  return (
    <div>
     <section id="page-header" class="page-header">
           
           <h2>#Lets Talk</h2>
      
           <p>Leave a Message,We love To Hear From You!</p>
          
       </section>
       <section id="contact-details" class="section-p1">
           <div class="c-details">
               <span>GET IN TOUCH</span>
               <h2>Vist one of our agency locations or contact us today</h2>
               <h3>Head Office</h3>
               <div>
                   <li><i class="fa fa-map"></i><p>Kerala Trivandrum</p></li>
                   <li><i class="fa fa-envelope"></i><p>Contact@email.com</p></li>
                   <li><i class="fa fa-phone-square-alt"></i><p>7994377987</p></li>
               </div>
           </div>
           <div class="map">
               <img alt="" src="assets/contact.jpg"/>
           </div>
       </section>
       <section id="form-details">
           <form>
               <span>Leave us a message</span>
               <h2>We love to hear from You</h2>
               <input type="text" placeholder="Name"/>
               <input type="email" placeholder="email"/>
               <input type="text" placeholder="Subject"/>
               <textarea name="" id="" cols="30" rows="10" placeholder="Your Message"></textarea>
               <button class="normal">Send</button>
           </form>
           <div class="people">
               <div>
               <img alt="" src="assets/img/people/1.png"/>
               <p><span>Lorial</span>Marketting Manager<br/>Phone:7994377987<br/><br/>Email:Annnn@gamil.com</p>   
               </div>
           <div >
               <img alt="" src="assets/img/people/2.png"/>
               <p><span>Lorial</span>Marketting Manager<br/>Phone:7994377987<br/><br/>Email:Annnn@gamil.com</p>   
           </div><div>
               <img alt="" src="assets/img/people/3.png"/>
               <p><span>Lorial</span>Marketting Manager<br/>Phone:7994377987<br/><br/>Email:Annnn@gamil.com</p>   
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
  );
};
