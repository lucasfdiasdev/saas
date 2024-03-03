import Link from "next/link";

import { AiOutlineSplitCells } from "react-icons/ai";

import ButtonToggle from "@/components/button-toggle";

const Header = () => {
  return (
    <>
      <header className="fixed top-0 left-0 right-0 p-4 flex items-center justify-between z-10">
        <aside className="flex items-center gap-2">
          <AiOutlineSplitCells size={40} />
          <span className="text-xl font-bold">Saas.</span>
        </aside>
        <nav className="hidden md:block absolute transform left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]">
          <ul className="flex items-center justify-center gap-8">
            <Link href={"/"}>Pricing</Link>
            <Link href={"/"}>Docs</Link>
            <Link href={"/"}>About</Link>
            <Link href={"/"}>Features</Link>
          </ul>
        </nav>
        <aside className="flex gap-2 items-center">
          <ButtonToggle />
          <Link
            href={"/agency"}
            className="bg-primary text-white p-2 px-4 rounded-md hover:bg-primary/80"
          >
            Login
          </Link>
        </aside>
      </header>
    </>
  );
};

export default Header;
