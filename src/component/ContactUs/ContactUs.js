import "./ContactUsStyle.scss";
import {
  RightOutlined,
  ArrowRightOutlined,
  PhoneOutlined,
  MailOutlined,
  HomeOutlined,
} from "@ant-design/icons";
import { useState } from 'react';
function ContactUs() {
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

  return (
    <div className="contact-us">
      <section className="slider">
        <div className="siler-list">
          <div className="slider-item">
            <div className="container">
              <div className="slide-content d-flex">
                <div className="text">
                  <p className="text-title">
                    <span>Contact</span>
                  </p>
                  <p className="breadcrumb-text">
                  <a href="home"> Home </a><RightOutlined /> Contact
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="tablo">
        <div className="container">
          <div className="row">
            <div className="col-4">
              <div className="icon">
                <PhoneOutlined />
              </div>
              <div className="title-tablo">
                <h3>CUSTOMER SERVICE</h3>
              </div>
              <div className="content-tablo">
                <p>+1 (234) 567 89 10</p>
              </div>
            </div>
            <div className="col-4">
              <div className="icon">
                <MailOutlined />
              </div>
              <div className="title-tablo">
                <h3>MAIL ADDRESS</h3>
              </div>
              <div className="content-tablo">
                <p>example@example.com</p>
              </div>
            </div>
            <div className="col-4">
              <div className="icon">
                <HomeOutlined />
              </div>
              <div className="title-tablo">
                <h3>OFFICE</h3>
              </div>
              <div className="content-tablo">
                <p>Yeşilplnar Mh. Tepe Sk. Eyüp İstanbul</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="contact">
        <div className="container">
          <div className="form-contact">
            <div className="form-submit">
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
                          <textarea
                    class="form-control"
                    id="exampleFormControlTextarea1"
                    placeholder="Your Message"
                    rows="5"
                  ></textarea>
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
      </section>
      <section className="maps">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14896.603644108816!2d105.77032909999998!3d21.02664685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1svi!2s!4v1678332636542!5m2!1svi!2s"
          style={{ border: 0, width: "100%" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>
    </div>
  );
}

export default ContactUs;
