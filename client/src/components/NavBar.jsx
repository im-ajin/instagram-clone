import { Navbar, Dropdown } from "flowbite-react";
import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { CiHeart } from "react-icons/ci";
import { TextInput } from "flowbite-react";
const NavBar = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white z-10">
      <Navbar className="p-4 border-b">
        <Dropdown label="Instagram" dismissOnClick={false} inline>
          <Dropdown.Item>Following</Dropdown.Item>
          <Dropdown.Item>Favorites</Dropdown.Item>
        </Dropdown>
        <TextInput id="search" type="text" icon={AiOutlineSearch} placeholder="search" required className="w-[300px]"/>
        <CiHeart className="text-2xl"/>
      </Navbar>
    </header>
  );
};

export default NavBar;
