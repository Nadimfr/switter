import Image from "next/image";
import styles from "../styles/Home.module.css";
import C from "../public/assets/c.png";
import Logo from "../public/assets/logo.png";

export default function Layout({ children, home }) {
  return (
    <div>
      <header className="flex items-center justify-between px-5 bg-white py-3 drop-shadow-md lg:py-3 lg:px-80 ">
        <Image src={Logo} width={100} height={85} />
        <div></div>
      </header>

      <main>{children}</main>

      <footer className="fixed bottom-0 left-0 right-0  h-74 py-2 bg-primary flex items-center justify-center gap-1">
        <Image src={C} className="h-4 w-4" />
        <h2 className="text-sm font-inter text-white">
          2022 SWITTLE. All Right Reserved.
        </h2>
      </footer>
    </div>
  );
}
