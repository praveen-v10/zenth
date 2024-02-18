import React, { useEffect } from "react";

export default function Nav() {
  const navigationData = [
    {
      name: "Home",
      href: "#hero",
    },
    {
      name: "About",
      href: "#about", // Changed href to match the id of about section
    },
    {
      name: "Services",
      href: "#service", // Assuming there's an app section with id="app"
    },
    {
      name: "Projects",
      href: "#clients",
    },
    {
      name: "Contact",
      href: "#contact",
    },
  ];

  useEffect(() => {
    navigationData.forEach((item) => {
      const link = document.querySelector(`a[href="${item.href}"]`);
      if (link) {
        link.addEventListener("click", (event) => {
          event.preventDefault();
          const sectionId = item.href.substring(1); // Remove the # to get the section ID
          const section = document.getElementById(sectionId);
          if (section) {
            section.scrollIntoView({ behavior: "smooth" });
          }
        });
      }
    });
  }, []);

  return (
    <ul className="flex gap-x-8">
      {navigationData.map((item, index) => (
        <li key={index}>
          <a
            className="text-black hover:text-cyan-600"
            href={item.href}
          >
            {item.name}
          </a>
        </li>
      ))}
    </ul>
  );
}