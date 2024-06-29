"use client";
import React, { useState } from "react";
import styles from "./style.module.scss";
import { Button } from "@/components/ui/button";
import { useAppDispatch } from "@/redux/hooks";
import { searchAnimes } from "@/redux/slices/Anime";
import { useRouter } from "next/navigation";

const Search: React.FC = () => {
  const [search, setSearch] = useState<string>("");
  const dispatch = useAppDispatch();
  const router = useRouter();
  const handleSearch = async (e: any) => {
    e.preventDefault();
    dispatch(searchAnimes(search));
    router.push("/");
  };
  return (
    <div className={styles.searchContainer}>
      <form onSubmit={handleSearch}>
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          placeholder={"Поиск..."}
          className={styles.searchInput}
        />
        <Button
          onClick={handleSearch}
          className={styles.searchButton}
          children={"Найти"}
        />
      </form>
    </div>
  );
};

export { Search };
