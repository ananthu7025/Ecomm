import React, { useEffect, useState } from "react";
import "./Ads.css";

const Ads = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return null;
  }
const handleClose=()=>{
    console.log("click")
    setLoading(true)
}
  return <div className="popup">
  <div className="contentBox">
    <div className="close" onClick={handleClose}></div>
    <div className="imgBox">
        <img src="gift.png"/>
    </div>
    <div className="content">
       <div>
       <h3>Special Offer</h3>
        <h2>70<sup>%</sup><span>Off</span></h2>
        <p style={{color:"#333"}}> save more with coupouns & upto 70% off!</p>
        <a>Get the Deal</a>
       </div>
    </div>
  </div>

</div>;
};

export default Ads;
