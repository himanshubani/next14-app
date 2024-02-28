"use client";

import Image from "next/image";
import styles from "./links.module.css";
import NavLink from "./navLink/NavLink";
import { useState } from "react";

const links = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "About",
    path: "/about",
  },
  {
    title: "Contact",
    path: "/contact",
  },
  {
    title: "Blog",
    path: "/blog",
  },
];

const Links = () => {
  const [open, setOpen] = useState(false);
  const session = true;
  const isAdmin = true;

  return (
    <div className={styles.container}>
      <div className={styles.links}>
        {links.map((link) => (
          <NavLink item={link} key={link.title} />
        ))}
        {session ? (
          <>
            {isAdmin && <NavLink item={{ title: "Admin", path: "/admin" }} />}
            <button className={styles.logout}>Logout</button>
          </>
        ) : (
          <NavLink item={{ title: "Login", path: "/login" }} />
        )}
      </div>
      <Image className={styles.menuButton} width={30} height={30} src='/menu.png' alt="" onClick={() => setOpen(!open)}/>
      {
        open && (
          <div className={styles.mobileLinks}>
            {links.map((link) => (
              <NavLink item={link} key={link.title} />
            ))}
            {session ? (
              <>
                {isAdmin && <NavLink item={{ title: "Admin", path: "/admin" }} />}
                <button className={styles.logout}>Logout</button>
              </>
            ) : (
              <NavLink item={{ title: "Login", path: "/login" }} />
            )}
          </div>
        )
      }
    </div>
  );
};

export default Links;
