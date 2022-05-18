import styled from 'styled-components';
import logo from '../assets/logo.png';
import { mobile } from '../responsive';

const Container = styled.div`
  background-color: #3b556d;

`;

const NavList = styled.ul`
  padding: 1rem 1rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
  list-style: none;
  color: white;
  text-align: center;
  ${mobile({ padding: '1rem 0rem' })}
 
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

const ListItem = styled.li`
  margin: 0;
  font-weight: bold;
  cursor: pointer;
  padding: 0.6rem;
  font-size: 0.7rem;
  &:hover {
    border-bottom: 4px solid white;
  }
  ${mobile({ margin: '0rem', fontSize: '1.3rem' })}
`;

const Logo = styled.img`
  width: 100%;
  cursor: pointer;
  ${mobile({ width: '9rem' })}
`;

const Navbar = () => {
  return (
    <Container>
      <NavList>
        <Link href="#About">
          <ListItem>A propos de NonoduWeb</ListItem>
        </Link>
        <Link href="#Services">
          <ListItem>Services</ListItem>
        </Link>
        <Link href="/#Home">
          <Logo src={logo} />
        </Link>
        <Link href="#Creation">
          <ListItem>Mes réalisations</ListItem>
        </Link>
        <Link href="#Contact">
          <ListItem>Contact</ListItem>
        </Link>
      </NavList>
    </Container>
  );
};

export default Navbar;
