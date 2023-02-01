import React, {useEffect} from "react";
import styled from "styled-components";
import { Button } from "./Button";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Section = styled.section`
  width: 100%;
  height: 100%;

`;

const Container = styled.div`
  padding: 3rem calc((100vw - 1300px) / 2);
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 800px;
  background: linear-gradient(
    to bottom,
    #000 0%,
    #3c4048 25%,
    #fff 25%,
    #fff 75%,
    #3c4048 75%,
    #000 100%
  );

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    background: #3c4048;
    padding: 1rem;
  }
`;

const ColumnLeft = styled.div`
  padding: 1rem 2rem;
  order: ${({ reverse }) => (reverse ? "1" : "2")};
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
    order: ${({ reverse }) => (reverse ? "2" : "1")};
  }

  img {
    width: 90%;
    height: 90%;
    object-fit: cover;

    @media screen and (max-width: 768px) {
      display: none;
      width: 80%;
      height: 80%;
      box-shadow: 0px 0px 5px 5px #FF4A4A; 
    }
  }
`;

const ColumnRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  line-height: 1.4;
  padding: 1rem 2rem;
  order: ${({ reverse }) => (reverse ? "2" : "1")};

  @media screen and (max-width: 768px) {
    margin: 0 auto;
  }

  h1 {
    margin-bottom: 1rem;
    text-shadow: -2px 2px 0px #ff4a4a;
    font-size: clamp(1.5rem, 6vw, 2rem);

    @media screen and (max-width: 768px) {
      color: #fff;
    }
  }

  p {
    margin-bottom: 2rem;
    @media screen and (max-width: 768px) {
      color: #fff;
    }
  }
`;

const Info = ({ heading, paragraphOne, buttonLabel, image, reverse }) => {
  useEffect(() => {
      AOS.init({
          offset: 200,
          duration: 900
      });
    }, [])
  return (
    <Section>
      <Container>
        <ColumnRight  data-aos="fade-right">
          <h1>{heading}</h1>
          <p>{paragraphOne}</p>
          <Button to="/projects" primary="true">
            {buttonLabel}
          </Button>
        </ColumnRight>
        <ColumnLeft  data-aos="fade-left" reverse={reverse}>
          <img src={image} alt="project" />
        </ColumnLeft>
      </Container>
    </Section>
  );
};

export default Info;
