import Link from "next/link";
import { useRouter } from "next/router";
import * as React from "react";

const Navbar = ({
  buttons,
  active,
}: {
  buttons: string[];
  active: string;
}): JSX.Element => {
  return (
    <>
      <nav className="justify-center flex font-semibold text-[20px]">
        <Link href="/">
          <section
            className={
              "px-16 py-6 " + `${"/" === active ? "gradient-text" : ""}`
            }
          >
            Home
          </section>
        </Link>
        {buttons.map((button) => {
          const isHighlighted = "/" + button === active;
          return (
            <Link href={`/${button}`}>
              <section
                className={`px-16 py-6 ${isHighlighted ? "gradient-text" : ""}`}
              >
                {button}
              </section>
            </Link>
          );
        })}
      </nav>
      <section className="h-0.5 bg-gradient-to-r from-[#CF1259] to-[#7161EF]" />
    </>
  );
};

export default Navbar;
