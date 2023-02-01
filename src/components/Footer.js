import React, { useRef } from "react";
import styled from "styled-components";
import github from "../image/github.png";
import linkedin from "../image/linkedin.png";
import nasa from "../image/nasa.jpeg";
import instagram from "../image/instagram.png";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { menuData } from "../data/menuData";

const FooterSection = styled.footer`
  height: 70%;
  width: 100%;
  bottom: 0;
  background: linear-gradient(90deg, #3c4048 0%, #000 100%);
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: relative;
  padding: 2rem 2rem 0 2rem;

  hr {
    margin: 3rem 1rem;
    border-bottom: 1px dashed #ff4a4a;

    &.disHr {
      margin: 3rem 1rem 0rem 1rem;
    }
  }

  p {
    &.dis {
      align-items: center;
      color: #fff;
      font-size: 0.5rem;
      padding: 1rem;
    }
  }
`;
const LessContent = styled.div`
  margin: 1.5rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;

  img {
    box-shadow: 0px 0px 5px 5px #ff4a4a;
    height: 15%;
    width: 15%;
    transition: 0.3s;
    opacity: 0.7;

    &: hover {
      opacity: 1;
      box-shadow: 0px 0px 0px 5px #ff4a4a;
      transform: scale(1.02);
    }

    @media screen and (max-width: 1300px) {
      display: none;
    }
  }
`;

const MoreContent = styled.div`
  margin-top: 2.5rem;
  display: flex;
  justify-content: space-around;
  align-items: center;

  img {
    transition: 0.3s;

    &: hover {
      cursor: pointer;
      transform: scale(1.1);
    }
  }

  p {
    text-align: left;
    font-size: 0.8rem;
    font-weight: 400;
    color: #fff;

    @media screen and (max-width: 768px) {
      margin: 1rem;
    }
  }

  a{
    margin: 1rem 5rem;

    @media screen and (max-width: 768px) {
      margin: 1rem;
    }
  }

  @media screen and (max-width: 768px) {
    flex-wrap: wrap;
  }
`;

const Slogan = styled.div`
  p {
    margin-top: 1rem;
    font-weight: 400;
    max-width: 50vw;
  }

  input {
    &.textArea {
      resize: none;
      border: solid 0.1rem #ff4a4a;
      border-radius: 0.1rem;
      height: 1.3rem;
      width: 32vw;
      margin: 1rem 0;

      @media screen and (max-width: 768px) {
        margin: 2rem 0 1rem 0;
        width: 60vw;
        font-size: 0.5rem;
      }
    }

    &.btn {
      white-space: nowrap;
      cursor: pointer;
      border: none;
      transition: 0.3s;
      border-radius: 0.1rem;
      height: 1.3rem;
      width: 5rem;
      box-shadow: 0px 0px 1px 1px #ff4a4a;
      margin: 1rem 2rem;
      color: #fff;
      background: #000;

      &:hover {
        box-shadow: 0px 0px 0px 1px #ff4a4a;
        transform: scale(1.02);
      }

      @media screen and (max-width: 768px) {
        justify-content: center;
      }
    }
  }
`;

const Logo = styled(Link)`
  font-weight: 700;
  text-shadow: -2px 2px 0px #00e6e6;
  margin: 2rem 0;
  font-weight: 700;
  letter-spacing: 0.2rem;
  text-decoration: none;
  font-size: 2rem;
  color: #ff4a4a;
  transition: 0.1s ease-in-out;

  &:hover {
    cursor: pointer;
    color: #fff;
    white-space: nowrap;
    font-weight: bolder;
  }
`;

const DropDownMenu = styled.div`
  text-align: center;

  @media screen and (max-width: 1150px) {
    display: none;
  }
`;

const DropDownLink = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  font-size: 1rem;
  text-decoration: none;
  line-height: 3;
  color: #fff;
  cursor: pointer;
  transition: 0.2s ease-in-out;

  &:hover {
    color: #ff4a4a;
  }
`;

const Footer = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_fp2f75d",
        "template_vvrl6am",
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
    toast.success(" Success !", {
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
    <FooterSection>
      <LessContent>
        <Slogan>
          <Logo to="/">UTOPIAN</Logo>
          <p>
            "Join the journey to the frontiers of space and be the first to know
            about Utopian's latest innovations! Sign up for our newsletter today
            and receive exclusive updates on Our work, Subscribe now and be part
            of a community of space enthusiasts shaping the future of humanity
            in the cosmos. Don't miss a beat, sign up for Utopian's newsletter
            today!"
          </p>

          <form ref={form} onSubmit={sendEmail}>
            <input
              className="textArea"
              placeholder=" For those who wanna Transcend - Drop @email."
              type="email"
              name="user_email"
            />
            <input
              className="btn"
              onClick={notify}
              type="submit"
              value="Send"
            />
            <ToastContainer />
          </form>
        </Slogan>

        <img src={nasa} alt="nasa" />

        <DropDownMenu>
          {menuData.map((item, index) => (
            <DropDownLink to={item.link} key={index}>
              {item.title}
            </DropDownLink>
          ))}
        </DropDownMenu>
      </LessContent>
      <hr />
      <MoreContent>
        <p>Copyright &copy; 2023 India, All rights reserved.</p>
        <div>
          <a
            href="https://www.linkedin.com/in/aman-ahirwar-658220222/"
            target="_blank"
          >
            <img rel="icon" src={linkedin} alt="linkedin" />
          </a>
          <a href="https://www.instagram.com/aman.ahrwr/" target="_blank">
            <img rel="icon" src={instagram} alt="instagram" />
          </a>
          <a href="https://github.com/aman1ahrwr" target="_blank">
            <img rel="icon" src={github} alt="github" />
          </a>
        </div>
      </MoreContent>
      <hr className="disHr" />
      <center>
        <p className="dis">
          *Disclaimer: The Utopian is an Fictional Organization made for this
          Web App exclusively by &copy; Aman Ahirwar in 2023, If you wish to use
          any properties of this WebApp, Kindly contact through Contact Form.
        </p>
      </center>
    </FooterSection>
  );
};

export default Footer;
