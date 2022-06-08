import React from 'react';
import styled from 'styled-components';
import nonoduweb from '../assets/nonoduweb.png';
import react from '../assets/react.png';
import js from '../assets/js.png';
import html from '../assets/html.png';
import css from '../assets/css.png';
import nodejs from '../assets/nodejs.png';
import mongo from '../assets/mongo.png';
import mysql from '../assets/mysql.png';
import wp from '../assets/WP.png';
import next from '../assets/next.png';
import { desktop } from '../responsive';

const Container = styled.div`
  background-color: #283e68;
`;
const Header = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;
const Title = styled.h1`
  color: white;
  font-size: 1.6rem;
  padding: 1rem 1rem 0rem 1rem;
  text-align: center;
  ${desktop({ fontSize: '3rem' })}
`;

const Image = styled.img`
  width: 11rem;
  ${desktop({ width: '15rem' })}
`;
const Desc = styled.div``;
const DescText = styled.p`
  color: #ccc1c1;
  text-align: center;
  padding: 1rem 2rem;
  ${desktop({ fontSize: '1.5rem', padding: '1rem 3rem' })}
`;

const TitleSkill = styled.h2`
  color: white;
  font-size: 1.4rem;
  padding: 1rem 1rem 1rem 1rem;
  text-align: center;
  ${desktop({ fontSize: '2.5rem', marginBottom: '2rem', marginTop: '1rem' })}
`;

const Skill = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  gap: 40px 0px;
  grid-template-areas:
    '. .'
    '. .'
    '. .'
    '. .';
  ${desktop({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  })}
`;

const SkillItem = styled.img`
  background-color: white;
  border-radius: 50%;
  width: 50%;
  margin-left: 3rem;

  &:nth-child(9) {
    margin-bottom: 1rem;
  }
  &:hover {
    transform: scale(1.2);
  }
  ${desktop({ width: '8%', marginBottom: '1rem', marginLeft: '0rem' })}
`;

const About = () => {
  return (
    <Container id="About">
      <Header>
        <Title> TU ES QUI NONODUWEB{' '}? </Title>
        <Image src={nonoduweb} alt="nonoduweb" />
      </Header>
      <Desc>
        <DescText>
          Laissez-moi d'abord me présenter, j'ai 33 ans, je suis développeur web
          et créateur de contenu sur Youtube.
        </DescText>
        <DescText>
          J’habite actuellement à Montguyon en Charente-Maritime (17). Après 10
          ans dans le monde du BTP, j'ai entamé une reconversion dans le monde
          du développement Web. Suite à ma formation de développeur web React et
          NodeJS à la Wild Code School, j'ai décidé de lancer ma petite
          entreprise.
        </DescText>
        <DescText>
          Mon but est de concevoir des sites web destinés aux particuliers ou
          aux entreprises. Je cherche à répondre au mieux aux besoins de mes
          clients, qu’il s’agisse de créer de nouvelles fonctionnalités, de
          retravailler le design ou de construire un projet de A à Z.
        </DescText>
      </Desc>
      <TitleSkill> Les langages et technologies que j'ai déjà utilisés :</TitleSkill>
      <Skill>
        <SkillItem src={html} alt="HTML/CSS" />
        <SkillItem src={css} alt="CSS" />
        <SkillItem src={js} alt="js" />
        <SkillItem src={react} alt="React" />
        <SkillItem src={next} alt="nextJs" />
        <SkillItem src={wp} alt="WordPress" />
        <SkillItem src={nodejs} alt="nodejs" />
        <SkillItem src={mysql} alt="MySql" />
        <SkillItem src={mongo} alt="MongoDB" />
      </Skill>
    </Container>
  );
};

export default About;
