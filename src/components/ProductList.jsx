import React from 'react';
import styled from 'styled-components';
import { mobile } from '../responsive';
import { products } from '../data';
import creation from '../assets/artnono.png';
import Product from './Product';

const Container = styled.div`
  background-color: #1c2942;
  
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

const ImageTitle = styled.img`
  width: 12rem;
  display: block;
  margin: 0rem auto;
  ${mobile({ width: '20rem' })}
`;
const ProductsList = styled.div`

`;

const Products = styled.div`
display: flex;
flex-direction:column;
align-items:center;
${mobile({ display:'grid', gridTemplateColumns:'1fr 1fr', gridTemplateRows:' 1fr 1fr 1fr 1fr', gap:'50px 50px', width:'90%', margin:' 0 auto' })}
`;


const ProductList = () => {
  return (
    <Container id="Creation">
      <Title>MES REALISATIONS</Title>
      <Link href="#Services">
      <ImageTitle src={creation} alt="product" />
      </Link>
      <ProductsList>
        <Products>
        {products.map((item) => (
            <Product
              key={item.id}
              img={item.img}
              link={item.link}
              title={item.title}
            />
          ))}
        </Products>
      </ProductsList>
    </Container>
  );
};

export default ProductList;
