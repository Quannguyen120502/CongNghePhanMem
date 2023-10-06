import "./AboutUsStyle.scss";
import {
  RightOutlined,
  ArrowRightOutlined,
  LikeOutlined,
  SmileOutlined,
  ClockCircleOutlined,
  TwitterOutlined,
} from "@ant-design/icons";
import img1 from "./imgFlooring/wood1-about.png";
import img2 from "./imgFlooring/people1.jpg";
import React, { Component } from "react";
import Slider from "react-slick";

function AboutUs() {
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
    <div className="about-us">
      <section className="slider">
        <div className="siler-list">
          <div className="slider-item">
            <div className="container">
              <div className="slide-content d-flex">
                <div className="text">
                  <p className="text-title">
                    <span>About Us</span>
                  </p>
                  <p className="breadcrumb-text">
                  <a href="home"> Home </a><RightOutlined /> About Us
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
              <img src={img1} />
              <div
                className="countb wow fadeInLeft"
                data-wow-delay="1.1s"
                style={{
                  visibility: "visible",
                }}
              >
                <div className="counter-box" style={{ visibility: "visible" }}>
                  <span
                    className="odometer odometer-auto-theme"
                    data-count={240}
                    data-status="yes"
                  >
                    <div className="odometer-inside">
                      <span className="odometer-digit">
                        <span className="odometer-digit-spacer">8</span>
                        <span className="odometer-digit-inner">
                          <span className="odometer-ribbon">
                            <span className="odometer-ribbon-inner">
                              <span className="odometer-value">2</span>
                            </span>
                          </span>
                        </span>
                      </span>
                      <span className="odometer-digit">
                        <span className="odometer-digit-spacer">8</span>
                        <span className="odometer-digit-inner">
                          <span className="odometer-ribbon">
                            <span className="odometer-ribbon-inner">
                              <span className="odometer-value">4</span>
                            </span>
                          </span>
                        </span>
                      </span>
                      <span className="odometer-digit">
                        <span className="odometer-digit-spacer">8</span>
                        <span className="odometer-digit-inner">
                          <span className="odometer-ribbon">
                            <span className="odometer-ribbon-inner">
                              <span className="odometer-value">0</span>
                            </span>
                          </span>
                        </span>
                      </span>
                    </div>
                  </span>
                  <h6>Private Client Service</h6>
                </div>
                <div
                  className="countt wow fadeInUp"
                  data-wow-delay="1s"
                  style={{
                    visibility: "visible",
                    animationDelay: "1s",
                    animationName: "fadeInUp",
                  }}
                >
                  <div
                    className="counter-box"
                    style={{ visibility: "visible" }}
                  >
                    <span
                      className="odometer odometer-auto-theme"
                      data-count={24}
                      data-status="yes"
                    >
                      <div className="odometer-inside">
                        <span className="odometer-digit">
                          <span className="odometer-digit-spacer">8</span>
                          <span className="odometer-digit-inner">
                            <span className="odometer-ribbon">
                              <span className="odometer-ribbon-inner">
                                <span className="odometer-value">2</span>
                              </span>
                            </span>
                          </span>
                        </span>
                        <span className="odometer-digit">
                          <span className="odometer-digit-spacer">8</span>
                          <span className="odometer-digit-inner">
                            <span className="odometer-ribbon">
                              <span className="odometer-ribbon-inner">
                                <span className="odometer-value">4</span>
                              </span>
                            </span>
                          </span>
                        </span>
                      </div>
                    </span>
                    <h6>Years of Experience</h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-content">
              <div className="text-title">
                <h3>Do you need flooring services?</h3>
              </div>
              <div className="sub-text">
                <p>
                  With our expert staff, we add a new perspective to your home
                  in economic, luxury, fast and quality flooring and
                  installation services. Choose the flooring service package
                  that fits your budget, and we'll come and renew it right away.
                </p>
              </div>
              <div>
                <img
                  className="divider"
                  width="120"
                  height="15"
                  title="divider"
                  alt="divider"
                  src="https://garantiwebtasarim.com/wordpress/wood/wp-content/uploads/2022/05/divider.jpg"
                />
              </div>
              <div className="content-2">
                <div className="icon">
                  <SmileOutlined />
                </div>
                <div className="content-icon">
                  <div className="title-icon">Professional Team</div>
                  <div className="text-icon">
                    We produce guaranteed solutions in all flooring works with
                    our competent and experienced team.
                  </div>
                </div>
              </div>
              <div className="content-2">
                <div className="icon">
                  <ClockCircleOutlined />
                </div>
                <div className="content-icon">
                  <div className="title-icon">Quick Flooring</div>
                  <div className="text-icon">
                    Thanks to our solid expertise, we build custom spaces by
                    covering your floors very quickly.
                  </div>
                </div>
              </div>
              <div className="button-get">
                <a href="">
                  Get to know us <ArrowRightOutlined />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="tablov2 container">
        <div
          className="tablo--1-ve-2"
          onMouseOver={onHover}
          onMouseOut={onHoverOut}
        >
          <div className="box-content" id="box">
            <div className="icon-right">
              <LikeOutlined />
            </div>
            <div className="text-icon">
              <b>Reliability</b>
            </div>
          </div>
          <div
            className="box-content1 d-none"
            id="content1"
            style={{ transform: "rotateX(180deg)" }}
          >
            <div className="text-icon">
              <b>Reliability</b>
            </div>
            <div className="content-icon">
              <p>
                Vivamus magna justo, lacinia eget consectetur sed, convallis at
                tellus. Cras ultricies ligula sed magna dictum porta. Proin eget
                tortor risus.
              </p>
            </div>
          </div>
        </div>

        <div
          className="tablo--1-ve-2"
          onMouseOver={onHover1}
          onMouseOut={onHoverOut}
        >
          <div className="box-content" id="box1">
            <div className="icon-right">
              <LikeOutlined />
            </div>
            <div className="text-icon">
              <b>Reliability</b>
            </div>
          </div>
          <div
            className="box-content1 d-none"
            id="content2"
            style={{ transform: "rotateX(180deg)" }}
          >
            <div className="text-icon">
              <b>Reliability</b>
            </div>
            <div className="content-icon">
              <p>
                Vivamus magna justo, lacinia eget consectetur sed, convallis at
                tellus. Cras ultricies ligula sed magna dictum porta. Proin eget
                tortor risus.
              </p>
            </div>
          </div>
        </div>

        <div
          className="tablo--1-ve-2"
          onMouseOver={onHover2}
          onMouseOut={onHoverOut}
        >
          <div className="box-content" id="box2">
            <div className="icon-right">
              <LikeOutlined />
            </div>
            <div className="text-icon">
              <b>Reliability</b>
            </div>
          </div>
          <div
            className="box-content1 d-none"
            id="content3"
            style={{ transform: "rotateX(180deg)" }}
          >
            <div className="text-icon">
              <b>Reliability</b>
            </div>
            <div className="content-icon">
              <p>
                Vivamus magna justo, lacinia eget consectetur sed, convallis at
                tellus. Cras ultricies ligula sed magna dictum porta. Proin eget
                tortor risus.
              </p>
            </div>
          </div>
        </div>

        <div
          className="tablo--1-ve-2"
          onMouseOver={onHover3}
          onMouseOut={onHoverOut}
        >
          <div className="box-content" id="box3">
            <div className="icon-right">
              <LikeOutlined />
            </div>
            <div className="text-icon">
              <b>Reliability</b>
            </div>
          </div>
          <div
            className="box-content1 d-none"
            id="content4"
            style={{ transform: "rotateX(180deg)" }}
          >
            <div className="text-icon">
              <b>Reliability</b>
            </div>
            <div className="content-icon">
              <p>
                Vivamus magna justo, lacinia eget consectetur sed, convallis at
                tellus. Cras ultricies ligula sed magna dictum porta. Proin eget
                tortor risus.
              </p>
            </div>
          </div>
        </div>
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
                  textAlign: "center",
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
                  Our Flooring Masters
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
                  We are at your service with our competent staff.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="flooring-master">

        <div className="container">
          
          
            <Slider {...settings}>
            <div className="col-3">
              <img src={img2} />
              <div className="info">
                <p className="name">Hieeus</p>
                <p className="role">Nhan Vien</p>
                <p className="icon">
                  <span>
                    <TwitterOutlined />
                  </span>
                  <span>
                    <TwitterOutlined />
                  </span>
                  <span>
                    <TwitterOutlined />
                  </span>
                </p>
              </div>
            </div>
            
              <div className="col-3">
              <img src={img2} />
              <div className="info">
                <p className="name">Hieeus</p>
                <p className="role">Nhan Vien</p>
                <p className="icon">
                  <span>
                    <TwitterOutlined />
                  </span>
                  <span>
                    <TwitterOutlined />
                  </span>
                  <span>
                    <TwitterOutlined />
                  </span>
                </p>
              </div>
            </div>
            
            <div className="col-3">
              <img src={img2} />
              <div className="info">
                <p className="name">Hieeus</p>
                <p className="role">Nhan Vien</p>
                <p className="icon">
                  <span>
                    <TwitterOutlined />
                  </span>
                  <span>
                    <TwitterOutlined />
                  </span>
                  <span>
                    <TwitterOutlined />
                  </span>
                </p>
              </div>
            </div>
            <div className="col-3">
              <img src={img2} />
              <div className="info">
                <p className="name">Hieeus</p>
                <p className="role">Nhan Vien</p>
                <p className="icon">
                  <span>
                    <TwitterOutlined />
                  </span>
                  <span>
                    <TwitterOutlined />
                  </span>
                  <span>
                    <TwitterOutlined />
                  </span>
                </p>
              </div>
            </div>
            <div className="col-3">
              <img src={img2} />
              <div className="info">
                <p className="name">Hieeus</p>
                <p className="role">Nhan Vien</p>
                <p className="icon">
                  <span>
                    <TwitterOutlined />
                  </span>
                  <span>
                    <TwitterOutlined />
                  </span>
                  <span>
                    <TwitterOutlined />
                  </span>
                </p>
              </div>
            </div>
          </Slider>
            
          
        </div>
      </section>
    </div>
  );
}

export default AboutUs;
