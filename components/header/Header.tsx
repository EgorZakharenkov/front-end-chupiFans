import React from "react";
import { Search } from "@/components/search/Search";
import styles from "./style.module.scss";
import { HeaderAvatar } from "@/components/header_avatar/HeaderAvatar";
import Link from "next/link";
const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href={"/"}>
          {" "}
          <h2>ChupiFans</h2>
        </Link>
        <Search />
        <HeaderAvatar />
      </div>
    </header>
  );
};

export { Header };
