import SingleContactSocial from "./SingleContactSocial";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";

const ContactSocial = () => {
  return (
    <div className="flex gap-4">
      <SingleContactSocial link="https://www.linkedin.com/in/jamil-khan-a03779221/" Icon={FaLinkedinIn}/>
      <SingleContactSocial link="https://github.com/58Jamil58" Icon={FiGithub} />
      <SingleContactSocial link="https://www.instagram.com/jamil_58_/" Icon={FaInstagram} />
    </div>
  );
};

export default ContactSocial;
