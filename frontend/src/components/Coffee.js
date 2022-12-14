import React, { useState, useEffect } from "react";
import "./Coffee.css";
import { Button } from "@chakra-ui/react";
import { FaCoffee } from "react-icons/fa";

const ProductDisplay = () => (
  <section>
    <form action="/create-checkout-session" method="POST">
      <Button className="coffee-button" type="submit" >
        <FaCoffee style={{paddingRight:"3px"}}/>
        Gift us a coffee!
        <FaCoffee style={{paddingLeft:"2px"}}/>
      </Button>
    </form>
  </section>
);

const Message = ({ message }) => (
  <section>
    <p>{message}</p>
  </section>
);

export default function Coffee() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search);

    if (query.get("success")) {
      setMessage("Thank you :)")
      setTimeout(() => setMessage(""), 3000);
    }

    if (query.get("canceled")) {
      setMessage(
        "Order canceled -- please try again"
      );
    }
  }, []);

  return message ? (
    <Message message={message} />
  ) : (
    <ProductDisplay />
  );
}