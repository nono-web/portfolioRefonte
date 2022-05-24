import styled from 'styled-components';
import hello from '../assets/hello.png';
import imgHome from '../assets/img-home3.jpg';
import { desktop } from '../responsive';

const Container = styled.div`
  background-image: url(${imgHome});
  height: 90vh;
  display: flex;
  flex-direction:  column;
  justify-content: center;
  align-items: center;
  ${desktop({ backgroundSize:'cover', height: '80vh'})}
`;

const Image = styled.img`
  width: 20rem;
  ${desktop({ width: '28rem'})}
`;

const Title = styled.div`
  height: 3rem;
  overflow: hidden;
  text-align: center;
  ${desktop({ marginBottom: '3rem'})}
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
  font-size: 1.6rem;
  font-weight: bold;
  color: #5fc2ba;
  display: flex;
  align-items: center;
  justify-content: center;
  ${desktop({ fontSize:'2.6rem'})}
`;

const Desc = styled.div`
display: flex;
align-items: center;
flex-direction: column;
margin-top: 1.5rem;
${desktop({ flexDirection: 'row', marginBottom: '1rem'})}
`;

const DescItem = styled.div`
  color: white;
  padding: 0.6rem;
  font-weight:bold;
  font-size: 1.1rem;
  text-align:center;
  ${desktop({ marginTop: '0rem', fontSize:'1.5rem', paddingLeft:'0.6rem', fontWeight:'bold'})}
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
