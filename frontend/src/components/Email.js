import { FaFacebookSquare, FaTwitter, FaLinkedin } from "react-icons/fa";
import { RiInstagramFill, RiYoutubeFill } from "react-icons/ri";
import "./Email.css";
import { Input, Button } from "@chakra-ui/react";

export default function Email() {
  return (
    <div className="footer">
      <span className="email-form">
        <Input
          className="email"
          placeholder="subscribe with your email"
          size="sm"
        />
        <Button className="subscribe" colorScheme="gray" size="xs">
          subscribe
        </Button>
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
