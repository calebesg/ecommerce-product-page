import Link from "next/link";
import Image from "next/image";
import { ShoppingCart } from "phosphor-react";
import ThemeContext from "../contexts/ThemeContext";
import { ThemeProps } from "../types/ThemeProps";

import Logo from "./Logo";
import avatar from "../assets/image-avatar.png";

export default function Header() {
  const renderNav = function (theme: ThemeProps) {
    return (
      <nav className="flex items-center justify-between gap-8 h-28 border-b border-grayish_blue-400 dark:border-grayish_blue-700 max-w-6xl mx-auto transition-colors">
        <Link href="/">
          <a aria-label="back to home">
            <Logo
              color={
                theme.theme === "light"
                  ? "hsl(220, 13%, 13%)"
                  : "hsl(223, 64%, 98%)"
              }
            />
          </a>
        </Link>
        <div className="flex-1 hidden lg:flex items-center justify-between h-full">
          <ul className="list-none h-full flex items-center gap-8 text-grayish_blue-500 dark:text-grayish_blue-400 transition-colors">
            <li className="h-full flex items-center relative">
              <Link href="/" passHref>
                <a className="border-white group">
                  Collection
                  <span className="opacity-0 h-0 absolute group-hover:w-full group-hover:h-1 bg-orange-500 bottom-0 left-0 group-hover:opacity-100 transition-opacity duration-300" />
                </a>
              </Link>
            </li>
            <li className="h-full flex items-center relative">
              <Link href="/" passHref>
                <a className="border-white group">
                  Men
                  <span className="opacity-0 h-0 absolute group-hover:w-full group-hover:h-1 bg-orange-500 bottom-0 left-0 group-hover:opacity-100 transition-opacity duration-300" />
                </a>
              </Link>
            </li>
            <li className="h-full flex items-center relative">
              <Link href="/" passHref>
                <a className="border-white group">
                  Women
                  <span className="opacity-0 h-0 absolute group-hover:w-full group-hover:h-1 bg-orange-500 bottom-0 left-0 group-hover:opacity-100 transition-opacity duration-300" />
                </a>
              </Link>
            </li>
            <li className="h-full flex items-center relative">
              <Link href="/" passHref>
                <a className="border-white group">
                  About
                  <span className="opacity-0 h-0 absolute group-hover:w-full group-hover:h-1 bg-orange-500 bottom-0 left-0 group-hover:opacity-100 transition-opacity duration-300" />
                </a>
              </Link>
            </li>
            <li className="h-full flex items-center relative">
              <Link href="/" passHref>
                <a className="border-white group">
                  Contact
                  <span className="opacity-0 h-0 absolute group-hover:w-full group-hover:h-1 bg-orange-500 bottom-0 left-0 group-hover:opacity-100 transition-opacity duration-300" />
                </a>
              </Link>
            </li>
          </ul>

          <button
            className="text-grayish_blue-800 dark:text-grayish_blue-400 transition-colors"
            onClick={() => theme.changeTheme()}
          >
            Dark Mode
          </button>
        </div>

        <div className="flex items-center gap-11">
          <button
            className="relative text-grayish_blue-800 dark:text-grayish_blue-100 transition-colors"
            aria-label="shopping cart"
          >
            <span className="absolute -top-1 -right-1 px-2 bg-orange-500 text-white text-[9px] rounded-lg">
              2
            </span>
            <ShoppingCart size={26} width="light" />
          </button>

          <Link href="/" passHref>
            <a className="w-[50px] h-[50px] rounded-full border-2 border-transparent  hover:border-orange-500 transition-colors">
              <Image src={avatar} width={50} height={50} alt="Gabriel" />
            </a>
          </Link>
        </div>
      </nav>
    );
  };

  return (
    <header className="px-4">
      <ThemeContext.Consumer>
        {(value) => renderNav(value)}
      </ThemeContext.Consumer>
    </header>
  );
}
