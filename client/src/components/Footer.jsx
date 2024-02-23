import React from "react";
import { Link } from 'react-router-dom';
import { CiHome } from "react-icons/ci";
import { FaRegCompass } from "react-icons/fa";
import { CiVideoOn } from "react-icons/ci";
import { IoAddSharp } from "react-icons/io5";
import { FaRegMessage } from "react-icons/fa6";
import { IoMan } from "react-icons/io5";

const Footer = () => {
  return (
    <footer className="fixed bottom-0 right-0 left-0 p-2 border-t bg-white">
        <div className="flex justify-around">
      <CiHome size={35}/>
      <FaRegCompass size={35}/>
      <CiVideoOn size={35}/>
      <IoAddSharp size={35}/>
      <Link to='/messages'><FaRegMessage size={35}/></Link>
      
      <IoMan size={35}/>
      </div>
    </footer>
  );
};

export default Footer;
