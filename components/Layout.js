import Image from "next/image";
import { useState } from "react";
import C from "../public/assets/c.png";
import Logo from "../public/assets/logo.png";
import Button from "./Button";

export default function Layout({ children, header, footer }) {
  return (
    <div>
      {header && (
        <header className="fixed top-0 left-0 right-0 z-10 flex items-center justify-between px-5 bg-white rounded-b-3xl py-3 drop-shadow-md lg:py-3 lg:px-80 lg:rounded-b-none">
          <Image src={Logo} width={100} height={85} />
          <Button title="Are you a biller?" />
        </header>
      )}

      <main className="bg-[url('../public/assets/texture.png')]">
        {children}
      </main>

      {footer && (
        <footer className="bottom-0 left-0 right-0 h-74 py-2 bg-primary flex items-center justify-center gap-1">
          <Image src={C} className="h-4 w-4" />
          <h2 className="text-sm font-inter text-white">
            2022 SWITTLE. All Right Reserved.
          </h2>
        </footer>
      )}
    </div>
  );
}
