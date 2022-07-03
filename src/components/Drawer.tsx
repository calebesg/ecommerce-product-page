import Link from "next/link";
import { useRef } from "react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  DrawerOverlay,
} from "@chakra-ui/react";

import ToggleButton from "./ToggleButton";
import { List } from "phosphor-react";

export default function DrawerMenu() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const buttonMenuRef = useRef(null);

  return (
    <>
      <button className="lg:hidden" ref={buttonMenuRef} onClick={onOpen}>
        <List size={32} weight="bold" />
      </button>

      <Drawer
        isOpen={isOpen}
        onClose={onClose}
        placement="left"
        finalFocusRef={buttonMenuRef}
      >
        <DrawerOverlay />
        <DrawerContent className="bg-white dark:bg-grayish_blue-800 transition-colors">
          <DrawerCloseButton left={4} />

          <DrawerBody>
            <div className="flex flex-col mt-16 gap-4 font-bold">
              <Link href="/" passHref>
                Collection
              </Link>
              <Link href="/" passHref>
                Men
              </Link>
              <Link href="/" passHref>
                Women
              </Link>
              <Link href="/" passHref>
                About
              </Link>
              <Link href="/" passHref>
                Contact
              </Link>
            </div>
          </DrawerBody>

          <DrawerFooter className="">
            <div className="w-full flex justify-start gap-4">
              <span>Toggle Theme</span>
              <ToggleButton onChange={() => {}} />
            </div>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}
