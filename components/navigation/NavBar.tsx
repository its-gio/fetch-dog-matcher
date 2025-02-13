import Image from "next/image";
import React from "react";
import PuppyLoveLogo from "@/public/puppy-love-logo.svg";
import Link from "next/link";
import LoginBtn from "../buttons/LoginBtn";

function NavBar() {
  return (
    <header className="sticky top-0 shadow-xs bg-white bg-opacity-95 w-full px-10 py-5 z-10 flex justify-between align-center mb-[-92px]">
      <div className="logo flex items-center">
        <Link href="/" className="">
          <Image src={PuppyLoveLogo} alt="Puppy Love Logo" width={150} />
        </Link>
      </div>

      <div>
        <LoginBtn text={"Get Started"} />

        <button
          type="button"
          className="flex text-sm  rounded-full md:me-0 hidden"
        >
          <div className="px-4 py-3">
            <span className="block text-sm text-gray-900 ">John Doe</span>
            <span className="block text-sm  text-gray-400">name@test.com</span>
          </div>
        </button>
      </div>
    </header>
  );
}

export default NavBar;
