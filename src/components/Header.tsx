import Link from "next/link";
import Image from "next/image";
import ShoppingCart from "../components/ShoppingCart";
import ThemeContext from "../contexts/ThemeContext";
import { ThemeProps } from "../types/ThemeProps";

import Logo from "./Logo";
import avatar from "../assets/image-avatar.png";
import ToggleButton from "./ToggleButton";

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

          <ToggleButton onChange={theme.changeTheme} />
        </div>

        <div className="flex items-center gap-11">
          <ShoppingCart />

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
