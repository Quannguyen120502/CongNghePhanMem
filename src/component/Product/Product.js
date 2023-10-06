import "./ProductStyle.scss";
import {
  RightOutlined,
  ArrowRightOutlined,
  LikeOutlined,
  SmileOutlined,
  ClockCircleOutlined,
  TwitterOutlined,
  StarOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import img1 from "./imgFlooring/Product1.jpg";
import img2 from "./imgFlooring/Product2.jpg";
import img3 from "./imgFlooring/Product3.jpg";
import React, { Component } from "react";
import Slider from "react-slick";
import { Rate } from 'antd';
import { Card } from 'antd';
import { InputNumber } from 'antd';
import { PlusOutlined, MinusOutlined } from '@ant-design/icons';
import { render } from "@testing-library/react";
import { useState } from 'react';

function Product() {
  const [count, setCount] = useState(0);
  const [amount, setAmount] = useState(1);

  const handlePlus = () => {
    setAmount(amount + 1);
  }

  const handleMinus = () => {
    if (amount > 1) {
      setAmount(amount - 1);
    }
  }

  const handleInputChange = (event) => {
    let newAmount = parseInt(event.target.value);
    if (isNaN(newAmount)) {
      newAmount = 1;
    }
    setAmount(newAmount);
  }
  const { Meta } = Card;
 // const onChange = (value) => {
   // console.log('changed', value);};
  const settings3 = {
    focusOnSelect: true,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    speed: 500,
   swipeToSlide: true,
   arrows: true,
   //autoplay: true,
   autoplaySpeed: 2000,
   responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        //dots: true,
        //autoplay: true,
        autoplaySpeed: 2000,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        //dots: true,
       // autoplay: true,
        autoplaySpeed: 2000,
    }
  }
   ]
  }
  const settings2 =({
    dots: true,
  infinite: true,
  speed: 500,
  fade: true,
  cssEase: 'linear'
  });
  
  const settings ={
    focusOnSelect: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    speed: 500,
    arrows: false,
    dots: true,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          //dots: true
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          //dots: true,
          //autoplay: true,
          autoplaySpeed: 2000,
      }
    }
     ]
  }
  
  const onHover = () => {
    const ele = document.getElementById("box");
    const ele1 = document.getElementById("content1");
    // const ele1 = document.getElementById("box1");
    // ele.classList.remove("d-blok");
    ele.classList.add("d-none");
    ele1.classList.remove("d-none");
  };
  const onHover1 = () => {
    // const ele = document.getElementById("box");
    const ele1 = document.getElementById("box1");
    const ele2 = document.getElementById("content2");

    // ele.classList.remove("d-blok");
    // ele.classList.add("d-none");
    ele1.classList.add("d-none");
    ele2.classList.remove("d-none");
  };

  const onHover2 = () => {
    // const ele = document.getElementById("box");
    const ele1 = document.getElementById("box2");
    const ele2 = document.getElementById("content3");

    // ele.classList.remove("d-blok");
    // ele.classList.add("d-none");
    ele1.classList.add("d-none");
    ele2.classList.remove("d-none");
  };

  const onHover3 = () => {
    // const ele = document.getElementById("box");
    const ele1 = document.getElementById("box3");
    const ele2 = document.getElementById("content4");

    // ele.classList.remove("d-blok");
    // ele.classList.add("d-none");
    ele1.classList.add("d-none");
    ele2.classList.remove("d-none");
  };

  const onHoverOut = () => {
    const ele = document.getElementById("box");
    const ele1 = document.getElementById("box1");
    const ele6 = document.getElementById("box2");
    const ele7 = document.getElementById("box3");
    const ele2 = document.getElementById("content1");
    const ele3 = document.getElementById("content2");
    const ele4 = document.getElementById("content3");
    const ele5 = document.getElementById("content4");
    // ele.classList.remove("d-blok");
    ele.classList.remove("d-none");
    ele1.classList.remove("d-none");
    ele6.classList.remove("d-none");
    ele7.classList.remove("d-none");
    ele2.classList.add("d-none");
    ele3.classList.add("d-none");
    ele4.classList.add("d-none");
    ele5.classList.add("d-none");
  };

  return (
    <div className="Product">
      <section className="slider">
        <div className="siler-list">
          <div className="slider-item">
            <div className="container">
              <div className="slide-content d-flex">
                <div className="text">
                  <p className="text-title">
                    <span>Product</span>
                  </p>
                  <p className="breadcrumb-text">
                    <a href="home"> Home </a><RightOutlined /> Details
                    
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="tablo">
        <div className="container">
          <div className="tablo-content">
            
            <div className="img-content">
            <Slider {...settings2}>
              <div className="col-5">
              <img src={img1} />
               </div>
               <div className="col-5">
              <img src={img1} />
               </div>
               <div className="col-5">
              <img src={img2} />
               </div>
               <div className="col-5">
              <img src={img3} />
               </div>
              </Slider>
            </div>
            <div className="text-content">
              <div className="text-title">
                <h3>Full Life Eco brown wood floor 8mm FLE801</h3>
              </div>
              <div className="sub-text">
                <div></div>
              <p className="icon1">
                 <Rate allowHalf defaultValue={2.5} />
                </p>
              </div>
              <div className="content-2">
                
                <div className="content-icon">
                  <div className="title-icon">$2000</div>
                  <div className="text-icon">
                    <h2>Size : 1225 x 150 x 8mm</h2>
                    <h3>Surface : AC3</h3>
                  </div>
                </div>
              </div>
              { <div className="buy-amount">
                
                  <button className="minus-btn" onClick={handleMinus}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" className="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12h-15" />
                  </svg>
                  </button>
                  <input type="text" value={amount} onChange={handleInputChange} />
                  <button className="plus-btn" onClick={handlePlus}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" className="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                  </svg>
                  </button>
              </div> }
              {/* {<div className="input">
             <InputNumber
               min={1}
               max={10}
                defaultValue={3}
               onChange={onChange}
               upHandler={<PlusOutlined />}
               downHandler={<MinusOutlined />}
              />
              </div>} */}
              <div className="button-get">
                <a href="">
                  Add to cart <ShoppingCartOutlined/>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="Product">
        <div className="text-product">
          <h3>Featured Products</h3>
        </div>
        <div className="contenproduct">
          <Slider {...settings3}>
            <div className="col-5">
            <Card
                 hoverable
             style={{
              width: 240,
                  }}
               cover={<img alt="example" src="https://noithatdangkhoa.com/wp-content/uploads/2020/05/ghe-ca-phe-dep-ghe-go-cabin-gcfdk16-2-510x510.jpg" />}
                      >
                 <Meta title="Flooring1" description="$200" />
                 <a href="Product">Detail</a>
             </Card>
            </div>
            <div className="col-5">
            <Card
                 hoverable
             style={{
              width: 240,
                  }}
               cover={<img alt="example" src="https://noithatdangkhoa.com/wp-content/uploads/2020/05/ghe-ca-phe-dep-ghe-go-cabin-gcfdk16-2-510x510.jpg" />}
                      >
                 <Meta title="Flooring2" description="$200" />
                 <a href="Product">Detail</a>
             </Card>
            </div>
            <div className="col-5">
            <Card
                 hoverable
             style={{
              width: 240,
                  }}
               cover={<img alt="example" src="https://noithatdangkhoa.com/wp-content/uploads/2020/05/ghe-ca-phe-dep-ghe-go-cabin-gcfdk16-2-510x510.jpg" />}
                      >
                 <Meta title="Flooring3" description="$200" />
                 <a href="Product">Detail</a>
             </Card>
            </div>
            <div className="col-5">
            <Card
                 hoverable
             style={{
              width: 240,
                  }}
               cover={<img alt="example" src="https://noithatdangkhoa.com/wp-content/uploads/2020/05/ghe-ca-phe-dep-ghe-go-cabin-gcfdk16-2-510x510.jpg" />}
                      >
                 <Meta title="Flooring4" description="$200" />
                 <a href="Product">Detail</a>
                 
             </Card>
            </div>
            <div className="col-5">
            <Card 
                 hoverable
             style={{
              width: 240,
                  }}
               cover={<img alt="example" src="https://noithatdangkhoa.com/wp-content/uploads/2020/05/ghe-ca-phe-dep-ghe-go-cabin-gcfdk16-2-510x510.jpg" />}
                      >
                       
                 <Meta  title="Flooring5" description="$200" />
                 <a href="Product">Detail</a>

             </Card>
            </div>
            <div className="col-5">
            <Card
                 hoverable
             style={{
              width: 240,
                  }}
               cover={<img alt="example" src="https://noithatdangkhoa.com/wp-content/uploads/2020/05/ghe-ca-phe-dep-ghe-go-cabin-gcfdk16-2-510x510.jpg" />}
                      >
                 <Meta title="Flooring6" description="$200" />
                 <a href="Product">Detail</a>
             </Card>
            </div>
            <div className="col-5">
            <Card
                 hoverable
             style={{
              width: 240,
                  }}
               cover={<img alt="example" src="https://noithatdangkhoa.com/wp-content/uploads/2020/05/ghe-ca-phe-dep-ghe-go-cabin-gcfdk16-2-510x510.jpg" />}
                      >
                 <Meta title="Flooring7" description="$200" />
                 <a href="Product">Detail</a>
             </Card>
            </div>
            <div className="col-5">
            <Card
                 hoverable
             style={{
              width: 240,
                  }}
               cover={<img alt="example" src="https://noithatdangkhoa.com/wp-content/uploads/2020/05/ghe-ca-phe-dep-ghe-go-cabin-gcfdk16-2-510x510.jpg" />}
                      >
                 <Meta title="Flooring8" description="$200" />
                 <a href="Product">Detail</a>
             </Card>
            </div>
          </Slider>
        </div>
      </section>
      <section>

      </section>


      <section
        className="ozellika"
        data-background="#f9f9f9"
        style={{ background: "rgb(249, 249, 249)" }}
      >
        <div className="container">
          <div className="row align-items-center no-gutters">
            <div className="col-lg-12">
              <div
                className="wow fadeInUp"
                data-wow-delay="0.3s"
                style={{
                  visibility: "visible",
                  animationDelay: "0.3s",
                  animationName: "fadeInUp",
                  //textAlign: "center",
                }}
              >
                <div className="boslukalt" />
                <h2
                  className="h2-baslik-hizmetler-2 wow fadeInUp"
                  data-wow-delay="0.4s"
                  style={{
                    visibility: "visible",
                    animationDelay: "0.4s",
                    animationName: "fadeInUp",
                  }}
                >
                  Describe
                </h2>
                <p
                  className="h2-baslik-hizmetler-2__paragraf wow fadeInUp"
                  data-wow-delay="0.4s"
                  style={{
                    visibility: "visible",
                    animationDelay: "0.4s",
                    animationName: "fadeInUp",
                  }}
                >
                  Material: Natural wood pulp Certification: AC4 for abrasion resistance, 
                  B1 fire retardant standard, meeting E1 level super clean standard, so it is very safe for human health.{" "}
                </p>
                <p
                  className="h2-baslik-hizmetler-2__paragraf wow fadeInUp"
                  data-wow-delay="0.4s"
                  style={{
                    visibility: "visible",
                    animationDelay: "0.4s",
                    animationName: "fadeInUp",
                  }}
                >
                 Outstanding features: Water-resistant wood, durable color, easy to work with.{" "}
                </p>
                <p
                  className="h2-baslik-hizmetler-2__paragraf wow fadeInUp"
                  data-wow-delay="0.4s"
                  style={{
                    visibility: "visible",
                    animationDelay: "0.4s",
                    animationName: "fadeInUp",
                  }}
                >
                  Application: Flooring, wall cladding for all construction items such as houses, 
                  apartments, offices, commercial centers, supermarkets, hotels, kindergartens, gymnasiums, ..{" "}
                </p>
                <p
                  className="h2-baslik-hizmetler-2__paragraf wow fadeInUp"
                  data-wow-delay="0.4s"
                  style={{
                    visibility: "visible",
                    animationDelay: "0.4s",
                    animationName: "fadeInUp",
                  }}
                >
                  Products are created accents for other interior equipment. Bring class and freshness to the installed space.{" "}
                </p>
                <p
                  className="h2-baslik-hizmetler-2__paragraf wow fadeInUp"
                  data-wow-delay="0.4s"
                  style={{
                    visibility: "visible",
                    animationDelay: "0.4s",
                    animationName: "fadeInUp",
                  }}
                >
                  Products with diverse designs, wood grain with many new designs, rich colors.{" "}
                </p>
                <p
                  className="h2-baslik-hizmetler-2__paragraf wow fadeInUp"
                  data-wow-delay="0.4s"
                  style={{
                    visibility: "visible",
                    animationDelay: "0.4s",
                    animationName: "fadeInUp",
                  }}
                >
                 The price is cheap, meeting the economic conditions of Vietnamese families today.{" "}
                </p>
                <p
                  className="h2-baslik-hizmetler-2__paragraf wow fadeInUp"
                  data-wow-delay="0.4s"
                  style={{
                    visibility: "visible",
                    animationDelay: "0.4s",
                    animationName: "fadeInUp",
                  }}
                >
                 Stability quality. No warping, shrinking or stretching.{" "}
                </p>
                <p
                  className="h2-baslik-hizmetler-2__paragraf wow fadeInUp"
                  data-wow-delay="0.4s"
                  style={{
                    visibility: "visible",
                    animationDelay: "0.4s",
                    animationName: "fadeInUp",
                  }}
                >
                 Warranty: 20 year termite warranty.{" "}
                </p>
                <p
                  className="h2-baslik-hizmetler-2__paragraf wow fadeInUp"
                  data-wow-delay="0.4s"
                  style={{
                    visibility: "visible",
                    animationDelay: "0.4s",
                    animationName: "fadeInUp",
                  }}
                >
                 Accessories: Basement wool, plastic pavers, vivifying, white spreading, silver spreading, ...{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="flooring-master">
      <div className="text-content">
          <h3>You Might Also Like…</h3>
        </div>

        <div className="container">
           
          
            <Slider {...settings}>
            <div className="col-3">
              <img src={img2} />
              <div className="info">
                <p className="name">Flooring3</p>
                <p className="role">Product</p>
                
              </div>
            </div>
            
              <div className="col-3">
              <img src={img2} />
              <div className="info">
                <p className="name">Flooring3</p>
                <p className="role">Product</p>
                
              </div>
            </div>
            
            <div className="col-3">
              <img src={img2} />
              <div className="info">
                <p className="name">Flooring3</p>
                <p className="role">Product</p>
                
                
              </div>
            </div>
            <div className="col-3">
              <img src={img2} />
              <div className="info">
                <p className="name">Flooring3</p>
                <p className="role">Product</p>
                
              </div>
            </div>
            <div className="col-3">
              <img src={img2} />
              <div className="info">
                <p className="name">Flooring3</p>
                <p className="role">Product</p>
                
              </div>
            </div>
          </Slider>
            
          
        </div>
      </section>
    </div>
  );
}

export default Product;
