import React from 'react'

const Footer = () => {
  return (
    <div>
         <footer id="footer" class="section-p1">
            <div class="col" >
                
                <h4>Contact</h4>
                <p><strong>Adress:</strong>787 kerala india</p>
                <p><strong>Phone:</strong>7994377987</p>
                <p><strong>Houres</strong>strong pross</p>
                <div class="follow">
                    <h4>Follow Us</h4>
                    <div class="icon">
                        <i class="fab fa-facebook"></i>
                        <i class="fab fa-instagram"></i>
                        <i class="fab fa-twitter"></i>
                        <i class="fab fa-youtube"></i>
                    </div>
                </div>
            </div>
            <div class="col">
                <h4>About</h4>
                <a href="#">About us</a>
                <a href="#">Delivery Location</a>
                <a href="#">Privacy Policy</a>
                <a href="#">Terms & Protection</a>
                <a href="#">Contact Us</a>
            </div>
            <div class="col">
                <h4> My Account</h4>
                <a href="#">Signin</a>
                <a href="#">View Cart</a>
                <a href="#">WishList</a>
                <a href="#">Track My Order</a>
                <a href="#">Help</a>
            </div>
            <div class="col install">
                <h4>Install App</h4>
                <p>From App Store or Play Store</p>
                <div class="row">
                    <img alt='' src="assets//img/pay/app.jpg"/>
                    <img alt='' src="assets//img/pay/play.jpg"/>
                </div>
                <p>Secured Payment Gateway</p>
                <img alt='' src="assets/img/pay/pay.png"/>
            </div>
       </footer>
    </div>
  )
}

export default Footer