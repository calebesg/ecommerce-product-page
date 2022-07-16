import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerOverlay,
  useDisclosure,
} from '@chakra-ui/react'
import Link from 'next/link'
import { List } from 'phosphor-react'
import { useRef } from 'react'

import { ToggleButton } from './'

interface DrawerMenuProps {
  value: string
  onChange: () => void
}

export default function DrawerMenu({ value, onChange }: DrawerMenuProps) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const buttonMenuRef = useRef(null)

  return (
    <>
      <button
        type="button"
        aria-label="menu"
        className="lg:hidden"
        ref={buttonMenuRef}
        onClick={onOpen}
      >
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

          <DrawerFooter>
            <div className="w-full flex justify-start gap-4">
              <span>Toggle Theme</span>

              <ToggleButton active={value === 'dark'} onChange={onChange} />
            </div>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  )
}
