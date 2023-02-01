import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const StyledContactForm = styled.div`
  height: 100vh;
  max-height: 1100px;
  position: relative;
  overflow: hidden;
  background: repeating-radial-gradient(#000 0 0.0001%,#000 0 0.0002%) 
   60% 60%/3000px 3000px,
  repeating-conic-gradient(#000 0 0.0001%,#3c4048 0 0.0002%) 
   40% 40%/4000px 3000px, linear-gradient(
    to bottom,
    #000 0%,
    #3c4048 100%
   );
 background-blend-mode: difference;
  

  form {
    flex-direction: column;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    position: relative;
    input {
      margin: 1rem 0;
      width: 55%;
      height: 2rem;
      padding: 7px;
      outline: none;
      border-radius: 0.1rem;
      &:focus {
        border: solid 0.2rem #ff4a4a;
      }

      @media screen and (max-width: 768px) {
        width: 70%
      }
    }
    textarea {
      margin: 1rem 0;
      width: 55%;
      height: 7rem;
      resize: none;
      padding: 7px;
      outline: none;
      border-radius: 0.1rem;
      &:focus {
        border: solid 0.2rem #ff4a4a;
      }

      @media screen and (max-width: 768px) {
        width: 70%
      }
    }
    label {
      text-shadow: -0.4px 0.4px 0px #fff;
      margin-top: 1rem;
      font-weight: 700;
      color: #ff4a4a;
      transition: 0.2s;

      &:hover {
        cursor: pointer;
        text-shadow: -0.4px 0.4px 0px #000;
        white-space: nowrap;
        font-weight: bolder;
      }
    }
    input[type="submit"] {
      margin-top: 2rem;
      cursor: pointer;
      width: 5rem;
      background: #ff4a4a;
      color: white;
      border: none;

      &:hover{
        color: #ff4a4a;
        background: #000;
        font-weight: 700;
        box-shadow: 0px 0px 0px 1px #fff;
        transform: scale(1.02);
      }
    }
  }
`;

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_fp2f75d",
        "template_bc52p5p",
        form.current,
        "mH7aKphn7UL0BrZqH"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const notify = () => {
    toast.success(" Message Sent !", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  return (
    <StyledContactForm id="contact">
      <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="user_name" placeholder=" @Name"/>
        <label>Email</label>
        <input type="email" name="user_email" placeholder=" @Email" />
        <label>Message</label>
        <textarea name="message" />
        <input onClick={notify} type="submit" value="Send"/>
        <ToastContainer />
      </form>
    </StyledContactForm>
  );
};

export default Contact;
