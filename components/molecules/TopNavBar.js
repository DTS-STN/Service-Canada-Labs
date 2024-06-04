import Link from "next/link";
import React, { useState } from "react";

export function TopNavBar({
  homeLink,
  homeLinkLabel,
  updatesLink,
  updatesLinkLabel,
  projectsLink,
  projectsLinkLabel,
  ariaLabel,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [isTransitioningClosed, setIsTransitioningClosed] = useState(false);

  //Handles the opening and closing of our nav
  const handleClick = () => {
    isOpen ? animateCloseMenu() : setIsOpen(!isOpen);
  };

  const animateCloseMenu = () => {
    setIsTransitioningClosed(true);
    setTimeout(() => {
      setIsTransitioningClosed(false);
      setIsOpen(!isOpen);
    }, 250);
  };

  return (
    <div className="bg-custom-gray-lightest min-h-[64px] flex justify-end">
      {/* Desktop Nav Menu */}
      <nav
        aria-label={ariaLabel}
        className="hidden lg:flex w-full self-center justify-between layout-container"
      >
        <Link href={homeLink} className="font-body font-semibold text-h3">
          {homeLinkLabel}
        </Link>
        <div className="lg:mr-16">
          <Link href={projectsLink} className="font-body mr-10 text-p">
            {projectsLinkLabel}
          </Link>
          <Link href={updatesLink} className="font-body text-p">
            {updatesLinkLabel}
          </Link>
        </div>
      </nav>
      {/* Mobile Nav Menu */}
      <nav
        aria-label={ariaLabel}
        className="static lg:hidden mt-5 flex flex-col w-full mr-4"
      >
        <button
          aria-haspopup="true"
          aria-expanded={isOpen ? "true" : "false"}
          aria-controls="menu"
          onClick={handleClick}
          className="self-end"
        >
          {isOpen ? (
            <div
              className={`${
                isTransitioningClosed ? "fade-out" : "fade-in"
              } -mt-1 p-1.5`}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 17 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="exit-icon"
              >
                <path d="M11.3775 8.25L16.0683 3.55922C16.6439 2.98359 16.6439 2.05031 16.0683 1.47422L15.0258 0.431719C14.4502 -0.143906 13.5169 -0.143906 12.9408 0.431719L8.25 5.1225L3.55922 0.431719C2.98359 -0.143906 2.05031 -0.143906 1.47422 0.431719L0.431719 1.47422C-0.143906 2.04984 -0.143906 2.98312 0.431719 3.55922L5.1225 8.25L0.431719 12.9408C-0.143906 13.5164 -0.143906 14.4497 0.431719 15.0258L1.47422 16.0683C2.04984 16.6439 2.98359 16.6439 3.55922 16.0683L8.25 11.3775L12.9408 16.0683C13.5164 16.6439 14.4502 16.6439 15.0258 16.0683L16.0683 15.0258C16.6439 14.4502 16.6439 13.5169 16.0683 12.9408L11.3775 8.25Z" />
              </svg>
            </div>
          ) : (
            <div className={`${isTransitioningClosed ? "fade-in" : ""} -mt-1`}>
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 18L20 18"
                  stroke="#000000"
                  stroke-width="2"
                  stroke-linecap="round"
                />
                <path
                  d="M4 12L20 12"
                  stroke="#000000"
                  stroke-width="2"
                  stroke-linecap="round"
                />
                <path
                  d="M4 6L20 6"
                  stroke="#000000"
                  stroke-width="2"
                  stroke-linecap="round"
                />
              </svg>
            </div>
          )}
        </button>
        {isOpen ? (
          <ul
            id="menu"
            className={`${
              isTransitioningClosed ? "fade-out" : "fade-in"
            } absolute w-full flex flex-col mt-8 pb-4 bg-custom-gray-lightest drop-shadow-xl`}
          >
            <li
              className={`${
                isTransitioningClosed ? "decrease-margin" : "expand-margin"
              } my-2 ml-4`}
            >
              <Link href={homeLink}>{homeLinkLabel}</Link>
            </li>
            <li
              className={`${
                isTransitioningClosed ? "decrease-margin" : "expand-margin"
              } my-2 ml-4`}
            >
              <Link href={projectsLink}>{projectsLinkLabel}</Link>
            </li>
            <li
              className={`${
                isTransitioningClosed ? "decrease-margin" : "expand-margin"
              } my-2 ml-4`}
            >
              <Link href={updatesLink}>{updatesLinkLabel}</Link>
            </li>
          </ul>
        ) : (
          ""
        )}
      </nav>
    </div>
  );
}
