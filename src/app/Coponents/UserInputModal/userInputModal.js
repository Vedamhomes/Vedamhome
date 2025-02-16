"use client"
 // UserInputModal.js
import { useState, useEffect, useRef } from "react";
import styles from "./style.css";
import Modal from "antd/es/modal/Modal";
import emailjs from "@emailjs/browser";
import { Alert } from "antd";
import { Bounce, toast } from "react-toastify";

const UserInputModal = (props) => {
  const { isOverlayOpn, setIsOverlayOpn } = props

  const [phoneNumber, setPhoneNumber] = useState('+91');
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('phoneNumber.length()', phoneNumber.length)
    if(phoneNumber.length < 13){
      return ;
    }
    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        form.current,
        {
          publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          toast.success('🦄 Thank you! We have received your information and will contact you soon.', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
            });
            setIsOverlayOpn(false)
        },
        (error) => {
          console.log('error',error)
          toast.warn('🦄 We encountered an error. Please try again in a few moments.', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
            });
            setIsOverlayOpn(false);
          }
      );
  };
  const handleBlur = () => {
    const regex = /^\+91\d{10}$/;
    if (!regex.test(phoneNumber)) {
      alert('Please enter a valid phone number.');
    }
  };
  const isRepeatingDigits = (number) => {
    return new Set(number).size <= 3;
  };
  const handleChange = (event) => {
    const value = event.target.value;
    console.log('value', value);
    
    let formattedValue = value;
    
    if (value.startsWith('+91')) {
      formattedValue = value.substring(3);
    }else{
      formattedValue = ''
    }
    
    formattedValue = formattedValue.replace(/\s+/g, '');
    
    if (formattedValue.length <= 10) {
      if (formattedValue.length >= 8 && isRepeatingDigits(formattedValue)) {
        return;
      }
      setPhoneNumber('+91' + formattedValue);
    } else {
      console.warn('Phone number is too long');
    }
  };

  return (
    // <div suppressHydrationWarning={true} className="modal_container_box_1" >
    <Modal
      // classNames={{
      //   overlay: 'modal_container',
      //   modal: 'modal_container_box'
      // }}
      className="modal_container"
      animationDuration={800}
      open={isOverlayOpn}
      // closable={false}
      footer={null}
      onCancel={() => setIsOverlayOpn(false)}
      center
    >
      <div className="inquire_container_form">
        <div className="inquire_container_form_heading">
          <h2 className="inquire_container_form_heading_text">
            * Crafted Luxury Designed to feel like home
          </h2>
        </div>

        <form ref={form} className="input_form" onSubmit={handleSubmit}>
          {/* <div className="form_input_container">
            <label className="form_input_label" htmlFor="property_location">Property Location</label>
            <select
              name="property_location"
              id="property_location"
              className="form_input_box"
              required
              title="* Property Location"
            >
              <option value="">Select Property Location</option>
            //   <option data-ref="faridabad" data-belong="" value="faridabad">
            //     Faridabad
            //  </option> 
              <option data-ref="gurugram" data-belong="" value="gurugram">
                Gurugram
              </option>
            </select>
          </div> */}

          <div className="form_input_container">
            <label className="form_input_label" htmlFor="first_name">First Name</label>
            <input
              type="text"
              className="form_input_box"
              id="first_name"
              name="first_name"
              placeholder="First name"
              required
            />
          </div>

          <div className="form_input_container">
            <label className="form_input_label" htmlFor="last_name">Last Name</label>
            <input
              type="text"
              className="form_input_box"
              id="last_name"
              name="last_name"
              placeholder="Last name"
              required
            />
          </div>

          <div className="form_input_container">
            <label className="form_input_label" htmlFor="email_address">Email Address</label>
            <input
              type="email"
              className="form_input_box form_input_box_email"
              id="email_address"
              name="email_address"
              placeholder="Email address"
              required
            />
          </div>

          <div className="form_input_container">
            <label className="form_input_label" htmlFor="phone_number">Phone Number</label>
            <input
              type="tel"
              className="form_input_box"
              id="phone_number"
              name="phone_number"
              placeholder="Phone number"
              value={phoneNumber}
              onChange={handleChange}
              // onBlur={handleBlur}
              required
            />
          </div>

          <div className="form_submit_container">
            <button type="submit" className="submit_btn">
              Submit
            </button>
          </div>
        </form>
      </div>
    </Modal>
    // </div>
  );
};

export default UserInputModal;
