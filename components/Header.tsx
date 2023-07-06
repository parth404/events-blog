import Image from "next/image";
import Link from "next/link";

function Header() {
  return (
    <header>
      <div className="flex justify-between items-center space-x-2 uppercase">
        <Link className="flex items-center space-x-1" href="/">
          <Image
            className="rounded-full"
            src="/logo.png"
            width={50}
            height={50}
            alt="logo"
          />
          <h1 className="text-2xl w-full text-3xl font-bold text-[#f7ab0a]">
            FAT OWL.
          </h1>
        </Link>
        <ul className="flex text-white">
          <li className="p-4">Events</li>
          <li className="p-4">Gallery</li>
          <li className="p-4">About</li>
          <li className="p-4">Contact</li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
