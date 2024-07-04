"use client"
import { useState } from 'react';
import styles from './ContactForm.module.css';

const ContactForm: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    setErrorMessage('');
    setSuccessMessage('');

    if (!name || !email || !message) {
      setErrorMessage('Todos los campos son obligatorios.');
      return;
    }

    setName('');
    setEmail('');
    setMessage('');
    setSuccessMessage('Mensaje enviado con exito! Gracias por comunicarte =)');
  };

  return (
    <section className={styles.contactForm}>
      <form onSubmit={handleSubmit}>

        {errorMessage && <p className={styles.errorMessage}>{errorMessage}</p>}
        {successMessage && <p className={styles.successMessage}>{successMessage}</p>}

        <label htmlFor="name">Nombre</label>
        <input
            type="text"
            id="name"
            value={name}
            onChange={e => setName(e.target.value)}
        />
        
        <label htmlFor="email">Email</label>
        <input
            type="email"
            id="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
        />
        
        <label htmlFor="message">Mensaje</label>
        <textarea
            id="message"
            value={message}
            onChange={e => setMessage(e.target.value)}
        />
        
        <button type="submit" onClick={handleSubmit}>Enviar</button>
      </form>
    </section>
  );
};

export default ContactForm;
