import React from "react";
import Avatar from 'react-avatar';
import { AiOutlineMenu } from "react-icons/ai";
import { CiSearch } from "react-icons/ci";
import { IoMdMic } from "react-icons/io";
import { RiVideoAddLine } from "react-icons/ri";
import { AiOutlineBell } from "react-icons/ai";
import { ImYoutube2 } from "react-icons/im";
const Navbar = () => {
  return (
    <div className="flex justify-between px-6 py-2 fixed top-0 left-0 right-0">
      <div className="flex items-center space-x-4 ">
        <AiOutlineMenu className="text-xl cursor-pointer" />
        {/* <ImYoutube2 className='text-red-900 w-'/> */}
        <img
          className="w-28 cursor-pointer"
          src={
            "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/512px-YouTube_Logo_2017.svg.png?20230929095411"
          }
          alt="youtube logo"
        />
      </div>
      <div className="flex w-[35%] ">
        <div className="w-[100%] px-3 py-2 border rounded-l-full">
          <input type="text" placeholder="Search" className="outline-none" />
        </div>
        <button className="px-3 py-2 bg-gray-100 border rounded-r-full">
          <CiSearch size={"24px"} />
        </button>
        <IoMdMic
          size={"42px"}
          className="ml-3 border rounded-full p-2 cursor-pointer hover:bg-gray-200 duration-200"
        />
      </div>
      <div className="flex items-center space-x-4 ">
        <RiVideoAddLine className="text-2xl" />
        <AiOutlineBell className="text-2xl" />
        <Avatar size="32"
          src={
            "https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg"
          }
         round={true}
        />
      </div>
    </div>
  );
};

export default Navbar;
