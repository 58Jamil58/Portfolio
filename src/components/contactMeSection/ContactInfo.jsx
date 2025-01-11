import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import SingleInfo from "./SingleInfo";

const ContactInfo = () => {
  return (
    <div className="flex flex-col gap-4">
      <SingleInfo text="akhtarkhan62@gmail.com" Image={HiOutlineMail} />
      <SingleInfo text="+919817568511" Image={FiPhone} />
      <SingleInfo text="Jind, Haryana" Image={IoLocationOutline} />
    </div>
  );
};

export default ContactInfo;
