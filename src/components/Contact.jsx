/* eslint-disable no-undef */
import React from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { init } from 'emailjs-com';
import { desktop } from '../responsive';
import mail from '../assets/mailnono.png';
init(' user_mHtCtPRmfXansncIGdpdq ');

const Container = styled.div`
  background-color: #3b556d;
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
const LittleTitle = styled.h2`
  color: white;
  font-size: 1.2rem;
  text-align: center;
  padding: 1rem 2rem;
  ${desktop({ fontSize: '2rem' })}
`;

const Form = styled.form`
  margin-top: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  ${desktop({  width:'40%', margin:' 0 auto' })}
 
`;

const Input = styled.input`
  height: 3.12rem;
  width: 70%;
  border: none;
  border-radius: 1.25rem;
  margin: 0.8rem 3rem 0.8rem 2rem;
  font-size: 1rem;
  padding-left: 0.8rem;
  background-color: #283e68;
  &::placeholder {
    color: white;
    font-weight: 500;
  }
  &:hover {
  background-color: #5fc2ba;
}

`;

const Yup = styled.p`
 color: tomato;
  text-align: center;
  &::before {
  content: '⚠';
  text-align: center;
}
`;

const Textarea = styled.textarea`
  width: 70%;
  margin: 0.8rem 3rem 0.8rem 2rem;
  font-size: 1rem;
  padding-left: 0.8rem;
  border: none;
  border-radius: 1.25rem;
  background-color: #283e68;;
  &:hover {
    background-color: #5fc2ba
  }
  &::placeholder {
    color: white;
    font-weight: 500;
  }
`;

const Button = styled.button`
 border: none;
 margin-bottom: 1.5rem;
  padding: 1rem;
  border-radius: 1.25rem;
  background-color: #283e68;;
  color: white;
  font-weight: 500;
  cursor: pointer;
  &:hover {
  background-color: #5fc2ba;
}
`;

const schema = yup
  .object({
    user_lastName: yup.string().max(20).required('Votre prénom est requis'),
    user_firstName: yup.string().max(20).required('Votre nom est requis'),
    user_compagny: yup.string().max(30),
    user_site: yup.string().max(50),
    user_phone: yup
      .string()
      .max(20)
      .required('Votre numéro de téléphone est requis'),
    user_email: yup
      .string()
      .email("Merci d'entrer une adresse mail valide")
      .max(255)
      .required('Une adresse mail est requis'),
    user_subject: yup.string().max(255).required('Un sujet est requis'),
    message: yup.string().max(1000).required('Un message est requis'),
  })
  .required();

const Contact = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data, r) => {
    alert('😀 Merci pour votre message, il sera traité au plus vite 😀');
    const templateId = 'template_8ed58w8';
    const serviceId = 'service_mimumje';
    sendFeedback(serviceId, templateId, {
      user_lastName: data.user_lastName,
      user_firstName: data.user_firstName,
      user_compagny: data.user_compagny,
      user_site: data.user_site,
      user_phone: data.user_phone,
      user_email: data.user_email,
      user_subject: data.user_subject,
      message: data.message,
      reply_to: r.target.reset(),
    });
  };

  const sendFeedback = (serviceId, templateId, variables) => {
    emailjs
      .send(serviceId, templateId, variables)
      .then((res) => {
        console.log('succes');
      })
      .catch((err) => console.error('oups'));
  };

  return (
    <Container id="Contact">
      <Title> CONTACTEZ-MOI </Title> 
      <ImageTitle src={mail} alt="mail" />
      <LittleTitle>
        {' '}
        Le chemin le plus simple pour me contacter pour votre projet ou juste
        pour me poser une question :{' '}
      </LittleTitle>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          type="text"
          placeholder="Prenom*"
          name="user_lastName"
          {...register('user_lastName')}
        />
        {errors.user_lastName && <Yup>{errors.user_lastName.message}</Yup>}
        <Input
          type="text"
          placeholder="Nom*"
          name="user_firstName"
          {...register('user_firstName')}
        />
        {errors.user_firstName && <Yup>{errors.user_firstName.message}</Yup>}
        <Input
          type="text"
          placeholder="Société"
          name="user_compagny"
          {...register('user_compagny')}
        />
        <Input
          type="text"
          placeholder="Site Web"
          name="user_site"
          {...register('user_site')}
        />
        <Input
          type="text"
          placeholder="Numero de téléphone*"
          name="user_phone"
          {...register('user_phone')}
        />
        {errors.user_phone && <Yup>{errors.user_phone.message}</Yup>}
        <Input
          type="text"
          placeholder="Adresse mail*"
          name="user_email"
          {...register('user_email')}
        />
        {errors.user_email && <Yup>{errors.user_email.message}</Yup>}
        <Input
          type="text"
          placeholder="Sujet du mail*"
          name="user_subject"
          {...register('user_subject')}
        />
        {errors.user_subject && <Yup>{errors.user_subject.message}</Yup>}
        <Textarea
          rows="6"
          placeholder="Message*"
          name="message"
          {...register('message')}
        />
        {errors.message && <Yup>{errors.message.message}</Yup>}
        <Button>Soumettre</Button>
      </Form>
    </Container>
  );
};

export default Contact;
