// CHAT GPT CODE
// I dont know what this does
// how this does it
// why this does it
// react bad, svelte W


import React, { useState, useEffect } from 'react';
import Link from "next/link";

const Navbar = ({
  buttons,
}: {
  buttons: string[];
}): JSX.Element => {
  const [currentButton, setCurrentButton] = useState<string | null>(buttons[0]); // Set the first button as initially highlighted
  const buttonRefs = React.useRef<{ [key: string]: HTMLElement | null }>({});

  useEffect(() => {
    // Access DOM elements after they have been rendered
    buttons.forEach((button) => {
      const buttonDom = document.getElementById(button);
      if (buttonDom) {
        buttonRefs.current[button] = buttonDom;

        buttonDom.addEventListener("click", () => {
          // Reset the color of all buttons
          buttons.forEach((btn) => {
            const btnRef = buttonRefs.current[btn];
            if (btnRef && btnRef !== null) {
              btnRef.style.cssText = ""; // Reset button color
            }
          });

          // Set the color of the clicked button
          buttonDom.style.cssText = `
            background-image: linear-gradient(to right, #cb356e, #897bec);
            -webkit-background-clip: text;
            background-clip: text;
            color: transparent;
          `;

          // Update the currently clicked button
          setCurrentButton(button);
        });
      }
    });

    // Highlight the first button initially
    const firstButton = buttonRefs.current[buttons[0]];
    if (firstButton && firstButton !== null) {
      firstButton.style.cssText = `
        background-image: linear-gradient(to right, #cb356e, #897bec);
        -webkit-background-clip: text;
        background-clip: text;
        color: transparent;
      `;
    }
  }, [buttons]);

  useEffect(() => {
    // Reset the color of all buttons except the currently clicked button
    buttons.forEach((button) => {
      const buttonDom = buttonRefs.current[button];
      if (buttonDom && button !== currentButton && buttonDom !== null) {
        buttonDom.style.cssText = ""; // Reset button color
      }
    });
  }, [currentButton, buttons]);

  return (
    <>
      <section className="w-full bg-inherit shadow-md z-10 font-offbittrialbold text-4xl flex justify-between items-center p-4 px-8">
        <img src="/compsocLogo.svg" className="z-20"></img>
        <nav className="justify-center flex gap-8 font-normal">
          {buttons.map((button) => {
            return (
              <Link href={`#${button.toLowerCase()}`} key={button}>
                <section id={button} ref={(el) => (buttonRefs.current[button] = el)}>
                  {button}
                </section>
              </Link>
            );
          })}
        </nav>
      </section>
    </>
  );
};

export default Navbar;

