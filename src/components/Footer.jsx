import styled from 'styled-components';
import logo from '../assets/logo.png';
import { desktop } from '../responsive';

const Container = styled.div`
  background-color: #5fc2ba;
  display: flex;
  flex-direction: column;
  text-align: center;
  height: 90vh;
  ${desktop({ flexDirection: 'row', height: '80vh' })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
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

const Logo = styled.img`
  width: 50%;
  padding: 1rem;
  ${desktop({ width: '70%', padding: '3rem' })}
`;

const Center = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const List = styled.ul`
  justify-content: center;
  list-style: none;

  padding: 0rem 1.3rem;
  ${desktop({ padding: '5rem', fontSize: '3rem' })}
`;

const ListItem = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-size: 1.1rem;
  color: white;
  font-weight: 500;
  margin-bottom: 1.25rem;
  &:nth-child(1) {
    font-weight: bold;
    font-size: 2rem;
    ${desktop({ fontSize: '2.5rem' })}
  }
  ${desktop({ fontSize: '1.2rem', marginBottom: '3rem' })}
`;

const Right = styled.div`
  flex: 1;
`;

const SocialContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  ${desktop({ padding: '9.8rem' })}
`;



const SocialIcon = styled.div`
  width: 2rem;
  height: 2rem;
  margin: 0.3rem 0.3rem;
  cursor: pointer;
  color: white;
  &:hover {
    color: black;
  }
  ${desktop({ width: '3rem' })}
