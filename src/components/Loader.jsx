import React from 'react'
import imgHome from '../assets/img-home3.jpg';
import styled from'styled-components';
import nono from '../assets/nonoduweb.png'

const Container = styled.div `
    background-image: url(${imgHome});
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const LoaderContainer = styled.div `
  position: relative;
    width: 200px;
    height: 200px;
    display: flex;
   
    justify-content: center;
    align-items: center;
`

const Circle = styled.span `
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 5px solid #fff;
    pointer-events: none;
    animation: animate 5s linear infinite;
&:nth-child(1) {
    border-color: #e64032;
    border-radius: 18% 82% 33% 67% / 73% 17% 83% 27% 
}
&:nth-child(2) {
    border-color: #F6B801 ;
    border-radius: 74% 26% 68% 32% / 21% 55% 45% 79%;
    animation-direction: reverse;
}
&:nth-child(3) {
    border-color: #31a452 ;
    border-radius: 43% 57% 57% 43% / 49% 70% 30% 51%;
    animation-duration: 2,5s;
}
@keyframes animate {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}
`

const Title = styled.h2 `
padding: 2rem;
    color: #b1ddf1;
    font-family: consolas, sans-serif;
    font-weight: 500; animation: clignote 2s linear infinite;
  @keyframes clignote {
    50% {
      opacity: 0;
    }
  }
`

const Image = styled.img ``


const Loader = () => {
  return (
    <Container>
        <LoaderContainer>
      <Circle></Circle>
      <Circle></Circle>
      <Circle></Circle>
      <Image src={nono} />
      </LoaderContainer>
      <Title> Loading ...</Title>
    </Container>
    
  )
}

export default Loader
