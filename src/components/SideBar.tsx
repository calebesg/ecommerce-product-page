import Link from "next/link";
import ToggleButton from "./ToggleButton";

interface SideBarProps {
  onChange: () => void;
}

export default function SideBar({ onChange }: SideBarProps) {
  return (
    <div>
      <div className="">
        <div className="">
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

        <ToggleButton onChange={onChange} />
      </div>

      <div>oi</div>
    </div>
  );
}
