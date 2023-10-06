import "./AllServicesStyle.scss";
import {
  RightOutlined,
  ArrowRightOutlined,
  LikeOutlined,
  LeftOutlined,
} from "@ant-design/icons";
import imgservice1 from "./imgFlooring/img-service1.jpg";
import imgservice2 from "./imgFlooring/img-service2.jpg";
import imgservice3 from "./imgFlooring/img-service3.jpg";
import imgservice4 from "./imgFlooring/wood-services-4.jpg";
import imgservice5 from "./imgFlooring/wood-services-5.jpg";
import imgContact from "./imgFlooring/img-contact.jpg";
import img1 from "./imgFlooring/wood-services-big-1.jpg";
import img2 from "./imgFlooring/divider.jpg";
import Slider from "react-slick";
import React, { useEffect } from "react";
import { useState } from 'react';

function AllServices() {

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

  const onHoverOut = () => {
    const ele = document.getElementById("box");
    const ele1 = document.getElementById("box1");
    const ele2 = document.getElementById("content1");
    const ele3 = document.getElementById("content2");
    // ele.classList.remove("d-blok");
    ele.classList.remove("d-none");
    ele1.classList.remove("d-none");
    ele2.classList.add("d-none");
    ele3.classList.add("d-none");
  };
  useEffect(() => {
    var up1 = document.getElementsByClassName("up1");
    var up2 = document.getElementsByClassName("up2");
    var up3 = document.getElementsByClassName("up3");
    var up4 = document.getElementsByClassName("up4");
    var up5 = document.getElementsByClassName("up5");
    if (window.scrollY >= 0) {
      for (var i = 0; i < up1.length; i++) {
        up1[i].classList.add("fadeInUp", "cssanimation");
      }
      for (var i = 0; i < up2.length; i++) {
        up2[i].classList.add("fadeInLeft", "cssanimation");
      }
      for (var i = 0; i < up5.length; i++) {
        up5[i].classList.add("fadeInUp", "cssanimation1s");
      }
    }
    window.addEventListener("scroll", () => {
      if (window.scrollY >= 300) {
        for (var i = 0; i < up4.length; i++) {
          up4[i].classList.add("fadeInRight", "cssanimation");
        }
        for (var i = 0; i < up3.length; i++) {
          up3[i].classList.add("fadeInUp", "cssanimation");
        }
      }
    });
  }, []);
  return (
    <div className="all-services">
      <section className="slider">
        <div className="siler-list">
          <div className="slider-item up5">
            <div className="container">
              <div className="slide-content d-flex">
                <div className="text">
                  <p className="text-title">
                    <span>All Services</span>
                  </p>
                  <p className="breadcrumb-text">
                  <a href="home"> Home </a><RightOutlined /> All Services
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="our-services up1">
        <div className="container">
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
      </section>
      <section className="contact">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 up3">
              <img src={imgContact} />
            </div>
            <div className="col-lg-6 up4">
              <div className="contact-content">
                <div className="text-contact">
                  <p className="title-contact">
                    Let's Create A Great Design Together!
                  </p>
                  <p className="sub-contact">
                    Fill out the detailed information form about our flooring
                    services.
                  </p>
                </div>
                <div className="form-contact">
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
    </div>
  );
}

export default AllServices;
