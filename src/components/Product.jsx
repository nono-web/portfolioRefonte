import styled from "styled-components"


const Container = styled.div `
  width: 90%;
  margin: 1.25rem 0.62rem;
  border: 2px solid rgba(15, 15, 15, 0.048);
  border-radius: 3rem;
  overflow: hidden;
  &:hover {
    transform: scale(1.2);
  }
`

const Link = styled.a `
&:visited,
&:active,
&:link {
  text-decoration: none;
  color: #3B556D;
  text-align:center;
}
`

const Title = styled.p `
  font-weight: bold;
  background-color: rgb(238, 239, 245);
  padding: 1rem;
`

const Image = styled.img `
  width: 100%;
  height: 100%;
`

const Product = ({img, link, title}) => {
  return (
    <Container>
      <Link href={link} target="_blanck" real="noreferrer"> 
      <Title>{title}</Title>
      <Image src={img} alt={title} />
      </Link>
    </Container>
  )
}

export default Product
