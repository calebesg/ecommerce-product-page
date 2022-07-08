import Link from "next/link";
import Image from "next/image";

import { Logo, ToggleButton, DrawerMenu } from "./";
import ShoppingCart from "../shopping";
import ThemeContext from "../../contexts/ThemeContext";

import avatar from "../../assets/image-avatar.png";

export default function Header() {
  return (
    <header className="px-4 max-w-[1144px] mx-auto">
      <nav className="flex items-center justify-between gap-4 lg:gap-8 h-[68px] lg:h-28 lg:border-b border-grayish_blue-400 dark:border-grayish_blue-700 transition-colors">
        <ThemeContext.Consumer>
          {({ theme, changeTheme }) => (
            <>
              <DrawerMenu value={theme} onChange={changeTheme} />

              <Link href="/">
                <a aria-label="back to home" className="flex-1 lg:flex-none">
                  <Logo
                    color={
                      theme === "light"
                        ? "hsl(220, 13%, 13%)"
                        : "hsl(223, 64%, 98%)"
                    }
                  />
                </a>
              </Link>
            </>
          )}
        </ThemeContext.Consumer>

        <div className="flex-1 hidden lg:flex justify-between items-center h-full">
          <ul className="list-none w-60 h-full flex items-center gap-8 text-grayish_blue-500 dark:text-grayish_blue-400 transition-color">
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

          <ThemeContext.Consumer>
            {({ changeTheme, theme }) => (
              <ToggleButton active={theme === "dark"} onChange={changeTheme} />
            )}
          </ThemeContext.Consumer>
        </div>

        <div className="flex items-center gap-6 lg:gap-11">
          <ShoppingCart />

          <Link href="/" passHref>
            <a className="w-10 h-10 lg:w-[50px] lg:h-[50px] rounded-full border-2 border-transparent  hover:border-orange-500 transition-colors">
              <Image src={avatar} width="100%" height="100%" alt="Gabriel" />
            </a>
          </Link>
        </div>
      </nav>
    </header>
  );
}
