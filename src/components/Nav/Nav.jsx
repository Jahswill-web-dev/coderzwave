import React, { useState } from "react";
import Image from "next/image";
import logo from "../../../public/images/logo2.svg";
import Link from "next/link";
import Hamburger from "hamburger-react";
import styles from "./Nav.module.css";

const Nav = () => {
  const [isNavOpen, setiIsNavOpen] = useState(false);
  const handleNav = () => {
    setiIsNavOpen(!isNavOpen);
  };
  return (
    <nav className="">
      <div
        className={`mx-auto flex items-center justify-between lg:max-w-6xl px-3 pt-3 ${
          isNavOpen ? "absolute sm:relative top-0 mb-10 w-full" : "relative"
        } z-30`}
      >
        <div>
          <Image src={logo} alt="coderz wave logo" width={60} height={60} />
        </div>
        {/* NavList */}
        <div className="hidden sm:flex gap-5 items-center">
          <Link href="#newsletter" className="text-fourth text-xl">
            Newsletter
          </Link>
          <Link href="#programs" className="text-fourth text-xl">
            Programs
          </Link>
          <Link
            href="#start"
            className="bg-secondary text-fourth rounded border-2 border-primary px-3 py-2"
          >
            Start Now
          </Link>
        </div>
        <div className="bars text-primary sm:hidden" onClick={handleNav}>
          <Hamburger />
          {/* <div className="bg-third w-10/12 h-1 rounded opacity-0"></div>
            <div className="bg-third w-10/12 h-1 rounded rotate-45 -translate-y-5"></div>
            <div className="bg-third w-10/12 h-1 rounded -rotate-45 -translate-y-7"></div>
          <i className="fa-solid fa-bars text-3xl sm:hidden"></i> */}
        </div>
      </div>
      <div
        className={` ${
          !isNavOpen && "opacity-0 pointer-events-none"
        } fixed z-20 top-0 bottom-0 left-0 right-0 bg-third sm:hidden sm:relative`}
      >
        <div
          className={`flex flex-col gap-10 items-center h-screen justify-center text-3xl sm:hidden
      transition-opacity ${
        isNavOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      } ${styles.navContainer}`}
        >
          <Link
            href="#programs"
            className={`text-primary ${styles.navItem}${
              isNavOpen ? styles.show : ""
            }`}
          >
            Programs
          </Link>
          <Link
            href="#programs"
            className={`text-primary ${styles.navItem}${
              isNavOpen ? styles.show : ""
            }`}
          >
            Newsletter
          </Link>
          {/* <Link href="#newsletter"className={`text-primary ${styles.navItem} ${isNavOpen ? styles.show : ''}`}>Newsletter</Link> */}
          <Link
            href="#programs"
            className={`text-primary ${styles.navItem}${
              isNavOpen ? styles.show : ""
            }`}
          >
            Start Now
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
