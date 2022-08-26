import React, { useState } from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import DATA from "../../Data"
import { Link } from "react-router-dom"

const SampleNextArrow = (props) => {
  const { onClick } = props
  return (
    <div className='control-btn' onClick={onClick}>
      <button className='next'>
        <i className='fa fa-long-arrow-alt-right'></i>
      </button>
    </div>
  )
}
const SamplePrevArrow = (props) => {
  const { onClick } = props
  return (
    <div className='control-btn' onClick={onClick}>
      <button className='prev'>
        <i className='fa fa-long-arrow-alt-left'></i>
      </button>
    </div>
  )
}
const ProductCard = ({ productItems, addToCart }) => {
  const [count, setCount] = useState(0)
  const increment = () => {
    setCount(count + 1)
  }
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  }

  return (
    <>
      <Slider {...settings}>
        {DATA.map((data,i) => {
          return (
            <div className="flash" key={i}>
                  <Link to={`/products/${data.id}`}>
                    {" "}
                    <img  alt="" src={data.img}  width="250px"/>
                  </Link>
                  <div class="description">
                    <span>{data.category}</span>
                    <h5>{data.name}</h5>
                    <h4>Rs.{data.price}</h4>
                  </div>
                  <a href="#">
                    <i class="fa fa-shopping-cart cart"></i>
                  </a>
                </div>
          )
        })}
      </Slider>
    </>
  )
}

export default ProductCard
