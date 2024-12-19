"use client";
import React, { useState, useEffect } from "react";
import "./navbar.css";
import RegularMenu from "./RegularMenu";
import { Link } from "@/i18n/routing";
import LanguageSwitcher from "@/components/language-utils/LangSwitcher";

const NavBar = () => {
  const [isTransparent, setIsTransparent] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsTransparent(true);
      } else {
        setIsTransparent(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`navbar w-full flex items-center justify-between px-4 py-3 transition-all duration-300 ${
        isTransparent
          ? "bg-white/80 shadow-sm h-[80px] backdrop-blur-sm"
          : "h-[100px] "
      }`}
    >
      {/* Logo */}
      <div className="navbar-layout">
        <div className="logo-container">
          <Link href="/">Logo</Link>
          <LanguageSwitcher />
        </div>

        {/* Navbar Items For Large Screens */}
        <RegularMenu />
        <div className="flex flex-grow justify-end sm:flex-none">
          <button className="contact-container">Contact Us</button>
          {/* TODO Mobile Menu */}
          <button className="mobile-menu">O</button>
        </div>
        <div></div>
      </div>
    </nav>
  );
};

export default NavBar;
