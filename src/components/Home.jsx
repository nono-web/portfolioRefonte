import styled from 'styled-components';
import hello from '../assets/hello.png';
import imgHome from '../assets/img-home2.jpg';
import { mobile } from '../responsive';

const Container = styled.div`
  background-image: url(${imgHome});
  height: 90vh;
  display: flex;
  flex-direction:  column;
  justify-content: center;
  align-items: center;
  ${mobile({ backgroundSize:'cover'})}
`;

const Image = styled.img`
  width: 20rem;
  ${mobile({ width: '28rem'})}
`;

const Title = styled.div`
  height: 3rem;
  overflow: hidden;
  text-align: center;
  ${mobile({ marginBottom: '1rem'})}
`;

const TitleWrapper = styled.div`
  height: 100%;
  animation: move 8s ease-in-out infinite alternate;
  text-align: center;
  @keyframes move {
    25% {
      transform: translateY(-50px);
    }
    50% {
      transform: translateY(-100px);
    }
    100% {
      transform: translateY(-150px);
    }
  }
`;

const TitleItem = styled.div`
  height: 3.12rem;
  font-size: 2rem;
  font-weight: bold;
  color: #5fc2ba;
  display: flex;
  align-items: center;
  justify-content: center;
  ${mobile({ fontSize:'2.6rem'})}
`;

const Desc = styled.div`
display: flex;
align-items: center;
flex-direction: column;
margin-top: 1.5rem;
${mobile({ flexDirection: 'row', marginBottom: '1rem'})}
`;

const DescItem = styled.div`
background-color: #3b556d;
  color: white;
  font-weight:bold;
  font-size: 1.1rem;
  text-align: center;
  margin-bottom: 1rem;
  ${mobile({ marginTop: '0rem', fontSize:'1.3rem', paddingLeft:'0.6rem', fontWeight:'bold'})}
`;

const Home = () => {
  return (
    <Container id="Home">
        <Image src={hello} />
        <Title>
          <TitleWrapper>
            <TitleItem>Développeur web</TitleItem>
            <TitleItem>Créateur de contenu</TitleItem>
            <TitleItem>Concepteur de site web</TitleItem>
            <TitleItem>Intégration web</TitleItem>
          </TitleWrapper>
        </Title>
        <Desc>
          <DescItem>Vous avez un projet de site web ?</DescItem>
          <DescItem>Vous ne savez pas comment vous y prendre ? </DescItem>
          <DescItem>Ou vous ne voulez pas le faire seul ?</DescItem>
          <DescItem>Vous êtes au bon endroit. Suivez-moi !</DescItem>
        </Desc>
    </Container>
  );
};

export default Home;
