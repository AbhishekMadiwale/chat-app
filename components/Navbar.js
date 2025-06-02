import React from "react";
import Link from "next/link";
import { UserButton } from "@clerk/nextjs";

function Navbar() {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center px-30">
        <Link href="/" className="text-xl font-bold">
          WeChat
        </Link>
        <div className="flex gap-10">
        <ul>
          <li className="flex space-x-2">
            <Link href="/" className="hover:text-gray-200">
              Home
            </Link>
            <Link href="/about" className="hover:text-gray-200">
              About
            </Link>
            <Link href="/contact" className="hover:text-gray-200">
              Contact
            </Link>
          </li>
        </ul>
        <UserButton/>
        </div>
      </div>
    </nav>
    
  );
}

export default Navbar;
