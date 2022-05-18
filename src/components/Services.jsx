import React from 'react';
import styled from 'styled-components';
import { mobile } from '../responsive';
import ordi from '../assets/ordi.png'
import siteVitrine from '../assets/site-internet.png';
import rafraichissement from '../assets/rafraichissement.png';
import integration from '../assets/integration.png';
import portofolio from '../assets/portfolio.png';
import eCommerce from '../assets/ecommerce.png';
import responsive from '../assets/responsive.png';

const Container = styled.div`
  background-color: #3b556d;

`;

const Title = styled.h1`
  color: white;
  font-size: 1.6rem;
  padding: 1rem 1rem 0rem 1rem;
  text-align: center;
  ${mobile({ fontSize: '3rem' })}
`;

const Link = styled.a`
  &:visited,
  &:active,
  &:link {
    text-decoration: none;
    color: white;
    text-align: center;
  }
`;

const ImageTitle = styled.img `
width: 12rem;
display: block;
margin: 0rem auto;
${mobile({ width: '20rem' })}
`


const LittleTitle = styled.h2`
  color: white;
  font-size: 1.2rem;
  text-align: center;
  padding: 1rem;
  ${mobile({ fontSize: '2.5rem' })}
`;

const RowContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 1.5rem;
  ${mobile({ flexDirection: 'row' })}
`;

const ColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  &:hover {
      background-color: #1c2942;
      border-radius: 2rem;
      margin:1rem;
      ${mobile({ margin: '0' })}
  }
`;

const Image = styled.img`
  width: 60%;
  &:hover {
      margin:1rem;
      ${mobile({ margin: '0' })}
  }
  ${mobile({ width: '50%' })}
`;

const TitleDesc = styled.h3`
  font-size: 2rem;
  color: white;
  margin: 0rem 2rem 3rem 2rem;
  text-align: center;
`;

const Services = () => {
  return (
    <Container id="Services">
      <Title> SERVICES </Title>
      <Link href="#About">
      <ImageTitle src={ordi} alt="ordi" />
      </Link>
      <LittleTitle> Les différents services de NonoduWeb : </LittleTitle>
      <RowContainer>
        <ColumnContainer>
          <Image src={siteVitrine} />
          <TitleDesc>Site Vitrine</TitleDesc>
        </ColumnContainer>
        <ColumnContainer>
          <Image src={rafraichissement} />
          <TitleDesc>Rafraichissement de site existant</TitleDesc>
        </ColumnContainer>
        <ColumnContainer>
          <Image src={integration} />
          <TitleDesc>Site OnePage</TitleDesc>
        </ColumnContainer>
      </RowContainer>
      <RowContainer>
        <ColumnContainer>
          <Image src={portofolio} />
          <TitleDesc>Portfolio</TitleDesc>
        </ColumnContainer>
        <ColumnContainer>
          <Image src={eCommerce} />
          <TitleDesc>E-commerce</TitleDesc>
        </ColumnContainer>
        <ColumnContainer>
          <Image src={responsive} />
          <TitleDesc> Adapté à tous les support</TitleDesc>
        </ColumnContainer>
      </RowContainer>
    </Container>
  );
};

export default Services;
