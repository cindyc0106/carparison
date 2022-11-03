import { FaFacebookSquare, FaTwitter, FaLinkedin } from "react-icons/fa";
import { RiInstagramFill, RiYoutubeFill } from "react-icons/ri";
import "./Email.css";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Input, Button } from "@chakra-ui/react";

export default function Email() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_6y07qob', 'template_em9ntkl', form.current, 'FtxPRgezmzWMRJ_h2')
      .then((result) => {
          document.getElementById("email-form").reset();
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };


  return (
    <div className="footer">
      <span className="email-form">
        <form id="email-form" onSubmit={sendEmail} ref={form}>
        <Input
          className="email"
          placeholder="subscribe with your email"
          size="sm"
          name="email"
        />
        <Button className="subscribe" colorScheme="gray" size="xs" type="submit" value="Send">
          subscribe
        </Button>
        </form>
      </span>
      <div className="social">
        <FaFacebookSquare />
        <RiInstagramFill />
        <RiYoutubeFill />
        <FaTwitter />
        <FaLinkedin />
      </div>
    </div>
  );
}
