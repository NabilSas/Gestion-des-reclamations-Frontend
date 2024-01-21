import React, { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";
import { useParams } from "react-router";
import axios from "axios";

function ContactManager() {
  const { idB } = useParams();
  const [user, setUser] = useState([]);
  const form = useRef();
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);
  const [recipientEmail, setRecipientEmail] = useState("");
  const getReclamationsById = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/user/user/${idB}`);
      setUser(response.data);
      console.log(response.data)
      console.log(idB)
      setRecipientEmail(response.data.email);
      console.log(response.data.email);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getReclamationsById();
  }, [])

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_id",
        "template_id",
        form.current,
        "password"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
          setIsSuccess(true);
          setIsError(false);
        },
        (error) => {
          console.log(error.text);
          setIsError(true);
          setIsSuccess(false);
        }
      );
  };

  return (
    <StyledContactForm>
      <form ref={form} onSubmit={sendEmail}>
        <label htmlFor="user_name">Name</label>
        <input type="text" name="user_name" id="user_name" value={user.nom} required pattern="[A-Za-z\s]+" title="Only letters and spaces are allowed" disabled />
        <label htmlFor="from_email">Recipient's Email</label>
        <input
          type="email"
          name="to_email"
          id="to_email"
          value={recipientEmail}
        
          required
          
        />
        <label htmlFor="message">Message</label>
        <textarea name="message" id="message" required></textarea>
        <input type="submit" value="Send" />
        {isSuccess && <SuccessMessage>Message sent successfully!</SuccessMessage>}
        {isError && <ErrorMessage>Oops! Something went wrong. Please try again.</ErrorMessage>}
      </form>
    </StyledContactForm>
  );
};

const StyledContactForm = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

  form {
    width: 400px;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    font-size: 16px;

    input,
    textarea {
      width: 100%;
      height: 35px;
      padding: 7px;
      margin: 5px 0;
      outline: none;
      border-radius: 20px;
      border: 1px solid rgb(220, 220, 220);

      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }

    textarea {
      max-height: 100px;
      min-height: 100px;
    }

    label {
      margin-top: 1rem;
    }

    input[type="submit"] {
      margin-top: 1rem;
      cursor: pointer;
      background: rgb(135, 206, 235);
      color: white;
      border: none;
    }
  }
`;

const SuccessMessage = styled.div`
  color: green;
  margin-top: 1rem;
`;

const ErrorMessage = styled.div`
  color: red;
  margin-top: 1rem;
`;

export default ContactManager;
