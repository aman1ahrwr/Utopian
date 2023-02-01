import React,{useEffect} from 'react';
import styled from 'styled-components';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Section = styled.section`
    width: 100%;
    height: 100%;
    padding: 4rem 0rem;

    @media screen and (max-width: 768px) {
        padding: 0;
        margin: 0 auto;
    }
    
`;

const Container = styled.div`
    padding: 3rem calc((100vw - 1300px)/2);
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 800px;

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
        padding: 1rem;
    }
`;

const ColumnLeft = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    line-height: 1.4;
    padding: 1rem 2rem;
    order: ${({reverse})=>(reverse? '2':'1')};


    @media screen and (max-width: 768px){
        padding: 0 auto;
    }


    h1{
        text-shadow: -2px 2px 0px #FF7B54;
        margin-bottom: 1rem;
        font-size: clamp(1.5rem, 6vw, 2rem);
    }

    p{
        margin-bottom: 2rem;
    }
`;

const ColumnRight = styled.div`
    padding: 1rem 2rem;
    order: ${({reverse})=>(reverse? '1':'2')};
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 768px){
        order: ${({reverse}) =>(reverse? '2':'1')};
        padding: 0 auto;
    }

    img{
        box-shadow: 5px 5px 5px 0px #FF4A4A; 
        border: solid 0.1rem #FF7B54;
        width: 100%;
        height:100%;
        object-fit: cover;

        @media screen and (max-width: 768px){
            width: 90%;
            height: 90%;
        }
    }
`;

const Info = ({heading, paragraphOne, paragraphTwo, buttonLabel, image, reverse}) => {
    useEffect(() => {
        AOS.init({
            offset: 200,
            duration: 900
        });
      }, [])
  return (
    <Section id='about'>
        <Container>
            <ColumnLeft>
                <h1>{heading}</h1>
                <p>{paragraphOne}</p>
                <p>{paragraphTwo}</p>
            </ColumnLeft>
            <ColumnRight data-aos="zoom-in" reverse={reverse}>
                <img src={image} alt="project"/>
            </ColumnRight>
        </Container>
    </Section>
  )
}

export default Info