`;

const Footer = () => {
  return (
    <Container>
      <Left>
      <Link href="/#Home">
        <Logo src={logo} />
        </Link>
      </Left>
      <Center>
        <List>
          <ListItem>
            <svg
              width="3rem"
              height="3rem"
              viewBox="0 0 16 16"
              style={{ marginRight: '0.8rem' }}
              
            >
              <path
                fill="currentColor"
                d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608a17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42a18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"
              ></path>
            </svg>
            07 87 03 61 37
          </ListItem>
          <ListItem>
            <svg
              width="2rem"
              height="2rem"
              viewBox="0 0 256 256"
              style={{ marginRight: '0.8rem' }}
            >
              <path
                fill="currentColor"
                d="M128.1 16a88.1 88.1 0 0 0-88 88c0 75.3 80 132.2 83.4 134.6a8.3 8.3 0 0 0 9.2 0c3.4-2.4 83.4-59.3 83.4-134.6a88.1 88.1 0 0 0-88-88Zm0 56a32 32 0 1 1-32 32a32 32 0 0 1 32-32Z"
              ></path>
            </svg>{' '}
            Montugyon, Charente-Maritime
          </ListItem>
          <ListItem>
            <svg
              width="2rem"
              height="2rem"
              viewBox="0 0 24 24"
              style={{ marginRight: '0.8rem' }}
            >
              <path
                fill="currentColor"
                d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0l-8 5l-8-5h16zm0 12H4V8l8 5l8-5v10z"
              ></path>
            </svg>
            nonoweb17@gmail.com
          </ListItem>
          <ListItem>
            <svg
              width="4rem"
              height="4rem"
              viewBox="0 0 24 24"
              style={{ marginRight: '0.8rem' }}
            >
              <path
                fill="currentColor"
                d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8s8 3.58 8 8s-3.58 8-8 8zm.5-13H11v6l5.25 3.15l.75-1.23l-4.5-2.67z"
              ></path>
            </svg>
            Du Lundi au Vendredi de 9h à 18h et le Samedi sur rendez-vous.
          </ListItem>
        </List>
      </Center>
      <Right>
        <SocialContainer>
          <Link
            href="https://www.facebook.com/nonoduWeb/?ref=pages_you_manage"
            target="_blank"
            rel="noopener"
          >
            <SocialIcon>
              <svg viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  d="M0 12.067C0 18.033 4.333 22.994 10 24v-8.667H7V12h3V9.333c0-3 1.933-4.666 4.667-4.666c.866 0 1.8.133 2.666.266V8H15.8c-1.467 0-1.8.733-1.8 1.667V12h3.2l-.533 3.333H14V24c5.667-1.006 10-5.966 10-11.933C24 5.43 18.6 0 12 0S0 5.43 0 12.067Z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </SocialIcon>
          </Link>
          <Link
            href="https://www.linkedin.com/in/arnaud-didier-2343a3205/"
            target="_blank"
            rel="noopener"
          >
            <SocialIcon>
              <svg viewBox="0 0 20 20">
                <path
                  fill="currentColor"
                  d="M10 .4C4.698.4.4 4.698.4 10s4.298 9.6 9.6 9.6s9.6-4.298 9.6-9.6S15.302.4 10 .4zM7.65 13.979H5.706V7.723H7.65v6.256zm-.984-7.024c-.614 0-1.011-.435-1.011-.973c0-.549.409-.971 1.036-.971s1.011.422 1.023.971c0 .538-.396.973-1.048.973zm8.084 7.024h-1.944v-3.467c0-.807-.282-1.355-.985-1.355c-.537 0-.856.371-.997.728c-.052.127-.065.307-.065.486v3.607H8.814v-4.26c0-.781-.025-1.434-.051-1.996h1.689l.089.869h.039c.256-.408.883-1.01 1.932-1.01c1.279 0 2.238.857 2.238 2.699v3.699z"
                ></path>
              </svg>
            </SocialIcon>
          </Link>
          <Link
            href="https://github.com/nono-web"
            target="_blank"
            rel="noopener"
          >
            <SocialIcon>
              <svg viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  d="M12 1.545c-6.055 0-10.957 4.877-10.957 10.883c0 4.41 2.643 8.205 6.447 9.912c.398.179.787.108 1.091-.12a1.38 1.38 0 0 0 .532-1.107v-.57l-1.357-.184a.489.489 0 0 1-.03-.005c-.748-.146-1.253-.409-1.623-.788c-.311-.319-.501-.701-.662-1.025l-.056-.113a11.645 11.645 0 0 0-.487-.91c-.135-.214-.24-.324-.344-.393c-.264-.175-.518-.472-.518-.843a.72.72 0 0 1 .26-.56a.844.844 0 0 1 .546-.182c.222 0 .431.068.605.146c.178.08.355.186.52.296c.402.268.798.585 1.133.976c.349.406.596.664.968.717c.306.044.618.045.861.034a2.558 2.558 0 0 1 .166-.56a8.347 8.347 0 0 1-.877-.256c-.654-.232-1.383-.593-1.873-1.14c-.538-.602-.871-1.139-1.057-1.767c-.181-.612-.211-1.275-.211-2.091c0-1.25.541-2.303.947-2.862a8.655 8.655 0 0 1-.335-1.501a3.515 3.515 0 0 1 .001-.968c.05-.293.175-.653.504-.87c.317-.211.689-.202.979-.148c.301.057.614.182.902.325c.469.232.935.542 1.284.805c.602-.177 1.667-.405 2.63-.426h.022c.964.021 1.981.249 2.568.425c.35-.262.815-.573 1.283-.804c.288-.143.6-.268.902-.325c.29-.054.662-.063.98.147c.328.218.454.578.503.871c.051.305.039.646 0 .968a8.661 8.661 0 0 1-.334 1.501c.406.56.947 1.613.947 2.862c0 .816-.03 1.479-.21 2.09c-.187.63-.52 1.166-1.058 1.768c-.49.547-1.219.908-1.873 1.14a8.45 8.45 0 0 1-1.062.297c.123.372.167.673.167.846v3.09c0 .47.219.871.53 1.105c.302.229.69.3 1.088.126c3.84-1.692 6.514-5.497 6.514-9.93c0-6.005-4.9-10.882-10.956-10.882ZM9.476 18.71c-.26.037-.001 0-.001 0h-.003l-.008.002l-.029.004a6.523 6.523 0 0 1-.447.037a5.782 5.782 0 0 1-1.066-.043c-.791-.112-1.272-.672-1.583-1.036l-.03-.034a3.6 3.6 0 0 0-.327-.333c.103.19.21.402.325.63l.01.02l.051.104c.175.348.29.58.481.774c.186.19.476.374 1.062.49l1.794.243a.522.522 0 0 1 .452.518v1.027c0 .8-.375 1.513-.95 1.945a2.087 2.087 0 0 1-2.143.236C2.902 21.427 0 17.27 0 12.428C0 5.836 5.377.5 12 .5s12 5.336 12 11.928c0 4.867-2.939 9.035-7.137 10.886a2.09 2.09 0 0 1-2.137-.247a2.426 2.426 0 0 1-.946-1.942v-3.09c0-.07-.049-.474-.322-1.017a.524.524 0 0 1 .408-.755a7.187 7.187 0 0 0 1.504-.356c.594-.21 1.127-.498 1.444-.852c.471-.526.706-.93.835-1.367c.134-.453.168-.98.168-1.793c0-1.141-.6-2.1-.876-2.409a.523.523 0 0 1-.104-.523a7.82 7.82 0 0 0 .375-1.554c.032-.275.034-.505.006-.671a.457.457 0 0 0-.054-.173a.486.486 0 0 0-.207.009c-.17.032-.387.112-.633.234c-.49.242-1 .6-1.316.856a.52.52 0 0 1-.505.085A9.306 9.306 0 0 0 12 7.296c-1.007.024-2.169.31-2.566.453a.52.52 0 0 1-.505-.085a7.775 7.775 0 0 0-1.316-.856a2.607 2.607 0 0 0-.634-.234a.486.486 0 0 0-.206-.009a.456.456 0 0 0-.054.173c-.028.166-.026.396.006.671A7.89 7.89 0 0 0 7.1 8.963c.063.18.024.38-.104.523c-.276.309-.876 1.268-.876 2.409c0 .812.034 1.34.168 1.793c.13.437.364.84.834 1.367c.318.354.85.642 1.445.852a7.194 7.194 0 0 0 1.503.356a.522.522 0 0 1 .246.945c-.165.118-.274.33-.335.575a1.944 1.944 0 0 0-.056.385v.019a.523.523 0 0 1-.449.523Z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </SocialIcon>
          </Link>
          <Link
            href="https://www.youtube.com/channel/UC7XJ6DSlPXaR4uwOo9lPBqQ/featured"
            target="_blank"
            rel="noopener"
          >
            <SocialIcon>
              <svg viewBox="0 0 512 512">
                <path
                  d="M265 96c65.3 0 118.7 1.1 168.1 3.3h1.4c23.1 0 42 22 42 49.1v1.1l.1 1.1c2.3 34 3.4 69.3 3.4 104.9.1 35.6-1.1 70.9-3.4 104.9l-.1 1.1v1.1c0 13.8-4.7 26.6-13.4 36.1-7.8 8.6-18 13.4-28.6 13.4h-1.6c-52.9 2.5-108.8 3.8-166.4 3.8h-10.6.1-10.9c-57.8 0-113.7-1.3-166.2-3.7h-1.6c-10.6 0-20.7-4.8-28.5-13.4-8.6-9.5-13.4-22.3-13.4-36.1v-1.1l-.1-1.1c-2.4-34.1-3.5-69.4-3.3-104.7v-.2c-.1-35.3 1-70.5 3.3-104.6l.1-1.1v-1.1c0-27.2 18.8-49.3 41.9-49.3h1.4c49.5-2.3 102.9-3.3 168.2-3.3H265m0-32.2h-18c-57.6 0-114.2.8-169.6 3.3-40.8 0-73.9 36.3-73.9 81.3C1 184.4-.1 220 0 255.7c-.1 35.7.9 71.3 3.4 107 0 45 33.1 81.6 73.9 81.6 54.8 2.6 110.7 3.8 167.8 3.8h21.6c57.1 0 113-1.2 167.9-3.8 40.9 0 74-36.6 74-81.6 2.4-35.7 3.5-71.4 3.4-107.1.1-35.7-1-71.3-3.4-107.1 0-45-33.1-81.1-74-81.1C379.2 64.8 322.7 64 265 64z"
                  fill="currentColor"
                ></path>
                <path
                  d="M207 353.8V157.4l145 98.2-145 98.2z"
                  fill="currentColor"
                ></path>
              </svg>
            </SocialIcon>
          </Link>
        </SocialContainer>
      </Right>
    </Container>
  );
};

export default Footer;
