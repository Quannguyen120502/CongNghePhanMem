import React, { useEffect } from "react";
// import { Carousel } from "antd";
import Carousel from "react-bootstrap/Carousel";
import {
  ArrowRightOutlined,
  SmileOutlined,
  ClockCircleOutlined,
  LeftOutlined,
  RightOutlined,
  LikeOutlined,
} from "@ant-design/icons";
import img1 from "./img/wood1-about.png";
import img2 from "./img/our-service.jpg";
import imgContact from "./img/img-contact.jpg";
import imgtest from "./img/man1.png";
import imgservice1 from "./img/img-service1.jpg";
import imgservice2 from "./img/img-service2.jpg";
import imgservice3 from "./img/img-service3.jpg";
import imgservice4 from "./img/wood-services-4.jpg";
import imgservice5 from "./img/wood-services-5.jpg";
import Slider from "react-slick";
import "./HomeStyle.scss";
import { Card } from 'antd';
import { useState } from 'react';


function Home() {
  const { Meta } = Card;
  
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [fullNameError, setFullNameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [phoneError, setPhoneError] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);
  
    const handleInput = (e) => {
      const emailValue = e.target.value;
      setEmail(emailValue);
  
      // Kiểm tra tính hợp lệ của email
      const emailPattern = /^[a-zA-Z0-9._%+-]+@gmail.com$/;
      if (!emailPattern.test(emailValue)) {
        setEmailError('Email không hợp lệ');
      } else {
        setEmailError('');
      }
    };

    const handleFullNameChange = (e) => {
      const fullNameValue = e.target.value;

      // Kiểm tra tính hợp lệ của tên đầy đủ chỉ bao gồm chữ cái và dấu
      const fullNamePattern =/^[\p{L}]+([\p{Zs}\p{L}]+)*$/u;
      const isFullNameValid = fullNamePattern.test(fullNameValue);

      if (isFullNameValid) {
        setFullName(fullNameValue);
        setFullNameError('');
      } else {
        setFullNameError('Tên đầy đủ không hợp lệ');
      }
    };
    const handleFullNameBlur = (e) => {
      const fullNameValue = e.target.value;
    
      if (!fullNameValue) {
        setFullNameError('Tên đầy đủ không hợp lệ');
      }
    };
    const handleKeyDown = (event) => {
      if (event.key === 'Backspace' || event.key === 'Delete') {
        event.preventDefault();
        const input = event.target;
        const value = input.value;
        const selectionStart = input.selectionStart;
        const selectionEnd = input.selectionEnd;
        const hasSelection = selectionStart !== selectionEnd;
  
        if (hasSelection) {
          const newValue = value.slice(0, selectionStart) + value.slice(selectionEnd);
          setFullName(newValue);
          input.setSelectionRange(selectionStart, selectionStart);
        } else if (event.key === 'Backspace' && selectionStart > 0) {
          const newValue = value.slice(0, selectionStart - 1) + value.slice(selectionStart);
          setFullName(newValue);
          input.setSelectionRange(selectionStart - 1, selectionStart - 1);
        } else if (event.key === 'Delete' && selectionEnd < value.length) {
          const newValue = value.slice(0, selectionStart) + value.slice(selectionEnd + 1);
          setFullName(newValue);
          input.setSelectionRange(selectionStart, selectionStart);
        }
      }
    };
  
    const handlePhoneChange = (e) => {
      const phoneValue = e.target.value;
      
      // Giới hạn đầu vào của trường Phone Number phải là số và có tối đa 11 chữ số
      const phonePattern = /^\d{0,11}$/;
      const isPhoneValid = phonePattern.test(phoneValue);
      
      if (isPhoneValid) {
        setPhone(phoneValue);
        setPhoneError('');
      } else {
        setPhoneError('Số điện thoại không hợp lệ');
      }
    };
    const handlePhoneBlur = (e) => {
        const PhoneValue = e.target.value;
      
        if (!PhoneValue) {
          setPhoneError('Số điện thoại không hợp lệ');
        }
      };

    const handleSubmit = (e) => {
      e.preventDefault();
  
      // Kiểm tra dữ liệu nhập vào
      if (!fullName || !email || !phone) {
        setError('Vui lòng điền đầy đủ thông tin');
        setSuccess(false);
        return;
      }
      // Kiểm tra đúng định dạng email
      const emailPattern =/^[a-zA-Z0-9._%+-]+@gmail.com$/;
      if (!emailPattern.test(email)) {
        setEmailError('Địa chỉ email không hợp lệ');
        setSuccess(false);
        return;
      }

      const handleInput = (e) => {
        const EmailValue = e.target.value;
      
        if (!EmailValue) {
          setEmailError('Kiểm tra lại email');
        }
      };

      
      // // Kiểm tra tính hợp lệ của tên đầy đủ chỉ bao gồm chữ cái
      // const fullNamePattern =/^[\p{L} ]*$/u;
      // if (!fullNamePattern.test(fullName)) {
      //   setError('Tên đầy đủ không hợp lệ');
      //   setSuccess(false);
      //   return;
      // }
      // Kiểm tra đúng định dạng số điện thoại
      const phonePattern = /^[0-9]{10,11}$/;
    if (!phonePattern.test(phone)) {
      setPhoneError('Số điện thoại không hợp lệ');
      setSuccess(false);
      return;
    }
      // Nếu dữ liệu hợp lệ, thông báo thành công và reset form
      setError('');
      setSuccess(true);
      setFullName('');
      setEmail('');
      setPhone('');
    };

  const handleReset = () => {
    setFullName('');
    setEmail('');
    setPhone('');
    setError('');
  };
  
  const contentStyle = {
    height: "100vh",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    background: "#364d79",
  };
  const settings2 = {
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
       // autoplay: true,
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
        //autoplay: true,
        autoplaySpeed: 2000,
    }
  }
   ]
  }
  const settings3 ={
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
  const settings = {
    focusOnSelect: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    speed: 500,
    // arrows: false,
    // dotsClass: ".button-1",
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
  };

  // function animateNumber(finalNumber, delay, startNumber = 0, callback) {
  //   let currentNumber = startNumber;
  //   const interval = window.setInterval(updateNumber, delay);
  //   function updateNumber() {
  //     if (currentNumber >= finalNumber) {
  //       clearInterval(interval);
  //     } else {
  //       currentNumber++;
  //       callback(currentNumber);
  //     }
  //   }
  // }

  // document.addEventListener("DOMContentLoaded", function () {
  //   animateNumber(400, 1, 0, function (number) {
  //     const formattedNumber = number.toLocaleString();
  //     document.getElementById("transaction-count").innerText = formattedNumber;
  //   });

  //   animateNumber(9, 50, 0, function (number) {
  //     const formattedNumber = number.toLocaleString();
  //     document.getElementById("city-count").innerText = formattedNumber;
  //   });
  // });

  useEffect(() => {
    window.addEventListener("scroll", () => {
      var up1 = document.getElementsByClassName("up1");
      var up2 = document.getElementsByClassName("up2");
      var up3 = document.getElementsByClassName("up3");
      var up4 = document.getElementsByClassName("up4");
      var up5 = document.getElementsByClassName("upopen");
      var up6 = document.getElementsByClassName("upservices");
      var up7 = document.getElementsByClassName("right-contact");
      var up8 = document.getElementsByClassName("up-contact");
      var up9 = document.getElementsByClassName("left-comment");
      var up10 = document.getElementsByClassName("up-comment");
      // var bigGuy = document.getElementsByClassName("big-guys");
      if (window.scrollY >= 200) {
        for (var i = 0; i < up1.length; i++) {
          up1[i].classList.add("fadeInRight", "cssanimation");
        }
        for (var i = 0; i < up5.length; i++) {
          up5[i].classList.add("fadeInOpen", "cssanimation");
        }
      }
      if (window.scrollY >= 250) {
        for (var i = 0; i < up2.length; i++) {
          up2[i].classList.add("fadeInRight", "cssanimation");
        }
      }
      // if (window.scrollY >= 1560) {
      //   for (var i = 0; i < bigGuy.length; i++) {
      //     bigGuy[i].classList.add("fadeInLeft", "cssanimation");
      //   }
      // }
      if (window.scrollY >= 420) {
        for (var i = 0; i < up3.length; i++) {
          up3[i].classList.add("fadeInUp", "cssanimation");
        }
      }
      if (window.scrollY >= 450) {
        for (var i = 0; i < up4.length; i++) {
          up4[i].classList.add("fadeInUp", "cssanimation");
        }
      }
      if (window.scrollY >= 600) {
        for (var i = 0; i < up6.length; i++) {
          up6[i].classList.add("fadeInOpen", "cssanimation");
        }
      }
      if (window.scrollY >= 940) {
        for (var i = 0; i < up8.length; i++) {
          up8[i].classList.add("fadeInUp", "cssanimation");
        }
      }
      if (window.scrollY >= 1070) {
        for (var i = 0; i < up7.length; i++) {
          up7[i].classList.add("fadeInRight", "cssanimation");
        }
      }
      if (window.scrollY >= 1400) {
        for (var i = 0; i < up10.length; i++) {
          up10[i].classList.add("fadeInUp", "cssanimation");
        }
      }
      if (window.scrollY >= 1440) {
        for (var i = 0; i < up9.length; i++) {
          up9[i].classList.add("fadeInLeft", "cssanimation");
        }
      }
    });
    console.log(window.scrollY);
  }, []);
  return (
    <div className="home">
      <Carousel slide={false}>
        <Carousel.Item>
          <section className="slider">
            <div className="siler-list">
              <div className="slider-item-home">
                <div className="container">
                  <div className="slide-content">
                    <div className="text-slider">
                      <p className="text-title">
                        <span>Innovative Modern </span>
                      </p>
                      <p className="text-title">Flooring Service</p>
                      <p className="sub-text">
                        Custom flooring within your budget.
                      </p>
                      <a href="" target="_blank" className="btn btn-detail">
                        Learn More <ArrowRightOutlined />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </Carousel.Item>
        <Carousel.Item>
          <section className="slider">
            <div className="siler-list">
              <div className="slider-item-home-2">
                <div className="container">
                  <div className="slide-content">
                    <div className="text-slider">
                      <p className="text-title">
                        <span>Do You Need</span>
                      </p>
                      <p className="text-title">Flooring Service</p>
                      <p className="sub-text">
                        Then you are in the right place
                      </p>
                      <a href="" target="_blank" className="btn btn-detail">
                        Learn More <ArrowRightOutlined />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </Carousel.Item>
        <Carousel.Item>
          <section className="slider">
            <div className="siler-list">
              <div className="slider-item-home-3">
                <div className="container">
                  <div className="slide-content">
                    <div className="text-slider">
                      <p className="text-title">
                        <span>Get Flooring</span>
                      </p>
                      <p className="text-title">Service Now</p>
                      <p className="sub-text">
                        Then you are in the right place
                      </p>
                      <a href="" target="_blank" className="btn btn-detail">
                        Learn More <ArrowRightOutlined />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </Carousel.Item>
      </Carousel>
      <section className="Product">
        <div className="text-product">
          <h3>Product</h3>
        </div>
        <div className="contenproduct">
          <Slider {...settings2}>
            <div className="col-5">
            <Card
                 hoverable
             style={{
              width: 240,
                  }}
               cover={<img alt="example" src="https://noithatdangkhoa.com/wp-content/uploads/2020/05/ghe-ca-phe-dep-ghe-go-cabin-gcfdk16-2-510x510.jpg" />}
                      >
                 <Meta title="Flooring1" description="$200" />
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
             </Card>
            </div>
          </Slider>
        </div>
      </section>

      <section className="tablo">
       {/* <div className="product">
          <div className="contenproduct">
              <h3> Product </h3>
          </div>
              <div className="Text-product">
                <div></div>
              <Slider {...settings}>
                <div className="col-5">
                  <div className="img-product">
                   <img src={imgservice1} />
                  </div>
                 <div className="letter-product">
                  <h2>Flooring</h2>
                 </div>
                </div>
                 <div className="col-5">
                   <div className="img-product">
                    <img src={imgservice2} />
                  </div>
                   <div className="letter-product">
                    <h2>Flooring</h2>
                   </div>
                </div>
                  <div className="col-5">
                    <div className="img-product">
                     <img src={imgservice3} />
                    </div>
                  <div className="letter-product">
                   <h2>Flooring</h2>
                  </div>
                </div>
              <div className="col-5">
                <div className="img-product">
                  <img src={imgservice4} />
                </div>
                <div className="letter-product">
                  <h2>Flooring</h2>
                </div>
              </div>
                </Slider>
            </div>
        </div> */}
        <div className="container">
          <div className="tablo-content">
            <div
              className="img-content upopen"
              style={{ visibility: "visible" }}
            >
              <img src={img1} />
              <div
                className="countb"
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
                              <span
                                className="odometer-value"
                                // id="transaction-count"
                              >
                                4
                              </span>
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
              <div className="text-title up1">
                <h3>Do you need flooring services?</h3>
              </div>
              <div className="sub-text up3">
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
              <div className="content-2 up2">
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
              <div className="content-2 up2">
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
              <div className="button-get up4">
                <a href="">
                  Get to know us <ArrowRightOutlined />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="our-services">
        <div className="container">
          <div className="title-service">
            <h3>Our Flooring Services</h3>
            <p>We are at your service for all your flooring.</p>
          </div>

          <div className="upservices">
            <Slider {...settings}>
              <div className="col-3">
                <div className="img-service">
                  <img src={imgservice1} />
                </div>
                <div className="text-service">
                  <h2>Flooring</h2>
                </div>
              </div>
              <div className="col-3">
                <div className="img-service">
                  <img src={imgservice2} />
                </div>
                <div className="text-service">
                  <h2>Carpet Flooring</h2>
                </div>
              </div>
              <div className="col-3">
                <div className="img-service">
                  <img src={imgservice3} />
                </div>
                <div className="text-service">
                  <h2>Floor Raising</h2>
                </div>
              </div>
              <div className="col-3">
                <div className="img-service">
                  <img src={imgservice4} />
                </div>
                <div className="text-service">
                  <h2>PVC Flooring</h2>
                </div>
              </div>
              <div className="col-3">
                <div className="img-service">
                  <img src={imgservice5} />
                </div>
                <div className="text-service">
                  <h2>Wood Flooring</h2>
                </div>
              </div>
            </Slider>
          </div>
          {/* <div className="buttn-slider">
            <button className="button-1">
              <LeftOutlined />
            </button>
            <button className="button-1">
              <RightOutlined />
            </button>
          </div> */}
        </div>
      </section>
      <section className="contact">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 up-contact">
              <img src={imgContact} />
            </div>
            <div className="col-lg-6">
              <div className="contact-content">
                <div className="text-contact up-contact">
                  <p className="title-contact">
                    Let's Create A Great Design Together!
                  </p>
                  <p className="sub-contact">
                    Fill out the detailed information form about our flooring
                    services.
                  </p>
                </div>
                <div className="form-contact right-contact">
                    <form>
                    <div className="d-flex">
                      <div className="form-group col-4">
                          <input
                            type="text"
                              className="form-control input-form"
                              id="exampleInputName"
                              placeholder="Full Name"
                              value={fullName}
                              onChange={handleFullNameChange}
                              onKeyDown={handleKeyDown}
                              onBlur={handleFullNameBlur}
                            />
                            {fullNameError && <div className="error" style={{ color: 'red' }} >{fullNameError}</div>}
                      </div>
                      <div className="form-group col-4">
                            <input
                            type="email"
                            className="form-control input-form"
                            id="exampleInputEmail1"
                            placeholder="Email Address"
                            value={email}
                            onInput={handleInput}
                            onBlur={handleInput}
                            />
                           {emailError && <div className="error" style={{ color: 'red' }} >{emailError}</div>}
                           
                        </div>
                      <div className="form-group col-4">
                          <input
                          type="text"
                          className="form-control input-form"
                          id="exampleInputPhone"
                          placeholder="Phone Number"
                          value={phone}
                          onChange={handlePhoneChange}
                          onBlur={handlePhoneBlur}
                          inputMode="numeric"
                          />
                          {phoneError && <div className="error" style={{ color: 'red' }} >{phoneError}</div>}
                          </div>
                          </div>
                          <button type="submit" className="btn-contact" onClick={handleSubmit}>
                          Call Back <ArrowRightOutlined />
                         
                          </button> 
                          <div style={{ display: 'flex', justifyContent: 'center'}}>
                            {error && <div className="error" style={{ color: 'red' }}>{error}</div>}
                          </div>
                          {success && (
                          <div style={{ color: 'green' }}>
                          Đã gửi yêu cầu thành công! Chúng tôi sẽ liên hệ với bạn sớm nhất có thể.
                          </div>
                          )}
                    </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="comment">
        <div className="container">
          <div className="icon up-comment">
            <LikeOutlined />
          </div>
          <div className="title-comment up-comment">
            <p className="title-text">What Are Our Customers Saying ?</p>
            <p className="sub-text">Opinions from our happy customers.</p>
          </div>
          <div className="left-comment">
            <Slider {...settings3}>
               <div className="col-3">
              <div className="class-box">
                <div className="testimon-text">
                  We needed a floor covering for the living room of our house.
                  They did professional work. Thank you.
                  {/* <i class="fas fa-quote-right quote" aria-hidden="true"></i> */}
                </div>
                <div className="img-testimon">
                  <img src={imgtest} />
                </div>
                <div className="name-test">Adam</div>
              </div>
            </div>
            <div className="col-3">
              <div className="class-box">
                <div className="testimon-text">
                  We needed a floor covering for the living room of our house.
                  They did professional work. Thank you.
                  {/* <i class="fas fa-quote-right quote" aria-hidden="true"></i> */}
                </div>
                <div className="img-testimon">
                  <img src={imgtest} />
                </div>
                <div className="name-test">Adam</div>
              </div>
            </div>
            <div className="col-3">
              <div className="class-box">
                <div className="testimon-text">
                  We needed a floor covering for the living room of our house.
                  They did professional work. Thank you.
                  {/* <i class="fas fa-quote-right quote" aria-hidden="true"></i> */}
                </div>
                <div className="img-testimon">
                  <img src={imgtest} />
                </div>
                <div className="name-test">Adam</div>
              </div>
            </div>
            <div className="col-3">
              <div className="class-box">
                <div className="testimon-text">
                  We needed a floor covering for the living room of our house.
                  They did professional work. Thank you.
                  {/* <i class="fas fa-quote-right quote" aria-hidden="true"></i> */}
                </div>
                <div className="img-testimon">
                  <img src={imgtest} />
                </div>
                <div className="name-test">Adam</div>
              </div>
            </div>
            <div className="col-3">
              <div className="class-box">
                <div className="testimon-text">
                  We needed a floor covering for the living room of our house.
                  They did professional work. Thank you.
                  {/* <i class="fas fa-quote-right quote" aria-hidden="true"></i> */}
                </div>
                <div className="img-testimon">
                  <img src={imgtest} />
                </div>
                <div className="name-test">Adam</div>
              </div>
            </div>
            </Slider>
           
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
