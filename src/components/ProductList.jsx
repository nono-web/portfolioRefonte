import React from 'react';
import styled from 'styled-components';
import { desktop } from '../responsive';
import { products } from '../data';
import creation from '../assets/artnono.png';
import Product from './Product';

const Container = styled.div`
  background-color: #283e68;;
  
`;

const Title = styled.h1`
  color: white;
  font-size: 1.6rem;
  padding: 1rem 1rem 0rem 1rem;
  text-align: center;
  ${desktop({ fontSize: '3rem' })}
`;



const ImageTitle = styled.img`
  width: 12rem;
  display: block;
  margin: 0rem auto;
  ${desktop({ width: '20rem' })}
`;
const ProductsList = styled.div`

`;

const Products = styled.div`
display: flex;
flex-direction:column;
align-items:center;
${desktop({ display:'grid', gridTemplateColumns:'1fr 1fr', gridTemplateRows:' 1fr 1fr 1fr', gap:'10px 50px', width:'90%', margin:' 0 auto' })}
`;


const ProductList = () => {
  return (
    <Container id="Creation">
      <Title>MES REALISATIONS</Title>
      <ImageTitle src={creation} alt="product" />
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
