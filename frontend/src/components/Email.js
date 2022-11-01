import  "./Email.css";
import { RiInstagramFill, RiYoutubeFill, RiFacebookBoxFill, RiTwitterFill } from "react-icons/ri";
import {FaLinkedin} from "react-icons/fa";

export default function Email() {
  return (
    <>
    <div className="footer">
    <span>
      <input className="email" type="email" placeholder="Email Address"></input>
    </span>
    <div className="social">
    <RiFacebookBoxFill/>
    <RiInstagramFill/>
    <RiYoutubeFill/>
    <RiTwitterFill/>
    <FaLinkedin/>
    </div>
    </div>
    </>
  )
}